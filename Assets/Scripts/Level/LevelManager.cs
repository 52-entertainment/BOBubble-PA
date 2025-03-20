using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
    public static LevelManager Instance { get; private set; }
    [SerializeField] public Level _activeLevel => activeLevel;

    [SerializeField] private Level activeLevel;
    [SerializeField] private List<LevelSelector> levelSelector;

    private void Awake()
    {
        Instance = this;
    }

    public void SetActiveLevel( Level level) { activeLevel = level; }

}

[Serializable]
public class PhaseRules
{
    public int phaseNumber;
    public BubbleID animatedBubbleID;

}
[Serializable]
public class LevelSelector
{
    public Level level;
    [Button]
    private void SetActive()
    {
        LevelManager.Instance._activeLevel.gameObject.SetActive(false);
        LevelManager.Instance.SetActiveLevel(level);
        LevelManager.Instance._activeLevel.gameObject.SetActive(true);
    }

}