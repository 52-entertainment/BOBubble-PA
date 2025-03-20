using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public static class AnimationHandler
{
    public const string IS_TRIGGERED = "isTriggered";
    public const string IS_CAM_ACTIVE = "isCamActive";

    public static void SetBubbleTriggeredState(Animator animator, bool toggle)
    {
        if (toggle)
        {
            animator.SetBool(IS_TRIGGERED, true);
        }
        else
        {
            animator.SetBool(IS_TRIGGERED, false);
        }
        
    }

    public static void SetCamActiveState(Animator animator, bool toggle)
    {
        if (toggle)
        {
            animator.SetBool(IS_CAM_ACTIVE, true);
        }
        else
        {
            animator.SetBool(IS_CAM_ACTIVE, false);
        }

    }
}
