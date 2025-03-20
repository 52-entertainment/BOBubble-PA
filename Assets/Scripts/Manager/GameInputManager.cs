using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;

public class GameInputManager : MonoBehaviour
{
    public static GameInputManager Instance { get; private set; }
    public bool isMouseClicking {  get; private set; }

    private void Awake()
    {
        Instance = this;
    }

    private void Update()
    {
        if(Input.GetMouseButton(0)) { isMouseClicking = true; } else { isMouseClicking = false; }
    }
     
    public bool IsMouseSelecting<T>(out T t1) where T : Component
    {
        if (isMouseClicking)
        {
            t1 = PA.Utils.GetComponentFromRaycastHit<T>(PA.Utils.GetMouseScreenPosition());
            return t1 != null;
        }
        else
        {
            t1 = null;
            return false;
        }

    }

}
