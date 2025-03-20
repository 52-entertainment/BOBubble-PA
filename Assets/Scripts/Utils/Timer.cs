using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace PA
{
    // WIP
    public static class Timer
    {
        public static void CreateTimer(float timerMax)
        {
            GameObject newTimer = new GameObject("Timer");
            TimerMonobehaviour timerComponent = newTimer.AddComponent<TimerMonobehaviour>();
        }
    }

    public class TimerMonobehaviour : MonoBehaviour
    {
        float timerMin;
        float timerMax;

        private TimerMonobehaviour(float timerMax)
        {
            timerMin = 0f;
        }

        private void Update()
        {

        }
    }
}
