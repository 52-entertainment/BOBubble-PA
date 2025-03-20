using System;
using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;

public class GridGenerator: MonoBehaviour
{
    public enum Type
    {
        ClassicBubble, Square, SquareWithOffset
    }

    private Dictionary<Vector2, Tile> tilesDictionary;

    public void GenerateGrid(Type type, int width, int height, Tile tilePf, Transform parent, Transform cam, out Vector3 _centerPos)
    {
        // in order to fix the issue of non even line number
        bool needsRecalculation = false;
        int _height = 0;

        tilesDictionary = new Dictionary<Vector2, Tile>();

        GetValuesForType(type, out float xOffset, out int tileOffset);

        bool canApplyXOffset = false;       

        if(height % 2 != 0)
        {
            _height = (int) Mathf.Ceil(height/2);
            needsRecalculation = true;
        }
        else
        {
            _height = height / 2;
            needsRecalculation = false;
        }

        int maxBubbleCount = (width * _height) + ((width + tileOffset) * _height);

        if(needsRecalculation) { maxBubbleCount = maxBubbleCount + width; }

        int currentWidth = 0;
        int currentHeight = 0;

        for (int i = 0; i < maxBubbleCount; i++)
        {
            float x = canApplyXOffset ? currentWidth + xOffset : currentWidth;


            var spawnedTile = Instantiate(tilePf, new Vector3(x, currentHeight), Quaternion.identity, parent);
            spawnedTile.name = $"Tile {x} {currentHeight}";
            spawnedTile.Init();

            Vector2 tilePos = new Vector2(x, currentHeight); 
            tilesDictionary[tilePos] = spawnedTile;

            currentWidth++;

            if (currentWidth == width * (currentWidth / width))
            {              
                if (currentHeight % 2 == 0)
                {
                    canApplyXOffset = true;
                    width += tileOffset;
                }
                else
                {
                    canApplyXOffset = false;
                    width -= tileOffset;
                }
                currentHeight++;
                currentWidth = 0;
            }
        }

        Vector3 centerPos = new Vector3((float)width / 2 - 0.5f, (float)height / 2 - 0.5f, -10);
        cam.transform.position = new Vector3((float)width / 2 - 0.5f, (float)height / 2 - 0.5f, -10);

        _centerPos = centerPos;

    }

    private void GetValuesForType(Type type, out float xOffset, out int tileOffset)
    {
        xOffset = 0;
        tileOffset = 0;

        switch (type)
        {
            case Type.ClassicBubble:
                xOffset = -0.5f;
                tileOffset = 1;
                break;
            case Type.Square:              
                xOffset = 0f;
                tileOffset = 0;
                break;
            case Type.SquareWithOffset:
                xOffset = 0.5f;
                tileOffset = 0;
                break;
        }
    }

    public void Clear()
    {
        if(tilesDictionary != null) tilesDictionary.Clear();
    }

    public void ShowGrid()
    {
        foreach (var tile in tilesDictionary.Values)
        {
            tile.Show();
        }
    }

    public void HideGrid()
    {
        foreach(var tile in tilesDictionary.Values)
        {
            tile.Hide();         
        }
    }

    public Tile GetTileAtPosition(Vector2 pos)
    {
        if (tilesDictionary.TryGetValue(pos, out var tile)) return tile;
        return null;
    }

}

