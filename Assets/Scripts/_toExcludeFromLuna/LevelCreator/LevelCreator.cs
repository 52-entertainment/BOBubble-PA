using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEditor;
using System.Linq;
using System;
using Sirenix.OdinInspector;
using System.IO;
using Unity.VisualScripting;

public class LevelCreator : MonoBehaviour
{
    public static LevelCreator Instance { get; private set; }

    public enum SettingsType
    {
        Phase, Order, BubbleID
    }
    public enum BrushType
    {
        Phase, Order
    }

    public List<Bubble> _spawnedBubbleList => spawnedBubbleList;

    [FoldoutGroup("To assign:")]
    [SerializeField] private SceneAsset levelCreatorSceneAsset;

    [Title("Grid Generator:")]
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform gridHolderTransform;
    [FoldoutGroup("To assign:")]
    [SerializeField] private Tile tilePrefab;
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform cam;

    [FoldoutGroup("Debug:")]
    [SerializeField] private List<Bubble> spawnedBubbleList;

    [FoldoutGroup("Debug:")]
    [SerializeField] private BubbleID bubbleID;
    [FoldoutGroup("Debug:")]
    [SerializeField] private int phaseNumber;

    [PropertySpace(SpaceAfter = 2f)]
    [Title("Brush:")]
    [SerializeField] private BrushType brushType;
    //[Range(0f, 6f)]
    
    [SerializeField] private int orderNumber;

    [Title("Grid:")]
    [SerializeField] private GridGenerator.Type gridType;
    [Range(0f, 15f)]
    [SerializeField] private int width;
    [Range(0f, 100f)]
    [SerializeField] private int height;


    private GridGenerator gridGenerator;
    private LevelManager levelManager;
    private bool untoggleGrid = true;
    private const float verticalSpeed = 10f;

    [Button]
    private void GenerateGrid(bool allowToOverrideLayout)
    {

        if(spawnedBubbleList.Count > 0)
        {
            if (allowToOverrideLayout)
            {
                if (gridGenerator == null) gridGenerator = GetComponentInChildren<GridGenerator>();

                ClearGrid();
                gridGenerator.GenerateGrid(gridType, width, height, tilePrefab, gridHolderTransform, cam, out Vector3 _centerPos);

                if (levelManager == null) levelManager = FindFirstObjectByType(typeof(LevelManager)).GetComponent<LevelManager>();
                levelManager._activeLevel.transform.position = new Vector3(_centerPos.x, _centerPos.y, -3);
            }
        }
        else
        {
            if (gridGenerator == null) gridGenerator = GetComponentInChildren<GridGenerator>();

            ClearGrid();
            gridGenerator.GenerateGrid(gridType, width, height, tilePrefab, gridHolderTransform, cam, out Vector3 _centerPos);

            if (levelManager == null) levelManager = FindFirstObjectByType(typeof(LevelManager)).GetComponent<LevelManager>();
            levelManager._activeLevel.transform.position = new Vector3(_centerPos.x, _centerPos.y, -3);

        }
    }
    [Button]
    private void ToggleGrid()
    {
        if (gridGenerator != null) {
            if (untoggleGrid)
            {
                gridGenerator.HideGrid();
            }
            else
            {
                gridGenerator.ShowGrid();
            }
        }

        this.untoggleGrid = !untoggleGrid;
    }
    private void ClearGrid()
    {
        foreach (var bubble in spawnedBubbleList)
        {
            bubble.DestroyBubble();
        }

        spawnedBubbleList.Clear();
        EvtManager.onLayoutCleared.Invoke();


        if (gridGenerator == null) gridGenerator = FindFirstObjectByType(typeof(GridGenerator)).GetComponent<GridGenerator>();

        var tiles = GetComponentsInChildren<Tile>();
        foreach (var tile in tiles) 
        {
            DestroyImmediate(tile.gameObject);
        }
        gridGenerator.Clear();
    }
    

    private void Awake()
    {
        Instance = this;
    }

    // EVENTS
    private void OnEnable()
    {
        EvtManager.onTileSelected.AddListener((Tile tile) => {
            // update color
            Transform spawnedTransform = SpawnBubble(tile.transform, tile.transform, BubbleManager.Instance._bubblePrefab);
            tile.SetSpawnedTransform(spawnedTransform);
        });
        EvtManager.onTileCleared.AddListener((Transform spawnedTransform) => {
            DestroyBubble(spawnedTransform);
        });

        EvtManager.OnBubbleSpawned += (object sender, EventArgs e) =>
        {
            BubbleManager.Instance.UpdateAllNearbyBubblesLists();
            if (GameInputManager.Instance.isMouseClicking && brushType == BrushType.Order)
            {
                orderNumber += 1;
            }
        };
        EvtManager.OnBubbleSelected += (object sender, EventArgs e) =>
        {
            foreach (var bubble in spawnedBubbleList.ToList())
            {
                if ( brushType == BrushType.Phase && BubbleManager.Instance._selectedBubble != null) 
                { BubbleManager.Instance._selectedBubble.UpdatePhaseNumber(phaseNumber); }
                else if ( brushType == BrushType.Order && BubbleManager.Instance._selectedBubble != null) 
                { BubbleManager.Instance._selectedBubble.UpdateOrderNumber(orderNumber); }                
            }
        };
    }

    private void Start()
    {
        untoggleGrid = true;
        GenerateGrid(false);
    }


    private Transform SpawnBubble(Transform tileTransform, Transform spawnedTransform, Transform pfBubble)
    {
        spawnedTransform = Instantiate(pfBubble, LevelManager.Instance._activeLevel._bubblesHolderTransform);
        spawnedTransform.position = tileTransform.position;

        Bubble bubble = spawnedTransform.GetComponent<Bubble>();

        foreach (BubbleType type in BubbleManager.Instance._bubbleTypeList)
        {
            if (type.IsID(bubbleID))
            {
                bubble.BubbleSetup(type.bubbleID, type.color, type.material, phaseNumber, orderNumber);
                Debug.Log(type.color);
            }
        }

        spawnedTransform.transform.position = tileTransform.position;

        spawnedBubbleList.Add(bubble);
        LevelManager.Instance._activeLevel._levelBubblesList.Add(bubble);

        return spawnedTransform;
    }
    private void DestroyBubble(Transform spawnedTransform)
    {
        Bubble destroyedBubble = spawnedTransform.GetComponent<Bubble>();

        ClearDestroyedBubble(destroyedBubble);
        destroyedBubble.DestroyBubble();
    }
    private void ClearDestroyedBubble(Bubble destroyedBubble)
    {
        foreach (var bubble in spawnedBubbleList.ToList())
        {
            foreach (var nearbyBubble in bubble._nearbyBubblesList.ToList())
            {
                if (nearbyBubble == destroyedBubble)
                {
                    bubble._nearbyBubblesList.Remove(nearbyBubble);
                }
            }

            if (destroyedBubble == bubble)
            {
                spawnedBubbleList.Remove(destroyedBubble);
                LevelManager.Instance._activeLevel._levelBubblesList.Remove(destroyedBubble);
            }
        }
    }


    public void UpdateSettings(SettingsType settingType, BubbleID bubbleID = BubbleID.none, int order = 0, int phase = 0)
    {
        switch (settingType) 
        {
            case SettingsType.Order:
                this.orderNumber = order;
                break;
            case SettingsType.Phase:
                this.phaseNumber = phase;
                break;
            case SettingsType.BubbleID:
                this.bubbleID = bubbleID;
                break;       
        }
    }
}
