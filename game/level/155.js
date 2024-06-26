oS.Init(
    {
        PName: [
            oPeashooter,
            oSunFlower,
            oCherryBomb,
            oWallNut,
            oPotatoMine,
            oSnowPea,
            oChomper,
            oRepeater,
            oPuffShroom,
            oSunShroom,
            oFumeShroom,
            oGraveBuster,
            oHypnoShroom,
            oScaredyShroom,
            oIceShroom,
            oDoomShroom,
            oLilyPad,
            oSquash,
            oThreepeater,
            oTangleKlep,
            oJalapeno,
            oSpikeweed,
            oTorchwood,
            oTallNut,
            oCactus,
            oPlantern,
            oSplitPea,
            oStarfruit,
            oPumpkinHead,
            oFlowerPot,
            oCoffeeBean,
            oGarlic,
            oSeaShroom,
            oOxygen,
            ostar,
            oTTS,
            oSeaAnemone,
            oGatlingPea,
            oGloomShroom,
            oTwinSunflower,
            oSpikerock,
            oTenManNut,
            oSnowRepeater,
            oCattail,
            oLotusRoot,
            oIceFumeShroom,
        ],
        ZName: [
            oZombie,
            oZombie2,
            oZombie3,
            oConeheadZombie,
            oBucketheadZombie,
            oNewspaperZombie,
            oJackinTheBoxZombie,
            oFootballZombie,
            oDancingZombie,
            oScreenDoorZombie,
            oBackupDancer,
            oLGBOSS,
        ],
        PicArr: (function () {
            return ["images/interface/background1.jpg"];
        })(),
        backgroundImage: "images/interface/background1.jpg",
        CanSelectCard: 1,
        LevelName: "常青之塔 5层",
        LvlEName: 155,
        SunNum: 3500,
        LargeWaveFlag: { 10: $("imgFlag2") },
    },
    {
        AZ: [
            [oZombie, 3, 1],
            [oZombie2, 2, 1],
            [oZombie3, 2, 1],
            [oConeheadZombie, 2, 1],
            [oBucketheadZombie, 1, 1],
            [oNewspaperZombie, 1, 1],
            [oJackinTheBoxZombie, 1, 1],
            [oFootballZombie, 1, 1],
            [oDancingZombie, 1, 1],
            [oScreenDoorZombie, 1, 1],
            [oLGBOSS, 1, 10, [10]],
        ],
        FlagNum: 10,
        FlagToSumNum: { a1: [7, 24], a2: [7, 44] },
        FlagToMonitor: { 9: [ShowFinalWave, 0] },
        FlagToEnd: function () {
            NewImg(
                "imgSF",
                "images/interface/trophy.png",
                "left:260px;top:233px",
                EDAll,
                {
                    onclick: function () {
                        SelectModal(156);
                    },
                }
            );
            NewImg(
                "PointerUD",
                "images/interface/PointerDown.gif",
                "top:185px;left:676px",
                EDAll
            );
        },
    }
);
