using System.Collections;
using System.Collections.Generic;
using Sirenix.OdinInspector;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.UIElements;
using static LevelCreator;

public class LevelCreatorUIManager : MonoBehaviour
{
    [AssetsOnly]
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform colorBtnPf;
    [AssetsOnly]
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform phaseBtnPf;
    [AssetsOnly]
    [FoldoutGroup("To assign:")]
    [SerializeField] private LevelCreatorBrushColorPaletteSO brushColorPaletteSO;
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform colorBtnSpawnTransform;
    [FoldoutGroup("To assign:")]
    [SerializeField] private Transform phaseBtnSpawnTransform;
    [FoldoutGroup("To assign:")]
    [SerializeField] private List<int> phasesList;

    [ReadOnly]
    [SerializeField] private List<LevelCreatorButton> uiElementsList;

    private LevelCreator levelCreator;
    [SerializeField] private float buttonsOffset;



    [Button]
    private void UpdateLayout()
    {

    }

    private void Start()
    {
        Init();
    }

    private void Init()
    {
        if(levelCreator == null) levelCreator = FindObjectOfType <LevelCreator>().GetComponent<LevelCreator>();

        GenerateDynamicColorButtons();
        GenerateDynamicPhaseButtons();

        AddListenersToButtons();
    }
    private void FindAllUIScripts()
    {
        var list = transform.GetComponentsInChildren<LevelCreatorButton>();
        foreach (var item in list)
        {
            uiElementsList.Add(item);
        }
    }

    private void AddListenersToButtons()
    {
        
        foreach (var uiElements in uiElementsList) 
        {
            if (uiElements.GetComponent<LevelCreatorButtonColor>() != null)
            {
                LevelCreatorButtonColor buttonElement = uiElements.GetComponent<LevelCreatorButtonColor>();

                buttonElement._button.onClick.AddListener(() => {
                    LevelCreator.Instance.UpdateSettings(LevelCreator.SettingsType.BubbleID, buttonElement._bubbleType.bubbleID); 
                });
            }
        }

        foreach (var uiElements in uiElementsList)
        {
            if (uiElements.GetComponent<LevelCreatorButtonPhase>() != null)
            {
                LevelCreatorButtonPhase buttonElement = uiElements.GetComponent<LevelCreatorButtonPhase>();
                int order = 0;

                buttonElement._button.onClick.AddListener(() => {
                    LevelCreator.Instance.UpdateSettings(LevelCreator.SettingsType.Phase, BubbleID.none, order = 0, buttonElement._phaseNumber);
                    Debug.Log("clicked");
                });
            }
        }
    }

    private void GenerateDynamicPhaseButtons()
    {
        int i = 0;

        foreach (int phaseNumber in phasesList)
        {
            Transform button = Instantiate(phaseBtnPf, phaseBtnSpawnTransform.position, Quaternion.identity, this.transform);

            RectTransform rectTransform = button.GetComponent<RectTransform>();
            LevelCreatorButtonPhase buttonPhase = button.GetComponent<LevelCreatorButtonPhase>();

            float sizeY = rectTransform.rect.height;

            float newYPos = button.position.y - ((sizeY + buttonsOffset) * i);
            button.position = new Vector3(button.position.x, newYPos, button.position.z);

            

            buttonPhase.SetupButton(phaseNumber);

            uiElementsList.Add(buttonPhase);

            i++;
        }
    }

    private void GenerateDynamicColorButtons()
    {
        int i = 0;

        foreach (BubbleType bubbleType in BubbleManager.Instance._bubbleTypeList)
        {
            Transform button = Instantiate(colorBtnPf, colorBtnSpawnTransform.position, Quaternion.identity, this.transform);

            RectTransform rectTransform = button.GetComponent<RectTransform>();
            LevelCreatorButtonColor buttonColor = button.GetComponent<LevelCreatorButtonColor>();

            float sizeY = rectTransform.rect.height;

            float newYPos = button.position.y - ((sizeY + buttonsOffset) * i);
            button.position = new Vector3(button.position.x, newYPos, button.position.z);



            buttonColor.SetupButton(bubbleType);

            uiElementsList.Add(buttonColor);

            i++;
        }
    }
}
