var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1572 = root || request.c( 'UnityEngine.JointSpring' )
  var i1573 = data
  i1572.spring = i1573[0]
  i1572.damper = i1573[1]
  i1572.targetPosition = i1573[2]
  return i1572
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1574 = root || request.c( 'UnityEngine.JointMotor' )
  var i1575 = data
  i1574.m_TargetVelocity = i1575[0]
  i1574.m_Force = i1575[1]
  i1574.m_FreeSpin = i1575[2]
  return i1574
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1576 = root || request.c( 'UnityEngine.JointLimits' )
  var i1577 = data
  i1576.m_Min = i1577[0]
  i1576.m_Max = i1577[1]
  i1576.m_Bounciness = i1577[2]
  i1576.m_BounceMinVelocity = i1577[3]
  i1576.m_ContactDistance = i1577[4]
  i1576.minBounce = i1577[5]
  i1576.maxBounce = i1577[6]
  return i1576
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1578 = root || request.c( 'UnityEngine.JointDrive' )
  var i1579 = data
  i1578.m_PositionSpring = i1579[0]
  i1578.m_PositionDamper = i1579[1]
  i1578.m_MaximumForce = i1579[2]
  i1578.m_UseAcceleration = i1579[3]
  return i1578
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1580 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1581 = data
  i1580.m_Spring = i1581[0]
  i1580.m_Damper = i1581[1]
  return i1580
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1582 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1583 = data
  i1582.m_Limit = i1583[0]
  i1582.m_Bounciness = i1583[1]
  i1582.m_ContactDistance = i1583[2]
  return i1582
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1584 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1585 = data
  i1584.m_ExtremumSlip = i1585[0]
  i1584.m_ExtremumValue = i1585[1]
  i1584.m_AsymptoteSlip = i1585[2]
  i1584.m_AsymptoteValue = i1585[3]
  i1584.m_Stiffness = i1585[4]
  return i1584
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1587 = data
  i1586.m_LowerAngle = i1587[0]
  i1586.m_UpperAngle = i1587[1]
  return i1586
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1588 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1589 = data
  i1588.m_MotorSpeed = i1589[0]
  i1588.m_MaximumMotorTorque = i1589[1]
  return i1588
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1590 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1591 = data
  i1590.m_DampingRatio = i1591[0]
  i1590.m_Frequency = i1591[1]
  i1590.m_Angle = i1591[2]
  return i1590
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1592 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1593 = data
  i1592.m_LowerTranslation = i1593[0]
  i1592.m_UpperTranslation = i1593[1]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1595 = data
  i1594.position = new pc.Vec3( i1595[0], i1595[1], i1595[2] )
  i1594.scale = new pc.Vec3( i1595[3], i1595[4], i1595[5] )
  i1594.rotation = new pc.Quat(i1595[6], i1595[7], i1595[8], i1595[9])
  return i1594
}

Deserializers["ChainEventsManager"] = function (request, data, root) {
  var i1596 = root || request.c( 'ChainEventsManager' )
  var i1597 = data
  i1596.currentPhase = i1597[0]
  var i1599 = i1597[1]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1599.length; i += 1) {
    i1598.add(request.d('PhaseData', i1599[i + 0]));
  }
  i1596.phaseDataList = i1598
  i1596.delayBeforeNextPhase = i1597[2]
  i1596.delayBeforeDestroy = i1597[3]
  return i1596
}

Deserializers["PhaseData"] = function (request, data, root) {
  var i1602 = root || request.c( 'PhaseData' )
  var i1603 = data
  i1602.phaseNumber = i1603[0]
  i1602.animatedBubbleID = i1603[1]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1605 = data
  i1604.name = i1605[0]
  i1604.tagId = i1605[1]
  i1604.enabled = !!i1605[2]
  i1604.isStatic = !!i1605[3]
  i1604.layer = i1605[4]
  return i1604
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i1606 = root || request.c( 'LevelManager' )
  var i1607 = data
  request.r(i1607[0], i1607[1], 0, i1606, 'activeLevel')
  var i1609 = i1607[2]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('LevelSelector')))
  for(var i = 0; i < i1609.length; i += 1) {
    i1608.add(request.d('LevelSelector', i1609[i + 0]));
  }
  i1606.levelSelector = i1608
  return i1606
}

Deserializers["LevelSelector"] = function (request, data, root) {
  var i1612 = root || request.c( 'LevelSelector' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, 'level')
  return i1612
}

Deserializers["BubbleManager"] = function (request, data, root) {
  var i1614 = root || request.c( 'BubbleManager' )
  var i1615 = data
  i1614.layerMask = UnityEngine.LayerMask.FromIntegerValue( i1615[0] )
  request.r(i1615[1], i1615[2], 0, i1614, 'bubblePrefab')
  var i1617 = i1615[3]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('BubbleType')))
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.add(request.d('BubbleType', i1617[i + 0]));
  }
  i1614.bubbleTypeList = i1616
  request.r(i1615[4], i1615[5], 0, i1614, 'selectedBubble')
  return i1614
}

Deserializers["BubbleType"] = function (request, data, root) {
  var i1620 = root || request.c( 'BubbleType' )
  var i1621 = data
  i1620.bubbleID = i1621[0]
  i1620.color = new pc.Color(i1621[1], i1621[2], i1621[3], i1621[4])
  request.r(i1621[5], i1621[6], 0, i1620, 'material')
  return i1620
}

Deserializers["GameInputManager"] = function (request, data, root) {
  var i1622 = root || request.c( 'GameInputManager' )
  var i1623 = data
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1625 = data
  request.r(i1625[0], i1625[1], 0, i1624, 'sharedMesh')
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'additionalVertexStreams')
  i1626.enabled = !!i1627[2]
  request.r(i1627[3], i1627[4], 0, i1626, 'sharedMaterial')
  var i1629 = i1627[5]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 2) {
  request.r(i1629[i + 0], i1629[i + 1], 2, i1628, '')
  }
  i1626.sharedMaterials = i1628
  i1626.receiveShadows = !!i1627[6]
  i1626.shadowCastingMode = i1627[7]
  i1626.sortingLayerID = i1627[8]
  i1626.sortingOrder = i1627[9]
  i1626.lightmapIndex = i1627[10]
  i1626.lightmapSceneIndex = i1627[11]
  i1626.lightmapScaleOffset = new pc.Vec4( i1627[12], i1627[13], i1627[14], i1627[15] )
  i1626.lightProbeUsage = i1627[16]
  i1626.reflectionProbeUsage = i1627[17]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.isTrigger = !!i1633[1]
  request.r(i1633[2], i1633[3], 0, i1632, 'material')
  i1632.center = new pc.Vec3( i1633[4], i1633[5], i1633[6] )
  i1632.radius = i1633[7]
  return i1632
}

