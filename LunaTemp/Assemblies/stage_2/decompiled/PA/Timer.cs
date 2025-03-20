using UnityEngine;

namespace PA
{
	public static class Timer
	{
		public static void CreateTimer(float timerMax)
		{
			GameObject newTimer = new GameObject("Timer");
			TimerMonobehaviour timerComponent = newTimer.AddComponent<TimerMonobehaviour>();
		}
	}
}
