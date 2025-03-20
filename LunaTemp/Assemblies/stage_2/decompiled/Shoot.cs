using UnityEngine;

public class Shoot : MonoBehaviour
{
	[SerializeField]
	private Rigidbody rb;

	[SerializeField]
	private float projectileSpeed = 20f;

	[SerializeField]
	private Bubble targetBubble;

	[SerializeField]
	private Animator camAnimator01;

	[SerializeField]
	private Animator camAnimator02;

	private void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			Vector3 direction = (targetBubble.transform.position - base.transform.position).normalized;
			rb.velocity = direction * projectileSpeed;
		}
	}

	private void OnTriggerEnter(Collider other)
	{
		rb.useGravity = true;
		targetBubble.TriggerBubble();
		AnimationHandler.SetCamActiveState(camAnimator01, true);
		AnimationHandler.SetCamActiveState(camAnimator02, true);
	}
}
