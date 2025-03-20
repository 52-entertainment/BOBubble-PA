using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class ChainEventsManager : MonoBehaviour
{
	[SerializeField]
	private int currentPhase;

	[SerializeField]
	private List<PhaseData> phaseDataList;

	[SerializeField]
	private float delayBeforeNextPhase;

	[SerializeField]
	private float delayBeforeDestroy;

	private void OnEnable()
	{
		GameEventsManager.OnBubbleSelected += GameEventsManager_OnBubbleSelected;
	}

	private void OnDisable()
	{
		GameEventsManager.OnBubbleSelected -= GameEventsManager_OnBubbleSelected;
	}

	private void Start()
	{
		phaseDataList = LevelManager.Instance._activeLevel._phaseDataList;
	}

	private void GameEventsManager_OnBubbleSelected(object sender, EventArgs e)
	{
		if (!(BubbleManager.Instance._selectedBubble != null))
		{
			return;
		}
		Bubble selectedBubble = BubbleManager.Instance._selectedBubble;
		foreach (PhaseData phaseData in LevelManager.Instance._activeLevel._phaseDataList)
		{
			if (phaseData.phaseNumber == currentPhase && phaseData.animatedBubbleID == selectedBubble._bubbleID)
			{
				Debug.Log("selected");
				TriggerChainEvents();
			}
		}
	}

	private void TriggerChainEvents()
	{
		int i = 0;
		float delay = LevelManager.Instance._activeLevel._bubbleAnimOffset;
		CalculateTotalChainEventsDelay(delay, out var totalChainEventsDelay);
		StartCoroutine(EndOfChainEvents(totalChainEventsDelay, delayBeforeNextPhase, delayBeforeDestroy, LevelManager.Instance._activeLevel._levelBubblesList));
		List<Bubble> orderedBubbleList = LevelManager.Instance._activeLevel._levelBubblesList.OrderBy((Bubble bubble) => bubble._orderNumber).ToList();
		foreach (Bubble bubble2 in orderedBubbleList)
		{
			BubbleID id = phaseDataList[currentPhase].animatedBubbleID;
			if (id == bubble2._bubbleID)
			{
				bubble2.TriggerBubbleAnimation(delay * (float)i);
				i++;
			}
		}
	}

	private IEnumerator EndOfChainEvents(float totalDelay, float delayBeforeNextPhase, float delayBeforeDestroy, List<Bubble> bubbleList)
	{
		yield return new WaitForSeconds(totalDelay);
		Debug.Log("Finished");
		yield return new WaitForSeconds(delayBeforeNextPhase);
		foreach (Bubble bubble in bubbleList)
		{
			if (bubble._phaseNumber == phaseDataList[currentPhase].phaseNumber)
			{
				bubble.ActivateGravity();
				bubble.DestroyBubble(delayBeforeDestroy);
			}
		}
		currentPhase++;
		LevelManager.Instance._activeLevel.UpdatePhase();
		GameEventsManager.TriggerEvent(this, GameEventType.OnNextPhase);
	}

	private void CalculateTotalChainEventsDelay(float delay, out float totalDelay)
	{
		int i = 0;
		totalDelay = 0f;
		foreach (Bubble bubble in LevelManager.Instance._activeLevel._levelBubblesList)
		{
			BubbleID id = phaseDataList[currentPhase].animatedBubbleID;
			if (id == bubble._bubbleID)
			{
				i++;
			}
		}
		totalDelay = delay * (float)i;
	}
}
