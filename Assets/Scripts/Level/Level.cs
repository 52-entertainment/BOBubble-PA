using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using Unity.VisualScripting;
using UnityEngine;

public class Level : MonoBehaviour
{
    public int _currentPhase => currentPhase;
    public List<PhaseRules> _phaseRules => phaseRules;
    public List<Bubble> _levelBubblesList => levelBubblesList;
    public Transform _bubblesHolderTransform => bubblesHolderTransform;
    public string _conceptName => conceptName;
    public float _bubbleAnimOffset => bubbleAnimOffset;

    [ReadOnly]
    [SerializeField] private int currentPhase;
    [ReadOnly]
    [SerializeField] private List<Bubble> levelBubblesList;
    [Space]
    [Space]
    [SerializeField] private string conceptName;
    [SerializeField] private LevelSettings levelSettings;
    [SerializeField] private List<PhaseRules> phaseRules;
    [SerializeField] private LevelLayoutSelector layoutSelector;
    [SerializeField] private float bubbleAnimOffset;

    [Title("To assign")]
    [SerializeField] private LevelManager levelManager;
    [SerializeField] private Transform bubblesHolderTransform;

    // CAMERA ANIMATIONS 
    [SerializeField] private Dictionary<Animator, Animation> cameraAnimationDictionary;


    [Button]
    private void SetupLevel()
    {
        this.levelManager = FindFirstObjectByType(typeof(LevelManager)).GetComponent<LevelManager>();
    }


    private void OnEnable()
    {
        EvtManager.onLayoutCleared.AddListener(() => { levelBubblesList.Clear(); });
    }


    public void AddToLevelBubblesList(Bubble bubble)
    {
        levelBubblesList.Add(bubble);
    }
    public void RemoveBubblesFromLevel(Bubble bubble)
    {
        levelBubblesList.Remove(bubble);
    }

    [Button]
    private void SetupBubbles()
    {
        foreach (var bubble in levelBubblesList) 
        {
            //Bubble newBubble = new Bubble();

            Renderer renderer = bubble._bubbleVisualTransform.GetComponent<Renderer>();
            //Bubble newBubble = bubble.AddComponent<Bubble>();
            renderer.material = bubble._material;
        }
    }
    [Button]
    private void SetAsActiveLevel()
    {
        if (levelManager == null)
        {
            this.levelManager = FindFirstObjectByType(typeof(LevelManager)).GetComponent<LevelManager>();
        }
        else
        {
            levelManager._activeLevel.gameObject.SetActive(false);
            levelManager.SetActiveLevel(this);
        }     
    }

    public void UpdatePhase()
    {
        currentPhase++;
    }
}

[Serializable]
public class LevelLayoutSelector
{
    public LevelCreatorLayout levelLayout;
}
[Serializable]
public class LevelSettings
{
    public LevelType levelType;
    public List<PhaseRules> phaseRules;
}

public enum LevelType {
    DelayedRelease, ClassicBubble
}