Deserializers["Bubble"] = function (request, data, root) {
  var i1634 = root || request.c( 'Bubble' )
  var i1635 = data
  request.r(i1635[0], i1635[1], 0, i1634, 'boxCollider')
  request.r(i1635[2], i1635[3], 0, i1634, 'rendererBubble')
  request.r(i1635[4], i1635[5], 0, i1634, 'material')
  request.r(i1635[6], i1635[7], 0, i1634, 'canvasTransform')
  request.r(i1635[8], i1635[9], 0, i1634, 'phaseNumberText')
  request.r(i1635[10], i1635[11], 0, i1634, 'orderNumberText')
  request.r(i1635[12], i1635[13], 0, i1634, 'rb')
  request.r(i1635[14], i1635[15], 0, i1634, 'animator')
  request.r(i1635[16], i1635[17], 0, i1634, 'bubbleVisualTransform')
  i1634.status = i1635[18]
  i1634.bubbleID = i1635[19]
  i1634.phaseNumber = i1635[20]
  i1634.orderNumber = i1635[21]
  var i1637 = i1635[22]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Bubble')))
  for(var i = 0; i < i1637.length; i += 2) {
  request.r(i1637[i + 0], i1637[i + 1], 1, i1636, '')
  }
  i1634.nearbyBubblesList = i1636
  i1634.isSetup = !!i1635[23]
  i1634.isSelected = !!i1635[24]
  i1634.canUpdateData = !!i1635[25]
  i1634.difuseColor = new pc.Color(i1635[26], i1635[27], i1635[28], i1635[29])
  i1634.color = new pc.Color(i1635[30], i1635[31], i1635[32], i1635[33])
  i1634.emissiveColor = new pc.Color(i1635[34], i1635[35], i1635[36], i1635[37])
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1641 = data
  i1640.mass = i1641[0]
  i1640.drag = i1641[1]
  i1640.angularDrag = i1641[2]
  i1640.useGravity = !!i1641[3]
  i1640.isKinematic = !!i1641[4]
  i1640.constraints = i1641[5]
  i1640.maxAngularVelocity = i1641[6]
  i1640.collisionDetectionMode = i1641[7]
  i1640.interpolation = i1641[8]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1643 = data
  i1642.center = new pc.Vec3( i1643[0], i1643[1], i1643[2] )
  i1642.size = new pc.Vec3( i1643[3], i1643[4], i1643[5] )
  i1642.enabled = !!i1643[6]
  i1642.isTrigger = !!i1643[7]
  request.r(i1643[8], i1643[9], 0, i1642, 'material')
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1645 = data
  request.r(i1645[0], i1645[1], 0, i1644, 'animatorController')
  request.r(i1645[2], i1645[3], 0, i1644, 'avatar')
  i1644.updateMode = i1645[4]
  i1644.hasTransformHierarchy = !!i1645[5]
  i1644.applyRootMotion = !!i1645[6]
  var i1647 = i1645[7]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 2, i1646, '')
  }
  i1644.humanBones = i1646
  i1644.enabled = !!i1645[8]
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1651 = data
  i1650.pivot = new pc.Vec2( i1651[0], i1651[1] )
  i1650.anchorMin = new pc.Vec2( i1651[2], i1651[3] )
  i1650.anchorMax = new pc.Vec2( i1651[4], i1651[5] )
  i1650.sizeDelta = new pc.Vec2( i1651[6], i1651[7] )
  i1650.anchoredPosition3D = new pc.Vec3( i1651[8], i1651[9], i1651[10] )
  i1650.rotation = new pc.Quat(i1651[11], i1651[12], i1651[13], i1651[14])
  i1650.scale = new pc.Vec3( i1651[15], i1651[16], i1651[17] )
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1653 = data
  i1652.enabled = !!i1653[0]
  i1652.planeDistance = i1653[1]
  i1652.referencePixelsPerUnit = i1653[2]
  i1652.isFallbackOverlay = !!i1653[3]
  i1652.renderMode = i1653[4]
  i1652.renderOrder = i1653[5]
  i1652.sortingLayerName = i1653[6]
  i1652.sortingOrder = i1653[7]
  i1652.scaleFactor = i1653[8]
  request.r(i1653[9], i1653[10], 0, i1652, 'worldCamera')
  i1652.overrideSorting = !!i1653[11]
  i1652.pixelPerfect = !!i1653[12]
  i1652.targetDisplay = i1653[13]
  i1652.overridePixelPerfect = !!i1653[14]
  return i1652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1655 = data
  i1654.m_UiScaleMode = i1655[0]
  i1654.m_ReferencePixelsPerUnit = i1655[1]
  i1654.m_ScaleFactor = i1655[2]
  i1654.m_ReferenceResolution = new pc.Vec2( i1655[3], i1655[4] )
  i1654.m_ScreenMatchMode = i1655[5]
  i1654.m_MatchWidthOrHeight = i1655[6]
  i1654.m_PhysicalUnit = i1655[7]
  i1654.m_FallbackScreenDPI = i1655[8]
  i1654.m_DefaultSpriteDPI = i1655[9]
  i1654.m_DynamicPixelsPerUnit = i1655[10]
  i1654.m_PresetInfoIsWorld = !!i1655[11]
  return i1654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1657 = data
  i1656.m_IgnoreReversedGraphics = !!i1657[0]
  i1656.m_BlockingObjects = i1657[1]
  i1656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1657[2] )
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1659 = data
  i1658.cullTransparentMesh = !!i1659[0]
  return i1658
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1660 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1661 = data
  i1660.m_hasFontAssetChanged = !!i1661[0]
  request.r(i1661[1], i1661[2], 0, i1660, 'm_baseMaterial')
  i1660.m_maskOffset = new pc.Vec4( i1661[3], i1661[4], i1661[5], i1661[6] )
  i1660.m_text = i1661[7]
  i1660.m_isRightToLeft = !!i1661[8]
  request.r(i1661[9], i1661[10], 0, i1660, 'm_fontAsset')
  request.r(i1661[11], i1661[12], 0, i1660, 'm_sharedMaterial')
  var i1663 = i1661[13]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 2) {
  request.r(i1663[i + 0], i1663[i + 1], 2, i1662, '')
  }
  i1660.m_fontSharedMaterials = i1662
  request.r(i1661[14], i1661[15], 0, i1660, 'm_fontMaterial')
  var i1665 = i1661[16]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 2) {
  request.r(i1665[i + 0], i1665[i + 1], 2, i1664, '')
  }
  i1660.m_fontMaterials = i1664
  i1660.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1661[17], i1661[18], i1661[19], i1661[20])
  i1660.m_fontColor = new pc.Color(i1661[21], i1661[22], i1661[23], i1661[24])
  i1660.m_enableVertexGradient = !!i1661[25]
  i1660.m_colorMode = i1661[26]
  i1660.m_fontColorGradient = request.d('TMPro.VertexGradient', i1661[27], i1660.m_fontColorGradient)
  request.r(i1661[28], i1661[29], 0, i1660, 'm_fontColorGradientPreset')
  request.r(i1661[30], i1661[31], 0, i1660, 'm_spriteAsset')
  i1660.m_tintAllSprites = !!i1661[32]
  request.r(i1661[33], i1661[34], 0, i1660, 'm_StyleSheet')
  i1660.m_TextStyleHashCode = i1661[35]
  i1660.m_overrideHtmlColors = !!i1661[36]
  i1660.m_faceColor = UnityEngine.Color32.ConstructColor(i1661[37], i1661[38], i1661[39], i1661[40])
  i1660.m_fontSize = i1661[41]
  i1660.m_fontSizeBase = i1661[42]
  i1660.m_fontWeight = i1661[43]
  i1660.m_enableAutoSizing = !!i1661[44]
  i1660.m_fontSizeMin = i1661[45]
  i1660.m_fontSizeMax = i1661[46]
  i1660.m_fontStyle = i1661[47]
  i1660.m_HorizontalAlignment = i1661[48]
  i1660.m_VerticalAlignment = i1661[49]
  i1660.m_textAlignment = i1661[50]
  i1660.m_characterSpacing = i1661[51]
  i1660.m_wordSpacing = i1661[52]
  i1660.m_lineSpacing = i1661[53]
  i1660.m_lineSpacingMax = i1661[54]
  i1660.m_paragraphSpacing = i1661[55]
  i1660.m_charWidthMaxAdj = i1661[56]
  i1660.m_enableWordWrapping = !!i1661[57]
  i1660.m_wordWrappingRatios = i1661[58]
  i1660.m_overflowMode = i1661[59]
  request.r(i1661[60], i1661[61], 0, i1660, 'm_linkedTextComponent')
  request.r(i1661[62], i1661[63], 0, i1660, 'parentLinkedComponent')
  i1660.m_enableKerning = !!i1661[64]
  i1660.m_enableExtraPadding = !!i1661[65]
  i1660.checkPaddingRequired = !!i1661[66]
  i1660.m_isRichText = !!i1661[67]
  i1660.m_parseCtrlCharacters = !!i1661[68]
  i1660.m_isOrthographic = !!i1661[69]
  i1660.m_isCullingEnabled = !!i1661[70]
  i1660.m_horizontalMapping = i1661[71]
  i1660.m_verticalMapping = i1661[72]
  i1660.m_uvLineOffset = i1661[73]
  i1660.m_geometrySortingOrder = i1661[74]
  i1660.m_IsTextObjectScaleStatic = !!i1661[75]
  i1660.m_VertexBufferAutoSizeReduction = !!i1661[76]
  i1660.m_useMaxVisibleDescender = !!i1661[77]
  i1660.m_pageToDisplay = i1661[78]
  i1660.m_margin = new pc.Vec4( i1661[79], i1661[80], i1661[81], i1661[82] )
  i1660.m_isUsingLegacyAnimationComponent = !!i1661[83]
  i1660.m_isVolumetricText = !!i1661[84]
  request.r(i1661[85], i1661[86], 0, i1660, 'm_Material')
  i1660.m_Maskable = !!i1661[87]
  i1660.m_Color = new pc.Color(i1661[88], i1661[89], i1661[90], i1661[91])
  i1660.m_RaycastTarget = !!i1661[92]
  i1660.m_RaycastPadding = new pc.Vec4( i1661[93], i1661[94], i1661[95], i1661[96] )
  return i1660
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.VertexGradient' )
  var i1667 = data
  i1666.topLeft = new pc.Color(i1667[0], i1667[1], i1667[2], i1667[3])
  i1666.topRight = new pc.Color(i1667[4], i1667[5], i1667[6], i1667[7])
  i1666.bottomLeft = new pc.Color(i1667[8], i1667[9], i1667[10], i1667[11])
  i1666.bottomRight = new pc.Color(i1667[12], i1667[13], i1667[14], i1667[15])
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1668 = root || new pc.UnityMaterial()
  var i1669 = data
  i1668.name = i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'shader')
  i1668.renderQueue = i1669[3]
  i1668.enableInstancing = !!i1669[4]
  var i1671 = i1669[5]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1671[i + 0]) );
  }
  i1668.floatParameters = i1670
  var i1673 = i1669[6]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1673[i + 0]) );
  }
  i1668.colorParameters = i1672
  var i1675 = i1669[7]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1675[i + 0]) );
  }
  i1668.vectorParameters = i1674
  var i1677 = i1669[8]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1677[i + 0]) );
  }
  i1668.textureParameters = i1676
  var i1679 = i1669[9]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1679[i + 0]) );
  }
  i1668.materialFlags = i1678
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.value = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = new pc.Color(i1687[1], i1687[2], i1687[3], i1687[4])
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.value = new pc.Vec4( i1691[1], i1691[2], i1691[3], i1691[4] )
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1695 = data
  i1694.name = i1695[0]
  request.r(i1695[1], i1695[2], 0, i1694, 'value')
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1699 = data
  i1698.name = i1699[0]
  i1698.enabled = !!i1699[1]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.width = i1701[1]
  i1700.height = i1701[2]
  i1700.mipmapCount = i1701[3]
  i1700.anisoLevel = i1701[4]
  i1700.filterMode = i1701[5]
  i1700.hdr = !!i1701[6]
  i1700.format = i1701[7]
  i1700.wrapMode = i1701[8]
  i1700.alphaIsTransparency = !!i1701[9]
  i1700.alphaSource = i1701[10]
  i1700.graphicsFormat = i1701[11]
  i1700.sRGBTexture = !!i1701[12]
  i1700.desiredColorSpace = i1701[13]
  i1700.wrapU = i1701[14]
  i1700.wrapV = i1701[15]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1703 = data
  i1702.name = i1703[0]
  i1702.halfPrecision = !!i1703[1]
  i1702.useUInt32IndexFormat = !!i1703[2]
  i1702.vertexCount = i1703[3]
  i1702.aabb = i1703[4]
  var i1705 = i1703[5]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( !!i1705[i + 0] );
  }
  i1702.streams = i1704
  i1702.vertices = i1703[6]
  var i1707 = i1703[7]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1707[i + 0]) );
  }
  i1702.subMeshes = i1706
  var i1709 = i1703[8]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 16) {
    i1708.push( new pc.Mat4().setData(i1709[i + 0], i1709[i + 1], i1709[i + 2], i1709[i + 3],  i1709[i + 4], i1709[i + 5], i1709[i + 6], i1709[i + 7],  i1709[i + 8], i1709[i + 9], i1709[i + 10], i1709[i + 11],  i1709[i + 12], i1709[i + 13], i1709[i + 14], i1709[i + 15]) );
  }
  i1702.bindposes = i1708
  var i1711 = i1703[9]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1711[i + 0]) );
  }
  i1702.blendShapes = i1710
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1717 = data
  i1716.triangles = i1717[0]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1723 = data
  i1722.name = i1723[0]
  var i1725 = i1723[1]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1725[i + 0]) );
  }
  i1722.frames = i1724
  return i1722
}

