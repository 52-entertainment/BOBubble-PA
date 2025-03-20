using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Shoot : MonoBehaviour
{
    [SerializeField] Rigidbody rb;
    [SerializeField] private float projectileSpeed = 20f;
    [SerializeField] private Bubble targetBubble;
    [SerializeField] private Animator camAnimator01;
    [SerializeField] private Animator camAnimator02;

    private void OnEnable()
    {
        EvtManager.OnBubbleSelected += (object sender, EventArgs e) =>
        {
            if(BubbleManager.Instance._selectedBubble != null)
            {
                targetBubble = BubbleManager.Instance._selectedBubble;
            }
        };
    }
    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 direction = (targetBubble.transform.position - transform.position).normalized;
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
