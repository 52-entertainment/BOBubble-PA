using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BubbleManager : MonoBehaviour
{
    public static BubbleManager Instance { get; private set; }

    public LayerMask _layerMask => layerMask;
    public Transform _bubblePrefab => bubblePrefab;
    public Bubble _selectedBubble => selectedBubble;
    public List<BubbleType> _bubbleTypeList => bubbleTypeList;

    [SerializeField] private LayerMask layerMask;
    [SerializeField] private Transform bubblePrefab;
    [SerializeField] private List<BubbleType> bubbleTypeList;
    [SerializeField] private Bubble selectedBubble;
    

    private void Awake()
    {
        Instance = this;
    }

    private void OnEnable()
    {
        EvtManager.OnBubbleSelected += (object sender, EventArgs e) =>
        {
            TriggerBubbleChainReaction();
        };
    }

    private void TriggerBubbleChainReaction()
    {
        // Debug.Log("chain reaction");
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
        this.selectedBubble = bubble;
    }

}

[Serializable]
public class BubbleType
{
    public BubbleID bubbleID;
    public Color color;
    public Material material;

    public bool IsID(BubbleID id)
    {
        if (id == bubbleID) return true; else return false;
    }

}

public enum BubbleID { darkBlue, lightBlue, red, yellow, pink, green, none }