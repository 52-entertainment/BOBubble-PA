using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LevelCreatorButtonColor : LevelCreatorButton
{
    public Button _button => button;
    public BubbleType _bubbleType => bubbleType;

    [SerializeField] private Button button;
    [SerializeField] private BubbleType bubbleType;
    [SerializeField] private Image colorVisual;
    [SerializeField] private TMP_Text colorText;



    public void SetupButton(BubbleType bubbleType)
    {
        //button = transform.GetComponent<Button>();

        this.bubbleType = bubbleType;
        //bubbleType.color.a
        this.colorVisual.color = bubbleType.color;
        //this.colorVisual
        this.colorText.text = bubbleType.bubbleID.ToString();

    }

}
