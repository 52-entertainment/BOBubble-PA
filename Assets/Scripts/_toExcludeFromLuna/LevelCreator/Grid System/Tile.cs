using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[SelectionBase]
public class Tile : MonoBehaviour
{
    [SerializeField] private GameObject highlight;
    [SerializeField] private Transform spawnedTransform;
    [SerializeField] private bool isSelected;
    [SerializeField] private bool isHovered;
    [SerializeField] private bool canReset;

    public void Init(bool isOffset = false)
    {
        highlight.SetActive(false);

        isSelected = false;
        isHovered = false;
        canReset = false;
    }

    private void Update()
    {
        if (Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl)) { canReset = true; } else { canReset = false; }

        if (isHovered && GameInputManager.Instance.isMouseClicking) 
        {
            if (!IsOccupied() && !canReset)
            {
                EvtManager.onTileSelected.Invoke(this);
            }
            else if(IsOccupied() && canReset)
            {
                EvtManager.onTileCleared.Invoke(spawnedTransform);
            }
                  
        } 

    }

    // Input methods
    private void OnMouseEnter()
    {
        highlight.SetActive(true);   
        isHovered = true;
    }
    private void OnMouseDown()
    {
        if (!IsOccupied() && !canReset) 
        {
            isSelected = true;
            EvtManager.onTileSelected.Invoke(this);
        }
        else if( IsOccupied() && canReset) 
        {       
            EvtManager.onTileCleared.Invoke(spawnedTransform);
        }
    }
    private void OnMouseUp()
    {
        isSelected = false;
    }
    private void OnMouseExit()
    {
        highlight.SetActive(false);
        isHovered = false;
    }

    private bool IsOccupied()
    {
        return spawnedTransform != null;
    }
    public void SetSpawnedTransform(Transform spawnedTransform)
    {
        this.spawnedTransform = spawnedTransform;
    }

    public void Hide()
    {
        this.gameObject.SetActive(false);
    }
    public void Show()
    {
        this.gameObject.SetActive(true);
    }
}