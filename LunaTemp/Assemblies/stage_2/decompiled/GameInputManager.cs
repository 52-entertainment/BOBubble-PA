using UnityEngine;

public class GameInputManager : MonoBehaviour
{
	public static GameInputManager Instance { get; private set; }

	public bool isDragging { get; private set; }

	private void Awake()
	{
		Instance = this;
	}

	private void Update()
	{
		if (Input.GetMouseButton(0))
		{
			isDragging = true;
		}
		else
		{
			isDragging = false;
		}
	}
}
