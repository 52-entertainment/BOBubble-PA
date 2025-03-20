using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DragCamera : MonoBehaviour
{
    // Adjust this value to control how fast the camera pans.
    public float panSpeed = 1.0f;

    // This will store the previous mouse position when dragging starts.
    private Vector3 lastMousePosition;

    // Define a plane on which the dragging occurs. Here we use a horizontal plane (normal facing up).
    private Plane dragPlane;

    void Start()
    {
        // Initialize the plane based on the current camera position.
        // The plane's normal is Vector3.up (i.e. horizontal).
        dragPlane = new Plane(Vector3.up, transform.position);
    }


    void Update()
    {
        // When the middle mouse button is pressed, record the current mouse position.
        if (Input.GetMouseButtonDown(2))
        {
            Debug.Log("pressed");
            lastMousePosition = Input.mousePosition;
        }
        // When the middle mouse button is held down...
        else if (Input.GetMouseButton(2))
        {
            Vector3 currentMousePosition = Input.mousePosition;

            // Cast a ray from the camera for both the last and current mouse positions.
            Ray rayCurrent = Camera.main.ScreenPointToRay(currentMousePosition);
            Ray rayLast = Camera.main.ScreenPointToRay(lastMousePosition);

            // Variables to store the distances along the ray where they hit the plane.
            if (dragPlane.Raycast(rayCurrent, out float enterCurrent) && dragPlane.Raycast(rayLast, out float enterLast))
            {
                // Convert the rays into world positions on the plane.
                Vector3 worldCurrent = rayCurrent.GetPoint(enterCurrent);
                Vector3 worldLast = rayLast.GetPoint(enterLast);

                // Determine the difference and move the camera by that amount.
                Vector3 delta = worldLast - worldCurrent;
                transform.position += delta * panSpeed;
            }

            // Update the last mouse position for the next frame.
            lastMousePosition = currentMousePosition;
        }
    }
}
