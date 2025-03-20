using System.Collections.Generic;
using UnityEngine;

public class BubbleManager : MonoBehaviour
{
	[SerializeField]
	private LayerMask layerMask;

	[SerializeField]
	private Transform bubblePrefab;

	[SerializeField]
	private List<BubbleType> bubbleTypeList;

	[SerializeField]
	private Bubble selectedBubble;

	public static BubbleManager Instance { get; private set; }

	public LayerMask _layerMask => layerMask;

	public Transform _bubblePrefab => bubblePrefab;

	public Bubble _selectedBubble => selectedBubble;

	public List<BubbleType> _bubbleTypeList => bubbleTypeList;

	private void Awake()
	{
		Instance = this;
	}

	private void OnEnable()
	{
		GameEventsManager.OnBubbleSelected += delegate
		{
			TriggerBubbleChainReaction();
		};
	}

	private void TriggerBubbleChainReaction()
	{
	}

	public void UpdateAllNearbyBubblesLists()
	{
		foreach (Bubble bubble in LevelManager.Instance._activeLevel._levelBubblesList)
		{
			bubble.ResetNearbyBubblesList();
		}
	}

	public void SetSelectedBubble(Bubble bubble)
	{
		selectedBubble = bubble;
	}
}
