using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;

[Serializable]
[SelectionBase]
public class Bubble : MonoBehaviour, IPointerDownHandler, IEventSystemHandler, IPointerUpHandler, IPointerEnterHandler, IPointerExitHandler
{
	public enum Status
	{
		Spawned,
		Setup,
		Selected,
		Idle
	}

	[SerializeField]
	private BoxCollider boxCollider;

	[SerializeField]
	private Renderer rendererBubble;

	[SerializeField]
	private Material material;

	[SerializeField]
	private Transform canvasTransform;

	[SerializeField]
	private TMP_Text phaseNumberText;

	[SerializeField]
	private TMP_Text orderNumberText;

	[SerializeField]
	private Rigidbody rb;

	[SerializeField]
	private Animator animator;

	[SerializeField]
	private Transform bubbleVisualTransform;

	[SerializeField]
	private Status status;

	[SerializeField]
	private BubbleID bubbleID;

	[SerializeField]
	private int phaseNumber;

	[SerializeField]
	private int orderNumber;

	[SerializeField]
	private List<Bubble> nearbyBubblesList;

	[SerializeField]
	private bool isSetup;

	[SerializeField]
	private bool isSelected;

	[SerializeField]
	private bool canUpdateData;

	[SerializeField]
	private Color difuseColor;

	[SerializeField]
	private Color color;

	[SerializeField]
	private Color emissiveColor;

	private int selectedCheck = 0;

	public Status _status => status;

	public BubbleID _bubbleID => bubbleID;

	public int _phaseNumber => phaseNumber;

	public int _orderNumber => orderNumber;

	public Material _material => material;

	public Transform _bubbleVisualTransform => bubbleVisualTransform;

	public List<Bubble> _nearbyBubblesList => nearbyBubblesList;

	private void Start()
	{
		if (!GameSceneManager.IsLevelCreatorScene())
		{
			canvasTransform.gameObject.SetActive(false);
		}
	}

	private void OnEnable()
	{
		GameEventsManager.OnNextPhase += delegate
		{
			AnimationHandler.SetBubbleTriggeredState(animator, false);
		};
	}

	public void BubbleSetup(BubbleID id, Color color, Material material, int phaseNumber, int orderNumber)
	{
		status = Status.Spawned;
		isSetup = false;
		isSelected = false;
		canUpdateData = false;
		bubbleID = id;
		this.phaseNumber = phaseNumber;
		this.orderNumber = orderNumber;
		this.material = material;
		rendererBubble.material = this.material;
		rendererBubble.material.SetColor("_Color", color);
		rendererBubble.material.SetColor("_EmissionColor", color);
		difuseColor = color;
		emissiveColor = color;
		AddToNearbyBubblesList();
		if (GameSceneManager.IsLevelCreatorScene())
		{
			UpdatePhaseNumber(phaseNumber);
			UpdateOrderNumber(orderNumber);
		}
		else
		{
			canvasTransform.gameObject.SetActive(false);
		}
		StartCoroutine(BubbleIsSetup());
	}

	private IEnumerator BubbleIsSetup()
	{
		yield return null;
		isSetup = true;
		status = Status.Setup;
		GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSpawned);
	}

	public void UpdatePhaseNumber(int _phaseNumber)
	{
		if (!isSetup || canUpdateData)
		{
			phaseNumberText.text = _phaseNumber.ToString();
			phaseNumber = _phaseNumber;
		}
	}

	public void UpdateOrderNumber(int _orderNumber)
	{
		if (!isSetup || canUpdateData)
		{
			orderNumberText.text = _orderNumber.ToString();
			orderNumber = _orderNumber;
		}
	}

	public void DestroyBubble()
	{
		UnityEngine.Object.Destroy(base.gameObject);
	}

	public void DestroyBubble(float delay)
	{
		FunctionTimer.Create(delegate
		{
			LevelManager.Instance._activeLevel.RemoveBubblesFromLevel(this);
			UnityEngine.Object.Destroy(base.gameObject);
		}, delay);
	}

	private void AddToNearbyBubblesList()
	{
		if (!(this != null))
		{
			return;
		}
		Collider[] colliders = Physics.OverlapBox(base.transform.position, boxCollider.size / 2f, Quaternion.identity, BubbleManager.Instance._layerMask);
		Collider[] array = colliders;
		foreach (Collider collider in array)
		{
			if (collider.GetComponent<Bubble>() != null)
			{
				Bubble _bubble = collider.GetComponent<Bubble>();
				if (_bubble != this && _bubble._bubbleID == bubbleID)
				{
					nearbyBubblesList.Add(collider.GetComponent<Bubble>());
				}
			}
		}
	}

	public void ResetNearbyBubblesList()
	{
		nearbyBubblesList.Clear();
		AddToNearbyBubblesList();
	}

	public void TriggerBubbleAnimation(float delay)
	{
		StartCoroutine(StartAnimationTimer(delay));
	}

	private IEnumerator StartAnimationTimer(float delay)
	{
		yield return new WaitForSeconds(delay);
		AnimationHandler.SetBubbleTriggeredState(animator, true);
	}

	public void ActivateGravity()
	{
		rb.useGravity = true;
		rb.isKinematic = false;
	}

	public void TriggerBubble()
	{
		isSelected = true;
		status = Status.Selected;
		BubbleManager.Instance.SetSelectedBubble(this);
		GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
	}

	private void OnMouseDown()
	{
		if (!GameSceneManager.IsLevelCreatorScene())
		{
			Debug.Log("selected");
			isSelected = true;
			status = Status.Selected;
			BubbleManager.Instance.SetSelectedBubble(this);
			GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
		}
	}

	private void OnMouseUp()
	{
		if (!GameSceneManager.IsLevelCreatorScene())
		{
			isSelected = false;
		}
	}

	public void OnPointerDown(PointerEventData eventData)
	{
		if (isSetup || status == Status.Setup)
		{
			isSelected = true;
			status = Status.Selected;
			BubbleManager.Instance.SetSelectedBubble(this);
			GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
		}
	}

	public void OnPointerUp(PointerEventData eventData)
	{
		isSelected = false;
	}

	public void OnPointerEnter(PointerEventData eventData)
	{
		if (GameSceneManager.IsLevelCreatorScene())
		{
			canUpdateData = true;
		}
	}

	public void OnPointerExit(PointerEventData eventData)
	{
		if (GameSceneManager.IsLevelCreatorScene())
		{
			canUpdateData = false;
		}
	}
}
