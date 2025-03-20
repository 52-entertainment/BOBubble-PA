using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public static class GameSceneManager
{
    public const string LEVEL_CREATOR_SCENE = "LevelCreatorScene";
    public static bool IsLevelCreatorScene()
    {
        Scene currentScene = SceneManager.GetActiveScene();

        if (currentScene.name == LEVEL_CREATOR_SCENE)
        {
            return true;
        }
        else
        {
            return false;
        }

    }

}
