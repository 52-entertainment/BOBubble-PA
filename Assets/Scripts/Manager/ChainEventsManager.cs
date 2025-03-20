using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;
using System.Linq;

public class ChainEventsManager: MonoBehaviour
{

    [SerializeField] private int currentPhase;
    [SerializeField] private List<PhaseRules> phaseDataList;

    [Title("Time parameters:")]
    [SerializeField] private float delayBeforeNextPhase;
    [SerializeField] private float delayBeforeDestroy;

    private void OnEnable()
    {
        EvtManager.OnBubbleSelected += GameEventsManager_OnBubbleSelected;
    }

    private void OnDisable()
    {
        EvtManager.OnBubbleSelected -= GameEventsManager_OnBubbleSelected;
    }

    private void Start()
    {
        phaseDataList = LevelManager.Instance._activeLevel._phaseRules;
    }

    private void GameEventsManager_OnBubbleSelected(object sender, EventArgs e)
    {
        if(BubbleManager.Instance._selectedBubble != null)
        {           
            Bubble selectedBubble = BubbleManager.Instance._selectedBubble;

            foreach (PhaseRules phaseData in LevelManager.Instance._activeLevel._phaseRules) 
            {
                if(phaseData.phaseNumber == currentPhase && phaseData.animatedBubbleID == selectedBubble._bubbleID)
                {
                    Debug.Log("selected");
                    TriggerChainEvents();
                }
            }
        }        
    }

    private void TriggerChainEvents()
    {
        int i = 0;
        float delay = LevelManager.Instance._activeLevel._bubbleAnimOffset;
        CalculateTotalChainEventsDelay(delay, out float totalChainEventsDelay);
        StartCoroutine(EndOfChainEvents(totalChainEventsDelay, delayBeforeNextPhase, delayBeforeDestroy, LevelManager.Instance._activeLevel._levelBubblesList));

        var orderedBubbleList = LevelManager.Instance._activeLevel._levelBubblesList.OrderBy(bubble => bubble._orderNumber).ToList();

        foreach (var bubble in orderedBubbleList)
        {
            BubbleID id = phaseDataList[currentPhase].animatedBubbleID;
            if (id == bubble._bubbleID)
            {
                bubble.TriggerBubbleAnimation(delay * i);
                i++;
            }
        }
    }

    IEnumerator EndOfChainEvents(float totalDelay, float delayBeforeNextPhase, float delayBeforeDestroy, List<Bubble> bubbleList)
    {
        yield return new WaitForSeconds(totalDelay);

        Debug.Log("Finished");

        yield return new WaitForSeconds(delayBeforeNextPhase);

        foreach (var bubble in bubbleList)
        {
            if (bubble._phaseNumber == phaseDataList[currentPhase].phaseNumber)
            {
                bubble.ActivateGravity();                
                bubble.DestroyBubble(delayBeforeDestroy);
                
            }
        }
        currentPhase += 1;
        LevelManager.Instance._activeLevel.UpdatePhase();
        EvtManager.TriggerEvent(this, GameEventType.OnNextPhase);
        
    }

    private void CalculateTotalChainEventsDelay(float delay, out float totalDelay)
    {
        int i = 0;
        totalDelay = 0f;

        foreach (var bubble in LevelManager.Instance._activeLevel._levelBubblesList)
        {
            BubbleID id = phaseDataList[currentPhase].animatedBubbleID;

            if ( id == bubble._bubbleID)
            {
                i++;
            }
        }

        totalDelay = delay * i;
    } 

}

