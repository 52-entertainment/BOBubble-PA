if ( TRACE ) { TRACE( JSON.parse( '["AnimationHandler#init","AnimationHandler#SetBubbleTriggeredState","AnimationHandler#SetCamActiveState","Bubble#_status#get","Bubble#_bubbleID#get","Bubble#_phaseNumber#get","Bubble#_orderNumber#get","Bubble#_material#get","Bubble#_bubbleVisualTransform#get","Bubble#_nearbyBubblesList#get","Bubble#init","Bubble#Start","Bubble#OnEnable","Bubble#BubbleSetup","Bubble#BubbleIsSetup","Bubble#UpdatePhaseNumber","Bubble#UpdateOrderNumber","Bubble#DestroyBubble","Bubble#DestroyBubble$1","Bubble#AddToNearbyBubblesList","Bubble#ResetNearbyBubblesList","Bubble#TriggerBubbleAnimation","Bubble#StartAnimationTimer","Bubble#ActivateGravity","Bubble#TriggerBubble","Bubble#OnMouseDown","Bubble#OnMouseUp","Bubble#OnPointerDown","Bubble#OnPointerUp","Bubble#OnPointerEnter","Bubble#OnPointerExit","BubbleManager#_layerMask#get","BubbleManager#_bubblePrefab#get","BubbleManager#_selectedBubble#get","BubbleManager#_bubbleTypeList#get","BubbleManager#init","BubbleManager#Awake","BubbleManager#OnEnable","BubbleManager#TriggerBubbleChainReaction","BubbleManager#UpdateAllNearbyBubblesLists","BubbleManager#SetSelectedBubble","BubbleType#init","BubbleType#IsID","ChainEventsManager#OnEnable","ChainEventsManager#OnDisable","ChainEventsManager#Start","ChainEventsManager#GameEventsManager_OnBubbleSelected","ChainEventsManager#TriggerChainEvents","ChainEventsManager#EndOfChainEvents","ChainEventsManager#CalculateTotalChainEventsDelay","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","EpicToonFX.ETFXButtonScript#Start","EpicToonFX.ETFXButtonScript#Update","EpicToonFX.ETFXButtonScript#getProjectileNames","EpicToonFX.ETFXButtonScript#overButton","EpicToonFX.ETFXFireProjectile#init","EpicToonFX.ETFXFireProjectile#Start","EpicToonFX.ETFXFireProjectile#Update","EpicToonFX.ETFXFireProjectile#nextEffect","EpicToonFX.ETFXFireProjectile#previousEffect","EpicToonFX.ETFXFireProjectile#AdjustSpeed","EpicToonFX.ETFXLightFade#init","EpicToonFX.ETFXLightFade#Start","EpicToonFX.ETFXLightFade#Update","EpicToonFX.ETFXLoopScript#init","EpicToonFX.ETFXLoopScript#Start","EpicToonFX.ETFXLoopScript#PlayEffect","EpicToonFX.ETFXLoopScript#EffectLoop","EpicToonFX.ETFXMouseOrbit#ClampAngle","EpicToonFX.ETFXMouseOrbit#init","EpicToonFX.ETFXMouseOrbit#Start","EpicToonFX.ETFXMouseOrbit#LateUpdate","EpicToonFX.ETFXPitchRandomizer#init","EpicToonFX.ETFXPitchRandomizer#Start","EpicToonFX.ETFXRotation#init","EpicToonFX.ETFXRotation#Start","EpicToonFX.ETFXRotation#Update","ETFXProjectileScript#init","ETFXProjectileScript#Start","ETFXProjectileScript#OnCollisionEnter","ETFXSceneManager#init","ETFXSceneManager#LoadScene1","ETFXSceneManager#LoadScene2","ETFXSceneManager#LoadScene3","ETFXSceneManager#LoadScene4","ETFXSceneManager#LoadScene5","ETFXSceneManager#LoadScene6","ETFXSceneManager#LoadScene7","ETFXSceneManager#LoadScene8","ETFXSceneManager#LoadScene9","ETFXSceneManager#LoadScene10","ETFXSceneManager#LoadScene11","ETFXSceneManager#LoadScene12","ETFXSceneManager#LoadScene13","ETFXSceneManager#Update","FunctionTimer#InitIfNeeded","FunctionTimer#Create","FunctionTimer#RemoveTimer","FunctionTimer#StopTimer","FunctionTimer#ctor","FunctionTimer#Update","FunctionTimer#DestroySelf","FunctionTimer.MonoBehaviourHook#Update","GameEventsManager#TriggerEvent","GameEventsManager#GetComponentFromEvent","GameInputManager#Awake","GameInputManager#Update","GameSceneManager#init","GameSceneManager#IsLevelCreatorScene","Level#_currentPhase#get","Level#_phaseDataList#get","Level#_levelBubblesList#get","Level#_bubblesHolderTransform#get","Level#_conceptName#get","Level#_bubbleAnimOffset#get","Level#AddToLevelBubblesList","Level#RemoveBubblesFromLevel","Level#SetupBubbles","Level#SetAsActiveLevel","Level#UpdatePhase","LevelManager#_activeLevel#get","LevelManager#Awake","LevelManager#SetActiveLevel","LevelSelector#SetActive","PA.Timer#CreateTimer","PA.TimerMonobehaviour#ctor","PA.TimerMonobehaviour#Update","PA.Utils#IsRayHittingFromMousePosition","PA.Utils#IsRayHittingFromMousePosition$1","PA.Utils#GetRayHitFromMouse","PA.Utils#GetRayHitFromMouse$1","PA.Utils#GetDetectedAllObjectsList","PA.Utils#ArrangeObjectsWithOffsetHorizontal$1","PA.Utils#ArrangeObjectsWithOffsetHorizontal","PA.Utils#ArrangeObjectsWithSpacing","PA.Utils#SetAxis","PA.Utils#CalculateTotalWidth","PA.Utils#GetObjectWidth","PA.Utils#CalculateXPositionsFromList","PA.Utils#CalculateYPositionsFromList","PA.Utils#GetMouseScreenPosition","PA.Utils#GetMouseWorldPosition","PA.Utils#GetMouseWorldPosition$1","PA.Utils#GetMouseWorldPositionWithZ","PA.Utils#GetMouseWorldPositionWithZ$1","PA.Utils#GetMouseWorldPositionWithZ$2","ParticleEffectsLibrary#init","ParticleEffectsLibrary#Awake","ParticleEffectsLibrary#Start","ParticleEffectsLibrary#GetCurrentPENameString","ParticleEffectsLibrary#PreviousParticleEffect","ParticleEffectsLibrary#NextParticleEffect","ParticleEffectsLibrary#SpawnParticleEffect","PEButtonScript#init","PEButtonScript#Start","PEButtonScript#OnPointerEnter","PEButtonScript#OnPointerExit","PEButtonScript#OnButtonClicked","PEDestoryTimed#Start","PEDestoryTimed#Update","Shoot#init","Shoot#Update","Shoot#OnTriggerEnter","UICanvasManager#init","UICanvasManager#Awake","UICanvasManager#Start","UICanvasManager#Update","UICanvasManager#UpdateToolTip","UICanvasManager#ClearToolTip","UICanvasManager#SelectPreviousPE","UICanvasManager#SelectNextPE","UICanvasManager#SpawnCurrentParticleEffect","UICanvasManager#UIButtonClick","UIManager#OnEnable"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AnimationHandler start.*/
    Bridge.define("AnimationHandler", {
        statics: {
            fields: {
                IS_TRIGGERED: null,
                IS_CAM_ACTIVE: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "AnimationHandler#init", this ); }

                    this.IS_TRIGGERED = "isTriggered";
                    this.IS_CAM_ACTIVE = "isCamActive";
                }
            },
            methods: {
                /*AnimationHandler.SetBubbleTriggeredState:static start.*/
                SetBubbleTriggeredState: function (animator, toggle) {
if ( TRACE ) { TRACE( "AnimationHandler#SetBubbleTriggeredState", this ); }

                    if (toggle) {
                        animator.SetBool$1("isTriggered", true);
                    } else {
                        animator.SetBool$1("isTriggered", false);
                    }
                },
                /*AnimationHandler.SetBubbleTriggeredState:static end.*/

                /*AnimationHandler.SetCamActiveState:static start.*/
                SetCamActiveState: function (animator, toggle) {
if ( TRACE ) { TRACE( "AnimationHandler#SetCamActiveState", this ); }

                    if (toggle) {
                        animator.SetBool$1("isCamActive", true);
                    } else {
                        animator.SetBool$1("isCamActive", false);
                    }
                },
                /*AnimationHandler.SetCamActiveState:static end.*/


            }
        }
    });
    /*AnimationHandler end.*/

    /*Bubble start.*/
    Bridge.define("Bubble", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IPointerUpHandler,UnityEngine.EventSystems.IPointerEnterHandler,UnityEngine.EventSystems.IPointerExitHandler],
        fields: {
            boxCollider: null,
            rendererBubble: null,
            material: null,
            canvasTransform: null,
            phaseNumberText: null,
            orderNumberText: null,
            rb: null,
            animator: null,
            bubbleVisualTransform: null,
            status: 0,
            bubbleID: 0,
            phaseNumber: 0,
            orderNumber: 0,
            nearbyBubblesList: null,
            isSetup: false,
            isSelected: false,
            canUpdateData: false,
            difuseColor: null,
            color: null,
            emissiveColor: null,
            selectedCheck: 0
        },
        props: {
            _status: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_status#get", this ); }

                    return this.status;
                }
            },
            _bubbleID: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_bubbleID#get", this ); }

                    return this.bubbleID;
                }
            },
            _phaseNumber: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_phaseNumber#get", this ); }

                    return this.phaseNumber;
                }
            },
            _orderNumber: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_orderNumber#get", this ); }

                    return this.orderNumber;
                }
            },
            _material: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_material#get", this ); }

                    return this.material;
                }
            },
            _bubbleVisualTransform: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_bubbleVisualTransform#get", this ); }

                    return this.bubbleVisualTransform;
                }
            },
            _nearbyBubblesList: {
                get: function () {
if ( TRACE ) { TRACE( "Bubble#_nearbyBubblesList#get", this ); }

                    return this.nearbyBubblesList;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp",
            "OnPointerEnter", "UnityEngine$EventSystems$IPointerEnterHandler$OnPointerEnter",
            "OnPointerExit", "UnityEngine$EventSystems$IPointerExitHandler$OnPointerExit"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Bubble#init", this ); }

                this.difuseColor = new UnityEngine.Color();
                this.color = new UnityEngine.Color();
                this.emissiveColor = new UnityEngine.Color();
                this.selectedCheck = 0;
            }
        },
        methods: {
            /*Bubble.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Bubble#Start", this ); }

                if (!GameSceneManager.IsLevelCreatorScene()) {
                    this.canvasTransform.gameObject.SetActive(false);
                }
            },
            /*Bubble.Start end.*/

            /*Bubble.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "Bubble#OnEnable", this ); }

                GameEventsManager.addOnNextPhase(Bridge.fn.bind(this, function () {
                    AnimationHandler.SetBubbleTriggeredState(this.animator, false);
                }));
            },
            /*Bubble.OnEnable end.*/

            /*Bubble.BubbleSetup start.*/
            BubbleSetup: function (id, color, material, phaseNumber, orderNumber) {
if ( TRACE ) { TRACE( "Bubble#BubbleSetup", this ); }

                this.status = Bubble.Status.Spawned;
                this.isSetup = false;
                this.isSelected = false;
                this.canUpdateData = false;
                this.bubbleID = id;
                this.phaseNumber = phaseNumber;
                this.orderNumber = orderNumber;
                this.material = material;
                this.rendererBubble.material = this.material;
                this.rendererBubble.material.SetColor$1("_Color", color);
                this.rendererBubble.material.SetColor$1("_EmissionColor", color);
                this.difuseColor = color.$clone();
                this.emissiveColor = color.$clone();
                this.AddToNearbyBubblesList();
                if (GameSceneManager.IsLevelCreatorScene()) {
                    this.UpdatePhaseNumber(phaseNumber);
                    this.UpdateOrderNumber(orderNumber);
                } else {
                    this.canvasTransform.gameObject.SetActive(false);
                }
                this.StartCoroutine$1(this.BubbleIsSetup());
            },
            /*Bubble.BubbleSetup end.*/

            /*Bubble.BubbleIsSetup start.*/
            BubbleIsSetup: function () {
if ( TRACE ) { TRACE( "Bubble#BubbleIsSetup", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.isSetup = true;
                                        this.status = Bubble.Status.Setup;
                                        GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSpawned);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Bubble.BubbleIsSetup end.*/

            /*Bubble.UpdatePhaseNumber start.*/
            UpdatePhaseNumber: function (_phaseNumber) {
if ( TRACE ) { TRACE( "Bubble#UpdatePhaseNumber", this ); }

                if (!this.isSetup || this.canUpdateData) {
                    this.phaseNumberText.text = Bridge.toString(_phaseNumber);
                    this.phaseNumber = _phaseNumber;
                }
            },
            /*Bubble.UpdatePhaseNumber end.*/

            /*Bubble.UpdateOrderNumber start.*/
            UpdateOrderNumber: function (_orderNumber) {
if ( TRACE ) { TRACE( "Bubble#UpdateOrderNumber", this ); }

                if (!this.isSetup || this.canUpdateData) {
                    this.orderNumberText.text = Bridge.toString(_orderNumber);
                    this.orderNumber = _orderNumber;
                }
            },
            /*Bubble.UpdateOrderNumber end.*/

            /*Bubble.DestroyBubble start.*/
            DestroyBubble: function () {
if ( TRACE ) { TRACE( "Bubble#DestroyBubble", this ); }

                UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
            },
            /*Bubble.DestroyBubble end.*/

            /*Bubble.DestroyBubble$1 start.*/
            DestroyBubble$1: function (delay) {
if ( TRACE ) { TRACE( "Bubble#DestroyBubble$1", this ); }

                FunctionTimer.Create(Bridge.fn.bind(this, function () {
                    LevelManager.Instance._activeLevel.RemoveBubblesFromLevel(this);
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }), delay);
            },
            /*Bubble.DestroyBubble$1 end.*/

            /*Bubble.AddToNearbyBubblesList start.*/
            AddToNearbyBubblesList: function () {
if ( TRACE ) { TRACE( "Bubble#AddToNearbyBubblesList", this ); }

                var $t;
                if (!(UnityEngine.MonoBehaviour.op_Inequality(this, null))) {
                    return;
                }
                var colliders = UnityEngine.Physics.OverlapBox$1(this.transform.position, this.boxCollider.size.$clone().scale( 1.0 / ( 2.0 ) ), pc.Quat.IDENTITY.clone(), UnityEngine.LayerMask.op_Implicit(BubbleManager.Instance._layerMask.$clone()));
                var array = colliders;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var collider = $t.Current;
                        if (UnityEngine.MonoBehaviour.op_Inequality(collider.GetComponent(Bubble), null)) {
                            var _bubble = collider.GetComponent(Bubble);
                            if (UnityEngine.MonoBehaviour.op_Inequality(_bubble, this) && _bubble._bubbleID === this.bubbleID) {
                                this.nearbyBubblesList.add(collider.GetComponent(Bubble));
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Bubble.AddToNearbyBubblesList end.*/

            /*Bubble.ResetNearbyBubblesList start.*/
            ResetNearbyBubblesList: function () {
if ( TRACE ) { TRACE( "Bubble#ResetNearbyBubblesList", this ); }

                this.nearbyBubblesList.clear();
                this.AddToNearbyBubblesList();
            },
            /*Bubble.ResetNearbyBubblesList end.*/

            /*Bubble.TriggerBubbleAnimation start.*/
            TriggerBubbleAnimation: function (delay) {
if ( TRACE ) { TRACE( "Bubble#TriggerBubbleAnimation", this ); }

                this.StartCoroutine$1(this.StartAnimationTimer(delay));
            },
            /*Bubble.TriggerBubbleAnimation end.*/

            /*Bubble.StartAnimationTimer start.*/
            StartAnimationTimer: function (delay) {
if ( TRACE ) { TRACE( "Bubble#StartAnimationTimer", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(delay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    AnimationHandler.SetBubbleTriggeredState(this.animator, true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Bubble.StartAnimationTimer end.*/

            /*Bubble.ActivateGravity start.*/
            ActivateGravity: function () {
if ( TRACE ) { TRACE( "Bubble#ActivateGravity", this ); }

                this.rb.useGravity = true;
                this.rb.isKinematic = false;
            },
            /*Bubble.ActivateGravity end.*/

            /*Bubble.TriggerBubble start.*/
            TriggerBubble: function () {
if ( TRACE ) { TRACE( "Bubble#TriggerBubble", this ); }

                this.isSelected = true;
                this.status = Bubble.Status.Selected;
                BubbleManager.Instance.SetSelectedBubble(this);
                GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
            },
            /*Bubble.TriggerBubble end.*/

            /*Bubble.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "Bubble#OnMouseDown", this ); }

                if (!GameSceneManager.IsLevelCreatorScene()) {
                    UnityEngine.Debug.Log$1("selected");
                    this.isSelected = true;
                    this.status = Bubble.Status.Selected;
                    BubbleManager.Instance.SetSelectedBubble(this);
                    GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
                }
            },
            /*Bubble.OnMouseDown end.*/

            /*Bubble.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "Bubble#OnMouseUp", this ); }

                if (!GameSceneManager.IsLevelCreatorScene()) {
                    this.isSelected = false;
                }
            },
            /*Bubble.OnMouseUp end.*/

            /*Bubble.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Bubble#OnPointerDown", this ); }

                if (this.isSetup || this.status === Bubble.Status.Setup) {
                    this.isSelected = true;
                    this.status = Bubble.Status.Selected;
                    BubbleManager.Instance.SetSelectedBubble(this);
                    GameEventsManager.TriggerEvent(this, GameEventType.OnBubbleSelected);
                }
            },
            /*Bubble.OnPointerDown end.*/

            /*Bubble.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Bubble#OnPointerUp", this ); }

                this.isSelected = false;
            },
            /*Bubble.OnPointerUp end.*/

            /*Bubble.OnPointerEnter start.*/
            OnPointerEnter: function (eventData) {
if ( TRACE ) { TRACE( "Bubble#OnPointerEnter", this ); }

                if (GameSceneManager.IsLevelCreatorScene()) {
                    this.canUpdateData = true;
                }
            },
            /*Bubble.OnPointerEnter end.*/

            /*Bubble.OnPointerExit start.*/
            OnPointerExit: function (eventData) {
if ( TRACE ) { TRACE( "Bubble#OnPointerExit", this ); }

                if (GameSceneManager.IsLevelCreatorScene()) {
                    this.canUpdateData = false;
                }
            },
            /*Bubble.OnPointerExit end.*/


        },
        overloads: {
            "DestroyBubble(float)": "DestroyBubble$1"
        }
    });
    /*Bubble end.*/

    /*Bubble+Status start.*/
    Bridge.define("Bubble.Status", {
        $kind: 1006,
        statics: {
            fields: {
                Spawned: 0,
                Setup: 1,
                Selected: 2,
                Idle: 3
            }
        }
    });
    /*Bubble+Status end.*/

    /*BubbleID start.*/
    Bridge.define("BubbleID", {
        $kind: 6,
        statics: {
            fields: {
                darkBlue: 0,
                lightBlue: 1,
                red: 2,
                yellow: 3,
                pink: 4,
                green: 5
            }
        }
    });
    /*BubbleID end.*/

    /*BubbleManager start.*/
    Bridge.define("BubbleManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            layerMask: null,
            bubblePrefab: null,
            bubbleTypeList: null,
            selectedBubble: null
        },
        props: {
            _layerMask: {
                get: function () {
if ( TRACE ) { TRACE( "BubbleManager#_layerMask#get", this ); }

                    return this.layerMask.$clone();
                }
            },
            _bubblePrefab: {
                get: function () {
if ( TRACE ) { TRACE( "BubbleManager#_bubblePrefab#get", this ); }

                    return this.bubblePrefab;
                }
            },
            _selectedBubble: {
                get: function () {
if ( TRACE ) { TRACE( "BubbleManager#_selectedBubble#get", this ); }

                    return this.selectedBubble;
                }
            },
            _bubbleTypeList: {
                get: function () {
if ( TRACE ) { TRACE( "BubbleManager#_bubbleTypeList#get", this ); }

                    return this.bubbleTypeList;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BubbleManager#init", this ); }

                this.layerMask = new UnityEngine.LayerMask();
            }
        },
        methods: {
            /*BubbleManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "BubbleManager#Awake", this ); }

                BubbleManager.Instance = this;
            },
            /*BubbleManager.Awake end.*/

            /*BubbleManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "BubbleManager#OnEnable", this ); }

                GameEventsManager.addOnBubbleSelected(Bridge.fn.bind(this, function () {
                    this.TriggerBubbleChainReaction();
                }));
            },
            /*BubbleManager.OnEnable end.*/

            /*BubbleManager.TriggerBubbleChainReaction start.*/
            TriggerBubbleChainReaction: function () {
if ( TRACE ) { TRACE( "BubbleManager#TriggerBubbleChainReaction", this ); }
 },
            /*BubbleManager.TriggerBubbleChainReaction end.*/

            /*BubbleManager.UpdateAllNearbyBubblesLists start.*/
            UpdateAllNearbyBubblesLists: function () {
if ( TRACE ) { TRACE( "BubbleManager#UpdateAllNearbyBubblesLists", this ); }

                var $t;
                $t = Bridge.getEnumerator(LevelManager.Instance._activeLevel._levelBubblesList);
                try {
                    while ($t.moveNext()) {
                        var bubble = $t.Current;
                        bubble.ResetNearbyBubblesList();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BubbleManager.UpdateAllNearbyBubblesLists end.*/

            /*BubbleManager.SetSelectedBubble start.*/
            SetSelectedBubble: function (bubble) {
if ( TRACE ) { TRACE( "BubbleManager#SetSelectedBubble", this ); }

                this.selectedBubble = bubble;
            },
            /*BubbleManager.SetSelectedBubble end.*/


        }
    });
    /*BubbleManager end.*/

    /*BubbleType start.*/
    Bridge.define("BubbleType", {
        fields: {
            bubbleID: 0,
            color: null,
            material: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BubbleType#init", this ); }

                this.color = new UnityEngine.Color();
            }
        },
        methods: {
            /*BubbleType.IsID start.*/
            IsID: function (id) {
if ( TRACE ) { TRACE( "BubbleType#IsID", this ); }

                if (id === this.bubbleID) {
                    return true;
                }
                return false;
            },
            /*BubbleType.IsID end.*/


        }
    });
    /*BubbleType end.*/

    /*ButtonTypes start.*/
    Bridge.define("ButtonTypes", {
        $kind: 6,
        statics: {
            fields: {
                NotDefined: 0,
                Previous: 1,
                Next: 2
            }
        }
    });
    /*ButtonTypes end.*/

    /*ChainEventsManager start.*/
    Bridge.define("ChainEventsManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            currentPhase: 0,
            phaseDataList: null,
            delayBeforeNextPhase: 0,
            delayBeforeDestroy: 0
        },
        methods: {
            /*ChainEventsManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "ChainEventsManager#OnEnable", this ); }

                GameEventsManager.addOnBubbleSelected(Bridge.fn.cacheBind(this, this.GameEventsManager_OnBubbleSelected));
            },
            /*ChainEventsManager.OnEnable end.*/

            /*ChainEventsManager.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "ChainEventsManager#OnDisable", this ); }

                GameEventsManager.removeOnBubbleSelected(Bridge.fn.cacheBind(this, this.GameEventsManager_OnBubbleSelected));
            },
            /*ChainEventsManager.OnDisable end.*/

            /*ChainEventsManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ChainEventsManager#Start", this ); }

                this.phaseDataList = LevelManager.Instance._activeLevel._phaseDataList;
            },
            /*ChainEventsManager.Start end.*/

            /*ChainEventsManager.GameEventsManager_OnBubbleSelected start.*/
            GameEventsManager_OnBubbleSelected: function (sender, e) {
if ( TRACE ) { TRACE( "ChainEventsManager#GameEventsManager_OnBubbleSelected", this ); }

                var $t;
                if (!(UnityEngine.MonoBehaviour.op_Inequality(BubbleManager.Instance._selectedBubble, null))) {
                    return;
                }
                var selectedBubble = BubbleManager.Instance._selectedBubble;
                $t = Bridge.getEnumerator(LevelManager.Instance._activeLevel._phaseDataList);
                try {
                    while ($t.moveNext()) {
                        var phaseData = $t.Current;
                        if (phaseData.phaseNumber === this.currentPhase && phaseData.animatedBubbleID === selectedBubble._bubbleID) {
                            UnityEngine.Debug.Log$1("selected");
                            this.TriggerChainEvents();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ChainEventsManager.GameEventsManager_OnBubbleSelected end.*/

            /*ChainEventsManager.TriggerChainEvents start.*/
            TriggerChainEvents: function () {
if ( TRACE ) { TRACE( "ChainEventsManager#TriggerChainEvents", this ); }

                var $t;
                var i = 0;
                var delay = LevelManager.Instance._activeLevel._bubbleAnimOffset;
                var totalChainEventsDelay = { };
                this.CalculateTotalChainEventsDelay(delay, totalChainEventsDelay);
                this.StartCoroutine$1(this.EndOfChainEvents(totalChainEventsDelay.v, this.delayBeforeNextPhase, this.delayBeforeDestroy, LevelManager.Instance._activeLevel._levelBubblesList));
                var orderedBubbleList = System.Linq.Enumerable.from(LevelManager.Instance._activeLevel._levelBubblesList, Bubble).orderBy(function (bubble) {
                        return bubble._orderNumber;
                    }).toList(Bubble);
                $t = Bridge.getEnumerator(orderedBubbleList);
                try {
                    while ($t.moveNext()) {
                        var bubble2 = $t.Current;
                        var id = this.phaseDataList.getItem(this.currentPhase).animatedBubbleID;
                        if (id === bubble2._bubbleID) {
                            bubble2.TriggerBubbleAnimation(delay * i);
                            i = (i + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ChainEventsManager.TriggerChainEvents end.*/

            /*ChainEventsManager.EndOfChainEvents start.*/
            EndOfChainEvents: function (totalDelay, delayBeforeNextPhase, delayBeforeDestroy, bubbleList) {
if ( TRACE ) { TRACE( "ChainEventsManager#EndOfChainEvents", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    bubble,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(totalDelay);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Debug.Log$1("Finished");
                                        $enumerator.current = new UnityEngine.WaitForSeconds(delayBeforeNextPhase);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $t = Bridge.getEnumerator(bubbleList);
                                        try {
                                            while ($t.moveNext()) {
                                                bubble = $t.Current;
                                                if (bubble._phaseNumber === this.phaseDataList.getItem(this.currentPhase).phaseNumber) {
                                                    bubble.ActivateGravity();
                                                    bubble.DestroyBubble$1(delayBeforeDestroy);
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }
                                        this.currentPhase = (this.currentPhase + 1) | 0;
                                        LevelManager.Instance._activeLevel.UpdatePhase();
                                        GameEventsManager.TriggerEvent(this, GameEventType.OnNextPhase);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ChainEventsManager.EndOfChainEvents end.*/

            /*ChainEventsManager.CalculateTotalChainEventsDelay start.*/
            CalculateTotalChainEventsDelay: function (delay, totalDelay) {
if ( TRACE ) { TRACE( "ChainEventsManager#CalculateTotalChainEventsDelay", this ); }

                var $t;
                var i = 0;
                totalDelay.v = 0.0;
                $t = Bridge.getEnumerator(LevelManager.Instance._activeLevel._levelBubblesList);
                try {
                    while ($t.moveNext()) {
                        var bubble = $t.Current;
                        var id = this.phaseDataList.getItem(this.currentPhase).animatedBubbleID;
                        if (id === bubble._bubbleID) {
                            i = (i + 1) | 0;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                totalDelay.v = delay * i;
            },
            /*ChainEventsManager.CalculateTotalChainEventsDelay end.*/


        }
    });
    /*ChainEventsManager end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*EpicToonFX.ETFXButtonScript start.*/
    Bridge.define("EpicToonFX.ETFXButtonScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Button: null,
            MyButtonText: null,
            projectileParticleName: null,
            effectScript: null,
            projectileScript: null,
            buttonsX: 0,
            buttonsY: 0,
            buttonsSizeX: 0,
            buttonsSizeY: 0,
            buttonsDistance: 0
        },
        methods: {
            /*EpicToonFX.ETFXButtonScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#Start", this ); }

                this.effectScript = UnityEngine.GameObject.Find("ETFXFireProjectile").GetComponent(EpicToonFX.ETFXFireProjectile);
                this.getProjectileNames();
                this.MyButtonText = this.Button.transform.Find("Text").GetComponent(UnityEngine.UI.Text);
                this.MyButtonText.text = this.projectileParticleName;
            },
            /*EpicToonFX.ETFXButtonScript.Start end.*/

            /*EpicToonFX.ETFXButtonScript.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#Update", this ); }

                this.MyButtonText.text = this.projectileParticleName;
            },
            /*EpicToonFX.ETFXButtonScript.Update end.*/

            /*EpicToonFX.ETFXButtonScript.getProjectileNames start.*/
            getProjectileNames: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#getProjectileNames", this ); }

                var $t;
                this.projectileScript = ($t = this.effectScript.projectiles)[this.effectScript.currentProjectile].GetComponent(ETFXProjectileScript);
                this.projectileParticleName = this.projectileScript.projectileParticle.name;
            },
            /*EpicToonFX.ETFXButtonScript.getProjectileNames end.*/

            /*EpicToonFX.ETFXButtonScript.overButton start.*/
            overButton: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXButtonScript#overButton", this ); }

                var button1 = new UnityEngine.Rect.$ctor1(this.buttonsX, this.buttonsY, this.buttonsSizeX, this.buttonsSizeY);
                var button2 = new UnityEngine.Rect.$ctor1(this.buttonsX + this.buttonsDistance, this.buttonsY, this.buttonsSizeX, this.buttonsSizeY);
                if (button1.Contains(new pc.Vec2( UnityEngine.Input.mousePosition.x, UnityEngine.Screen.height - UnityEngine.Input.mousePosition.y )) || button2.Contains(new pc.Vec2( UnityEngine.Input.mousePosition.x, UnityEngine.Screen.height - UnityEngine.Input.mousePosition.y ))) {
                    return true;
                }
                return false;
            },
            /*EpicToonFX.ETFXButtonScript.overButton end.*/


        }
    });
    /*EpicToonFX.ETFXButtonScript end.*/

    /*EpicToonFX.ETFXFireProjectile start.*/
    Bridge.define("EpicToonFX.ETFXFireProjectile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            hit: null,
            projectiles: null,
            spawnPosition: null,
            currentProjectile: 0,
            speed: 0,
            selectedProjectileButton: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#init", this ); }

                this.hit = new UnityEngine.RaycastHit();
                this.currentProjectile = 0;
                this.speed = 1000.0;
            }
        },
        methods: {
            /*EpicToonFX.ETFXFireProjectile.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#Start", this ); }

                this.selectedProjectileButton = UnityEngine.GameObject.Find("Button").GetComponent(EpicToonFX.ETFXButtonScript);
            },
            /*EpicToonFX.ETFXFireProjectile.Start end.*/

            /*EpicToonFX.ETFXFireProjectile.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.RightArrow)) {
                    this.nextEffect();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.D)) {
                    this.nextEffect();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.A)) {
                    this.previousEffect();
                } else if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.LeftArrow)) {
                    this.previousEffect();
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Mouse0) && !UnityEngine.EventSystems.EventSystem.current.IsPointerOverGameObject() && UnityEngine.Physics.Raycast$1(UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition), Bridge.ref(this, "hit"), 100.0)) {
                    var projectile = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.projectiles[this.currentProjectile], this.spawnPosition.position, pc.Quat.IDENTITY.clone());
                    projectile.transform.LookAt$2(this.hit.point);
                    projectile.GetComponent(UnityEngine.Rigidbody).AddForce$1(projectile.transform.forward.$clone().clone().scale( this.speed ));
                    projectile.GetComponent(ETFXProjectileScript).impactNormal = this.hit.normal.$clone();
                }
                UnityEngine.Debug.DrawRay$1(UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition).origin, UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition).direction.$clone().clone().scale( 100.0 ), new pc.Color( 1, 1, 0, 1 ));
            },
            /*EpicToonFX.ETFXFireProjectile.Update end.*/

            /*EpicToonFX.ETFXFireProjectile.nextEffect start.*/
            nextEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#nextEffect", this ); }

                if (this.currentProjectile < ((this.projectiles.length - 1) | 0)) {
                    this.currentProjectile = (this.currentProjectile + 1) | 0;
                } else {
                    this.currentProjectile = 0;
                }
                this.selectedProjectileButton.getProjectileNames();
            },
            /*EpicToonFX.ETFXFireProjectile.nextEffect end.*/

            /*EpicToonFX.ETFXFireProjectile.previousEffect start.*/
            previousEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#previousEffect", this ); }

                if (this.currentProjectile > 0) {
                    this.currentProjectile = (this.currentProjectile - 1) | 0;
                } else {
                    this.currentProjectile = (this.projectiles.length - 1) | 0;
                }
                this.selectedProjectileButton.getProjectileNames();
            },
            /*EpicToonFX.ETFXFireProjectile.previousEffect end.*/

            /*EpicToonFX.ETFXFireProjectile.AdjustSpeed start.*/
            AdjustSpeed: function (newSpeed) {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXFireProjectile#AdjustSpeed", this ); }

                this.speed = newSpeed;
            },
            /*EpicToonFX.ETFXFireProjectile.AdjustSpeed end.*/


        }
    });
    /*EpicToonFX.ETFXFireProjectile end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    Bridge.define("EpicToonFX.ETFXLightFade", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            life: 0,
            killAfterLife: false,
            li: null,
            initIntensity: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#init", this ); }

                this.life = 0.2;
                this.killAfterLife = true;
            }
        },
        methods: {
            /*EpicToonFX.ETFXLightFade.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Start", this ); }

                if (UnityEngine.Object.op_Implicit(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.GetComponent(UnityEngine.Light))) {
                    this.li = Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.GetComponent(UnityEngine.Light);
                    this.initIntensity = this.li.intensity;
                } else {
                    UnityEngine.MonoBehaviour.print("No light object found on " + (Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.name || ""));
                }
            },
            /*EpicToonFX.ETFXLightFade.Start end.*/

            /*EpicToonFX.ETFXLightFade.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLightFade#Update", this ); }

                if (UnityEngine.Object.op_Implicit(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.GetComponent(UnityEngine.Light))) {
                    this.li.intensity -= this.initIntensity * (UnityEngine.Time.deltaTime / this.life);
                    if (this.killAfterLife && this.li.intensity <= 0.0) {
                        UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.GetComponent(UnityEngine.Light));
                    }
                }
            },
            /*EpicToonFX.ETFXLightFade.Update end.*/


        }
    });
    /*EpicToonFX.ETFXLightFade end.*/

    /*EpicToonFX.ETFXLoopScript start.*/
    Bridge.define("EpicToonFX.ETFXLoopScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            chosenEffect: null,
            loopTimeLimit: 0,
            spawnWithoutLight: false,
            spawnWithoutSound: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#init", this ); }

                this.loopTimeLimit = 2.0;
                this.spawnWithoutLight = true;
                this.spawnWithoutSound = true;
            }
        },
        methods: {
            /*EpicToonFX.ETFXLoopScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#Start", this ); }

                this.PlayEffect();
            },
            /*EpicToonFX.ETFXLoopScript.Start end.*/

            /*EpicToonFX.ETFXLoopScript.PlayEffect start.*/
            PlayEffect: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#PlayEffect", this ); }

                this.StartCoroutine$2("EffectLoop");
            },
            /*EpicToonFX.ETFXLoopScript.PlayEffect end.*/

            /*EpicToonFX.ETFXLoopScript.EffectLoop start.*/
            EffectLoop: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXLoopScript#EffectLoop", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    effectPlayer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    effectPlayer = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.chosenEffect, this.transform.position, this.transform.rotation);
                                        if ((this.spawnWithoutLight = UnityEngine.Object.op_Implicit(effectPlayer.GetComponent(UnityEngine.Light)))) {
                                            effectPlayer.GetComponent(UnityEngine.Light).enabled = false;
                                        }
                                        if ((this.spawnWithoutSound = UnityEngine.Object.op_Implicit(effectPlayer.GetComponent(UnityEngine.AudioSource)))) {
                                            effectPlayer.GetComponent(UnityEngine.AudioSource).enabled = false;
                                        }
                                        $enumerator.current = new UnityEngine.WaitForSeconds(this.loopTimeLimit);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Object.Destroy(effectPlayer);
                                        this.PlayEffect();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*EpicToonFX.ETFXLoopScript.EffectLoop end.*/


        }
    });
    /*EpicToonFX.ETFXLoopScript end.*/

    /*EpicToonFX.ETFXMouseOrbit start.*/
    Bridge.define("EpicToonFX.ETFXMouseOrbit", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*EpicToonFX.ETFXMouseOrbit.ClampAngle:static start.*/
                ClampAngle: function (angle, min, max) {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#ClampAngle", this ); }

                    if (angle < -360.0) {
                        angle += 360.0;
                    }
                    if (angle > 360.0) {
                        angle -= 360.0;
                    }
                    return Math.max(min, Math.min(angle, max));
                },
                /*EpicToonFX.ETFXMouseOrbit.ClampAngle:static end.*/


            }
        },
        fields: {
            target: null,
            distance: 0,
            xSpeed: 0,
            ySpeed: 0,
            yMinLimit: 0,
            yMaxLimit: 0,
            distanceMin: 0,
            distanceMax: 0,
            smoothTime: 0,
            rotationYAxis: 0,
            rotationXAxis: 0,
            velocityX: 0,
            velocityY: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#init", this ); }

                this.distance = 5.0;
                this.xSpeed = 120.0;
                this.ySpeed = 120.0;
                this.yMinLimit = -20.0;
                this.yMaxLimit = 80.0;
                this.distanceMin = 0.5;
                this.distanceMax = 15.0;
                this.smoothTime = 2.0;
                this.rotationYAxis = 0.0;
                this.rotationXAxis = 0.0;
                this.velocityX = 0.0;
                this.velocityY = 0.0;
            }
        },
        methods: {
            /*EpicToonFX.ETFXMouseOrbit.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#Start", this ); }

                var angles = this.transform.eulerAngles.$clone();
                this.rotationYAxis = angles.y;
                this.rotationXAxis = angles.x;
                if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.Rigidbody))) {
                    this.GetComponent(UnityEngine.Rigidbody).freezeRotation = true;
                }
            },
            /*EpicToonFX.ETFXMouseOrbit.Start end.*/

            /*EpicToonFX.ETFXMouseOrbit.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXMouseOrbit#LateUpdate", this ); }

                if (UnityEngine.Object.op_Implicit(this.target)) {
                    if (UnityEngine.Input.GetMouseButton(1)) {
                        this.velocityX += this.xSpeed * UnityEngine.Input.GetAxis("Mouse X") * this.distance * 0.02;
                        this.velocityY += this.ySpeed * UnityEngine.Input.GetAxis("Mouse Y") * 0.02;
                    }
                    this.rotationYAxis += this.velocityX;
                    this.rotationXAxis -= this.velocityY;
                    this.rotationXAxis = EpicToonFX.ETFXMouseOrbit.ClampAngle(this.rotationXAxis, this.yMinLimit, this.yMaxLimit);
                    var toRotation = new pc.Quat().setFromEulerAngles_Unity( this.rotationXAxis, this.rotationYAxis, 0.0 );
                    var rotation = toRotation.$clone();
                    this.distance = Math.max(this.distanceMin, Math.min(this.distance - UnityEngine.Input.GetAxis("Mouse ScrollWheel") * 5.0, this.distanceMax));
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Linecast$3(this.target.position, this.transform.position, hit)) {
                        this.distance -= hit.v.distance;
                    }
                    var negDistance = new pc.Vec3( 0.0, 0.0, 0.0 - this.distance );
                    var position = rotation.transformVector( negDistance ).add( this.target.position );
                    this.transform.rotation = rotation.$clone();
                    this.transform.position = position.$clone();
                    this.velocityX = pc.math.lerp(this.velocityX, 0.0, UnityEngine.Time.deltaTime * this.smoothTime);
                    this.velocityY = pc.math.lerp(this.velocityY, 0.0, UnityEngine.Time.deltaTime * this.smoothTime);
                }
            },
            /*EpicToonFX.ETFXMouseOrbit.LateUpdate end.*/


        }
    });
    /*EpicToonFX.ETFXMouseOrbit end.*/

    /*EpicToonFX.ETFXPitchRandomizer start.*/
    Bridge.define("EpicToonFX.ETFXPitchRandomizer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            randomPercent: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXPitchRandomizer#init", this ); }

                this.randomPercent = 10.0;
            }
        },
        methods: {
            /*EpicToonFX.ETFXPitchRandomizer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXPitchRandomizer#Start", this ); }

                var $t;
                $t = this.transform.GetComponent(UnityEngine.AudioSource);
                $t.pitch *= 1.0 + UnityEngine.Random.Range$1((0.0 - this.randomPercent) / 100.0, this.randomPercent / 100.0);
            },
            /*EpicToonFX.ETFXPitchRandomizer.Start end.*/


        }
    });
    /*EpicToonFX.ETFXPitchRandomizer end.*/

    /*EpicToonFX.ETFXRotation start.*/
    Bridge.define("EpicToonFX.ETFXRotation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotateVector: null,
            rotateSpace: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#init", this ); }

                this.rotateVector = new UnityEngine.Vector3();
                this.rotateVector = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*EpicToonFX.ETFXRotation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#Start", this ); }
 },
            /*EpicToonFX.ETFXRotation.Start end.*/

            /*EpicToonFX.ETFXRotation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "EpicToonFX.ETFXRotation#Update", this ); }

                if (this.rotateSpace === EpicToonFX.ETFXRotation.spaceEnum.Local) {
                    this.transform.Rotate$2(this.rotateVector.$clone().clone().scale( UnityEngine.Time.deltaTime ));
                }
                if (this.rotateSpace === EpicToonFX.ETFXRotation.spaceEnum.World) {
                    this.transform.Rotate$2(this.rotateVector.$clone().clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.World);
                }
            },
            /*EpicToonFX.ETFXRotation.Update end.*/


        }
    });
    /*EpicToonFX.ETFXRotation end.*/

    /*EpicToonFX.ETFXRotation+spaceEnum start.*/
    Bridge.define("EpicToonFX.ETFXRotation.spaceEnum", {
        $kind: 1006,
        statics: {
            fields: {
                Local: 0,
                World: 1
            }
        }
    });
    /*EpicToonFX.ETFXRotation+spaceEnum end.*/

    /*ETFXProjectileScript start.*/
    Bridge.define("ETFXProjectileScript", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            impactParticle: null,
            projectileParticle: null,
            muzzleParticle: null,
            trailParticles: null,
            impactNormal: null,
            hasCollided: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ETFXProjectileScript#init", this ); }

                this.impactNormal = new UnityEngine.Vector3();
                this.hasCollided = false;
            }
        },
        methods: {
            /*ETFXProjectileScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ETFXProjectileScript#Start", this ); }

                this.projectileParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.projectileParticle, this.transform.position, this.transform.rotation);
                this.projectileParticle.transform.parent = this.transform;
                if (UnityEngine.Object.op_Implicit(this.muzzleParticle)) {
                    this.muzzleParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.muzzleParticle, this.transform.position, this.transform.rotation);
                    UnityEngine.Object.Destroy$1(this.muzzleParticle, 1.5);
                }
            },
            /*ETFXProjectileScript.Start end.*/

            /*ETFXProjectileScript.OnCollisionEnter start.*/
            OnCollisionEnter: function (hit) {
if ( TRACE ) { TRACE( "ETFXProjectileScript#OnCollisionEnter", this ); }

                var $t;
                if (this.hasCollided) {
                    return;
                }
                this.hasCollided = true;
                this.impactParticle = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.impactParticle, this.transform.position, new pc.Quat().fromTo( pc.Vec3.UP.clone(), this.impactNormal ));
                if (Bridge.referenceEquals(hit.gameObject.tag, "Destructible")) {
                    UnityEngine.Object.Destroy(hit.gameObject);
                }
                var array = this.trailParticles;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var trail = $t.Current;
                        var curTrail = this.transform.Find((this.projectileParticle.name || "") + "/" + (trail.name || "")).gameObject;
                        curTrail.transform.parent = null;
                        UnityEngine.Object.Destroy$1(curTrail, 3.0);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.Object.Destroy$1(this.projectileParticle, 3.0);
                UnityEngine.Object.Destroy$1(this.impactParticle, 5.0);
                UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                var trails = this.GetComponentsInChildren(UnityEngine.ParticleSystem);
                for (var i = 1; i < trails.length; i = (i + 1) | 0) {
                    var trail2 = trails[i];
                    if (System.String.contains(trail2.gameObject.name,"Trail")) {
                        trail2.transform.SetParent(null);
                        UnityEngine.Object.Destroy$1(trail2.gameObject, 2.0);
                    }
                }
            },
            /*ETFXProjectileScript.OnCollisionEnter end.*/


        }
    });
    /*ETFXProjectileScript end.*/

    /*ETFXSceneManager start.*/
    Bridge.define("ETFXSceneManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GUIHide: false,
            GUIHide2: false,
            GUIHide3: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#init", this ); }

                this.GUIHide = false;
                this.GUIHide2 = false;
                this.GUIHide3 = false;
            }
        },
        methods: {
            /*ETFXSceneManager.LoadScene1 start.*/
            LoadScene1: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene1", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_explosions");
            },
            /*ETFXSceneManager.LoadScene1 end.*/

            /*ETFXSceneManager.LoadScene2 start.*/
            LoadScene2: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene2", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_explosions2");
            },
            /*ETFXSceneManager.LoadScene2 end.*/

            /*ETFXSceneManager.LoadScene3 start.*/
            LoadScene3: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene3", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_portals");
            },
            /*ETFXSceneManager.LoadScene3 end.*/

            /*ETFXSceneManager.LoadScene4 start.*/
            LoadScene4: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene4", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_magic");
            },
            /*ETFXSceneManager.LoadScene4 end.*/

            /*ETFXSceneManager.LoadScene5 start.*/
            LoadScene5: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene5", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_emojis");
            },
            /*ETFXSceneManager.LoadScene5 end.*/

            /*ETFXSceneManager.LoadScene6 start.*/
            LoadScene6: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene6", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_sparkles");
            },
            /*ETFXSceneManager.LoadScene6 end.*/

            /*ETFXSceneManager.LoadScene7 start.*/
            LoadScene7: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene7", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_fireworks");
            },
            /*ETFXSceneManager.LoadScene7 end.*/

            /*ETFXSceneManager.LoadScene8 start.*/
            LoadScene8: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene8", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_powerups");
            },
            /*ETFXSceneManager.LoadScene8 end.*/

            /*ETFXSceneManager.LoadScene9 start.*/
            LoadScene9: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene9", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_swordcombat");
            },
            /*ETFXSceneManager.LoadScene9 end.*/

            /*ETFXSceneManager.LoadScene10 start.*/
            LoadScene10: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene10", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_maindemo");
            },
            /*ETFXSceneManager.LoadScene10 end.*/

            /*ETFXSceneManager.LoadScene11 start.*/
            LoadScene11: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene11", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_combat");
            },
            /*ETFXSceneManager.LoadScene11 end.*/

            /*ETFXSceneManager.LoadScene12 start.*/
            LoadScene12: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene12", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_2ddemo");
            },
            /*ETFXSceneManager.LoadScene12 end.*/

            /*ETFXSceneManager.LoadScene13 start.*/
            LoadScene13: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#LoadScene13", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("etfx_missiles");
            },
            /*ETFXSceneManager.LoadScene13 end.*/

            /*ETFXSceneManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ETFXSceneManager#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.L)) {
                    this.GUIHide = !this.GUIHide;
                    if (this.GUIHide) {
                        UnityEngine.GameObject.Find("CanvasSceneSelect").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("CanvasSceneSelect").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.J)) {
                    this.GUIHide2 = !this.GUIHide2;
                    if (this.GUIHide2) {
                        UnityEngine.GameObject.Find("Canvas").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("Canvas").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.H)) {
                    this.GUIHide3 = !this.GUIHide3;
                    if (this.GUIHide3) {
                        UnityEngine.GameObject.Find("ParticleSysDisplayCanvas").GetComponent(UnityEngine.Canvas).enabled = false;
                    } else {
                        UnityEngine.GameObject.Find("ParticleSysDisplayCanvas").GetComponent(UnityEngine.Canvas).enabled = true;
                    }
                }
            },
            /*ETFXSceneManager.Update end.*/


        }
    });
    /*ETFXSceneManager end.*/

    /*FunctionTimer start.*/
    Bridge.define("FunctionTimer", {
        statics: {
            fields: {
                activeTimerList: null,
                initGameObject: null
            },
            methods: {
                /*FunctionTimer.InitIfNeeded:static start.*/
                InitIfNeeded: function () {
if ( TRACE ) { TRACE( "FunctionTimer#InitIfNeeded", this ); }

                    if (UnityEngine.GameObject.op_Equality(FunctionTimer.initGameObject, null)) {
                        FunctionTimer.initGameObject = new UnityEngine.GameObject.$ctor2("FunctionTimer_InitGameObject");
                        FunctionTimer.activeTimerList = new (System.Collections.Generic.List$1(FunctionTimer)).ctor();
                    }
                },
                /*FunctionTimer.InitIfNeeded:static end.*/

                /*FunctionTimer.Create:static start.*/
                Create: function (action, timer, timerName) {
if ( TRACE ) { TRACE( "FunctionTimer#Create", this ); }

                    if (timerName === void 0) { timerName = null; }
                    FunctionTimer.InitIfNeeded();
                    var gameObject = new UnityEngine.GameObject.$ctor3("FunctionTimer", FunctionTimer.MonoBehaviourHook);
                    var functionTimer = new FunctionTimer(action, timer, timerName, gameObject);
                    gameObject.GetComponent(FunctionTimer.MonoBehaviourHook).onUpdate = Bridge.fn.cacheBind(functionTimer, functionTimer.Update);
                    FunctionTimer.activeTimerList.add(functionTimer);
                    return functionTimer;
                },
                /*FunctionTimer.Create:static end.*/

                /*FunctionTimer.RemoveTimer:static start.*/
                RemoveTimer: function (functionTimer) {
if ( TRACE ) { TRACE( "FunctionTimer#RemoveTimer", this ); }

                    FunctionTimer.InitIfNeeded();
                    FunctionTimer.activeTimerList.remove(functionTimer);
                },
                /*FunctionTimer.RemoveTimer:static end.*/

                /*FunctionTimer.StopTimer:static start.*/
                StopTimer: function (timerName) {
if ( TRACE ) { TRACE( "FunctionTimer#StopTimer", this ); }

                    for (var i = 0; i < FunctionTimer.activeTimerList.Count; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(FunctionTimer.activeTimerList.getItem(i).timerName, timerName)) {
                            FunctionTimer.activeTimerList.getItem(i).DestroySelf();
                            i = (i - 1) | 0;
                        }
                    }
                },
                /*FunctionTimer.StopTimer:static end.*/


            }
        },
        fields: {
            action: null,
            timer: 0,
            timerName: null,
            gameObject: null,
            isDestroyed: false
        },
        ctors: {
            ctor: function (action, timer, timerName, gameObject) {
if ( TRACE ) { TRACE( "FunctionTimer#ctor", this ); }

                this.$initialize();
                this.action = action;
                this.timer = timer;
                this.timerName = timerName;
                this.gameObject = gameObject;
                this.isDestroyed = false;
            }
        },
        methods: {
            /*FunctionTimer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FunctionTimer#Update", this ); }

                if (!this.isDestroyed) {
                    this.timer -= UnityEngine.Time.deltaTime;
                    if (this.timer < 0.0) {
                        this.action();
                        this.DestroySelf();
                    }
                }
            },
            /*FunctionTimer.Update end.*/

            /*FunctionTimer.DestroySelf start.*/
            DestroySelf: function () {
if ( TRACE ) { TRACE( "FunctionTimer#DestroySelf", this ); }

                this.isDestroyed = true;
                UnityEngine.Object.Destroy(this.gameObject);
                FunctionTimer.RemoveTimer(this);
            },
            /*FunctionTimer.DestroySelf end.*/


        }
    });
    /*FunctionTimer end.*/

    /*FunctionTimer+MonoBehaviourHook start.*/
    Bridge.define("FunctionTimer.MonoBehaviourHook", {
        inherits: [UnityEngine.MonoBehaviour],
        $kind: 1002,
        fields: {
            onUpdate: null
        },
        methods: {
            /*FunctionTimer+MonoBehaviourHook.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FunctionTimer.MonoBehaviourHook#Update", this ); }

                if (!Bridge.staticEquals(this.onUpdate, null)) {
                    this.onUpdate();
                }
            },
            /*FunctionTimer+MonoBehaviourHook.Update end.*/


        }
    });
    /*FunctionTimer+MonoBehaviourHook end.*/

    /*GameEventsManager start.*/
    Bridge.define("GameEventsManager", {
        statics: {
            events: {
                OnBubbleSpawned: null,
                OnBubbleDestroyed: null,
                OnBubbleSelected: null,
                OnNextPhase: null
            },
            methods: {
                /*GameEventsManager.TriggerEvent:static start.*/
                TriggerEvent: function (sender, gameEventType) {
if ( TRACE ) { TRACE( "GameEventsManager#TriggerEvent", this ); }

                    switch (gameEventType) {
                        case GameEventType.OnBubbleSpawned: 
                            !Bridge.staticEquals(GameEventsManager.OnBubbleSpawned, null) ? GameEventsManager.OnBubbleSpawned(sender, { }) : null;
                            break;
                        case GameEventType.OnBubbleDestroyed: 
                            !Bridge.staticEquals(GameEventsManager.OnBubbleDestroyed, null) ? GameEventsManager.OnBubbleDestroyed(sender, { }) : null;
                            break;
                        case GameEventType.OnBubbleSelected: 
                            !Bridge.staticEquals(GameEventsManager.OnBubbleSelected, null) ? GameEventsManager.OnBubbleSelected(sender, { }) : null;
                            break;
                        case GameEventType.OnNextPhase: 
                            !Bridge.staticEquals(GameEventsManager.OnNextPhase, null) ? GameEventsManager.OnNextPhase(sender, { }) : null;
                            UnityEngine.Debug.Log$1("Next phase");
                            break;
                    }
                },
                /*GameEventsManager.TriggerEvent:static end.*/

                /*GameEventsManager.GetComponentFromEvent:static start.*/
                GetComponentFromEvent: function (T, valueInput, gameEventType, t1) {
if ( TRACE ) { TRACE( "GameEventsManager#GetComponentFromEvent", this ); }

                    t1.v = null;
                    if (gameEventType === GameEventType.OnBubbleSelected) {
                        t1.v = Bridge.rValue(valueInput);
                    }
                },
                /*GameEventsManager.GetComponentFromEvent:static end.*/


            }
        }
    });
    /*GameEventsManager end.*/

    /*GameEventType start.*/
    Bridge.define("GameEventType", {
        $kind: 6,
        statics: {
            fields: {
                OnBubbleSpawned: 0,
                OnBubbleDestroyed: 1,
                OnBubbleSelected: 2,
                OnNextPhase: 3
            }
        }
    });
    /*GameEventType end.*/

    /*GameInputManager start.*/
    Bridge.define("GameInputManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            isDragging: false
        },
        methods: {
            /*GameInputManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameInputManager#Awake", this ); }

                GameInputManager.Instance = this;
            },
            /*GameInputManager.Awake end.*/

            /*GameInputManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameInputManager#Update", this ); }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    this.isDragging = true;
                } else {
                    this.isDragging = false;
                }
            },
            /*GameInputManager.Update end.*/


        }
    });
    /*GameInputManager end.*/

    /*GameSceneManager start.*/
    Bridge.define("GameSceneManager", {
        statics: {
            fields: {
                LEVEL_CREATOR_SCENE: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "GameSceneManager#init", this ); }

                    this.LEVEL_CREATOR_SCENE = "LevelCreatorScene";
                }
            },
            methods: {
                /*GameSceneManager.IsLevelCreatorScene:static start.*/
                IsLevelCreatorScene: function () {
if ( TRACE ) { TRACE( "GameSceneManager#IsLevelCreatorScene", this ); }

                    if (Bridge.referenceEquals(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name, "LevelCreatorScene")) {
                        return true;
                    }
                    return false;
                },
                /*GameSceneManager.IsLevelCreatorScene:static end.*/


            }
        }
    });
    /*GameSceneManager end.*/

    /*Level start.*/
    Bridge.define("Level", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            conceptName: null,
            phaseDataList: null,
            bubbleAnimOffset: 0,
            currentPhase: 0,
            levelBubblesList: null,
            bubblesHolderTransform: null
        },
        props: {
            _currentPhase: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_currentPhase#get", this ); }

                    return this.currentPhase;
                }
            },
            _phaseDataList: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_phaseDataList#get", this ); }

                    return this.phaseDataList;
                }
            },
            _levelBubblesList: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_levelBubblesList#get", this ); }

                    return this.levelBubblesList;
                }
            },
            _bubblesHolderTransform: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_bubblesHolderTransform#get", this ); }

                    return this.bubblesHolderTransform;
                }
            },
            _conceptName: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_conceptName#get", this ); }

                    return this.conceptName;
                }
            },
            _bubbleAnimOffset: {
                get: function () {
if ( TRACE ) { TRACE( "Level#_bubbleAnimOffset#get", this ); }

                    return this.bubbleAnimOffset;
                }
            }
        },
        methods: {
            /*Level.AddToLevelBubblesList start.*/
            AddToLevelBubblesList: function (bubble) {
if ( TRACE ) { TRACE( "Level#AddToLevelBubblesList", this ); }

                this.levelBubblesList.add(bubble);
            },
            /*Level.AddToLevelBubblesList end.*/

            /*Level.RemoveBubblesFromLevel start.*/
            RemoveBubblesFromLevel: function (bubble) {
if ( TRACE ) { TRACE( "Level#RemoveBubblesFromLevel", this ); }

                this.levelBubblesList.remove(bubble);
            },
            /*Level.RemoveBubblesFromLevel end.*/

            /*Level.SetupBubbles start.*/
            SetupBubbles: function () {
if ( TRACE ) { TRACE( "Level#SetupBubbles", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.levelBubblesList);
                try {
                    while ($t.moveNext()) {
                        var bubble = $t.Current;
                        var renderer = bubble._bubbleVisualTransform.GetComponent(UnityEngine.Renderer);
                        renderer.material = bubble._material;
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Level.SetupBubbles end.*/

            /*Level.SetAsActiveLevel start.*/
            SetAsActiveLevel: function () {
if ( TRACE ) { TRACE( "Level#SetAsActiveLevel", this ); }

                LevelManager.Instance._activeLevel.gameObject.SetActive(false);
                LevelManager.Instance.SetActiveLevel(this);
            },
            /*Level.SetAsActiveLevel end.*/

            /*Level.UpdatePhase start.*/
            UpdatePhase: function () {
if ( TRACE ) { TRACE( "Level#UpdatePhase", this ); }

                this.currentPhase = (this.currentPhase + 1) | 0;
            },
            /*Level.UpdatePhase end.*/


        }
    });
    /*Level end.*/

    /*LevelManager start.*/
    Bridge.define("LevelManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            activeLevel: null,
            levelSelector: null
        },
        props: {
            _activeLevel: {
                get: function () {
if ( TRACE ) { TRACE( "LevelManager#_activeLevel#get", this ); }

                    return this.activeLevel;
                }
            }
        },
        methods: {
            /*LevelManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "LevelManager#Awake", this ); }

                LevelManager.Instance = this;
            },
            /*LevelManager.Awake end.*/

            /*LevelManager.SetActiveLevel start.*/
            SetActiveLevel: function (level) {
if ( TRACE ) { TRACE( "LevelManager#SetActiveLevel", this ); }

                this.activeLevel = level;
            },
            /*LevelManager.SetActiveLevel end.*/


        }
    });
    /*LevelManager end.*/

    /*LevelSelector start.*/
    Bridge.define("LevelSelector", {
        fields: {
            level: null
        },
        methods: {
            /*LevelSelector.SetActive start.*/
            SetActive: function () {
if ( TRACE ) { TRACE( "LevelSelector#SetActive", this ); }

                LevelManager.Instance._activeLevel.gameObject.SetActive(false);
                LevelManager.Instance.SetActiveLevel(this.level);
                LevelManager.Instance._activeLevel.gameObject.SetActive(true);
            },
            /*LevelSelector.SetActive end.*/


        }
    });
    /*LevelSelector end.*/

    /*PA.Timer start.*/
    Bridge.define("PA.Timer", {
        statics: {
            methods: {
                /*PA.Timer.CreateTimer:static start.*/
                CreateTimer: function (timerMax) {
if ( TRACE ) { TRACE( "PA.Timer#CreateTimer", this ); }

                    var newTimer = new UnityEngine.GameObject.$ctor2("Timer");
                    var timerComponent = newTimer.AddComponent(PA.TimerMonobehaviour);
                },
                /*PA.Timer.CreateTimer:static end.*/


            }
        }
    });
    /*PA.Timer end.*/

    /*PA.TimerMonobehaviour start.*/
    Bridge.define("PA.TimerMonobehaviour", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timerMin: 0,
            timerMax: 0
        },
        ctors: {
            ctor: function (timerMax) {
if ( TRACE ) { TRACE( "PA.TimerMonobehaviour#ctor", this ); }

                this.$initialize();
                UnityEngine.MonoBehaviour.ctor.call(this);
                this.timerMin = 0.0;
            }
        },
        methods: {
            /*PA.TimerMonobehaviour.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PA.TimerMonobehaviour#Update", this ); }
 },
            /*PA.TimerMonobehaviour.Update end.*/


        }
    });
    /*PA.TimerMonobehaviour end.*/

    /*PA.Utils start.*/
    Bridge.define("PA.Utils", {
        statics: {
            methods: {
                /*PA.Utils.IsRayHittingFromMousePosition:static start.*/
                IsRayHittingFromMousePosition: function () {
if ( TRACE ) { TRACE( "PA.Utils#IsRayHittingFromMousePosition", this ); }

                    var ray = UnityEngine.Camera.main.ScreenPointToRay(PA.Utils.GetMouseScreenPosition());
                    var _discard1 = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$1(ray, _discard1, Number.POSITIVE_INFINITY)) {
                        return true;
                    }
                    return false;
                },
                /*PA.Utils.IsRayHittingFromMousePosition:static end.*/

                /*PA.Utils.IsRayHittingFromMousePosition$1:static start.*/
                IsRayHittingFromMousePosition$1: function (layerMask) {
if ( TRACE ) { TRACE( "PA.Utils#IsRayHittingFromMousePosition$1", this ); }

                    var ray = UnityEngine.Camera.main.ScreenPointToRay(PA.Utils.GetMouseScreenPosition());
                    var _discard2 = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$1(ray, _discard2, Number.POSITIVE_INFINITY, UnityEngine.LayerMask.op_Implicit(layerMask.$clone()))) {
                        return true;
                    }
                    return false;
                },
                /*PA.Utils.IsRayHittingFromMousePosition$1:static end.*/

                /*PA.Utils.GetRayHitFromMouse:static start.*/
                GetRayHitFromMouse: function () {
if ( TRACE ) { TRACE( "PA.Utils#GetRayHitFromMouse", this ); }

                    var ray = UnityEngine.Camera.main.ScreenPointToRay(PA.Utils.GetMouseScreenPosition());
                    var hit = { v : new UnityEngine.RaycastHit() };
                    UnityEngine.Physics.Raycast$1(ray, hit, Number.POSITIVE_INFINITY);
                    return hit.v.$clone();
                },
                /*PA.Utils.GetRayHitFromMouse:static end.*/

                /*PA.Utils.GetRayHitFromMouse$1:static start.*/
                GetRayHitFromMouse$1: function (layerMask) {
if ( TRACE ) { TRACE( "PA.Utils#GetRayHitFromMouse$1", this ); }

                    var ray = UnityEngine.Camera.main.ScreenPointToRay(PA.Utils.GetMouseScreenPosition());
                    var hit = { v : new UnityEngine.RaycastHit() };
                    UnityEngine.Physics.Raycast$1(ray, hit, Number.POSITIVE_INFINITY, UnityEngine.LayerMask.op_Implicit(layerMask.$clone()));
                    return hit.v.$clone();
                },
                /*PA.Utils.GetRayHitFromMouse$1:static end.*/

                /*PA.Utils.GetDetectedAllObjectsList:static start.*/
                GetDetectedAllObjectsList: function (T, raycastAllCollider, layerMask) {
if ( TRACE ) { TRACE( "PA.Utils#GetDetectedAllObjectsList", this ); }

                    var detectedObjectsList = new (System.Collections.Generic.List$1(T)).ctor();
                    var hits = UnityEngine.Physics.BoxCastAll$1(raycastAllCollider.bounds.center, raycastAllCollider.bounds.halfExtents, raycastAllCollider.transform.forward, raycastAllCollider.transform.rotation, Number.POSITIVE_INFINITY, UnityEngine.LayerMask.op_Implicit(layerMask.$clone()));
                    for (var i = 0; i < hits.length; i = (i + 1) | 0) {
                        var detectedObject = Bridge.rValue(hits[i].collider.gameObject.GetComponent(T));
                        detectedObjectsList.add(Bridge.rValue(detectedObject));
                    }
                    return detectedObjectsList;
                },
                /*PA.Utils.GetDetectedAllObjectsList:static end.*/

                /*PA.Utils.ArrangeObjectsWithOffsetHorizontal$1:static start.*/
                ArrangeObjectsWithOffsetHorizontal$1: function (T, originalParentTransform, centeredParentTransform, xOffset, zOffset, sizeOffset) {
if ( TRACE ) { TRACE( "PA.Utils#ArrangeObjectsWithOffsetHorizontal$1", this ); }

                    var $t;
                    if (xOffset === void 0) { xOffset = 0.3; }
                    if (zOffset === void 0) { zOffset = 0.2; }
                    if (sizeOffset === void 0) { sizeOffset = 1.0; }
                    var children = originalParentTransform.GetComponentsInChildren(T);
                    for (var i = 0; i < children.length; i = (i + 1) | 0) {
                        var child = Bridge.rValue(children[i]).transform;
                        var x = originalParentTransform.position.x + xOffset * i;
                        var z = originalParentTransform.position.z - zOffset * i;
                        child.position = new pc.Vec3( x, originalParentTransform.position.y, z );
                        child.localScale = child.localScale.$clone().clone().scale( sizeOffset );
                    }
                    var _discard3 = { };
                    var _discard4 = { };
                    var centerPosX = { };
                    PA.Utils.CalculateXPositionsFromList(T, children, _discard3, _discard4, centerPosX);
                    var _discard5 = { };
                    var _discard6 = { };
                    var centerPosY = { };
                    PA.Utils.CalculateYPositionsFromList(T, children, _discard5, _discard6, centerPosY);
                    var cardParent = new UnityEngine.GameObject.$ctor2("Hand Parent");
                    cardParent.transform.position = new pc.Vec3( centerPosX.v, centerPosY.v, Bridge.rValue(children[0]).transform.position.z );
                    var array = children;
                    $t = Bridge.getEnumerator(array);
                    try {
                        while ($t.moveNext()) {
                            var child2 = Bridge.rValue($t.Current);
Bridge.rValue(                            child2).transform.parent = cardParent.transform;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    centeredParentTransform.v = cardParent.transform;
                    centeredParentTransform.v.parent = originalParentTransform;
                },
                /*PA.Utils.ArrangeObjectsWithOffsetHorizontal$1:static end.*/

                /*PA.Utils.ArrangeObjectsWithOffsetHorizontal:static start.*/
                ArrangeObjectsWithOffsetHorizontal: function (T, originalParentTransform, centeredParentTransform, isUodate, xOffset, zOffset, sizeOffset) {
if ( TRACE ) { TRACE( "PA.Utils#ArrangeObjectsWithOffsetHorizontal", this ); }

                    var $t;
                    if (isUodate === void 0) { isUodate = true; }
                    if (xOffset === void 0) { xOffset = 0.3; }
                    if (zOffset === void 0) { zOffset = 0.2; }
                    if (sizeOffset === void 0) { sizeOffset = 1.0; }
                    var children = originalParentTransform.GetComponentsInChildren(T);
                    for (var i = 0; i < children.length; i = (i + 1) | 0) {
                        var child = Bridge.rValue(children[i]).transform;
                        var x = originalParentTransform.position.x + xOffset * i;
                        var z = originalParentTransform.position.z - zOffset * i;
                        child.position = new pc.Vec3( x, originalParentTransform.position.y, z );
                        child.localScale = child.localScale.$clone().clone().scale( sizeOffset );
                        child.transform.parent = originalParentTransform;
                    }
                    var _discard7 = { };
                    var _discard8 = { };
                    var centerPosX = { };
                    PA.Utils.CalculateXPositionsFromList(T, children, _discard7, _discard8, centerPosX);
                    var _discard9 = { };
                    var _discard10 = { };
                    var centerPosY = { };
                    PA.Utils.CalculateYPositionsFromList(T, children, _discard9, _discard10, centerPosY);
                    centeredParentTransform.transform.position = new pc.Vec3( centerPosX.v, centerPosY.v, Bridge.rValue(children[0]).transform.position.z );
                    var array = children;
                    $t = Bridge.getEnumerator(array);
                    try {
                        while ($t.moveNext()) {
                            var child2 = Bridge.rValue($t.Current);
Bridge.rValue(                            child2).transform.parent = centeredParentTransform.transform;
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                },
                /*PA.Utils.ArrangeObjectsWithOffsetHorizontal:static end.*/

                /*PA.Utils.ArrangeObjectsWithSpacing:static start.*/
                ArrangeObjectsWithSpacing: function (T, parentTransform, axisOrientation, spacing, isAnimated, animDuration) {
if ( TRACE ) { TRACE( "PA.Utils#ArrangeObjectsWithSpacing", this ); }

                    if (spacing === void 0) { spacing = 0.2; }
                    if (isAnimated === void 0) { isAnimated = false; }
                    if (animDuration === void 0) { animDuration = 0.25; }
                    var axis = { v : new UnityEngine.Vector3() };
                    PA.Utils.SetAxis(axisOrientation, axis);
                    var children = parentTransform.GetComponentsInChildren(T);
                    var totalWidth = PA.Utils.CalculateTotalWidth(T, children, spacing);
                    var startOffset = (0.0 - totalWidth) / 2.0;
                    var startPosition = parentTransform.transform.position.$clone().sub( axis.v.$clone().clone().scale( (totalWidth / 2.0) ) );
                    var currentOffset = 0.0;
                    for (var i = 0; i < children.length; i = (i + 1) | 0) {
                        var child = Bridge.rValue(children[i]).transform;
                        var objectWidth = PA.Utils.GetObjectWidth(child);
                        var newPosition = startPosition.$clone().add( axis.v.$clone().clone().scale( (currentOffset + objectWidth / 2.0) ) );
                        if (isAnimated) {
                            DG.Tweening.ShortcutExtensions.DOMove(child, newPosition.$clone(), animDuration);
                        } else {
                            child.position = newPosition.$clone();
                        }
                        currentOffset += objectWidth + spacing;
                    }
                },
                /*PA.Utils.ArrangeObjectsWithSpacing:static end.*/

                /*PA.Utils.SetAxis:static start.*/
                SetAxis: function (axisOrientation, axis) {
if ( TRACE ) { TRACE( "PA.Utils#SetAxis", this ); }

                    switch (axisOrientation) {
                        case PA.Utils.AxisOrientation.Horizontal: 
                            axis.v = pc.Vec3.RIGHT.clone();
                            break;
                        case PA.Utils.AxisOrientation.Vertical: 
                            axis.v = pc.Vec3.UP.clone();
                            break;
                        default: 
                            axis.v = pc.Vec3.ZERO.clone();
                            break;
                    }
                },
                /*PA.Utils.SetAxis:static end.*/

                /*PA.Utils.CalculateTotalWidth:static start.*/
                CalculateTotalWidth: function (T, children, spacing) {
if ( TRACE ) { TRACE( "PA.Utils#CalculateTotalWidth", this ); }

                    var totalWidth = 0.0;
                    for (var i = 0; i < children.length; i = (i + 1) | 0) {
                        totalWidth += PA.Utils.GetObjectWidth(Bridge.rValue(children[i]).transform);
                        if (i < ((children.length - 1) | 0)) {
                            totalWidth += spacing;
                        }
                    }
                    return totalWidth;
                },
                /*PA.Utils.CalculateTotalWidth:static end.*/

                /*PA.Utils.GetObjectWidth:static start.*/
                GetObjectWidth: function (obj) {
if ( TRACE ) { TRACE( "PA.Utils#GetObjectWidth", this ); }

                    var renderer = obj.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(renderer, null)) {
                        return renderer.bounds.halfExtents.$clone().scale( 2 ).x;
                    }
                    UnityEngine.Debug.LogError$2("Object has no renderer.");
                    return 0.0;
                },
                /*PA.Utils.GetObjectWidth:static end.*/

                /*PA.Utils.CalculateXPositionsFromList:static start.*/
                CalculateXPositionsFromList: function (T, children, minPosX, maxPosX, centerPosX) {
if ( TRACE ) { TRACE( "PA.Utils#CalculateXPositionsFromList", this ); }

                    var colA = Bridge.rValue(children[0]).GetComponent(UnityEngine.Collider);
                    var colB = Bridge.rValue(children[((children.length - 1) | 0)]).GetComponent(UnityEngine.Collider);
                    var sizeA = colA.bounds.halfExtents.$clone().scale( 2 ).x / 2.0;
                    minPosX.v = colA.transform.position.x - sizeA;
                    var sizeB = colB.bounds.halfExtents.$clone().scale( 2 ).x / 2.0;
                    maxPosX.v = colB.transform.position.x + sizeB;
                    centerPosX.v = (maxPosX.v + minPosX.v) / 2.0;
                },
                /*PA.Utils.CalculateXPositionsFromList:static end.*/

                /*PA.Utils.CalculateYPositionsFromList:static start.*/
                CalculateYPositionsFromList: function (T, children, minPosY, maxPosY, centerPosY) {
if ( TRACE ) { TRACE( "PA.Utils#CalculateYPositionsFromList", this ); }

                    var colA = Bridge.rValue(children[0]).GetComponent(UnityEngine.Collider);
                    var colB = Bridge.rValue(children[((children.length - 1) | 0)]).GetComponent(UnityEngine.Collider);
                    var sizeA = colA.bounds.halfExtents.$clone().scale( 2 ).y / 2.0;
                    minPosY.v = colA.transform.position.y - sizeA;
                    var sizeB = colB.bounds.halfExtents.$clone().scale( 2 ).y / 2.0;
                    maxPosY.v = colB.transform.position.y + sizeB;
                    centerPosY.v = (maxPosY.v + minPosY.v) / 2.0;
                },
                /*PA.Utils.CalculateYPositionsFromList:static end.*/

                /*PA.Utils.GetMouseScreenPosition:static start.*/
                GetMouseScreenPosition: function () {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseScreenPosition", this ); }

                    return UnityEngine.Input.mousePosition.$clone();
                },
                /*PA.Utils.GetMouseScreenPosition:static end.*/

                /*PA.Utils.GetMouseWorldPosition:static start.*/
                GetMouseWorldPosition: function () {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseWorldPosition", this ); }

                    var vec = PA.Utils.GetMouseWorldPositionWithZ$2(UnityEngine.Input.mousePosition.$clone(), UnityEngine.Camera.main);
                    vec.z = 0.0;
                    return vec.$clone();
                },
                /*PA.Utils.GetMouseWorldPosition:static end.*/

                /*PA.Utils.GetMouseWorldPosition$1:static start.*/
                GetMouseWorldPosition$1: function (objectWorldPosition) {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseWorldPosition$1", this ); }

                    var mouseScreenPos = UnityEngine.Input.mousePosition.$clone();
                    mouseScreenPos.z = UnityEngine.Camera.main.WorldToScreenPoint(objectWorldPosition).z;
                    return UnityEngine.Camera.main.ScreenToWorldPoint(mouseScreenPos);
                },
                /*PA.Utils.GetMouseWorldPosition$1:static end.*/

                /*PA.Utils.GetMouseWorldPositionWithZ:static start.*/
                GetMouseWorldPositionWithZ: function () {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseWorldPositionWithZ", this ); }

                    return PA.Utils.GetMouseWorldPositionWithZ$2(UnityEngine.Input.mousePosition.$clone(), UnityEngine.Camera.main);
                },
                /*PA.Utils.GetMouseWorldPositionWithZ:static end.*/

                /*PA.Utils.GetMouseWorldPositionWithZ$1:static start.*/
                GetMouseWorldPositionWithZ$1: function (worldCamera) {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseWorldPositionWithZ$1", this ); }

                    return PA.Utils.GetMouseWorldPositionWithZ$2(UnityEngine.Input.mousePosition.$clone(), worldCamera);
                },
                /*PA.Utils.GetMouseWorldPositionWithZ$1:static end.*/

                /*PA.Utils.GetMouseWorldPositionWithZ$2:static start.*/
                GetMouseWorldPositionWithZ$2: function (screenPosition, worldCamera) {
if ( TRACE ) { TRACE( "PA.Utils#GetMouseWorldPositionWithZ$2", this ); }

                    return worldCamera.ScreenToWorldPoint(screenPosition);
                },
                /*PA.Utils.GetMouseWorldPositionWithZ$2:static end.*/


            }
        }
    });
    /*PA.Utils end.*/

    /*PA.Utils+AxisOrientation start.*/
    Bridge.define("PA.Utils.AxisOrientation", {
        $kind: 1006,
        statics: {
            fields: {
                Horizontal: 0,
                Vertical: 1
            }
        }
    });
    /*PA.Utils+AxisOrientation end.*/

    /*ParticleEffectsLibrary start.*/
    Bridge.define("ParticleEffectsLibrary", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                GlobalAccess: null
            }
        },
        fields: {
            TotalEffects: 0,
            CurrentParticleEffectIndex: 0,
            CurrentParticleEffectNum: 0,
            ParticleEffectSpawnOffsets: null,
            ParticleEffectLifetimes: null,
            ParticleEffectPrefabs: null,
            effectNameString: null,
            currentActivePEList: null,
            spawnPosition: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#init", this ); }

                this.spawnPosition = new UnityEngine.Vector3();
                this.TotalEffects = 0;
                this.CurrentParticleEffectIndex = 0;
                this.CurrentParticleEffectNum = 0;
                this.effectNameString = "";
                this.spawnPosition = pc.Vec3.ZERO.clone();
            }
        },
        methods: {
            /*ParticleEffectsLibrary.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#Awake", this ); }

                ParticleEffectsLibrary.GlobalAccess = this;
                this.currentActivePEList = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.TotalEffects = this.ParticleEffectPrefabs.length;
                this.CurrentParticleEffectNum = 1;
                if (this.ParticleEffectSpawnOffsets.length !== this.TotalEffects) {
                    UnityEngine.Debug.LogError$2("ParticleEffectsLibrary-ParticleEffectSpawnOffset: Not all arrays match length, double check counts.");
                }
                if (this.ParticleEffectPrefabs.length !== this.TotalEffects) {
                    UnityEngine.Debug.LogError$2("ParticleEffectsLibrary-ParticleEffectPrefabs: Not all arrays match length, double check counts.");
                }
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + this.CurrentParticleEffectNum + " of " + this.TotalEffects + ")";
            },
            /*ParticleEffectsLibrary.Awake end.*/

            /*ParticleEffectsLibrary.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#Start", this ); }
 },
            /*ParticleEffectsLibrary.Start end.*/

            /*ParticleEffectsLibrary.GetCurrentPENameString start.*/
            GetCurrentPENameString: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#GetCurrentPENameString", this ); }

                return (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + this.CurrentParticleEffectNum + " of " + this.TotalEffects + ")";
            },
            /*ParticleEffectsLibrary.GetCurrentPENameString end.*/

            /*ParticleEffectsLibrary.PreviousParticleEffect start.*/
            PreviousParticleEffect: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#PreviousParticleEffect", this ); }

                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0.0 && this.currentActivePEList.Count > 0) {
                    for (var i = 0; i < this.currentActivePEList.Count; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(this.currentActivePEList.getItem(i), null)) {
                            UnityEngine.Object.Destroy(this.currentActivePEList.getItem(i).gameObject);
                        }
                    }
                    this.currentActivePEList.clear();
                }
                if (this.CurrentParticleEffectIndex > 0) {
                    this.CurrentParticleEffectIndex = (this.CurrentParticleEffectIndex - 1) | 0;
                } else {
                    this.CurrentParticleEffectIndex = (this.TotalEffects - 1) | 0;
                }
                this.CurrentParticleEffectNum = (this.CurrentParticleEffectIndex + 1) | 0;
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + this.CurrentParticleEffectNum + " of " + this.TotalEffects + ")";
            },
            /*ParticleEffectsLibrary.PreviousParticleEffect end.*/

            /*ParticleEffectsLibrary.NextParticleEffect start.*/
            NextParticleEffect: function () {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#NextParticleEffect", this ); }

                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0.0 && this.currentActivePEList.Count > 0) {
                    for (var i = 0; i < this.currentActivePEList.Count; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(this.currentActivePEList.getItem(i), null)) {
                            UnityEngine.Object.Destroy(this.currentActivePEList.getItem(i).gameObject);
                        }
                    }
                    this.currentActivePEList.clear();
                }
                if (this.CurrentParticleEffectIndex < ((this.TotalEffects - 1) | 0)) {
                    this.CurrentParticleEffectIndex = (this.CurrentParticleEffectIndex + 1) | 0;
                } else {
                    this.CurrentParticleEffectIndex = 0;
                }
                this.CurrentParticleEffectNum = (this.CurrentParticleEffectIndex + 1) | 0;
                this.effectNameString = (this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].name || "") + " (" + this.CurrentParticleEffectNum + " of " + this.TotalEffects + ")";
            },
            /*ParticleEffectsLibrary.NextParticleEffect end.*/

            /*ParticleEffectsLibrary.SpawnParticleEffect start.*/
            SpawnParticleEffect: function (positionInWorldToSpawn) {
if ( TRACE ) { TRACE( "ParticleEffectsLibrary#SpawnParticleEffect", this ); }

                this.spawnPosition = positionInWorldToSpawn.$clone().add( this.ParticleEffectSpawnOffsets[this.CurrentParticleEffectIndex] );
                var newParticleEffect = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex], this.spawnPosition, this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex].transform.rotation);
                newParticleEffect.name = System.String.concat("PE_", this.ParticleEffectPrefabs[this.CurrentParticleEffectIndex]);
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] === 0.0) {
                    this.currentActivePEList.add(newParticleEffect.transform);
                }
                this.currentActivePEList.add(newParticleEffect.transform);
                if (this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex] !== 0.0) {
                    UnityEngine.Object.Destroy$1(newParticleEffect, this.ParticleEffectLifetimes[this.CurrentParticleEffectIndex]);
                }
            },
            /*ParticleEffectsLibrary.SpawnParticleEffect end.*/


        }
    });
    /*ParticleEffectsLibrary end.*/

    /*PEButtonScript start.*/
    Bridge.define("PEButtonScript", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IPointerEnterHandler,UnityEngine.EventSystems.IPointerExitHandler],
        fields: {
            myButton: null,
            ButtonType: 0
        },
        alias: [
            "OnPointerEnter", "UnityEngine$EventSystems$IPointerEnterHandler$OnPointerEnter",
            "OnPointerExit", "UnityEngine$EventSystems$IPointerExitHandler$OnPointerExit"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PEButtonScript#init", this ); }

                this.ButtonType = ButtonTypes.NotDefined;
            }
        },
        methods: {
            /*PEButtonScript.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PEButtonScript#Start", this ); }

                this.myButton = Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.GetComponent(UnityEngine.UI.Button);
            },
            /*PEButtonScript.Start end.*/

            /*PEButtonScript.OnPointerEnter start.*/
            OnPointerEnter: function (eventData) {
if ( TRACE ) { TRACE( "PEButtonScript#OnPointerEnter", this ); }

                UICanvasManager.GlobalAccess.MouseOverButton = true;
                UICanvasManager.GlobalAccess.UpdateToolTip(this.ButtonType);
            },
            /*PEButtonScript.OnPointerEnter end.*/

            /*PEButtonScript.OnPointerExit start.*/
            OnPointerExit: function (eventData) {
if ( TRACE ) { TRACE( "PEButtonScript#OnPointerExit", this ); }

                UICanvasManager.GlobalAccess.MouseOverButton = false;
                UICanvasManager.GlobalAccess.ClearToolTip();
            },
            /*PEButtonScript.OnPointerExit end.*/

            /*PEButtonScript.OnButtonClicked start.*/
            OnButtonClicked: function () {
if ( TRACE ) { TRACE( "PEButtonScript#OnButtonClicked", this ); }

                UICanvasManager.GlobalAccess.UIButtonClick(this.ButtonType);
            },
            /*PEButtonScript.OnButtonClicked end.*/


        }
    });
    /*PEButtonScript end.*/

    /*PEDestoryTimed start.*/
    Bridge.define("PEDestoryTimed", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*PEDestoryTimed.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PEDestoryTimed#Start", this ); }
 },
            /*PEDestoryTimed.Start end.*/

            /*PEDestoryTimed.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PEDestoryTimed#Update", this ); }
 },
            /*PEDestoryTimed.Update end.*/


        }
    });
    /*PEDestoryTimed end.*/

    /*PhaseData start.*/
    Bridge.define("PhaseData", {
        fields: {
            phaseNumber: 0,
            animatedBubbleID: 0
        }
    });
    /*PhaseData end.*/

    /*Shoot start.*/
    Bridge.define("Shoot", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rb: null,
            projectileSpeed: 0,
            targetBubble: null,
            camAnimator01: null,
            camAnimator02: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Shoot#init", this ); }

                this.projectileSpeed = 20.0;
            }
        },
        methods: {
            /*Shoot.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Shoot#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    var direction = (this.targetBubble.transform.position.$clone().sub( this.transform.position )).clone().normalize().$clone();
                    this.rb.velocity = direction.$clone().clone().scale( this.projectileSpeed );
                }
            },
            /*Shoot.Update end.*/

            /*Shoot.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "Shoot#OnTriggerEnter", this ); }

                this.rb.useGravity = true;
                this.targetBubble.TriggerBubble();
                AnimationHandler.SetCamActiveState(this.camAnimator01, true);
                AnimationHandler.SetCamActiveState(this.camAnimator02, true);
            },
            /*Shoot.OnTriggerEnter end.*/


        }
    });
    /*Shoot end.*/

    /*UICanvasManager start.*/
    Bridge.define("UICanvasManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                GlobalAccess: null
            }
        },
        fields: {
            MouseOverButton: false,
            PENameText: null,
            ToolTipText: null,
            rayHit: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UICanvasManager#init", this ); }

                this.rayHit = new UnityEngine.RaycastHit();
                this.MouseOverButton = false;
            }
        },
        methods: {
            /*UICanvasManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Awake", this ); }

                UICanvasManager.GlobalAccess = this;
            },
            /*UICanvasManager.Awake end.*/

            /*UICanvasManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.Start end.*/

            /*UICanvasManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UICanvasManager#Update", this ); }

                if (!this.MouseOverButton && UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.SpawnCurrentParticleEffect();
                }
                if (UnityEngine.Input.GetKeyUp(UnityEngine.KeyCode.A)) {
                    this.SelectPreviousPE();
                }
                if (UnityEngine.Input.GetKeyUp(UnityEngine.KeyCode.D)) {
                    this.SelectNextPE();
                }
            },
            /*UICanvasManager.Update end.*/

            /*UICanvasManager.UpdateToolTip start.*/
            UpdateToolTip: function (toolTipType) {
if ( TRACE ) { TRACE( "UICanvasManager#UpdateToolTip", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ToolTipText, null)) {
                    switch (toolTipType) {
                        case ButtonTypes.Previous: 
                            this.ToolTipText.text = "Select Previous Particle Effect";
                            break;
                        case ButtonTypes.Next: 
                            this.ToolTipText.text = "Select Next Particle Effect";
                            break;
                    }
                }
            },
            /*UICanvasManager.UpdateToolTip end.*/

            /*UICanvasManager.ClearToolTip start.*/
            ClearToolTip: function () {
if ( TRACE ) { TRACE( "UICanvasManager#ClearToolTip", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.ToolTipText, null)) {
                    this.ToolTipText.text = "";
                }
            },
            /*UICanvasManager.ClearToolTip end.*/

            /*UICanvasManager.SelectPreviousPE start.*/
            SelectPreviousPE: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SelectPreviousPE", this ); }

                ParticleEffectsLibrary.GlobalAccess.PreviousParticleEffect();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.SelectPreviousPE end.*/

            /*UICanvasManager.SelectNextPE start.*/
            SelectNextPE: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SelectNextPE", this ); }

                ParticleEffectsLibrary.GlobalAccess.NextParticleEffect();
                if (UnityEngine.MonoBehaviour.op_Inequality(this.PENameText, null)) {
                    this.PENameText.text = ParticleEffectsLibrary.GlobalAccess.GetCurrentPENameString();
                }
            },
            /*UICanvasManager.SelectNextPE end.*/

            /*UICanvasManager.SpawnCurrentParticleEffect start.*/
            SpawnCurrentParticleEffect: function () {
if ( TRACE ) { TRACE( "UICanvasManager#SpawnCurrentParticleEffect", this ); }

                var mouseRay = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition);
                if (UnityEngine.Physics.Raycast$1(mouseRay, Bridge.ref(this, "rayHit"))) {
                    ParticleEffectsLibrary.GlobalAccess.SpawnParticleEffect(this.rayHit.point.$clone());
                }
            },
            /*UICanvasManager.SpawnCurrentParticleEffect end.*/

            /*UICanvasManager.UIButtonClick start.*/
            UIButtonClick: function (buttonTypeClicked) {
if ( TRACE ) { TRACE( "UICanvasManager#UIButtonClick", this ); }

                switch (buttonTypeClicked) {
                    case ButtonTypes.Previous: 
                        this.SelectPreviousPE();
                        break;
                    case ButtonTypes.Next: 
                        this.SelectNextPE();
                        break;
                }
            },
            /*UICanvasManager.UIButtonClick end.*/


        }
    });
    /*UICanvasManager end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            btnBlue: null
        },
        methods: {
            /*UIManager.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "UIManager#OnEnable", this ); }

                this.btnBlue.onClick.AddListener(function () { });
            },
            /*UIManager.OnEnable end.*/


        }
    });
    /*UIManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections","UnityEngine.EventSystems","System.Collections.Generic","TMPro","UnityEngine.UI","PA","EpicToonFX","DG.Tweening","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AnimationHandler start.*/
    $m("AnimationHandler", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"SetBubbleTriggeredState","is":true,"t":8,"pi":[{"n":"animator","pt":$n[0].Animator,"ps":0},{"n":"toggle","pt":$n[1].Boolean,"ps":1}],"sn":"SetBubbleTriggeredState","rt":$n[1].Void,"p":[$n[0].Animator,$n[1].Boolean]},{"a":2,"n":"SetCamActiveState","is":true,"t":8,"pi":[{"n":"animator","pt":$n[0].Animator,"ps":0},{"n":"toggle","pt":$n[1].Boolean,"ps":1}],"sn":"SetCamActiveState","rt":$n[1].Void,"p":[$n[0].Animator,$n[1].Boolean]},{"a":2,"n":"IS_CAM_ACTIVE","is":true,"t":4,"rt":$n[1].String,"sn":"IS_CAM_ACTIVE"},{"a":2,"n":"IS_TRIGGERED","is":true,"t":4,"rt":$n[1].String,"sn":"IS_TRIGGERED"}]}; }, $n);
    /*AnimationHandler end.*/

    /*Bubble start.*/
    $m("Bubble", function () { return {"nested":[Bubble.Status],"att":1056769,"a":2,"at":[new System.SerializableAttribute(),new SelectionBase()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ActivateGravity","t":8,"sn":"ActivateGravity","rt":$n[1].Void},{"a":1,"n":"AddToNearbyBubblesList","t":8,"sn":"AddToNearbyBubblesList","rt":$n[1].Void},{"a":1,"n":"BubbleIsSetup","t":8,"sn":"BubbleIsSetup","rt":$n[2].IEnumerator},{"a":2,"n":"BubbleSetup","t":8,"pi":[{"n":"id","pt":BubbleID,"ps":0},{"n":"color","pt":$n[0].Color,"ps":1},{"n":"material","pt":$n[0].Material,"ps":2},{"n":"phaseNumber","pt":$n[1].Int32,"ps":3},{"n":"orderNumber","pt":$n[1].Int32,"ps":4}],"sn":"BubbleSetup","rt":$n[1].Void,"p":[BubbleID,$n[0].Color,$n[0].Material,$n[1].Int32,$n[1].Int32]},{"a":2,"n":"DestroyBubble","t":8,"sn":"DestroyBubble","rt":$n[1].Void},{"a":2,"n":"DestroyBubble","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0}],"sn":"DestroyBubble$1","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[1].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[1].Void},{"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerExit","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerExit","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"ResetNearbyBubblesList","t":8,"sn":"ResetNearbyBubblesList","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"StartAnimationTimer","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0}],"sn":"StartAnimationTimer","rt":$n[2].IEnumerator,"p":[$n[1].Single]},{"a":2,"n":"TriggerBubble","t":8,"sn":"TriggerBubble","rt":$n[1].Void},{"a":2,"n":"TriggerBubbleAnimation","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0}],"sn":"TriggerBubbleAnimation","rt":$n[1].Void,"p":[$n[1].Single]},{"a":2,"n":"UpdateOrderNumber","t":8,"pi":[{"n":"_orderNumber","pt":$n[1].Int32,"ps":0}],"sn":"UpdateOrderNumber","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"UpdatePhaseNumber","t":8,"pi":[{"n":"_phaseNumber","pt":$n[1].Int32,"ps":0}],"sn":"UpdatePhaseNumber","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"_bubbleID","t":16,"rt":BubbleID,"g":{"a":2,"n":"get__bubbleID","t":8,"rt":BubbleID,"fg":"_bubbleID","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},"fn":"_bubbleID"},{"a":2,"n":"_bubbleVisualTransform","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get__bubbleVisualTransform","t":8,"rt":$n[0].Transform,"fg":"_bubbleVisualTransform"},"fn":"_bubbleVisualTransform"},{"a":2,"n":"_material","t":16,"rt":$n[0].Material,"g":{"a":2,"n":"get__material","t":8,"rt":$n[0].Material,"fg":"_material"},"fn":"_material"},{"a":2,"n":"_nearbyBubblesList","t":16,"rt":$n[4].List$1(Bubble),"g":{"a":2,"n":"get__nearbyBubblesList","t":8,"rt":$n[4].List$1(Bubble),"fg":"_nearbyBubblesList"},"fn":"_nearbyBubblesList"},{"a":2,"n":"_orderNumber","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get__orderNumber","t":8,"rt":$n[1].Int32,"fg":"_orderNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"_orderNumber"},{"a":2,"n":"_phaseNumber","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get__phaseNumber","t":8,"rt":$n[1].Int32,"fg":"_phaseNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"_phaseNumber"},{"a":2,"n":"_status","t":16,"rt":Bubble.Status,"g":{"a":2,"n":"get__status","t":8,"rt":Bubble.Status,"fg":"_status","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}},"fn":"_status"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"animator","t":4,"rt":$n[0].Animator,"sn":"animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boxCollider","t":4,"rt":$n[0].BoxCollider,"sn":"boxCollider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubbleID","t":4,"rt":BubbleID,"sn":"bubbleID","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubbleVisualTransform","t":4,"rt":$n[0].Transform,"sn":"bubbleVisualTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canUpdateData","t":4,"rt":$n[1].Boolean,"sn":"canUpdateData","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasTransform","t":4,"rt":$n[0].Transform,"sn":"canvasTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"color","t":4,"rt":$n[0].Color,"sn":"color"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"difuseColor","t":4,"rt":$n[0].Color,"sn":"difuseColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"emissiveColor","t":4,"rt":$n[0].Color,"sn":"emissiveColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isSelected","t":4,"rt":$n[1].Boolean,"sn":"isSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"isSetup","t":4,"rt":$n[1].Boolean,"sn":"isSetup","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"material","t":4,"rt":$n[0].Material,"sn":"material"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"nearbyBubblesList","t":4,"rt":$n[4].List$1(Bubble),"sn":"nearbyBubblesList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orderNumber","t":4,"rt":$n[1].Int32,"sn":"orderNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orderNumberText","t":4,"rt":$n[5].TMP_Text,"sn":"orderNumberText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"phaseNumber","t":4,"rt":$n[1].Int32,"sn":"phaseNumber","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"phaseNumberText","t":4,"rt":$n[5].TMP_Text,"sn":"phaseNumberText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[0].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rendererBubble","t":4,"rt":$n[0].Renderer,"sn":"rendererBubble"},{"a":1,"n":"selectedCheck","t":4,"rt":$n[1].Int32,"sn":"selectedCheck","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"status","t":4,"rt":Bubble.Status,"sn":"status","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}}]}; }, $n);
    /*Bubble end.*/

    /*Bubble+Status start.*/
    $m("Bubble.Status", function () { return {"td":Bubble,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Idle","is":true,"t":4,"rt":Bubble.Status,"sn":"Idle","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}},{"a":2,"n":"Selected","is":true,"t":4,"rt":Bubble.Status,"sn":"Selected","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}},{"a":2,"n":"Setup","is":true,"t":4,"rt":Bubble.Status,"sn":"Setup","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}},{"a":2,"n":"Spawned","is":true,"t":4,"rt":Bubble.Status,"sn":"Spawned","box":function ($v) { return Bridge.box($v, Bubble.Status, System.Enum.toStringFn(Bubble.Status));}}]}; }, $n);
    /*Bubble+Status end.*/

    /*BubbleID start.*/
    $m("BubbleID", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"darkBlue","is":true,"t":4,"rt":BubbleID,"sn":"darkBlue","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"green","is":true,"t":4,"rt":BubbleID,"sn":"green","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"lightBlue","is":true,"t":4,"rt":BubbleID,"sn":"lightBlue","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"pink","is":true,"t":4,"rt":BubbleID,"sn":"pink","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"red","is":true,"t":4,"rt":BubbleID,"sn":"red","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"yellow","is":true,"t":4,"rt":BubbleID,"sn":"yellow","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}}]}; }, $n);
    /*BubbleID end.*/

    /*BubbleManager start.*/
    $m("BubbleManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":2,"n":"SetSelectedBubble","t":8,"pi":[{"n":"bubble","pt":Bubble,"ps":0}],"sn":"SetSelectedBubble","rt":$n[1].Void,"p":[Bubble]},{"a":1,"n":"TriggerBubbleChainReaction","t":8,"sn":"TriggerBubbleChainReaction","rt":$n[1].Void},{"a":2,"n":"UpdateAllNearbyBubblesLists","t":8,"sn":"UpdateAllNearbyBubblesLists","rt":$n[1].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":BubbleManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":BubbleManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[BubbleManager],"rt":$n[1].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"_bubblePrefab","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get__bubblePrefab","t":8,"rt":$n[0].Transform,"fg":"_bubblePrefab"},"fn":"_bubblePrefab"},{"a":2,"n":"_bubbleTypeList","t":16,"rt":$n[4].List$1(BubbleType),"g":{"a":2,"n":"get__bubbleTypeList","t":8,"rt":$n[4].List$1(BubbleType),"fg":"_bubbleTypeList"},"fn":"_bubbleTypeList"},{"a":2,"n":"_layerMask","t":16,"rt":$n[0].LayerMask,"g":{"a":2,"n":"get__layerMask","t":8,"rt":$n[0].LayerMask,"fg":"_layerMask"},"fn":"_layerMask"},{"a":2,"n":"_selectedBubble","t":16,"rt":Bubble,"g":{"a":2,"n":"get__selectedBubble","t":8,"rt":Bubble,"fg":"_selectedBubble"},"fn":"_selectedBubble"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubblePrefab","t":4,"rt":$n[0].Transform,"sn":"bubblePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubbleTypeList","t":4,"rt":$n[4].List$1(BubbleType),"sn":"bubbleTypeList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"layerMask","t":4,"rt":$n[0].LayerMask,"sn":"layerMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"selectedBubble","t":4,"rt":Bubble,"sn":"selectedBubble"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":BubbleManager,"sn":"Instance"}]}; }, $n);
    /*BubbleManager end.*/

    /*BubbleType start.*/
    $m("BubbleType", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsID","t":8,"pi":[{"n":"id","pt":BubbleID,"ps":0}],"sn":"IsID","rt":$n[1].Boolean,"p":[BubbleID],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"bubbleID","t":4,"rt":BubbleID,"sn":"bubbleID","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"color","t":4,"rt":$n[0].Color,"sn":"color"},{"a":2,"n":"material","t":4,"rt":$n[0].Material,"sn":"material"}]}; }, $n);
    /*BubbleType end.*/

    /*ButtonTypes start.*/
    $m("ButtonTypes", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Next","is":true,"t":4,"rt":ButtonTypes,"sn":"Next","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":2,"n":"NotDefined","is":true,"t":4,"rt":ButtonTypes,"sn":"NotDefined","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":2,"n":"Previous","is":true,"t":4,"rt":ButtonTypes,"sn":"Previous","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}}]}; }, $n);
    /*ButtonTypes end.*/

    /*ChainEventsManager start.*/
    $m("ChainEventsManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CalculateTotalChainEventsDelay","t":8,"pi":[{"n":"delay","pt":$n[1].Single,"ps":0},{"n":"totalDelay","out":true,"pt":$n[1].Single,"ps":1}],"sn":"CalculateTotalChainEventsDelay","rt":$n[1].Void,"p":[$n[1].Single,$n[1].Single]},{"a":1,"n":"EndOfChainEvents","t":8,"pi":[{"n":"totalDelay","pt":$n[1].Single,"ps":0},{"n":"delayBeforeNextPhase","pt":$n[1].Single,"ps":1},{"n":"delayBeforeDestroy","pt":$n[1].Single,"ps":2},{"n":"bubbleList","pt":$n[4].List$1(Bubble),"ps":3}],"sn":"EndOfChainEvents","rt":$n[2].IEnumerator,"p":[$n[1].Single,$n[1].Single,$n[1].Single,$n[4].List$1(Bubble)]},{"a":1,"n":"GameEventsManager_OnBubbleSelected","t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"e","pt":$n[1].Object,"ps":1}],"sn":"GameEventsManager_OnBubbleSelected","rt":$n[1].Void,"p":[$n[1].Object,$n[1].Object]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[1].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"TriggerChainEvents","t":8,"sn":"TriggerChainEvents","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPhase","t":4,"rt":$n[1].Int32,"sn":"currentPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayBeforeDestroy","t":4,"rt":$n[1].Single,"sn":"delayBeforeDestroy","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"delayBeforeNextPhase","t":4,"rt":$n[1].Single,"sn":"delayBeforeNextPhase","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"phaseDataList","t":4,"rt":$n[4].List$1(PhaseData),"sn":"phaseDataList"}]}; }, $n);
    /*ChainEventsManager end.*/

    /*ETFXProjectileScript start.*/
    $m("ETFXProjectileScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"hit","pt":$n[0].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[1].Void,"p":[$n[0].Collision]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"hasCollided","t":4,"rt":$n[1].Boolean,"sn":"hasCollided","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"impactNormal","t":4,"rt":$n[0].Vector3,"sn":"impactNormal"},{"a":2,"n":"impactParticle","t":4,"rt":$n[0].GameObject,"sn":"impactParticle"},{"a":2,"n":"muzzleParticle","t":4,"rt":$n[0].GameObject,"sn":"muzzleParticle"},{"a":2,"n":"projectileParticle","t":4,"rt":$n[0].GameObject,"sn":"projectileParticle"},{"a":2,"n":"trailParticles","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"trailParticles"}]}; }, $n);
    /*ETFXProjectileScript end.*/

    /*ETFXSceneManager start.*/
    $m("ETFXSceneManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LoadScene1","t":8,"sn":"LoadScene1","rt":$n[1].Void},{"a":2,"n":"LoadScene10","t":8,"sn":"LoadScene10","rt":$n[1].Void},{"a":2,"n":"LoadScene11","t":8,"sn":"LoadScene11","rt":$n[1].Void},{"a":2,"n":"LoadScene12","t":8,"sn":"LoadScene12","rt":$n[1].Void},{"a":2,"n":"LoadScene13","t":8,"sn":"LoadScene13","rt":$n[1].Void},{"a":2,"n":"LoadScene2","t":8,"sn":"LoadScene2","rt":$n[1].Void},{"a":2,"n":"LoadScene3","t":8,"sn":"LoadScene3","rt":$n[1].Void},{"a":2,"n":"LoadScene4","t":8,"sn":"LoadScene4","rt":$n[1].Void},{"a":2,"n":"LoadScene5","t":8,"sn":"LoadScene5","rt":$n[1].Void},{"a":2,"n":"LoadScene6","t":8,"sn":"LoadScene6","rt":$n[1].Void},{"a":2,"n":"LoadScene7","t":8,"sn":"LoadScene7","rt":$n[1].Void},{"a":2,"n":"LoadScene8","t":8,"sn":"LoadScene8","rt":$n[1].Void},{"a":2,"n":"LoadScene9","t":8,"sn":"LoadScene9","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"GUIHide","t":4,"rt":$n[1].Boolean,"sn":"GUIHide","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GUIHide2","t":4,"rt":$n[1].Boolean,"sn":"GUIHide2","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"GUIHide3","t":4,"rt":$n[1].Boolean,"sn":"GUIHide3","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ETFXSceneManager end.*/

    /*FunctionTimer start.*/
    $m("FunctionTimer", function () { return {"nested":[FunctionTimer.MonoBehaviourHook],"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"p":[Function,$n[1].Single,$n[1].String,$n[0].GameObject],"pi":[{"n":"action","pt":Function,"ps":0},{"n":"timer","pt":$n[1].Single,"ps":1},{"n":"timerName","pt":$n[1].String,"ps":2},{"n":"gameObject","pt":$n[0].GameObject,"ps":3}],"sn":"ctor"},{"a":2,"n":"Create","is":true,"t":8,"pi":[{"n":"action","pt":Function,"ps":0},{"n":"timer","pt":$n[1].Single,"ps":1},{"n":"timerName","dv":null,"o":true,"pt":$n[1].String,"ps":2}],"sn":"Create","rt":FunctionTimer,"p":[Function,$n[1].Single,$n[1].String]},{"a":1,"n":"DestroySelf","t":8,"sn":"DestroySelf","rt":$n[1].Void},{"a":1,"n":"InitIfNeeded","is":true,"t":8,"sn":"InitIfNeeded","rt":$n[1].Void},{"a":1,"n":"RemoveTimer","is":true,"t":8,"pi":[{"n":"functionTimer","pt":FunctionTimer,"ps":0}],"sn":"RemoveTimer","rt":$n[1].Void,"p":[FunctionTimer]},{"a":2,"n":"StopTimer","is":true,"t":8,"pi":[{"n":"timerName","pt":$n[1].String,"ps":0}],"sn":"StopTimer","rt":$n[1].Void,"p":[$n[1].String]},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"action","t":4,"rt":Function,"sn":"action"},{"a":1,"n":"activeTimerList","is":true,"t":4,"rt":$n[4].List$1(FunctionTimer),"sn":"activeTimerList"},{"a":1,"n":"gameObject","t":4,"rt":$n[0].GameObject,"sn":"gameObject"},{"a":1,"n":"initGameObject","is":true,"t":4,"rt":$n[0].GameObject,"sn":"initGameObject"},{"a":1,"n":"isDestroyed","t":4,"rt":$n[1].Boolean,"sn":"isDestroyed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"timer","t":4,"rt":$n[1].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timerName","t":4,"rt":$n[1].String,"sn":"timerName"}]}; }, $n);
    /*FunctionTimer end.*/

    /*FunctionTimer+MonoBehaviourHook start.*/
    $m("FunctionTimer.MonoBehaviourHook", function () { return {"td":FunctionTimer,"att":1048579,"a":1,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"onUpdate","t":4,"rt":Function,"sn":"onUpdate"}]}; }, $n);
    /*FunctionTimer+MonoBehaviourHook end.*/

    /*GameEventsManager start.*/
    $m("GameEventsManager", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"GetComponentFromEvent","is":true,"t":8,"pi":[{"n":"valueInput","pt":System.Object,"ps":0},{"n":"gameEventType","pt":GameEventType,"ps":1},{"n":"t1","out":true,"pt":System.Object,"ps":2}],"tpc":1,"tprm":["T"],"sn":"GetComponentFromEvent","rt":$n[1].Void,"p":[System.Object,GameEventType,System.Object]},{"a":2,"n":"TriggerEvent","is":true,"t":8,"pi":[{"n":"sender","pt":$n[1].Object,"ps":0},{"n":"gameEventType","pt":GameEventType,"ps":1}],"sn":"TriggerEvent","rt":$n[1].Void,"p":[$n[1].Object,GameEventType]},{"a":2,"n":"OnBubbleDestroyed","is":true,"t":2,"ad":{"a":2,"n":"add_OnBubbleDestroyed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBubbleDestroyed","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBubbleDestroyed","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBubbleDestroyed","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnBubbleSelected","is":true,"t":2,"ad":{"a":2,"n":"add_OnBubbleSelected","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBubbleSelected","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBubbleSelected","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBubbleSelected","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnBubbleSpawned","is":true,"t":2,"ad":{"a":2,"n":"add_OnBubbleSpawned","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnBubbleSpawned","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnBubbleSpawned","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnBubbleSpawned","rt":$n[1].Void,"p":[Function]}},{"a":2,"n":"OnNextPhase","is":true,"t":2,"ad":{"a":2,"n":"add_OnNextPhase","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addOnNextPhase","rt":$n[1].Void,"p":[Function]},"r":{"a":2,"n":"remove_OnNextPhase","is":true,"t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeOnNextPhase","rt":$n[1].Void,"p":[Function]}}]}; }, $n);
    /*GameEventsManager end.*/

    /*GameEventType start.*/
    $m("GameEventType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnBubbleDestroyed","is":true,"t":4,"rt":GameEventType,"sn":"OnBubbleDestroyed","box":function ($v) { return Bridge.box($v, GameEventType, System.Enum.toStringFn(GameEventType));}},{"a":2,"n":"OnBubbleSelected","is":true,"t":4,"rt":GameEventType,"sn":"OnBubbleSelected","box":function ($v) { return Bridge.box($v, GameEventType, System.Enum.toStringFn(GameEventType));}},{"a":2,"n":"OnBubbleSpawned","is":true,"t":4,"rt":GameEventType,"sn":"OnBubbleSpawned","box":function ($v) { return Bridge.box($v, GameEventType, System.Enum.toStringFn(GameEventType));}},{"a":2,"n":"OnNextPhase","is":true,"t":4,"rt":GameEventType,"sn":"OnNextPhase","box":function ($v) { return Bridge.box($v, GameEventType, System.Enum.toStringFn(GameEventType));}}]}; }, $n);
    /*GameEventType end.*/

    /*GameInputManager start.*/
    $m("GameInputManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":GameInputManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":GameInputManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[GameInputManager],"rt":$n[1].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"isDragging","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_isDragging","t":8,"rt":$n[1].Boolean,"fg":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_isDragging","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"isDragging"},"fn":"isDragging"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":GameInputManager,"sn":"Instance"},{"a":1,"backing":true,"n":"<isDragging>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GameInputManager end.*/

    /*GameSceneManager start.*/
    $m("GameSceneManager", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"IsLevelCreatorScene","is":true,"t":8,"sn":"IsLevelCreatorScene","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LEVEL_CREATOR_SCENE","is":true,"t":4,"rt":$n[1].String,"sn":"LEVEL_CREATOR_SCENE"}]}; }, $n);
    /*GameSceneManager end.*/

    /*Level start.*/
    $m("Level", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddToLevelBubblesList","t":8,"pi":[{"n":"bubble","pt":Bubble,"ps":0}],"sn":"AddToLevelBubblesList","rt":$n[1].Void,"p":[Bubble]},{"a":2,"n":"RemoveBubblesFromLevel","t":8,"pi":[{"n":"bubble","pt":Bubble,"ps":0}],"sn":"RemoveBubblesFromLevel","rt":$n[1].Void,"p":[Bubble]},{"a":1,"n":"SetAsActiveLevel","t":8,"sn":"SetAsActiveLevel","rt":$n[1].Void},{"a":1,"n":"SetupBubbles","t":8,"sn":"SetupBubbles","rt":$n[1].Void},{"a":2,"n":"UpdatePhase","t":8,"sn":"UpdatePhase","rt":$n[1].Void},{"a":2,"n":"_bubbleAnimOffset","t":16,"rt":$n[1].Single,"g":{"a":2,"n":"get__bubbleAnimOffset","t":8,"rt":$n[1].Single,"fg":"_bubbleAnimOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"_bubbleAnimOffset"},{"a":2,"n":"_bubblesHolderTransform","t":16,"rt":$n[0].Transform,"g":{"a":2,"n":"get__bubblesHolderTransform","t":8,"rt":$n[0].Transform,"fg":"_bubblesHolderTransform"},"fn":"_bubblesHolderTransform"},{"a":2,"n":"_conceptName","t":16,"rt":$n[1].String,"g":{"a":2,"n":"get__conceptName","t":8,"rt":$n[1].String,"fg":"_conceptName"},"fn":"_conceptName"},{"a":2,"n":"_currentPhase","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get__currentPhase","t":8,"rt":$n[1].Int32,"fg":"_currentPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"_currentPhase"},{"a":2,"n":"_levelBubblesList","t":16,"rt":$n[4].List$1(Bubble),"g":{"a":2,"n":"get__levelBubblesList","t":8,"rt":$n[4].List$1(Bubble),"fg":"_levelBubblesList"},"fn":"_levelBubblesList"},{"a":2,"n":"_phaseDataList","t":16,"rt":$n[4].List$1(PhaseData),"g":{"a":2,"n":"get__phaseDataList","t":8,"rt":$n[4].List$1(PhaseData),"fg":"_phaseDataList"},"fn":"_phaseDataList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubbleAnimOffset","t":4,"rt":$n[1].Single,"sn":"bubbleAnimOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bubblesHolderTransform","t":4,"rt":$n[0].Transform,"sn":"bubblesHolderTransform"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"conceptName","t":4,"rt":$n[1].String,"sn":"conceptName"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"currentPhase","t":4,"rt":$n[1].Int32,"sn":"currentPhase","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelBubblesList","t":4,"rt":$n[4].List$1(Bubble),"sn":"levelBubblesList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"phaseDataList","t":4,"rt":$n[4].List$1(PhaseData),"sn":"phaseDataList"}]}; }, $n);
    /*Level end.*/

    /*LevelManager start.*/
    $m("LevelManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"SetActiveLevel","t":8,"pi":[{"n":"level","pt":Level,"ps":0}],"sn":"SetActiveLevel","rt":$n[1].Void,"p":[Level]},{"a":2,"n":"Instance","is":true,"t":16,"rt":LevelManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":LevelManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[LevelManager],"rt":$n[1].Void,"fs":"Instance","is":true},"fn":"Instance"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"_activeLevel","t":16,"rt":Level,"g":{"a":2,"n":"get__activeLevel","t":8,"rt":Level,"fg":"_activeLevel"},"fn":"_activeLevel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"activeLevel","t":4,"rt":Level,"sn":"activeLevel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"levelSelector","t":4,"rt":$n[4].List$1(LevelSelector),"sn":"levelSelector"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":LevelManager,"sn":"Instance"}]}; }, $n);
    /*LevelManager end.*/

    /*LevelSelector start.*/
    $m("LevelSelector", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"SetActive","t":8,"sn":"SetActive","rt":$n[1].Void},{"a":2,"n":"level","t":4,"rt":Level,"sn":"level"}]}; }, $n);
    /*LevelSelector end.*/

    /*ParticleEffectsLibrary start.*/
    $m("ParticleEffectsLibrary", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"GetCurrentPENameString","t":8,"sn":"GetCurrentPENameString","rt":$n[1].String},{"a":2,"n":"NextParticleEffect","t":8,"sn":"NextParticleEffect","rt":$n[1].Void},{"a":2,"n":"PreviousParticleEffect","t":8,"sn":"PreviousParticleEffect","rt":$n[1].Void},{"a":2,"n":"SpawnParticleEffect","t":8,"pi":[{"n":"positionInWorldToSpawn","pt":$n[0].Vector3,"ps":0}],"sn":"SpawnParticleEffect","rt":$n[1].Void,"p":[$n[0].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"CurrentParticleEffectIndex","t":4,"rt":$n[1].Int32,"sn":"CurrentParticleEffectIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"CurrentParticleEffectNum","t":4,"rt":$n[1].Int32,"sn":"CurrentParticleEffectNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GlobalAccess","is":true,"t":4,"rt":ParticleEffectsLibrary,"sn":"GlobalAccess"},{"a":2,"n":"ParticleEffectLifetimes","t":4,"rt":$n[1].Array.type(System.Single),"sn":"ParticleEffectLifetimes"},{"a":2,"n":"ParticleEffectPrefabs","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"ParticleEffectPrefabs"},{"a":2,"n":"ParticleEffectSpawnOffsets","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"ParticleEffectSpawnOffsets"},{"a":2,"n":"TotalEffects","t":4,"rt":$n[1].Int32,"sn":"TotalEffects","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"currentActivePEList","t":4,"rt":$n[4].List$1(UnityEngine.Transform),"sn":"currentActivePEList"},{"a":1,"n":"effectNameString","t":4,"rt":$n[1].String,"sn":"effectNameString"},{"a":1,"n":"spawnPosition","t":4,"rt":$n[0].Vector3,"sn":"spawnPosition"}]}; }, $n);
    /*ParticleEffectsLibrary end.*/

    /*PEButtonScript start.*/
    $m("PEButtonScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnButtonClicked","t":8,"sn":"OnButtonClicked","rt":$n[1].Void},{"a":2,"n":"OnPointerEnter","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerEnter","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":2,"n":"OnPointerExit","t":8,"pi":[{"n":"eventData","pt":$n[3].PointerEventData,"ps":0}],"sn":"OnPointerExit","rt":$n[1].Void,"p":[$n[3].PointerEventData]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"ButtonType","t":4,"rt":ButtonTypes,"sn":"ButtonType","box":function ($v) { return Bridge.box($v, ButtonTypes, System.Enum.toStringFn(ButtonTypes));}},{"a":1,"n":"myButton","t":4,"rt":$n[6].Button,"sn":"myButton"}]}; }, $n);
    /*PEButtonScript end.*/

    /*PEDestoryTimed start.*/
    $m("PEDestoryTimed", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void}]}; }, $n);
    /*PEDestoryTimed end.*/

    /*PhaseData start.*/
    $m("PhaseData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"animatedBubbleID","t":4,"rt":BubbleID,"sn":"animatedBubbleID","box":function ($v) { return Bridge.box($v, BubbleID, System.Enum.toStringFn(BubbleID));}},{"a":2,"n":"phaseNumber","t":4,"rt":$n[1].Int32,"sn":"phaseNumber","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*PhaseData end.*/

    /*Shoot start.*/
    $m("Shoot", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[0].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[0].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"camAnimator01","t":4,"rt":$n[0].Animator,"sn":"camAnimator01"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"camAnimator02","t":4,"rt":$n[0].Animator,"sn":"camAnimator02"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"projectileSpeed","t":4,"rt":$n[1].Single,"sn":"projectileSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rb","t":4,"rt":$n[0].Rigidbody,"sn":"rb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetBubble","t":4,"rt":Bubble,"sn":"targetBubble"}]}; }, $n);
    /*Shoot end.*/

    /*UICanvasManager start.*/
    $m("UICanvasManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":2,"n":"ClearToolTip","t":8,"sn":"ClearToolTip","rt":$n[1].Void},{"a":1,"n":"SelectNextPE","t":8,"sn":"SelectNextPE","rt":$n[1].Void},{"a":1,"n":"SelectPreviousPE","t":8,"sn":"SelectPreviousPE","rt":$n[1].Void},{"a":1,"n":"SpawnCurrentParticleEffect","t":8,"sn":"SpawnCurrentParticleEffect","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"UIButtonClick","t":8,"pi":[{"n":"buttonTypeClicked","pt":ButtonTypes,"ps":0}],"sn":"UIButtonClick","rt":$n[1].Void,"p":[ButtonTypes]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"UpdateToolTip","t":8,"pi":[{"n":"toolTipType","pt":ButtonTypes,"ps":0}],"sn":"UpdateToolTip","rt":$n[1].Void,"p":[ButtonTypes]},{"a":2,"n":"GlobalAccess","is":true,"t":4,"rt":UICanvasManager,"sn":"GlobalAccess"},{"a":2,"n":"MouseOverButton","t":4,"rt":$n[1].Boolean,"sn":"MouseOverButton","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PENameText","t":4,"rt":$n[6].Text,"sn":"PENameText"},{"a":2,"n":"ToolTipText","t":4,"rt":$n[6].Text,"sn":"ToolTipText"},{"a":1,"n":"rayHit","t":4,"rt":$n[0].RaycastHit,"sn":"rayHit"}]}; }, $n);
    /*UICanvasManager end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"btnBlue","t":4,"rt":$n[6].Button,"sn":"btnBlue"}]}; }, $n);
    /*UIManager end.*/

    /*PA.Timer start.*/
    $m("PA.Timer", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"CreateTimer","is":true,"t":8,"pi":[{"n":"timerMax","pt":$n[1].Single,"ps":0}],"sn":"CreateTimer","rt":$n[1].Void,"p":[$n[1].Single]}]}; }, $n);
    /*PA.Timer end.*/

    /*PA.TimerMonobehaviour start.*/
    $m("PA.TimerMonobehaviour", function () { return {"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"p":[$n[1].Single],"pi":[{"n":"timerMax","pt":$n[1].Single,"ps":0}],"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"timerMax","t":4,"rt":$n[1].Single,"sn":"timerMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"timerMin","t":4,"rt":$n[1].Single,"sn":"timerMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*PA.TimerMonobehaviour end.*/

    /*PA.Utils start.*/
    $m("PA.Utils", function () { return {"nested":[$n[7].Utils.AxisOrientation],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"ArrangeObjectsWithOffsetHorizontal","is":true,"t":8,"pi":[{"n":"originalParentTransform","pt":$n[0].Transform,"ps":0},{"n":"centeredParentTransform","out":true,"pt":$n[0].Transform,"ps":1},{"n":"xOffset","dv":0.3,"o":true,"pt":$n[1].Single,"ps":2},{"n":"zOffset","dv":0.2,"o":true,"pt":$n[1].Single,"ps":3},{"n":"sizeOffset","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4}],"tpc":1,"tprm":["T"],"sn":"ArrangeObjectsWithOffsetHorizontal$1","rt":$n[1].Void,"p":[$n[0].Transform,$n[0].Transform,$n[1].Single,$n[1].Single,$n[1].Single]},{"a":2,"n":"ArrangeObjectsWithOffsetHorizontal","is":true,"t":8,"pi":[{"n":"originalParentTransform","pt":$n[0].Transform,"ps":0},{"n":"centeredParentTransform","pt":$n[0].Transform,"ps":1},{"n":"isUodate","dv":true,"o":true,"pt":$n[1].Boolean,"ps":2},{"n":"xOffset","dv":0.3,"o":true,"pt":$n[1].Single,"ps":3},{"n":"zOffset","dv":0.2,"o":true,"pt":$n[1].Single,"ps":4},{"n":"sizeOffset","dv":1.0,"o":true,"pt":$n[1].Single,"ps":5}],"tpc":1,"tprm":["T"],"sn":"ArrangeObjectsWithOffsetHorizontal","rt":$n[1].Void,"p":[$n[0].Transform,$n[0].Transform,$n[1].Boolean,$n[1].Single,$n[1].Single,$n[1].Single]},{"a":2,"n":"ArrangeObjectsWithSpacing","is":true,"t":8,"pi":[{"n":"parentTransform","pt":$n[0].Transform,"ps":0},{"n":"axisOrientation","pt":$n[7].Utils.AxisOrientation,"ps":1},{"n":"spacing","dv":0.2,"o":true,"pt":$n[1].Single,"ps":2},{"n":"isAnimated","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"animDuration","dv":0.25,"o":true,"pt":$n[1].Single,"ps":4}],"tpc":1,"tprm":["T"],"sn":"ArrangeObjectsWithSpacing","rt":$n[1].Void,"p":[$n[0].Transform,$n[7].Utils.AxisOrientation,$n[1].Single,$n[1].Boolean,$n[1].Single]},{"a":1,"n":"CalculateTotalWidth","is":true,"t":8,"pi":[{"n":"children","pt":System.Array.type(System.Object),"ps":0},{"n":"spacing","pt":$n[1].Single,"ps":1}],"tpc":1,"tprm":["T"],"sn":"CalculateTotalWidth","rt":$n[1].Single,"p":[System.Array.type(System.Object),$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"CalculateXPositionsFromList","is":true,"t":8,"pi":[{"n":"children","pt":System.Array.type(System.Object),"ps":0},{"n":"minPosX","out":true,"pt":$n[1].Single,"ps":1},{"n":"maxPosX","out":true,"pt":$n[1].Single,"ps":2},{"n":"centerPosX","out":true,"pt":$n[1].Single,"ps":3}],"tpc":1,"tprm":["T"],"sn":"CalculateXPositionsFromList","rt":$n[1].Void,"p":[System.Array.type(System.Object),$n[1].Single,$n[1].Single,$n[1].Single]},{"a":1,"n":"CalculateYPositionsFromList","is":true,"t":8,"pi":[{"n":"children","pt":System.Array.type(System.Object),"ps":0},{"n":"minPosY","out":true,"pt":$n[1].Single,"ps":1},{"n":"maxPosY","out":true,"pt":$n[1].Single,"ps":2},{"n":"centerPosY","out":true,"pt":$n[1].Single,"ps":3}],"tpc":1,"tprm":["T"],"sn":"CalculateYPositionsFromList","rt":$n[1].Void,"p":[System.Array.type(System.Object),$n[1].Single,$n[1].Single,$n[1].Single]},{"a":2,"n":"GetDetectedAllObjectsList","is":true,"t":8,"pi":[{"n":"raycastAllCollider","pt":$n[0].Collider,"ps":0},{"n":"layerMask","pt":$n[0].LayerMask,"ps":1}],"tpc":1,"tprm":["T"],"sn":"GetDetectedAllObjectsList","rt":$n[4].List$1(System.Object),"p":[$n[0].Collider,$n[0].LayerMask]},{"a":2,"n":"GetMouseScreenPosition","is":true,"t":8,"sn":"GetMouseScreenPosition","rt":$n[0].Vector3},{"a":2,"n":"GetMouseWorldPosition","is":true,"t":8,"sn":"GetMouseWorldPosition","rt":$n[0].Vector3},{"a":2,"n":"GetMouseWorldPosition","is":true,"t":8,"pi":[{"n":"objectWorldPosition","pt":$n[0].Vector3,"ps":0}],"sn":"GetMouseWorldPosition$1","rt":$n[0].Vector3,"p":[$n[0].Vector3]},{"a":2,"n":"GetMouseWorldPositionWithZ","is":true,"t":8,"sn":"GetMouseWorldPositionWithZ","rt":$n[0].Vector3},{"a":2,"n":"GetMouseWorldPositionWithZ","is":true,"t":8,"pi":[{"n":"worldCamera","pt":$n[0].Camera,"ps":0}],"sn":"GetMouseWorldPositionWithZ$1","rt":$n[0].Vector3,"p":[$n[0].Camera]},{"a":2,"n":"GetMouseWorldPositionWithZ","is":true,"t":8,"pi":[{"n":"screenPosition","pt":$n[0].Vector3,"ps":0},{"n":"worldCamera","pt":$n[0].Camera,"ps":1}],"sn":"GetMouseWorldPositionWithZ$2","rt":$n[0].Vector3,"p":[$n[0].Vector3,$n[0].Camera]},{"a":1,"n":"GetObjectWidth","is":true,"t":8,"pi":[{"n":"obj","pt":$n[0].Transform,"ps":0}],"sn":"GetObjectWidth","rt":$n[1].Single,"p":[$n[0].Transform],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetRayHitFromMouse","is":true,"t":8,"sn":"GetRayHitFromMouse","rt":$n[0].RaycastHit},{"a":2,"n":"GetRayHitFromMouse","is":true,"t":8,"pi":[{"n":"layerMask","pt":$n[0].LayerMask,"ps":0}],"sn":"GetRayHitFromMouse$1","rt":$n[0].RaycastHit,"p":[$n[0].LayerMask]},{"a":2,"n":"IsRayHittingFromMousePosition","is":true,"t":8,"sn":"IsRayHittingFromMousePosition","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"IsRayHittingFromMousePosition","is":true,"t":8,"pi":[{"n":"layerMask","pt":$n[0].LayerMask,"ps":0}],"sn":"IsRayHittingFromMousePosition$1","rt":$n[1].Boolean,"p":[$n[0].LayerMask],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"SetAxis","is":true,"t":8,"pi":[{"n":"axisOrientation","pt":$n[7].Utils.AxisOrientation,"ps":0},{"n":"axis","out":true,"pt":$n[0].Vector3,"ps":1}],"sn":"SetAxis","rt":$n[1].Void,"p":[$n[7].Utils.AxisOrientation,$n[0].Vector3]}]}; }, $n);
    /*PA.Utils end.*/

    /*PA.Utils+AxisOrientation start.*/
    $m("PA.Utils.AxisOrientation", function () { return {"td":$n[7].Utils,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":$n[7].Utils.AxisOrientation,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, PA.Utils.AxisOrientation, System.Enum.toStringFn(PA.Utils.AxisOrientation));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":$n[7].Utils.AxisOrientation,"sn":"Vertical","box":function ($v) { return Bridge.box($v, PA.Utils.AxisOrientation, System.Enum.toStringFn(PA.Utils.AxisOrientation));}}]}; }, $n);
    /*PA.Utils+AxisOrientation end.*/

    /*EpicToonFX.ETFXButtonScript start.*/
    $m("EpicToonFX.ETFXButtonScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"getProjectileNames","t":8,"sn":"getProjectileNames","rt":$n[1].Void},{"a":2,"n":"overButton","t":8,"sn":"overButton","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Button","t":4,"rt":$n[0].GameObject,"sn":"Button"},{"a":1,"n":"MyButtonText","t":4,"rt":$n[6].Text,"sn":"MyButtonText"},{"a":2,"n":"buttonsDistance","t":4,"rt":$n[1].Single,"sn":"buttonsDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsSizeX","t":4,"rt":$n[1].Single,"sn":"buttonsSizeX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsSizeY","t":4,"rt":$n[1].Single,"sn":"buttonsSizeY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsX","t":4,"rt":$n[1].Single,"sn":"buttonsX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"buttonsY","t":4,"rt":$n[1].Single,"sn":"buttonsY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"effectScript","t":4,"rt":$n[8].ETFXFireProjectile,"sn":"effectScript"},{"a":1,"n":"projectileParticleName","t":4,"rt":$n[1].String,"sn":"projectileParticleName"},{"a":1,"n":"projectileScript","t":4,"rt":ETFXProjectileScript,"sn":"projectileScript"}]}; }, $n);
    /*EpicToonFX.ETFXButtonScript end.*/

    /*EpicToonFX.ETFXFireProjectile start.*/
    $m("EpicToonFX.ETFXFireProjectile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AdjustSpeed","t":8,"pi":[{"n":"newSpeed","pt":$n[1].Single,"ps":0}],"sn":"AdjustSpeed","rt":$n[1].Void,"p":[$n[1].Single]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"nextEffect","t":8,"sn":"nextEffect","rt":$n[1].Void},{"a":2,"n":"previousEffect","t":8,"sn":"previousEffect","rt":$n[1].Void},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"currentProjectile","t":4,"rt":$n[1].Int32,"sn":"currentProjectile","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"hit","t":4,"rt":$n[0].RaycastHit,"sn":"hit"},{"a":2,"n":"projectiles","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"projectiles"},{"a":1,"n":"selectedProjectileButton","t":4,"rt":$n[8].ETFXButtonScript,"sn":"selectedProjectileButton"},{"a":2,"n":"spawnPosition","t":4,"rt":$n[0].Transform,"sn":"spawnPosition"},{"a":2,"n":"speed","t":4,"rt":$n[1].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXFireProjectile end.*/

    /*EpicToonFX.ETFXLightFade start.*/
    $m("EpicToonFX.ETFXLightFade", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":1,"n":"initIntensity","t":4,"rt":$n[1].Single,"sn":"initIntensity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"killAfterLife","t":4,"rt":$n[1].Boolean,"sn":"killAfterLife","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"li","t":4,"rt":$n[0].Light,"sn":"li"},{"at":[new UnityEngine.HeaderAttribute("Seconds to dim the light")],"a":2,"n":"life","t":4,"rt":$n[1].Single,"sn":"life","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXLightFade end.*/

    /*EpicToonFX.ETFXLoopScript start.*/
    $m("EpicToonFX.ETFXLoopScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EffectLoop","t":8,"sn":"EffectLoop","rt":$n[2].IEnumerator},{"a":2,"n":"PlayEffect","t":8,"sn":"PlayEffect","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"chosenEffect","t":4,"rt":$n[0].GameObject,"sn":"chosenEffect"},{"a":2,"n":"loopTimeLimit","t":4,"rt":$n[1].Single,"sn":"loopTimeLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Spawn without")],"a":2,"n":"spawnWithoutLight","t":4,"rt":$n[1].Boolean,"sn":"spawnWithoutLight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"spawnWithoutSound","t":4,"rt":$n[1].Boolean,"sn":"spawnWithoutSound","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*EpicToonFX.ETFXLoopScript end.*/

    /*EpicToonFX.ETFXMouseOrbit start.*/
    $m("EpicToonFX.ETFXMouseOrbit", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ClampAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[1].Single,"ps":0},{"n":"min","pt":$n[1].Single,"ps":1},{"n":"max","pt":$n[1].Single,"ps":2}],"sn":"ClampAngle","rt":$n[1].Single,"p":[$n[1].Single,$n[1].Single,$n[1].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"distance","t":4,"rt":$n[1].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMax","t":4,"rt":$n[1].Single,"sn":"distanceMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"distanceMin","t":4,"rt":$n[1].Single,"sn":"distanceMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotationXAxis","t":4,"rt":$n[1].Single,"sn":"rotationXAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotationYAxis","t":4,"rt":$n[1].Single,"sn":"rotationYAxis","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"smoothTime","t":4,"rt":$n[1].Single,"sn":"smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[0].Transform,"sn":"target"},{"a":1,"n":"velocityX","t":4,"rt":$n[1].Single,"sn":"velocityX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocityY","t":4,"rt":$n[1].Single,"sn":"velocityY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"xSpeed","t":4,"rt":$n[1].Single,"sn":"xSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"yMaxLimit","t":4,"rt":$n[1].Single,"sn":"yMaxLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"yMinLimit","t":4,"rt":$n[1].Single,"sn":"yMinLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ySpeed","t":4,"rt":$n[1].Single,"sn":"ySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXMouseOrbit end.*/

    /*EpicToonFX.ETFXPitchRandomizer start.*/
    $m("EpicToonFX.ETFXPitchRandomizer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"randomPercent","t":4,"rt":$n[1].Single,"sn":"randomPercent","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*EpicToonFX.ETFXPitchRandomizer end.*/

    /*EpicToonFX.ETFXRotation start.*/
    $m("EpicToonFX.ETFXRotation", function () { return {"nested":[$n[8].ETFXRotation.spaceEnum],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"rotateSpace","t":4,"rt":$n[8].ETFXRotation.spaceEnum,"sn":"rotateSpace","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}},{"at":[new UnityEngine.HeaderAttribute("Rotate axises by degrees per second")],"a":2,"n":"rotateVector","t":4,"rt":$n[0].Vector3,"sn":"rotateVector"}]}; }, $n);
    /*EpicToonFX.ETFXRotation end.*/

    /*EpicToonFX.ETFXRotation+spaceEnum start.*/
    $m("EpicToonFX.ETFXRotation.spaceEnum", function () { return {"td":$n[8].ETFXRotation,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Local","is":true,"t":4,"rt":$n[8].ETFXRotation.spaceEnum,"sn":"Local","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}},{"a":2,"n":"World","is":true,"t":4,"rt":$n[8].ETFXRotation.spaceEnum,"sn":"World","box":function ($v) { return Bridge.box($v, EpicToonFX.ETFXRotation.spaceEnum, System.Enum.toStringFn(EpicToonFX.ETFXRotation.spaceEnum));}}]}; }, $n);
    /*EpicToonFX.ETFXRotation+spaceEnum end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[9].DOTweenCYInstruction.WaitForCompletion,$n[9].DOTweenCYInstruction.WaitForRewind,$n[9].DOTweenCYInstruction.WaitForKill,$n[9].DOTweenCYInstruction.WaitForElapsedLoops,$n[9].DOTweenCYInstruction.WaitForPosition,$n[9].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[1].Int32],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[1].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween,$n[1].Single],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[1].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[9].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Tween],"pi":[{"n":"tween","pt":$n[9].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[1].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[1].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[9].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[1].Int32,"p":[$n[10].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0},{"n":"to","pt":$n[1].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[1].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[1].Int32,"p":[$n[10].AudioMixer,$n[1].Single,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[1].Boolean,"ps":1}],"sn":"DOKill","rt":$n[1].Int32,"p":[$n[10].AudioMixer,$n[1].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].AudioSource,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPitch","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].AudioSource,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0},{"n":"floatName","pt":$n[1].String,"ps":1},{"n":"endValue","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[10].AudioMixer,$n[1].String,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[10].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[1].Int32,"p":[$n[10].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[9].Sequence,"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[12].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[12].Path,$n[1].Single,$n[9].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[9].PathType,$n[9].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"towards","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[9].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[11].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[9].AxisConstraint,$n[1].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":$n[12].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,$n[12].Path,$n[1].Single,$n[9].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[1].Single,$n[9].PathType,$n[9].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[9].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[11].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[0].Rigidbody,$n[0].Vector3,$n[1].Single,$n[9].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJump","rt":$n[9].Sequence,"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[12].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[12].Path,$n[1].Single,$n[9].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[9].PathType,$n[9].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMove","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":$n[12].Path,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,$n[12].Path,$n[1].Single,$n[9].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[9].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[9].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[1].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[1].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[1].Single,$n[9].PathType,$n[9].PathMode,$n[1].Int32,$n[1].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DORotate","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].Rigidbody2D,$n[1].Single,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[9].Tweener,"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[0].SpriteRenderer,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[0].SpriteRenderer,pc.ColorGradient,$n[1].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[9].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector3,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector3,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[9].Tweener,"p":[$n[6].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[9].Tweener,"p":[$n[6].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[9].Tweener,"p":[$n[6].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$1","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$2","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[0].Color,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOColor$3","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[0].Color,$n[1].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"fromValue","pt":$n[1].Int32,"ps":1},{"n":"endValue","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[13].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[11].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[6].Text,$n[1].Int32,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[13].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[0].CanvasGroup,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$1","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Graphic,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$2","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$3","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Outline,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFade$4","rt":$n[11].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[6].Text,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Image,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[6].Image,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[9].Tweener,"p":[$n[6].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"jumpPower","pt":$n[1].Single,"ps":2},{"n":"numJumps","pt":$n[1].Int32,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[9].Sequence,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[9].Tweener,"p":[$n[6].ScrollRect,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivot","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotX","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOPivotY","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].LayoutElement,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].LayoutElement,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"punch","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[9].Tweener,"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Outline,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOScale","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[6].Outline,$n[0].Vector2,$n[1].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[1].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[9].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[9].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[1].Single,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[9].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"duration","pt":$n[1].Single,"ps":1},{"n":"strength","pt":$n[0].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[1].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[1].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[1].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[9].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[9].Tweener,"p":[$n[0].RectTransform,$n[1].Single,$n[0].Vector2,$n[1].Int32,$n[1].Single,$n[1].Boolean,$n[1].Boolean,$n[9].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"center","pt":$n[0].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[1].Single,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[1].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Single,$n[1].Boolean,$n[1].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].RectTransform,$n[0].Vector2,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Text,"ps":0},{"n":"endValue","pt":$n[1].String,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[1].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[9].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[1].String,"ps":5}],"sn":"DOText","rt":$n[11].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[6].Text,$n[1].String,$n[1].Single,$n[1].Boolean,$n[9].ScrambleMode,$n[1].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].Slider,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOValue","rt":$n[11].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[6].Slider,$n[1].Single,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[6].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Single,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[9].Tweener,"p":[$n[6].ScrollRect,$n[1].Single,$n[1].Single,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[9].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].RectTransform,"ps":0},{"n":"to","pt":$n[0].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[0].Vector2,"p":[$n[0].RectTransform,$n[0].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[1].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[9].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[1].String,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[9].Sequence,"p":[$n[0].Material,pc.ColorGradient,$n[1].String,$n[1].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOOffset","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Material,"ps":0},{"n":"endValue","pt":$n[0].Vector2,"ps":1},{"n":"propertyID","pt":$n[1].Int32,"ps":2},{"n":"duration","pt":$n[1].Single,"ps":3}],"sn":"DOTiling","rt":$n[11].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[0].Material,$n[0].Vector2,$n[1].Int32,$n[1].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[1].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Int32,$n[1].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"position","pt":$n[1].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Single,$n[1].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[9].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[1].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[0].CustomYieldInstruction,"p":[$n[9].Tween,$n[1].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[9].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[1].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[1].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[1].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[9].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[1].Boolean,"ps":1},{"n":"isLocal","pt":$n[1].Boolean,"ps":2},{"n":"path","pt":$n[12].Path,"ps":3},{"n":"duration","pt":$n[1].Single,"ps":4},{"n":"pathMode","pt":$n[9].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[11].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[0].MonoBehaviour,$n[1].Boolean,$n[1].Boolean,$n[12].Path,$n[1].Single,$n[9].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[0].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[1].Boolean,"p":[$n[0].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[14].PathOptions,"ps":0},{"n":"t","pt":$n[9].Tween,"ps":1},{"n":"newRot","pt":$n[0].Quaternion,"ps":2},{"n":"trans","pt":$n[0].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[1].Void,"p":[$n[14].PathOptions,$n[9].Tween,$n[0].Quaternion,$n[0].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    }});
