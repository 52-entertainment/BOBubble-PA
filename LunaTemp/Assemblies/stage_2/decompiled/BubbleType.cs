using System;
using UnityEngine;

[Serializable]
public class BubbleType
{
	public BubbleID bubbleID;

	public Color color;

	public Material material;

	public bool IsID(BubbleID id)
	{
		if (id == bubbleID)
		{
			return true;
		}
		return false;
	}
}
