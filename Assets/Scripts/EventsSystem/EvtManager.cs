using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class EvtManager
{
    // INPUT
    // mouse events

    // tile events
    public static readonly Evt<Tile> onTileSelected = new Evt<Tile>();
    public static readonly Evt<Transform> onTileCleared = new Evt<Transform>();

    public static readonly Evt onLayoutCleared = new Evt();


    public static event EventHandler OnBubbleSpawned;
    public static event EventHandler OnBubbleDestroyed;
    public static event EventHandler OnBubbleSelected;
    public static event EventHandler OnTileSelected;
    public static event EventHandler OnNextPhase;
 

    public static void TriggerEvent(object sender, GameEventType gameEventType)
    {
        switch (gameEventType) 
        {
            case GameEventType.OnBubbleSpawned:
                OnBubbleSpawned?.Invoke(sender, EventArgs.Empty); 
                break;
            case GameEventType.OnBubbleDestroyed:
                OnBubbleDestroyed?.Invoke(sender, EventArgs.Empty);
                break;
            case GameEventType.OnBubbleSelected:

                OnBubbleSelected?.Invoke(sender, EventArgs.Empty);
                break;
            case GameEventType.OnNextPhase:
                OnNextPhase?.Invoke(sender, EventArgs.Empty);
                Debug.Log("Next phase");
                break;

        }
    }
}

public enum GameEventType
{
    OnBubbleSpawned, OnBubbleDestroyed, OnBubbleSelected, OnNextPhase
}

