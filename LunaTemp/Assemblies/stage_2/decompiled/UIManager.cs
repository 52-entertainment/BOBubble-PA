using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
	[SerializeField]
	private Button btnBlue;

	private void OnEnable()
	{
		btnBlue.onClick.AddListener(delegate
		{
		});
	}
}
