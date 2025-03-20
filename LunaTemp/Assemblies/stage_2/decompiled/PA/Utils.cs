using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

namespace PA
{
	public static class Utils
	{
		public enum AxisOrientation
		{
			Horizontal,
			Vertical
		}

		public static bool IsRayHittingFromMousePosition()
		{
			Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
			if (Physics.Raycast(ray, out var _, float.PositiveInfinity))
			{
				return true;
			}
			return false;
		}

		public static bool IsRayHittingFromMousePosition(LayerMask layerMask)
		{
			Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
			if (Physics.Raycast(ray, out var _, float.PositiveInfinity, layerMask))
			{
				return true;
			}
			return false;
		}

		public static RaycastHit GetRayHitFromMouse()
		{
			Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
			Physics.Raycast(ray, out var hit, float.PositiveInfinity);
			return hit;
		}

		public static RaycastHit GetRayHitFromMouse(LayerMask layerMask)
		{
			Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
			Physics.Raycast(ray, out var hit, float.PositiveInfinity, layerMask);
			return hit;
		}

		public static List<T> GetDetectedAllObjectsList<T>(Collider raycastAllCollider, LayerMask layerMask)
		{
			List<T> detectedObjectsList = new List<T>();
			RaycastHit[] hits = Physics.BoxCastAll(raycastAllCollider.bounds.center, raycastAllCollider.bounds.extents, raycastAllCollider.transform.forward, raycastAllCollider.transform.rotation, float.PositiveInfinity, layerMask);
			for (int i = 0; i < hits.Length; i++)
			{
				T detectedObject = hits[i].collider.gameObject.GetComponent<T>();
				detectedObjectsList.Add(detectedObject);
			}
			return detectedObjectsList;
		}

		public static void ArrangeObjectsWithOffsetHorizontal<T>(Transform originalParentTransform, out Transform centeredParentTransform, float xOffset = 0.3f, float zOffset = 0.2f, float sizeOffset = 1f) where T : Component
		{
			T[] children = originalParentTransform.GetComponentsInChildren<T>();
			for (int i = 0; i < children.Length; i++)
			{
				Transform child = children[i].transform;
				float x = originalParentTransform.position.x + xOffset * (float)i;
				float z = originalParentTransform.position.z - zOffset * (float)i;
				child.position = new Vector3(x, originalParentTransform.position.y, z);
				child.localScale *= sizeOffset;
			}
			CalculateXPositionsFromList(children, out var _, out var _, out var centerPosX);
			CalculateYPositionsFromList(children, out var _, out var _, out var centerPosY);
			GameObject cardParent = new GameObject("Hand Parent");
			cardParent.transform.position = new Vector3(centerPosX, centerPosY, children[0].transform.position.z);
			T[] array = children;
			foreach (T child2 in array)
			{
				child2.transform.parent = cardParent.transform;
			}
			centeredParentTransform = cardParent.transform;
			centeredParentTransform.parent = originalParentTransform;
		}

		public static void ArrangeObjectsWithOffsetHorizontal<T>(Transform originalParentTransform, Transform centeredParentTransform, bool isUodate = true, float xOffset = 0.3f, float zOffset = 0.2f, float sizeOffset = 1f) where T : Component
		{
			T[] children = originalParentTransform.GetComponentsInChildren<T>();
			for (int i = 0; i < children.Length; i++)
			{
				Transform child = children[i].transform;
				float x = originalParentTransform.position.x + xOffset * (float)i;
				float z = originalParentTransform.position.z - zOffset * (float)i;
				child.position = new Vector3(x, originalParentTransform.position.y, z);
				child.localScale *= sizeOffset;
				child.transform.parent = originalParentTransform;
			}
			CalculateXPositionsFromList(children, out var _, out var _, out var centerPosX);
			CalculateYPositionsFromList(children, out var _, out var _, out var centerPosY);
			centeredParentTransform.transform.position = new Vector3(centerPosX, centerPosY, children[0].transform.position.z);
			T[] array = children;
			foreach (T child2 in array)
			{
				child2.transform.parent = centeredParentTransform.transform;
			}
		}

