using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LevelCreatorButtonPhase : LevelCreatorButton
{
    public int _phaseNumber => phaseNumber;
    public Button _button => button;

    [SerializeField] private Button button;
    [SerializeField] private TMP_Text phaseText;
    [SerializeField] private int phaseNumber;

    public void SetupButton(int phaseNumber)
    {
        this.phaseNumber = phaseNumber;
        phaseText.text = phaseNumber.ToString();
    }

}
