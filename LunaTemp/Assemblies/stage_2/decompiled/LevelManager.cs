using System.Collections.Generic;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
	[SerializeField]
	private Level activeLevel;

	[SerializeField]
	private List<LevelSelector> levelSelector;

	public static LevelManager Instance { get; private set; }

	[SerializeField]
	public Level _activeLevel => activeLevel;

	private void Awake()
	{
		Instance = this;
	}

	public void SetActiveLevel(Level level)
	{
		activeLevel = level;
	}
}