		public static void ArrangeObjectsWithSpacing<T>(Transform parentTransform, AxisOrientation axisOrientation, float spacing = 0.2f, bool isAnimated = false, float animDuration = 0.25f) where T : Component
		{
			SetAxis(axisOrientation, out var axis);
			T[] children = parentTransform.GetComponentsInChildren<T>();
			float totalWidth = CalculateTotalWidth(children, spacing);
			float startOffset = (0f - totalWidth) / 2f;
			Vector3 startPosition = parentTransform.transform.position - axis * (totalWidth / 2f);
			float currentOffset = 0f;
			for (int i = 0; i < children.Length; i++)
			{
				Transform child = children[i].transform;
				float objectWidth = GetObjectWidth(child);
				Vector3 newPosition = startPosition + axis * (currentOffset + objectWidth / 2f);
				if (isAnimated)
				{
					child.DOMove(newPosition, animDuration);
				}
				else
				{
					child.position = newPosition;
				}
				currentOffset += objectWidth + spacing;
			}
		}

		private static void SetAxis(AxisOrientation axisOrientation, out Vector3 axis)
		{
			switch (axisOrientation)
			{
			case AxisOrientation.Horizontal:
				axis = Vector3.right;
				break;
			case AxisOrientation.Vertical:
				axis = Vector3.up;
				break;
			default:
				axis = Vector3.zero;
				break;
			}
		}

		private static float CalculateTotalWidth<T>(T[] children, float spacing) where T : Component
		{
			float totalWidth = 0f;
			for (int i = 0; i < children.Length; i++)
			{
				totalWidth += GetObjectWidth(children[i].transform);
				if (i < children.Length - 1)
				{
					totalWidth += spacing;
				}
			}
			return totalWidth;
		}

		private static float GetObjectWidth(Transform obj)
		{
			Renderer renderer = obj.GetComponent<Renderer>();
			if (renderer != null)
			{
				return renderer.bounds.size.x;
			}
			Debug.LogError("Object has no renderer.");
			return 0f;
		}

		private static void CalculateXPositionsFromList<T>(T[] children, out float minPosX, out float maxPosX, out float centerPosX) where T : Component
		{
			Collider colA = children[0].GetComponent<Collider>();
			Collider colB = children[children.Length - 1].GetComponent<Collider>();
			float sizeA = colA.bounds.size.x / 2f;
			minPosX = colA.transform.position.x - sizeA;
			float sizeB = colB.bounds.size.x / 2f;
			maxPosX = colB.transform.position.x + sizeB;
			centerPosX = (maxPosX + minPosX) / 2f;
		}

		private static void CalculateYPositionsFromList<T>(T[] children, out float minPosY, out float maxPosY, out float centerPosY) where T : Component
		{
			Collider colA = children[0].GetComponent<Collider>();
			Collider colB = children[children.Length - 1].GetComponent<Collider>();
			float sizeA = colA.bounds.size.y / 2f;
			minPosY = colA.transform.position.y - sizeA;
			float sizeB = colB.bounds.size.y / 2f;
			maxPosY = colB.transform.position.y + sizeB;
			centerPosY = (maxPosY + minPosY) / 2f;
		}

		public static Vector3 GetMouseScreenPosition()
		{
			return Input.mousePosition;
		}

		public static Vector3 GetMouseWorldPosition()
		{
			Vector3 vec = GetMouseWorldPositionWithZ(Input.mousePosition, Camera.main);
			vec.z = 0f;
			return vec;
		}

		public static Vector3 GetMouseWorldPosition(Vector3 objectWorldPosition)
		{
			Vector3 mouseScreenPos = Input.mousePosition;
			mouseScreenPos.z = Camera.main.WorldToScreenPoint(objectWorldPosition).z;
			return Camera.main.ScreenToWorldPoint(mouseScreenPos);
		}

		public static Vector3 GetMouseWorldPositionWithZ()
		{
			return GetMouseWorldPositionWithZ(Input.mousePosition, Camera.main);
		}

		public static Vector3 GetMouseWorldPositionWithZ(Camera worldCamera)
		{
			return GetMouseWorldPositionWithZ(Input.mousePosition, worldCamera);
		}

		public static Vector3 GetMouseWorldPositionWithZ(Vector3 screenPosition, Camera worldCamera)
		{
			return worldCamera.ScreenToWorldPoint(screenPosition);
		}
	}
}
