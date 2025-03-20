using System;
using UnityEngine;

public static class GameEventsManager
{
	public static event EventHandler OnBubbleSpawned;

	public static event EventHandler OnBubbleDestroyed;

	public static event EventHandler OnBubbleSelected;

	public static event EventHandler OnNextPhase;

	public static void TriggerEvent(object sender, GameEventType gameEventType)
	{
		switch (gameEventType)
		{
		case GameEventType.OnBubbleSpawned:
			GameEventsManager.OnBubbleSpawned?.Invoke(sender, EventArgs.Empty);
			break;
		case GameEventType.OnBubbleDestroyed:
			GameEventsManager.OnBubbleDestroyed?.Invoke(sender, EventArgs.Empty);
			break;
		case GameEventType.OnBubbleSelected:
			GameEventsManager.OnBubbleSelected?.Invoke(sender, EventArgs.Empty);
			break;
		case GameEventType.OnNextPhase:
			GameEventsManager.OnNextPhase?.Invoke(sender, EventArgs.Empty);
			Debug.Log("Next phase");
			break;
		}
	}

	public static void GetComponentFromEvent<T>(T valueInput, GameEventType gameEventType, out T t1) where T : Component
	{
		t1 = null;
		if (gameEventType == GameEventType.OnBubbleSelected)
		{
			t1 = valueInput;
		}
	}
}