Deserializers["Level"] = function (request, data, root) {
  var i1726 = root || request.c( 'Level' )
  var i1727 = data
  i1726.conceptName = i1727[0]
  var i1729 = i1727[1]
  var i1728 = new (System.Collections.Generic.List$1(Bridge.ns('PhaseData')))
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.add(request.d('PhaseData', i1729[i + 0]));
  }
  i1726.phaseDataList = i1728
  i1726.bubbleAnimOffset = i1727[2]
  i1726.currentPhase = i1727[3]
  var i1731 = i1727[4]
  var i1730 = new (System.Collections.Generic.List$1(Bridge.ns('Bubble')))
  for(var i = 0; i < i1731.length; i += 2) {
  request.r(i1731[i + 0], i1731[i + 1], 1, i1730, '')
  }
  i1726.levelBubblesList = i1730
  request.r(i1727[5], i1727[6], 0, i1726, 'bubblesHolderTransform')
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.atlasId = i1733[1]
  i1732.mipmapCount = i1733[2]
  i1732.hdr = !!i1733[3]
  i1732.size = i1733[4]
  i1732.anisoLevel = i1733[5]
  i1732.filterMode = i1733[6]
  var i1735 = i1733[7]
  var i1734 = []
  for(var i = 0; i < i1735.length; i += 4) {
    i1734.push( UnityEngine.Rect.MinMaxRect(i1735[i + 0], i1735[i + 1], i1735[i + 2], i1735[i + 3]) );
  }
  i1732.rects = i1734
  i1732.wrapU = i1733[8]
  i1732.wrapV = i1733[9]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.index = i1739[1]
  i1738.startup = !!i1739[2]
  return i1738
}

