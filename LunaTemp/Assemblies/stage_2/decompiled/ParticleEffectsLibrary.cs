using System.Collections.Generic;
using UnityEngine;

public class ParticleEffectsLibrary : MonoBehaviour
{
	public static ParticleEffectsLibrary GlobalAccess;

	public int TotalEffects = 0;

	public int CurrentParticleEffectIndex = 0;

	public int CurrentParticleEffectNum = 0;

	public Vector3[] ParticleEffectSpawnOffsets;

	public float[] ParticleEffectLifetimes;

	public GameObject[] ParticleEffectPrefabs;

	private string effectNameString = "";

	private List<Transform> currentActivePEList;

	private Vector3 spawnPosition = Vector3.zero;

	private void Awake()
	{
		GlobalAccess = this;
		currentActivePEList = new List<Transform>();
		TotalEffects = ParticleEffectPrefabs.Length;
		CurrentParticleEffectNum = 1;
		if (ParticleEffectSpawnOffsets.Length != TotalEffects)
		{
			Debug.LogError("ParticleEffectsLibrary-ParticleEffectSpawnOffset: Not all arrays match length, double check counts.");
		}
		if (ParticleEffectPrefabs.Length != TotalEffects)
		{
			Debug.LogError("ParticleEffectsLibrary-ParticleEffectPrefabs: Not all arrays match length, double check counts.");
		}
		effectNameString = ParticleEffectPrefabs[CurrentParticleEffectIndex].name + " (" + CurrentParticleEffectNum + " of " + TotalEffects + ")";
	}

	private void Start()
	{
	}

	public string GetCurrentPENameString()
	{
		return ParticleEffectPrefabs[CurrentParticleEffectIndex].name + " (" + CurrentParticleEffectNum + " of " + TotalEffects + ")";
	}

	public void PreviousParticleEffect()
	{
		if (ParticleEffectLifetimes[CurrentParticleEffectIndex] == 0f && currentActivePEList.Count > 0)
		{
			for (int i = 0; i < currentActivePEList.Count; i++)
			{
				if (currentActivePEList[i] != null)
				{
					Object.Destroy(currentActivePEList[i].gameObject);
				}
			}
			currentActivePEList.Clear();
		}
		if (CurrentParticleEffectIndex > 0)
		{
			CurrentParticleEffectIndex--;
		}
		else
		{
			CurrentParticleEffectIndex = TotalEffects - 1;
		}
		CurrentParticleEffectNum = CurrentParticleEffectIndex + 1;
		effectNameString = ParticleEffectPrefabs[CurrentParticleEffectIndex].name + " (" + CurrentParticleEffectNum + " of " + TotalEffects + ")";
	}

	public void NextParticleEffect()
	{
		if (ParticleEffectLifetimes[CurrentParticleEffectIndex] == 0f && currentActivePEList.Count > 0)
		{
			for (int i = 0; i < currentActivePEList.Count; i++)
			{
				if (currentActivePEList[i] != null)
				{
					Object.Destroy(currentActivePEList[i].gameObject);
				}
			}
			currentActivePEList.Clear();
		}
		if (CurrentParticleEffectIndex < TotalEffects - 1)
		{
			CurrentParticleEffectIndex++;
		}
		else
		{
			CurrentParticleEffectIndex = 0;
		}
		CurrentParticleEffectNum = CurrentParticleEffectIndex + 1;
		effectNameString = ParticleEffectPrefabs[CurrentParticleEffectIndex].name + " (" + CurrentParticleEffectNum + " of " + TotalEffects + ")";
	}

	public void SpawnParticleEffect(Vector3 positionInWorldToSpawn)
	{
		spawnPosition = positionInWorldToSpawn + ParticleEffectSpawnOffsets[CurrentParticleEffectIndex];
		GameObject newParticleEffect = Object.Instantiate(ParticleEffectPrefabs[CurrentParticleEffectIndex], spawnPosition, ParticleEffectPrefabs[CurrentParticleEffectIndex].transform.rotation);
		newParticleEffect.name = "PE_" + ParticleEffectPrefabs[CurrentParticleEffectIndex];
		if (ParticleEffectLifetimes[CurrentParticleEffectIndex] == 0f)
		{
			currentActivePEList.Add(newParticleEffect.transform);
		}
		currentActivePEList.Add(newParticleEffect.transform);
		if (ParticleEffectLifetimes[CurrentParticleEffectIndex] != 0f)
		{
			Object.Destroy(newParticleEffect, ParticleEffectLifetimes[CurrentParticleEffectIndex]);
		}
	}
}
