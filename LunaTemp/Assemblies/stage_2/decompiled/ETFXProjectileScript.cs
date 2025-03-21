using UnityEngine;

public class ETFXProjectileScript : MonoBehaviour
{
	public GameObject impactParticle;

	public GameObject projectileParticle;

	public GameObject muzzleParticle;

	public GameObject[] trailParticles;

	[HideInInspector]
	public Vector3 impactNormal;

	private bool hasCollided = false;

	private void Start()
	{
		projectileParticle = Object.Instantiate(projectileParticle, base.transform.position, base.transform.rotation);
		projectileParticle.transform.parent = base.transform;
		if ((bool)muzzleParticle)
		{
			muzzleParticle = Object.Instantiate(muzzleParticle, base.transform.position, base.transform.rotation);
			Object.Destroy(muzzleParticle, 1.5f);
		}
	}

	private void OnCollisionEnter(Collision hit)
	{
		if (hasCollided)
		{
			return;
		}
		hasCollided = true;
		impactParticle = Object.Instantiate(impactParticle, base.transform.position, Quaternion.FromToRotation(Vector3.up, impactNormal));
		if (hit.gameObject.tag == "Destructible")
		{
			Object.Destroy(hit.gameObject);
		}
		GameObject[] array = trailParticles;
		foreach (GameObject trail in array)
		{
			GameObject curTrail = base.transform.Find(projectileParticle.name + "/" + trail.name).gameObject;
			curTrail.transform.parent = null;
			Object.Destroy(curTrail, 3f);
		}
		Object.Destroy(projectileParticle, 3f);
		Object.Destroy(impactParticle, 5f);
		Object.Destroy(base.gameObject);
		ParticleSystem[] trails = GetComponentsInChildren<ParticleSystem>();
		for (int i = 1; i < trails.Length; i++)
		{
			ParticleSystem trail2 = trails[i];
			if (trail2.gameObject.name.Contains("Trail"))
			{
				trail2.transform.SetParent(null);
				Object.Destroy(trail2.gameObject, 2f);
			}
		}
	}
}