Deserializers["Shoot"] = function (request, data, root) {
  var i1740 = root || request.c( 'Shoot' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'rb')
  i1740.projectileSpeed = i1741[2]
  request.r(i1741[3], i1741[4], 0, i1740, 'targetBubble')
  request.r(i1741[5], i1741[6], 0, i1740, 'camAnimator01')
  request.r(i1741[7], i1741[8], 0, i1740, 'camAnimator02')
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1743 = data
  i1742.enabled = !!i1743[0]
  i1742.aspect = i1743[1]
  i1742.orthographic = !!i1743[2]
  i1742.orthographicSize = i1743[3]
  i1742.backgroundColor = new pc.Color(i1743[4], i1743[5], i1743[6], i1743[7])
  i1742.nearClipPlane = i1743[8]
  i1742.farClipPlane = i1743[9]
  i1742.fieldOfView = i1743[10]
  i1742.depth = i1743[11]
  i1742.clearFlags = i1743[12]
  i1742.cullingMask = i1743[13]
  i1742.rect = i1743[14]
  request.r(i1743[15], i1743[16], 0, i1742, 'targetTexture')
  i1742.usePhysicalProperties = !!i1743[17]
  i1742.focalLength = i1743[18]
  i1742.sensorSize = new pc.Vec2( i1743[19], i1743[20] )
  i1742.lensShift = new pc.Vec2( i1743[21], i1743[22] )
  i1742.gateFit = i1743[23]
  i1742.commandBufferCount = i1743[24]
  i1742.cameraType = i1743[25]
  return i1742
}

