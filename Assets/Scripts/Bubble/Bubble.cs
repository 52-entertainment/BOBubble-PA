using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Sirenix.OdinInspector;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;

[SelectionBase]
public class Bubble : MonoBehaviour, IPointerDownHandler, IPointerUpHandler, IPointerEnterHandler, IPointerExitHandler
{
    public enum Status
    {
        Spawned, Setup, Selected, Idle
    }

    public Status _status => status;
    public BubbleID _bubbleID => bubbleID;
    public int _phaseNumber => phaseNumber;
    public int _orderNumber => orderNumber;
    public Material _material => material;
    public Transform _bubbleVisualTransform => bubbleVisualTransform;
    public List<Bubble> _nearbyBubblesList => nearbyBubblesList;

    [FoldoutGroup("To assign")]
    [SerializeField] private BoxCollider boxCollider;
    [FoldoutGroup("To assign")]
    [SerializeField] private Renderer rendererBubble;
    [FoldoutGroup("To assign")]
    [SerializeField] private Material material;
    [FoldoutGroup("To assign")]
    [SerializeField] private Transform canvasTransform;
    [FoldoutGroup("To assign")]
    [SerializeField] private TMP_Text phaseNumberText;
    [FoldoutGroup("To assign")]
    [SerializeField] private TMP_Text orderNumberText;
    [FoldoutGroup("To assign")]
    [SerializeField] private Rigidbody rb;
    [FoldoutGroup("To assign")]
    [SerializeField] private Animator animator;
    [FoldoutGroup("To assign")]
    [SerializeField] private Transform bubbleVisualTransform;

    [Title("Bubble Inf.")]
    [SerializeField] private Status status;
    [SerializeField] private BubbleID bubbleID;
    [SerializeField] private int phaseNumber;
    [SerializeField] private int orderNumber;
    [SerializeField] private List<Bubble> nearbyBubblesList; // same color

    [Title("Bubble Inf.")]
    [SerializeField] private bool isSetup;
    [SerializeField] private bool isSelected;
    [SerializeField] private bool canUpdateData;
    [SerializeField] private Color difuseColor;
    [SerializeField] private Color color;
    [SerializeField] private Color emissiveColor;

    private int selectedCheck = 0;

    private void Start()
    {
        if (!GameSceneManager.IsLevelCreatorScene())
        {
            canvasTransform.gameObject.SetActive(false);
        }
    }

    private void OnEnable()
    {
        EvtManager.OnNextPhase += (object sender, EventArgs e) => { AnimationHandler.SetBubbleTriggeredState(this.animator, false); };
    }


    public void BubbleSetup(BubbleID id, Color color, Material material, int phaseNumber, int orderNumber)
    {
        status = Status.Spawned;

        isSetup = false;
        isSelected = false;
        canUpdateData = false;

        this.bubbleID = id;
        this.phaseNumber = phaseNumber;
        this.orderNumber = orderNumber;

       //Material newMaterial = new Material(material);

        //material.SetColor("_Color", color);
        //material.SetColor("_EmissionColor", color);
        //this.material = material;
        
        //rendererBubble.material.SetColor("_Color", color);
        //rendererBubble.material.SetColor("_EmissionColor", color);
        //rendererBubble.material = material;
        //rendererBubble.material.color = color;
        //rendererBubble.material.SetColor("_Color", color);
        //rendererBubble.material.SetColor("_EmissionColor", color);
        //this.material = material;
        //this.difuseColor = color;
        //this.emissiveColor = color;


        //Material newMaterial = new Material(material);
        this.material = material;
        //newMaterial.color = color;
        //newMaterial.SetColor("_BaseColor", color);
        //newMaterial.SetColor("_EmissionColor", color);
        rendererBubble.material = this.material;

        AddToNearbyBubblesList();

        if (GameSceneManager.IsLevelCreatorScene()) 
        {
            // setup for level editor
            UpdatePhaseNumber(phaseNumber);
            UpdateOrderNumber(orderNumber);
        } 
        else 
        {
            // setup for in-game scene
            canvasTransform.gameObject.SetActive(false); 
        }

        StartCoroutine(BubbleIsSetup());
    }
    IEnumerator BubbleIsSetup()
    {
        yield return null;

        isSetup = true;
        status = Status.Setup;
        EvtManager.TriggerEvent(this, GameEventType.OnBubbleSpawned);
    }

