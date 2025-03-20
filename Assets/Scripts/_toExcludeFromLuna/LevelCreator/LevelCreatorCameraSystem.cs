using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelCreatorCameraSystem : MonoBehaviour
{
    [SerializeField] private Transform cameraTranform => this.transform;

    private void Awake()
    {
        
    }
    private void Start()
    {
        
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(1))
        {
            Debug.Log("pressed");
        }
    }
}