Deserializers["UnityEngine.EventSystems.PhysicsRaycaster"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.EventSystems.PhysicsRaycaster' )
  var i1745 = data
  i1744.m_EventMask = UnityEngine.LayerMask.FromIntegerValue( i1745[0] )
  i1744.m_MaxRayIntersections = i1745[1]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1747 = data
  i1746.enabled = !!i1747[0]
  i1746.type = i1747[1]
  i1746.color = new pc.Color(i1747[2], i1747[3], i1747[4], i1747[5])
  i1746.cullingMask = i1747[6]
  i1746.intensity = i1747[7]
  i1746.range = i1747[8]
  i1746.spotAngle = i1747[9]
  i1746.shadows = i1747[10]
  i1746.shadowNormalBias = i1747[11]
  i1746.shadowBias = i1747[12]
  i1746.shadowStrength = i1747[13]
  i1746.shadowResolution = i1747[14]
  i1746.lightmapBakeType = i1747[15]
  i1746.renderMode = i1747[16]
  request.r(i1747[17], i1747[18], 0, i1746, 'cookie')
  i1746.cookieSize = i1747[19]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.isTrigger = !!i1749[1]
  request.r(i1749[2], i1749[3], 0, i1748, 'material')
  request.r(i1749[4], i1749[5], 0, i1748, 'sharedMesh')
  i1748.convex = !!i1749[6]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1751 = data
  i1750.ambientIntensity = i1751[0]
  i1750.reflectionIntensity = i1751[1]
  i1750.ambientMode = i1751[2]
  i1750.ambientLight = new pc.Color(i1751[3], i1751[4], i1751[5], i1751[6])
  i1750.ambientSkyColor = new pc.Color(i1751[7], i1751[8], i1751[9], i1751[10])
  i1750.ambientGroundColor = new pc.Color(i1751[11], i1751[12], i1751[13], i1751[14])
  i1750.ambientEquatorColor = new pc.Color(i1751[15], i1751[16], i1751[17], i1751[18])
  i1750.fogColor = new pc.Color(i1751[19], i1751[20], i1751[21], i1751[22])
  i1750.fogEndDistance = i1751[23]
  i1750.fogStartDistance = i1751[24]
  i1750.fogDensity = i1751[25]
  i1750.fog = !!i1751[26]
  request.r(i1751[27], i1751[28], 0, i1750, 'skybox')
  i1750.fogMode = i1751[29]
  var i1753 = i1751[30]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1753[i + 0]) );
  }
  i1750.lightmaps = i1752
  i1750.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1751[31], i1750.lightProbes)
  i1750.lightmapsMode = i1751[32]
  i1750.mixedBakeMode = i1751[33]
  i1750.environmentLightingMode = i1751[34]
  i1750.ambientProbe = new pc.SphericalHarmonicsL2(i1751[35])
  i1750.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1751[36])
  i1750.useReferenceAmbientProbe = !!i1751[37]
  request.r(i1751[38], i1751[39], 0, i1750, 'customReflection')
  request.r(i1751[40], i1751[41], 0, i1750, 'defaultReflection')
  i1750.defaultReflectionMode = i1751[42]
  i1750.defaultReflectionResolution = i1751[43]
  i1750.sunLightObjectId = i1751[44]
  i1750.pixelLightCount = i1751[45]
  i1750.defaultReflectionHDR = !!i1751[46]
  i1750.hasLightDataAsset = !!i1751[47]
  i1750.hasManualGenerate = !!i1751[48]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'lightmapColor')
  request.r(i1757[2], i1757[3], 0, i1756, 'lightmapDirection')
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1758 = root || new UnityEngine.LightProbes()
  var i1759 = data
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1767 = data
  var i1769 = i1767[0]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1769[i + 0]));
  }
  i1766.ShaderCompilationErrors = i1768
  i1766.name = i1767[1]
  i1766.guid = i1767[2]
  var i1771 = i1767[3]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( i1771[i + 0] );
  }
  i1766.shaderDefinedKeywords = i1770
  var i1773 = i1767[4]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1773[i + 0]) );
  }
  i1766.passes = i1772
  var i1775 = i1767[5]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1775[i + 0]) );
  }
  i1766.usePasses = i1774
  var i1777 = i1767[6]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1777[i + 0]) );
  }
  i1766.defaultParameterValues = i1776
  request.r(i1767[7], i1767[8], 0, i1766, 'unityFallbackShader')
  i1766.readDepth = !!i1767[9]
  i1766.isCreatedByShaderGraph = !!i1767[10]
  i1766.compiled = !!i1767[11]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1781 = data
  i1780.shaderName = i1781[0]
  i1780.errorMessage = i1781[1]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1786 = root || new pc.UnityShaderPass()
  var i1787 = data
  i1786.id = i1787[0]
  i1786.subShaderIndex = i1787[1]
  i1786.name = i1787[2]
  i1786.passType = i1787[3]
  i1786.grabPassTextureName = i1787[4]
  i1786.usePass = !!i1787[5]
  i1786.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[6], i1786.zTest)
  i1786.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[7], i1786.zWrite)
  i1786.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[8], i1786.culling)
  i1786.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1787[9], i1786.blending)
  i1786.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1787[10], i1786.alphaBlending)
  i1786.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[11], i1786.colorWriteMask)
  i1786.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[12], i1786.offsetUnits)
  i1786.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[13], i1786.offsetFactor)
  i1786.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[14], i1786.stencilRef)
  i1786.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[15], i1786.stencilReadMask)
  i1786.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1787[16], i1786.stencilWriteMask)
  i1786.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1787[17], i1786.stencilOp)
  i1786.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1787[18], i1786.stencilOpFront)
  i1786.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1787[19], i1786.stencilOpBack)
  var i1789 = i1787[20]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1789[i + 0]) );
  }
  i1786.tags = i1788
  var i1791 = i1787[21]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1786.passDefinedKeywords = i1790
  var i1793 = i1787[22]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1793[i + 0]) );
  }
  i1786.passDefinedKeywordGroups = i1792
  var i1795 = i1787[23]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 1) {
    i1794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1795[i + 0]) );
  }
  i1786.variants = i1794
  var i1797 = i1787[24]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1797[i + 0]) );
  }
  i1786.excludedVariants = i1796
  i1786.hasDepthReader = !!i1787[25]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1799 = data
  i1798.val = i1799[0]
  i1798.name = i1799[1]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1801 = data
  i1800.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[0], i1800.src)
  i1800.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[1], i1800.dst)
  i1800.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1801[2], i1800.op)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1803 = data
  i1802.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[0], i1802.pass)
  i1802.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[1], i1802.fail)
  i1802.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[2], i1802.zFail)
  i1802.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[3], i1802.comp)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1807 = data
  i1806.name = i1807[0]
  i1806.value = i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1811 = data
  var i1813 = i1811[0]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( i1813[i + 0] );
  }
  i1810.keywords = i1812
  i1810.hasDiscard = !!i1811[1]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1817 = data
  i1816.passId = i1817[0]
  i1816.subShaderIndex = i1817[1]
  var i1819 = i1817[2]
  var i1818 = []
  for(var i = 0; i < i1819.length; i += 1) {
    i1818.push( i1819[i + 0] );
  }
  i1816.keywords = i1818
  i1816.vertexProgram = i1817[3]
  i1816.fragmentProgram = i1817[4]
  i1816.exportedForWebGl2 = !!i1817[5]
  i1816.readDepth = !!i1817[6]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'shader')
  i1822.pass = i1823[2]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1827 = data
  i1826.name = i1827[0]
  i1826.type = i1827[1]
  i1826.value = new pc.Vec4( i1827[2], i1827[3], i1827[4], i1827[5] )
  i1826.textureValue = i1827[6]
  i1826.shaderPropertyFlag = i1827[7]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.wrapMode = i1829[1]
  i1828.isLooping = !!i1829[2]
  i1828.length = i1829[3]
  var i1831 = i1829[4]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1831[i + 0]) );
  }
  i1828.curves = i1830
  var i1833 = i1829[5]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1833[i + 0]) );
  }
  i1828.events = i1832
  i1828.halfPrecision = !!i1829[6]
  i1828._frameRate = i1829[7]
  i1828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1829[8], i1828.localBounds)
  i1828.hasMuscleCurves = !!i1829[9]
  var i1835 = i1829[10]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1828.clipMuscleConstant = i1834
  i1828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1829[11], i1828.clipBindingConstant)
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1839 = data
  i1838.path = i1839[0]
  i1838.hash = i1839[1]
  i1838.componentType = i1839[2]
  i1838.property = i1839[3]
  i1838.keys = i1839[4]
  var i1841 = i1839[5]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1841[i + 0]) );
  }
  i1838.objectReferenceKeys = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1845 = data
  i1844.time = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'value')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1849 = data
  i1848.functionName = i1849[0]
  i1848.floatParameter = i1849[1]
  i1848.intParameter = i1849[2]
  i1848.stringParameter = i1849[3]
  request.r(i1849[4], i1849[5], 0, i1848, 'objectReferenceParameter')
  i1848.time = i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1851 = data
  i1850.center = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.extends = new pc.Vec3( i1851[3], i1851[4], i1851[5] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1854.genericBindings = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1854.pptrCurveMapping = i1858
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1861 = data
  i1860.name = i1861[0]
  i1860.ascent = i1861[1]
  i1860.originalLineHeight = i1861[2]
  i1860.fontSize = i1861[3]
  var i1863 = i1861[4]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1863[i + 0]) );
  }
  i1860.characterInfo = i1862
  request.r(i1861[5], i1861[6], 0, i1860, 'texture')
  i1860.originalFontSize = i1861[7]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1867 = data
  i1866.index = i1867[0]
  i1866.advance = i1867[1]
  i1866.bearing = i1867[2]
  i1866.glyphWidth = i1867[3]
  i1866.glyphHeight = i1867[4]
  i1866.minX = i1867[5]
  i1866.maxX = i1867[6]
  i1866.minY = i1867[7]
  i1866.maxY = i1867[8]
  i1866.uvBottomLeftX = i1867[9]
  i1866.uvBottomLeftY = i1867[10]
  i1866.uvBottomRightX = i1867[11]
  i1866.uvBottomRightY = i1867[12]
  i1866.uvTopLeftX = i1867[13]
  i1866.uvTopLeftY = i1867[14]
  i1866.uvTopRightX = i1867[15]
  i1866.uvTopRightY = i1867[16]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1869 = data
  i1868.name = i1869[0]
  var i1871 = i1869[1]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1871[i + 0]) );
  }
  i1868.layers = i1870
  var i1873 = i1869[2]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1873[i + 0]) );
  }
  i1868.parameters = i1872
  i1868.animationClips = i1869[3]
  i1868.avatarUnsupported = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.defaultWeight = i1877[1]
  i1876.blendingMode = i1877[2]
  i1876.avatarMask = i1877[3]
  i1876.syncedLayerIndex = i1877[4]
  i1876.syncedLayerAffectsTiming = !!i1877[5]
  i1876.syncedLayers = i1877[6]
  i1876.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1877[7], i1876.stateMachine)
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1879 = data
  i1878.id = i1879[0]
  i1878.name = i1879[1]
  i1878.path = i1879[2]
  var i1881 = i1879[3]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1881[i + 0]) );
  }
  i1878.states = i1880
  var i1883 = i1879[4]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1883[i + 0]) );
  }
  i1878.machines = i1882
  var i1885 = i1879[5]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1885[i + 0]) );
  }
  i1878.entryStateTransitions = i1884
  var i1887 = i1879[6]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1887[i + 0]) );
  }
  i1878.exitStateTransitions = i1886
  var i1889 = i1879[7]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1889[i + 0]) );
  }
  i1878.anyStateTransitions = i1888
  i1878.defaultStateId = i1879[8]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1893 = data
  i1892.id = i1893[0]
  i1892.name = i1893[1]
  i1892.cycleOffset = i1893[2]
  i1892.cycleOffsetParameter = i1893[3]
  i1892.cycleOffsetParameterActive = !!i1893[4]
  i1892.mirror = !!i1893[5]
  i1892.mirrorParameter = i1893[6]
  i1892.mirrorParameterActive = !!i1893[7]
  i1892.motionId = i1893[8]
  i1892.nameHash = i1893[9]
  i1892.fullPathHash = i1893[10]
  i1892.speed = i1893[11]
  i1892.speedParameter = i1893[12]
  i1892.speedParameterActive = !!i1893[13]
  i1892.tag = i1893[14]
  i1892.tagHash = i1893[15]
  i1892.writeDefaultValues = !!i1893[16]
  var i1895 = i1893[17]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 2, i1894, '')
  }
  i1892.behaviours = i1894
  var i1897 = i1893[18]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1897[i + 0]) );
  }
  i1892.transitions = i1896
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1903 = data
  i1902.fullPath = i1903[0]
  i1902.canTransitionToSelf = !!i1903[1]
  i1902.duration = i1903[2]
  i1902.exitTime = i1903[3]
  i1902.hasExitTime = !!i1903[4]
  i1902.hasFixedDuration = !!i1903[5]
  i1902.interruptionSource = i1903[6]
  i1902.offset = i1903[7]
  i1902.orderedInterruption = !!i1903[8]
  i1902.destinationStateId = i1903[9]
  i1902.isExit = !!i1903[10]
  i1902.mute = !!i1903[11]
  i1902.solo = !!i1903[12]
  var i1905 = i1903[13]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1905[i + 0]) );
  }
  i1902.conditions = i1904
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1909 = data
  i1908.mode = i1909[0]
  i1908.parameter = i1909[1]
  i1908.threshold = i1909[2]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1915 = data
  i1914.destinationStateId = i1915[0]
  i1914.isExit = !!i1915[1]
  i1914.mute = !!i1915[2]
  i1914.solo = !!i1915[3]
  var i1917 = i1915[4]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1917[i + 0]) );
  }
  i1914.conditions = i1916
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1921 = data
  i1920.defaultBool = !!i1921[0]
  i1920.defaultFloat = i1921[1]
  i1920.defaultInt = i1921[2]
  i1920.name = i1921[3]
  i1920.nameHash = i1921[4]
  i1920.type = i1921[5]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1923 = data
  i1922.name = i1923[0]
  i1922.bytes64 = i1923[1]
  i1922.data = i1923[2]
  return i1922
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1924 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1925 = data
  i1924.hashCode = i1925[0]
  request.r(i1925[1], i1925[2], 0, i1924, 'material')
  i1924.materialHashCode = i1925[3]
  request.r(i1925[4], i1925[5], 0, i1924, 'atlas')
  i1924.normalStyle = i1925[6]
  i1924.normalSpacingOffset = i1925[7]
  i1924.boldStyle = i1925[8]
  i1924.boldSpacing = i1925[9]
  i1924.italicStyle = i1925[10]
  i1924.tabSize = i1925[11]
  i1924.m_Version = i1925[12]
  i1924.m_SourceFontFileGUID = i1925[13]
  request.r(i1925[14], i1925[15], 0, i1924, 'm_SourceFontFile_EditorRef')
  request.r(i1925[16], i1925[17], 0, i1924, 'm_SourceFontFile')
  i1924.m_AtlasPopulationMode = i1925[18]
  i1924.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1925[19], i1924.m_FaceInfo)
  var i1927 = i1925[20]
  var i1926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.add(request.d('UnityEngine.TextCore.Glyph', i1927[i + 0]));
  }
  i1924.m_GlyphTable = i1926
  var i1929 = i1925[21]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.add(request.d('TMPro.TMP_Character', i1929[i + 0]));
  }
  i1924.m_CharacterTable = i1928
  var i1931 = i1925[22]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1924.m_AtlasTextures = i1930
  i1924.m_AtlasTextureIndex = i1925[23]
  i1924.m_IsMultiAtlasTexturesEnabled = !!i1925[24]
  i1924.m_ClearDynamicDataOnBuild = !!i1925[25]
  var i1933 = i1925[26]
  var i1932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1933.length; i += 1) {
    i1932.add(request.d('UnityEngine.TextCore.GlyphRect', i1933[i + 0]));
  }
  i1924.m_UsedGlyphRects = i1932
  var i1935 = i1925[27]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.add(request.d('UnityEngine.TextCore.GlyphRect', i1935[i + 0]));
  }
  i1924.m_FreeGlyphRects = i1934
  i1924.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1925[28], i1924.m_fontInfo)
  i1924.m_AtlasWidth = i1925[29]
  i1924.m_AtlasHeight = i1925[30]
  i1924.m_AtlasPadding = i1925[31]
  i1924.m_AtlasRenderMode = i1925[32]
  var i1937 = i1925[33]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('TMPro.TMP_Glyph', i1937[i + 0]));
  }
  i1924.m_glyphInfoList = i1936
  i1924.m_KerningTable = request.d('TMPro.KerningTable', i1925[34], i1924.m_KerningTable)
  i1924.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1925[35], i1924.m_FontFeatureTable)
  var i1939 = i1925[36]
  var i1938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1939.length; i += 2) {
  request.r(i1939[i + 0], i1939[i + 1], 1, i1938, '')
  }
  i1924.fallbackFontAssets = i1938
  var i1941 = i1925[37]
  var i1940 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1941.length; i += 2) {
  request.r(i1941[i + 0], i1941[i + 1], 1, i1940, '')
  }
  i1924.m_FallbackFontAssetTable = i1940
  i1924.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1925[38], i1924.m_CreationSettings)
  var i1943 = i1925[39]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('TMPro.TMP_FontWeightPair', i1943[i + 0]) );
  }
  i1924.m_FontWeightTable = i1942
  var i1945 = i1925[40]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( request.d('TMPro.TMP_FontWeightPair', i1945[i + 0]) );
  }
  i1924.fontWeights = i1944
  return i1924
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1947 = data
  i1946.m_FaceIndex = i1947[0]
  i1946.m_FamilyName = i1947[1]
  i1946.m_StyleName = i1947[2]
  i1946.m_PointSize = i1947[3]
  i1946.m_Scale = i1947[4]
  i1946.m_UnitsPerEM = i1947[5]
  i1946.m_LineHeight = i1947[6]
  i1946.m_AscentLine = i1947[7]
  i1946.m_CapLine = i1947[8]
  i1946.m_MeanLine = i1947[9]
  i1946.m_Baseline = i1947[10]
  i1946.m_DescentLine = i1947[11]
  i1946.m_SuperscriptOffset = i1947[12]
  i1946.m_SuperscriptSize = i1947[13]
  i1946.m_SubscriptOffset = i1947[14]
  i1946.m_SubscriptSize = i1947[15]
  i1946.m_UnderlineOffset = i1947[16]
  i1946.m_UnderlineThickness = i1947[17]
  i1946.m_StrikethroughOffset = i1947[18]
  i1946.m_StrikethroughThickness = i1947[19]
  i1946.m_TabWidth = i1947[20]
  return i1946
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1951 = data
  i1950.m_Index = i1951[0]
  i1950.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1951[1], i1950.m_Metrics)
  i1950.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1951[2], i1950.m_GlyphRect)
  i1950.m_Scale = i1951[3]
  i1950.m_AtlasIndex = i1951[4]
  i1950.m_ClassDefinitionType = i1951[5]
  return i1950
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1953 = data
  i1952.m_Width = i1953[0]
  i1952.m_Height = i1953[1]
  i1952.m_HorizontalBearingX = i1953[2]
  i1952.m_HorizontalBearingY = i1953[3]
  i1952.m_HorizontalAdvance = i1953[4]
  return i1952
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1955 = data
  i1954.m_X = i1955[0]
  i1954.m_Y = i1955[1]
  i1954.m_Width = i1955[2]
  i1954.m_Height = i1955[3]
  return i1954
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1958 = root || request.c( 'TMPro.TMP_Character' )
  var i1959 = data
  i1958.m_ElementType = i1959[0]
  i1958.m_Unicode = i1959[1]
  i1958.m_GlyphIndex = i1959[2]
  i1958.m_Scale = i1959[3]
  return i1958
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1964 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1965 = data
  i1964.Name = i1965[0]
  i1964.PointSize = i1965[1]
  i1964.Scale = i1965[2]
  i1964.CharacterCount = i1965[3]
  i1964.LineHeight = i1965[4]
  i1964.Baseline = i1965[5]
  i1964.Ascender = i1965[6]
  i1964.CapHeight = i1965[7]
  i1964.Descender = i1965[8]
  i1964.CenterLine = i1965[9]
  i1964.SuperscriptOffset = i1965[10]
  i1964.SubscriptOffset = i1965[11]
  i1964.SubSize = i1965[12]
  i1964.Underline = i1965[13]
  i1964.UnderlineThickness = i1965[14]
  i1964.strikethrough = i1965[15]
  i1964.strikethroughThickness = i1965[16]
  i1964.TabWidth = i1965[17]
  i1964.Padding = i1965[18]
  i1964.AtlasWidth = i1965[19]
  i1964.AtlasHeight = i1965[20]
  return i1964
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1968 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1969 = data
  i1968.id = i1969[0]
  i1968.x = i1969[1]
  i1968.y = i1969[2]
  i1968.width = i1969[3]
  i1968.height = i1969[4]
  i1968.xOffset = i1969[5]
  i1968.yOffset = i1969[6]
  i1968.xAdvance = i1969[7]
  i1968.scale = i1969[8]
  return i1968
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1970 = root || request.c( 'TMPro.KerningTable' )
  var i1971 = data
  var i1973 = i1971[0]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.add(request.d('TMPro.KerningPair', i1973[i + 0]));
  }
  i1970.kerningPairs = i1972
  return i1970
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1976 = root || request.c( 'TMPro.KerningPair' )
  var i1977 = data
  i1976.xOffset = i1977[0]
  i1976.m_FirstGlyph = i1977[1]
  i1976.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1977[2], i1976.m_FirstGlyphAdjustments)
  i1976.m_SecondGlyph = i1977[3]
  i1976.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1977[4], i1976.m_SecondGlyphAdjustments)
  i1976.m_IgnoreSpacingAdjustments = !!i1977[5]
  return i1976
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1978 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1979 = data
  var i1981 = i1979[0]
  var i1980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1981[i + 0]));
  }
  i1978.m_GlyphPairAdjustmentRecords = i1980
  return i1978
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1984 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1985 = data
  i1984.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1985[0], i1984.m_FirstAdjustmentRecord)
  i1984.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1985[1], i1984.m_SecondAdjustmentRecord)
  i1984.m_FeatureLookupFlags = i1985[2]
  return i1984
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1986 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1987 = data
  i1986.m_GlyphIndex = i1987[0]
  i1986.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1987[1], i1986.m_GlyphValueRecord)
  return i1986
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1988 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1989 = data
  i1988.m_XPlacement = i1989[0]
  i1988.m_YPlacement = i1989[1]
  i1988.m_XAdvance = i1989[2]
  i1988.m_YAdvance = i1989[3]
  return i1988
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1992 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1993 = data
  i1992.sourceFontFileName = i1993[0]
  i1992.sourceFontFileGUID = i1993[1]
  i1992.pointSizeSamplingMode = i1993[2]
  i1992.pointSize = i1993[3]
  i1992.padding = i1993[4]
  i1992.packingMode = i1993[5]
  i1992.atlasWidth = i1993[6]
  i1992.atlasHeight = i1993[7]
  i1992.characterSetSelectionMode = i1993[8]
  i1992.characterSequence = i1993[9]
  i1992.referencedFontAssetGUID = i1993[10]
  i1992.referencedTextAssetGUID = i1993[11]
  i1992.fontStyle = i1993[12]
  i1992.fontStyleModifier = i1993[13]
  i1992.renderMode = i1993[14]
  i1992.includeFontFeatures = !!i1993[15]
  return i1992
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1996 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'regularTypeface')
  request.r(i1997[2], i1997[3], 0, i1996, 'italicTypeface')
  return i1996
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1998 = root || request.c( 'TMPro.TMP_Settings' )
  var i1999 = data
  i1998.m_enableWordWrapping = !!i1999[0]
  i1998.m_enableKerning = !!i1999[1]
  i1998.m_enableExtraPadding = !!i1999[2]
  i1998.m_enableTintAllSprites = !!i1999[3]
  i1998.m_enableParseEscapeCharacters = !!i1999[4]
  i1998.m_EnableRaycastTarget = !!i1999[5]
  i1998.m_GetFontFeaturesAtRuntime = !!i1999[6]
  i1998.m_missingGlyphCharacter = i1999[7]
  i1998.m_warningsDisabled = !!i1999[8]
  request.r(i1999[9], i1999[10], 0, i1998, 'm_defaultFontAsset')
  i1998.m_defaultFontAssetPath = i1999[11]
  i1998.m_defaultFontSize = i1999[12]
  i1998.m_defaultAutoSizeMinRatio = i1999[13]
  i1998.m_defaultAutoSizeMaxRatio = i1999[14]
  i1998.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1999[15], i1999[16] )
  i1998.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1999[17], i1999[18] )
  i1998.m_autoSizeTextContainer = !!i1999[19]
  i1998.m_IsTextObjectScaleStatic = !!i1999[20]
  var i2001 = i1999[21]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 1, i2000, '')
  }
  i1998.m_fallbackFontAssets = i2000
  i1998.m_matchMaterialPreset = !!i1999[22]
  request.r(i1999[23], i1999[24], 0, i1998, 'm_defaultSpriteAsset')
  i1998.m_defaultSpriteAssetPath = i1999[25]
  i1998.m_enableEmojiSupport = !!i1999[26]
  i1998.m_MissingCharacterSpriteUnicode = i1999[27]
  i1998.m_defaultColorGradientPresetsPath = i1999[28]
  request.r(i1999[29], i1999[30], 0, i1998, 'm_defaultStyleSheet')
  i1998.m_StyleSheetsResourcePath = i1999[31]
  request.r(i1999[32], i1999[33], 0, i1998, 'm_leadingCharacters')
  request.r(i1999[34], i1999[35], 0, i1998, 'm_followingCharacters')
  i1998.m_UseModernHangulLineBreakingRules = !!i1999[36]
  return i1998
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2002 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2003 = data
  i2002.hashCode = i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'material')
  i2002.materialHashCode = i2003[3]
  request.r(i2003[4], i2003[5], 0, i2002, 'spriteSheet')
  var i2005 = i2003[6]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.add(request.d('TMPro.TMP_Sprite', i2005[i + 0]));
  }
  i2002.spriteInfoList = i2004
  var i2007 = i2003[7]
  var i2006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2007.length; i += 2) {
  request.r(i2007[i + 0], i2007[i + 1], 1, i2006, '')
  }
  i2002.fallbackSpriteAssets = i2006
  i2002.m_Version = i2003[8]
  i2002.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2003[9], i2002.m_FaceInfo)
  var i2009 = i2003[10]
  var i2008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.add(request.d('TMPro.TMP_SpriteCharacter', i2009[i + 0]));
  }
  i2002.m_SpriteCharacterTable = i2008
  var i2011 = i2003[11]
  var i2010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.add(request.d('TMPro.TMP_SpriteGlyph', i2011[i + 0]));
  }
  i2002.m_SpriteGlyphTable = i2010
  return i2002
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2014 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2015 = data
  i2014.name = i2015[0]
  i2014.hashCode = i2015[1]
  i2014.unicode = i2015[2]
  i2014.pivot = new pc.Vec2( i2015[3], i2015[4] )
  request.r(i2015[5], i2015[6], 0, i2014, 'sprite')
  i2014.id = i2015[7]
  i2014.x = i2015[8]
  i2014.y = i2015[9]
  i2014.width = i2015[10]
  i2014.height = i2015[11]
  i2014.xOffset = i2015[12]
  i2014.yOffset = i2015[13]
  i2014.xAdvance = i2015[14]
  i2014.scale = i2015[15]
  return i2014
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2020 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2021 = data
  i2020.m_Name = i2021[0]
  i2020.m_HashCode = i2021[1]
  i2020.m_ElementType = i2021[2]
  i2020.m_Unicode = i2021[3]
  i2020.m_GlyphIndex = i2021[4]
  i2020.m_Scale = i2021[5]
  return i2020
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2024 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2025 = data
  request.r(i2025[0], i2025[1], 0, i2024, 'sprite')
  i2024.m_Index = i2025[2]
  i2024.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2025[3], i2024.m_Metrics)
  i2024.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2025[4], i2024.m_GlyphRect)
  i2024.m_Scale = i2025[5]
  i2024.m_AtlasIndex = i2025[6]
  i2024.m_ClassDefinitionType = i2025[7]
  return i2024
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2026 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2027 = data
  var i2029 = i2027[0]
  var i2028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.add(request.d('TMPro.TMP_Style', i2029[i + 0]));
  }
  i2026.m_StyleList = i2028
  return i2026
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2032 = root || request.c( 'TMPro.TMP_Style' )
  var i2033 = data
  i2032.m_Name = i2033[0]
  i2032.m_HashCode = i2033[1]
  i2032.m_OpeningDefinition = i2033[2]
  i2032.m_ClosingDefinition = i2033[3]
  i2032.m_OpeningTagArray = i2033[4]
  i2032.m_ClosingTagArray = i2033[5]
  i2032.m_OpeningTagUnicodeArray = i2033[6]
  i2032.m_ClosingTagUnicodeArray = i2033[7]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2035 = data
  var i2037 = i2035[0]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2037[i + 0]) );
  }
  i2034.files = i2036
  i2034.componentToPrefabIds = i2035[1]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2041 = data
  i2040.path = i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'unityObject')
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2045[i + 0]) );
  }
  i2042.scriptsExecutionOrder = i2044
  var i2047 = i2043[1]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2047[i + 0]) );
  }
  i2042.sortingLayers = i2046
  var i2049 = i2043[2]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2049[i + 0]) );
  }
  i2042.cullingLayers = i2048
  i2042.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2043[3], i2042.timeSettings)
  i2042.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2043[4], i2042.physicsSettings)
  i2042.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2043[5], i2042.physics2DSettings)
  i2042.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2043[6], i2042.qualitySettings)
  i2042.enableRealtimeShadows = !!i2043[7]
  i2042.enableAutoInstancing = !!i2043[8]
  i2042.enableDynamicBatching = !!i2043[9]
  i2042.lightmapEncodingQuality = i2043[10]
  i2042.desiredColorSpace = i2043[11]
  var i2051 = i2043[12]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( i2051[i + 0] );
  }
  i2042.allTags = i2050
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.value = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.name = i2059[1]
  i2058.value = i2059[2]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2063 = data
  i2062.id = i2063[0]
  i2062.name = i2063[1]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2065 = data
  i2064.fixedDeltaTime = i2065[0]
  i2064.maximumDeltaTime = i2065[1]
  i2064.timeScale = i2065[2]
  i2064.maximumParticleTimestep = i2065[3]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2067 = data
  i2066.gravity = new pc.Vec3( i2067[0], i2067[1], i2067[2] )
  i2066.defaultSolverIterations = i2067[3]
  i2066.bounceThreshold = i2067[4]
  i2066.autoSyncTransforms = !!i2067[5]
  i2066.autoSimulation = !!i2067[6]
  var i2069 = i2067[7]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2069[i + 0]) );
  }
  i2066.collisionMatrix = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.layerId = i2073[1]
  i2072.otherLayerId = i2073[2]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2075 = data
  request.r(i2075[0], i2075[1], 0, i2074, 'material')
  i2074.gravity = new pc.Vec2( i2075[2], i2075[3] )
  i2074.positionIterations = i2075[4]
  i2074.velocityIterations = i2075[5]
  i2074.velocityThreshold = i2075[6]
  i2074.maxLinearCorrection = i2075[7]
  i2074.maxAngularCorrection = i2075[8]
  i2074.maxTranslationSpeed = i2075[9]
  i2074.maxRotationSpeed = i2075[10]
  i2074.baumgarteScale = i2075[11]
  i2074.baumgarteTOIScale = i2075[12]
  i2074.timeToSleep = i2075[13]
  i2074.linearSleepTolerance = i2075[14]
  i2074.angularSleepTolerance = i2075[15]
  i2074.defaultContactOffset = i2075[16]
  i2074.autoSimulation = !!i2075[17]
  i2074.queriesHitTriggers = !!i2075[18]
  i2074.queriesStartInColliders = !!i2075[19]
  i2074.callbacksOnDisable = !!i2075[20]
  i2074.reuseCollisionCallbacks = !!i2075[21]
  i2074.autoSyncTransforms = !!i2075[22]
  var i2077 = i2075[23]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2077[i + 0]) );
  }
  i2074.collisionMatrix = i2076
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.layerId = i2081[1]
  i2080.otherLayerId = i2081[2]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2083 = data
  var i2085 = i2083[0]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2085[i + 0]) );
  }
  i2082.qualityLevels = i2084
  var i2087 = i2083[1]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( i2087[i + 0] );
  }
  i2082.names = i2086
  i2082.shadows = i2083[2]
  i2082.anisotropicFiltering = i2083[3]
  i2082.antiAliasing = i2083[4]
  i2082.lodBias = i2083[5]
  i2082.shadowCascades = i2083[6]
  i2082.shadowDistance = i2083[7]
  i2082.shadowmaskMode = i2083[8]
  i2082.shadowProjection = i2083[9]
  i2082.shadowResolution = i2083[10]
  i2082.softParticles = !!i2083[11]
  i2082.softVegetation = !!i2083[12]
  i2082.activeColorSpace = i2083[13]
  i2082.desiredColorSpace = i2083[14]
  i2082.masterTextureLimit = i2083[15]
  i2082.maxQueuedFrames = i2083[16]
  i2082.particleRaycastBudget = i2083[17]
  i2082.pixelLightCount = i2083[18]
  i2082.realtimeReflectionProbes = !!i2083[19]
  i2082.shadowCascade2Split = i2083[20]
  i2082.shadowCascade4Split = new pc.Vec3( i2083[21], i2083[22], i2083[23] )
  i2082.streamingMipmapsActive = !!i2083[24]
  i2082.vSyncCount = i2083[25]
  i2082.asyncUploadBufferSize = i2083[26]
  i2082.asyncUploadTimeSlice = i2083[27]
  i2082.billboardsFaceCameraPosition = !!i2083[28]
  i2082.shadowNearPlaneOffset = i2083[29]
  i2082.streamingMipmapsMemoryBudget = i2083[30]
  i2082.maximumLODLevel = i2083[31]
  i2082.streamingMipmapsAddAllCameras = !!i2083[32]
  i2082.streamingMipmapsMaxLevelReduction = i2083[33]
  i2082.streamingMipmapsRenderersPerFrame = i2083[34]
  i2082.resolutionScalingFixedDPIFactor = i2083[35]
  i2082.streamingMipmapsMaxFileIORequests = i2083[36]
  i2082.currentQualityLevel = i2083[37]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2093 = data
  i2092.weight = i2093[0]
  i2092.vertices = i2093[1]
  i2092.normals = i2093[2]
  i2092.tangents = i2093[3]
  return i2092
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2094 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2095 = data
  i2094.xPlacement = i2095[0]
  i2094.yPlacement = i2095[1]
  i2094.xAdvance = i2095[2]
  i2094.yAdvance = i2095[3]
  return i2094
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[46],"47":[28],"48":[15],"49":[15],"50":[15],"51":[15],"52":[15],"53":[15],"54":[15],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[28],"70":[9],"71":[72],"73":[72],"18":[13],"74":[13],"75":[13],"21":[18],"76":[22,13],"77":[13],"20":[18],"78":[13],"79":[13],"80":[13],"81":[13],"82":[13],"83":[13],"84":[13],"85":[13],"86":[13],"87":[22,13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[22,13],"93":[13],"94":[95],"96":[95],"97":[95],"98":[95],"99":[28],"29":[28],"100":[13],"101":[9,13],"14":[13,22],"102":[13],"103":[22,13],"104":[9],"105":[22,13],"106":[13],"107":[108],"109":[108],"110":[108]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","ChainEventsManager","LevelManager","BubbleManager","UnityEngine.Material","GameInputManager","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SphereCollider","Bubble","UnityEngine.BoxCollider","UnityEngine.RectTransform","TMPro.TextMeshProUGUI","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Shader","UnityEngine.Texture2D","Level","Shoot","UnityEngine.Camera","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Light","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.55f1";

Deserializers.productName = "BOBubble-PA";

Deserializers.lunaInitializationTime = "02/24/2025 10:47:31";

Deserializers.lunaDaysRunning = "5.2";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25859";

Deserializers.projectId = "34b6dbb1ad138e640b05a6400617fa52";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1811";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3988";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.BOBubble-PA";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "f16a5d52-4151-4daf-8509-19d264c450f4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Sirenix","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","Utilities","UnityVersion","EnsureLoaded"],["Sirenix","Serialization","UnitySerializationInitializer","InitializeRuntime"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

