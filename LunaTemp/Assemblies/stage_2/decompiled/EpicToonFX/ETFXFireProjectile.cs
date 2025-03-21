using UnityEngine;
using UnityEngine.EventSystems;

namespace EpicToonFX
{
	public class ETFXFireProjectile : MonoBehaviour
	{
		private RaycastHit hit;

		public GameObject[] projectiles;

		public Transform spawnPosition;

		[HideInInspector]
		public int currentProjectile = 0;

		public float speed = 1000f;

		private ETFXButtonScript selectedProjectileButton;

		private void Start()
		{
			selectedProjectileButton = GameObject.Find("Button").GetComponent<ETFXButtonScript>();
		}

		private void Update()
		{
			if (Input.GetKeyDown(KeyCode.RightArrow))
			{
				nextEffect();
			}
			if (Input.GetKeyDown(KeyCode.D))
			{
				nextEffect();
			}
			if (Input.GetKeyDown(KeyCode.A))
			{
				previousEffect();
			}
			else if (Input.GetKeyDown(KeyCode.LeftArrow))
			{
				previousEffect();
			}
			if (Input.GetKeyDown(KeyCode.Mouse0) && !EventSystem.current.IsPointerOverGameObject() && Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), out hit, 100f))
			{
				GameObject projectile = Object.Instantiate(projectiles[currentProjectile], spawnPosition.position, Quaternion.identity);
				projectile.transform.LookAt(hit.point);
				projectile.GetComponent<Rigidbody>().AddForce(projectile.transform.forward * speed);
				projectile.GetComponent<ETFXProjectileScript>().impactNormal = hit.normal;
			}
			Debug.DrawRay(Camera.main.ScreenPointToRay(Input.mousePosition).origin, Camera.main.ScreenPointToRay(Input.mousePosition).direction * 100f, Color.yellow);
		}

		public void nextEffect()
		{
			if (currentProjectile < projectiles.Length - 1)
			{
				currentProjectile++;
			}
			else
			{
				currentProjectile = 0;
			}
			selectedProjectileButton.getProjectileNames();
		}

		public void previousEffect()
		{
			if (currentProjectile > 0)
			{
				currentProjectile--;
			}
			else
			{
				currentProjectile = projectiles.Length - 1;
			}
			selectedProjectileButton.getProjectileNames();
		}

		public void AdjustSpeed(float newSpeed)
		{
			speed = newSpeed;
		}
	}
}
