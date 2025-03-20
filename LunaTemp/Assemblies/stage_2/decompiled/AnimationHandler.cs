using UnityEngine;

public static class AnimationHandler
{
	public const string IS_TRIGGERED = "isTriggered";

	public const string IS_CAM_ACTIVE = "isCamActive";

	public static void SetBubbleTriggeredState(Animator animator, bool toggle)
	{
		if (toggle)
		{
			animator.SetBool("isTriggered", true);
		}
		else
		{
			animator.SetBool("isTriggered", false);
		}
	}

	public static void SetCamActiveState(Animator animator, bool toggle)
	{
		if (toggle)
		{
			animator.SetBool("isCamActive", true);
		}
		else
		{
			animator.SetBool("isCamActive", false);
		}
	}
}
