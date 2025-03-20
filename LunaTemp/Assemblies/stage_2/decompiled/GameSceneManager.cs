using UnityEngine.SceneManagement;

public static class GameSceneManager
{
	public const string LEVEL_CREATOR_SCENE = "LevelCreatorScene";

	public static bool IsLevelCreatorScene()
	{
		if (SceneManager.GetActiveScene().name == "LevelCreatorScene")
		{
			return true;
		}
		return false;
	}
}
