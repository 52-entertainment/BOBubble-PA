using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

namespace PA
{
    public static class Utils
    {

        #region Raycast Methods
        // NEW
        public static bool GetRaycastHitFromLayer(LayerMask layerMask, out Transform _hit) 
        {
            Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
            
            if (Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity, layerMask))
            {
                _hit = hit.transform;
                return true;
            }
            else
            {
                _hit = null;
                return false;
            }
        }
        public static T GetComponentFromRaycastHit<T>(Vector2 initialScreenPos) where T : Component
        {
            Ray ray = Camera.main.ScreenPointToRay(initialScreenPos);
            T t1;

            Physics.Raycast(ray, out RaycastHit hit, Mathf.Infinity);
            hit.transform.TryGetComponent<T>(out T component);
            if (component != null)
            {
                t1 = component;
                return t1;
            }
            else
            {
                return t1 = null;
            }
        }


        public static bool IsRayHittingFromMousePosition()
        {
            Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit, Mathf.Infinity))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public static bool IsRayHittingFromMousePosition(LayerMask layerMask)
        {
            Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
            RaycastHit hit;
            if (Physics.Raycast(ray, out hit, Mathf.Infinity, layerMask))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static RaycastHit GetRayHitFromMouse()
        {
            Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
            RaycastHit hit;
            Physics.Raycast(ray, out hit, Mathf.Infinity);
            return hit;
        }

        public static RaycastHit GetRayHitFromMouse(LayerMask layerMask)
        {
            Ray ray = Camera.main.ScreenPointToRay(GetMouseScreenPosition());
            RaycastHit hit;
            Physics.Raycast(ray, out hit, Mathf.Infinity, layerMask);
            return hit;
        }

        public static List<T> GetDetectedAllObjectsList<T>(Collider raycastAllCollider, LayerMask layerMask)
        {
            List<T> detectedObjectsList = new List<T>();

            RaycastHit[] hits = Physics.BoxCastAll(raycastAllCollider.bounds.center, raycastAllCollider.bounds.extents, raycastAllCollider.transform.forward,
                 raycastAllCollider.transform.rotation, Mathf.Infinity, layerMask);

            for (int i = 0; i < hits.Length; i++)
            {
                T detectedObject = hits[i].collider.gameObject.GetComponent<T>();
                detectedObjectsList.Add(detectedObject);

                /*
                //, Action<T> addObjectsToList
                //addObjectsToList(dete);

                //CardObject detectedCardObject = hits[i].collider.gameObject.GetComponent<CardObject>();
                //CardObjectManager.Instance.AddDetectedCardObjectToList(detectedCardObject);    */
            }
            return detectedObjectsList;
        }
        #endregion

        #region Arrange methods

        // Card objects ---> Arrange with an offset between each object
        // Organize objects in a new parent with a center that is calculated from the total size of all items in the list
        public static void ArrangeObjectsWithOffsetHorizontal<T>(Transform originalParentTransform, out Transform centeredParentTransform,
            float xOffset = 0.3f, float zOffset = 0.2f, float sizeOffset = 1f) where T : Component
        {
            T[] children = originalParentTransform.GetComponentsInChildren<T>();

            for (int i = 0; i < children.Length; i++)
            {
                var child = children[i].transform;

                // Setup position of the card
                float x = (originalParentTransform.position.x) + (xOffset * i);
                float z = (originalParentTransform.position.z) - (zOffset * i);

                child.position = new Vector3(x, originalParentTransform.position.y, z);
                child.localScale *= sizeOffset;
            }

            CalculateXPositionsFromList(children, out float minPosX, out float maxPosX, out float centerPosX);
            CalculateYPositionsFromList(children, out float minPosY, out float maxPosY, out float centerPosY);

            // Create new centered parent
            GameObject cardParent = new GameObject("Hand Parent");
            cardParent.transform.position = new Vector3(centerPosX, centerPosY, children[0].transform.position.z);

            foreach (var child in children)
            {
                child.transform.parent = cardParent.transform;
            }

            centeredParentTransform = cardParent.transform;
            centeredParentTransform.parent = originalParentTransform;
        }
        public static void ArrangeObjectsWithOffsetHorizontal<T>(Transform originalParentTransform, Transform centeredParentTransform, bool isUodate = true,
     float xOffset = 0.3f, float zOffset = 0.2f, float sizeOffset = 1f) where T : Component
        {
            T[] children = originalParentTransform.GetComponentsInChildren<T>();

            for (int i = 0; i < children.Length; i++)
            {
                var child = children[i].transform;

                // Setup position of the card
                float x = (originalParentTransform.position.x) + (xOffset * i);
                float z = (originalParentTransform.position.z) - (zOffset * i);

                child.position = new Vector3(x, originalParentTransform.position.y, z);
                child.localScale *= sizeOffset;

                child.transform.parent = originalParentTransform;
            }

            CalculateXPositionsFromList(children, out float minPosX, out float maxPosX, out float centerPosX);
            CalculateYPositionsFromList(children, out float minPosY, out float maxPosY, out float centerPosY);

            // Create new centered parent
            //GameObject cardParent = new GameObject("Hand Parent");
            centeredParentTransform.transform.position = new Vector3(centerPosX, centerPosY, children[0].transform.position.z);

            foreach (var child in children)
            {
                child.transform.parent = centeredParentTransform.transform;
            }

            //centeredParentTransform = cardParent.transform;
            //centeredParentTransform.parent = originalParentTransform;
        }



        // HorizontalGroup3D (from Julien) --> Arrange objects from list with a certain spacing between them
        public static void ArrangeObjectsWithSpacing<T>(Transform parentTransform, AxisOrientation axisOrientation, 
            float spacing = 0.2f, bool isAnimated = false, float animDuration = .25f) where T : Component
        {
            SetAxis(axisOrientation, out Vector3 axis);

            T[] children = parentTransform.GetComponentsInChildren<T>();
            float totalWidth = CalculateTotalWidth(children, spacing);
            float startOffset = -totalWidth / 2f;
            Vector3 startPosition = parentTransform.transform.position - (axis * (totalWidth / 2f));

            float currentOffset = 0f;
            for (int i = 0; i < children.Length; i++)
            {
                var child = children[i].transform;
                float objectWidth = GetObjectWidth(child);

                // Center each object by adding half its width to the position
                Vector3 newPosition = startPosition + (axis * (currentOffset + objectWidth / 2f));
                if (isAnimated) { child.DOMove(newPosition, animDuration); } 
                else { child.position = newPosition; }
                

                currentOffset += objectWidth + spacing;
            }
        }
        #endregion


        // Private Utility Methods
        #region Axis Methods
        public enum AxisOrientation
        {
            Horizontal, Vertical
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
        #endregion
        #region Calculation Methods
        private static float CalculateTotalWidth<T>(T[] children, float spacing) where T : Component
        {
            float totalWidth = 0f;
            for (int i = 0; i < children.Length; i++)
            {
                totalWidth += GetObjectWidth(children[i].transform);
                if (i < children.Length - 1) totalWidth += spacing;
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


        // calculate width between 2 sprite bounds
        private static void CalculateXPositionsFromList<T>(T[] children, out float minPosX, out float maxPosX, out float centerPosX) where T : Component
        {
            Collider colA = children[0].GetComponent<Collider>();
            Collider colB = children[children.Length - 1].GetComponent<Collider>();

            float sizeA = colA.bounds.size.x / 2;
            minPosX = colA.transform.position.x - sizeA;

            float sizeB = colB.bounds.size.x / 2;
            maxPosX = colB.transform.position.x + sizeB;

            centerPosX = (maxPosX + minPosX)/2;

        }

        private static void CalculateYPositionsFromList<T>(T[] children, out float minPosY, out float maxPosY, out float centerPosY) where T : Component
        {
            Collider colA = children[0].GetComponent<Collider>();
            Collider colB = children[children.Length - 1].GetComponent<Collider>();

            float sizeA = colA.bounds.size.y / 2;
            minPosY = colA.transform.position.y - sizeA;

            float sizeB = colB.bounds.size.y / 2;
            maxPosY = colB.transform.position.y + sizeB;

            centerPosY = (maxPosY + minPosY) / 2;

        }
        #endregion
        #region Mouse Get Methods
        /// <Get methods>
        public static Vector2 GetMouseScreenPosition()
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
            var mouseScreenPos = Input.mousePosition;
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
            Vector3 worldPosition = worldCamera.ScreenToWorldPoint(screenPosition);
            return worldPosition;
        }
        #endregion
        #region Touch Get Methods
        public static Vector2 GetTouchScreenPosition()
        {
            if (Input.touchCount > 0)
            {
                return Input.GetTouch(0).position;
            }
            else
            {
                return Vector2.zero;
            }        
        }


        #endregion
    }

}
