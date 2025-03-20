using System;

[Serializable]
public class LevelSelector
{
	public Level level;

	private void SetActive()
	{
		LevelManager.Instance._activeLevel.gameObject.SetActive(false);
		LevelManager.Instance.SetActiveLevel(level);
		LevelManager.Instance._activeLevel.gameObject.SetActive(true);
	}
}
