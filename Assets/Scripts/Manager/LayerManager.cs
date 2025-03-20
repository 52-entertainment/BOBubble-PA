using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class LayerManager
{
    /// <layerMask List>
    /// 
    /// </summary>

    private static int bubbleLayer = 6;
    private static int tileLayer = 7;

    public static int bubbleLayerMask = 1 << bubbleLayer;
    public static int tileLayerMask = 1 << tileLayer;

}
