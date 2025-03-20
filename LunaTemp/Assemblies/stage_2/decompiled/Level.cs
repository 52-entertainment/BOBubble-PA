using System.Collections.Generic;
using UnityEngine;

public class Level : MonoBehaviour
{
	[SerializeField]
	private string conceptName;

	[SerializeField]
	private List<PhaseData> phaseDataList;

	[SerializeField]
	private float bubbleAnimOffset;

	[SerializeField]
	private int currentPhase;

	[SerializeField]
	private List<Bubble> levelBubblesList;

	[SerializeField]
	private Transform bubblesHolderTransform;

	public int _currentPhase => currentPhase;

	public List<PhaseData> _phaseDataList => phaseDataList;

	public List<Bubble> _levelBubblesList => levelBubblesList;

	public Transform _bubblesHolderTransform => bubblesHolderTransform;

	public string _conceptName => conceptName;

	public float _bubbleAnimOffset => bubbleAnimOffset;

	public void AddToLevelBubblesList(Bubble bubble)
	{
		levelBubblesList.Add(bubble);
	}

	public void RemoveBubblesFromLevel(Bubble bubble)
	{
		levelBubblesList.Remove(bubble);
	}

	private void SetupBubbles()
	{
		foreach (Bubble bubble in levelBubblesList)
		{
			Renderer renderer = bubble._bubbleVisualTransform.GetComponent<Renderer>();
			renderer.material = bubble._material;
		}
	}

	private void SetAsActiveLevel()
	{
		LevelManager.Instance._activeLevel.gameObject.SetActive(false);
		LevelManager.Instance.SetActiveLevel(this);
	}

	public void UpdatePhase()
	{
		currentPhase++;
	}
}