    public void UpdatePhaseNumber(int _phaseNumber)
    {
        if (!isSetup || canUpdateData) 
        {
            phaseNumberText.text = _phaseNumber.ToString();
            this.phaseNumber = _phaseNumber;
        } 
    }
    public void UpdateOrderNumber(int _orderNumber)
    {
        if (!isSetup || canUpdateData)
        {
            orderNumberText.text = _orderNumber.ToString();
            this.orderNumber = _orderNumber;
        }
    }
    public void DestroyBubble() 
    {        
        Destroy(this.gameObject);       
    }
    public void DestroyBubble(float delay)
    {
        FunctionTimer.Create(() =>
        {
            LevelManager.Instance._activeLevel.RemoveBubblesFromLevel(this);           
            Destroy(this.gameObject);
        }, delay);
        
    }


    // NearbyBubbleList Methods
    private void AddToNearbyBubblesList()
    {
        if(this != null) 
        {
            Collider[] colliders = Physics.OverlapBox(transform.position, boxCollider.size / 2, Quaternion.identity, BubbleManager.Instance._layerMask);

            foreach (Collider collider in colliders)
            {
                if (collider.GetComponent<Bubble>() != null)
                {
                    Bubble _bubble = collider.GetComponent<Bubble>();
                    if (_bubble != this && _bubble._bubbleID == this.bubbleID)
                    {
                        // add bubbles of same color (id)
                        nearbyBubblesList.Add(collider.GetComponent<Bubble>());
                    }
                }

            }
        }
    }
    public void ResetNearbyBubblesList()
    {
        nearbyBubblesList.Clear();
        AddToNearbyBubblesList();
    }


    // CHAIN REACTION ANIM
    public void TriggerBubbleAnimation(float delay)
    {
        StartCoroutine(StartAnimationTimer(delay));
    }
    IEnumerator StartAnimationTimer(float delay)
    {
        yield return new WaitForSeconds(delay);

        AnimationHandler.SetBubbleTriggeredState(this.animator, true);

        //transform.DOMoveZ(transform.position.z + 0.4f, 2f).SetLoops(-1, LoopType.Yoyo).SetEase(Ease.InBounce);
        //transform.DOScale(transform.localScale * 1.1f, 0.5f).SetLoops(3, LoopType.Yoyo);
        //Debug.Log("trigger" + orderNumber);
    }

    public void ActivateGravity()
    {
        rb.useGravity = true;
        rb.isKinematic = false;
    }


    // ****************DEBUG VIDEO VERSION ONLY

    public void TriggerBubble()
    {
        isSelected = true;
        status = Status.Selected;
        BubbleManager.Instance.SetSelectedBubble(this);
        EvtManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
    }

    private void OnMouseDown()
    {
        if (!GameSceneManager.IsLevelCreatorScene())
        {
            //Debug.Log("selected");

            isSelected = true;
            status = Status.Selected;
            BubbleManager.Instance.SetSelectedBubble(this);
            EvtManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
        }

    }
    private void OnMouseUp()
    {
        if (!GameSceneManager.IsLevelCreatorScene())
        {
            isSelected = false;
        }
    }

    //*****************


    public void OnPointerDown(PointerEventData eventData)
    {
        if(isSetup || status == Status.Setup)
        {
            isSelected = true;
            status = Status.Selected;
            BubbleManager.Instance.SetSelectedBubble(this);
            EvtManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
        }
    }
    public void OnPointerUp(PointerEventData eventData)
    {
        isSelected = false;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (GameSceneManager.IsLevelCreatorScene()) canUpdateData = true;
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (GameSceneManager.IsLevelCreatorScene()) canUpdateData = false;
    }

}


