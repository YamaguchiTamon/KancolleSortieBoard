let eventId = "202302";
let sortieTags = [
    {
        "name": "横須賀防備戦隊",
        "color": "#cccccc"
    },
    {
        "name": "第二水雷戦隊",
        "color": "#ccff44"
    },
    {
        "name": "支援連合艦隊",
        "color": "#66cc44"
    },
    {
        "name": "連合艦隊",
        "color": "#229944"
    },
    {
        "name": "空母機動部隊",
        "color": "#88ccff"
    },
    {
        "name": "伊号作戦部隊",
        "color": "#aaaa44"
    },
    {
        "name": "逆上陸部隊",
        "color": "#ccaa44"
    },
    {
        "name": "決戦連合艦隊",
        "color": "#cc88cc"
    }
];
let operations = [
    {
        "name": "第一海域:S21作戦"
    },
    {
        "name": "第二海域:第二水雷戦隊 海上遊撃戦"
    },
    {
        "name": "第三海域:敵空襲部隊を討て！"
    },
    {
        "name": "第四海域:伊号輸送作戦"
    },
    {
        "name": "第五海域:出撃！八幡部隊"
    },
    {
        "name": "第六海域:決戦!硫黄島逆上陸作戦"
    }
];
let taskforces = [
    {
        "name": "ギミック1 J",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "oprationId": 0,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 658,
                "lvIndex": 0
            },
            {
                "id": 426,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 619,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            158,
            264,
            0,
            157,
            239
        ],
        "visible": false,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 G2",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "oprationId": 0,
        "requiredShips": [
            {
                "id": 536,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 658,
                "lvIndex": 0
            },
            {
                "id": 426,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 619,
                "lvIndex": 0
            }
        ],
        "ships": [
            219,
            158,
            264,
            0,
            157,
            239
        ],
        "visible": false,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 C2",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "oprationId": 0,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 536,
                "lvIndex": 0
            },
            {
                "id": 426,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 619,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            158,
            219,
            0,
            157,
            239
        ],
        "visible": false,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "oprationId": 0,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 426,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 536,
                "lvIndex": 0
            },
            {
                "id": 269,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            0,
            157,
            158,
            219,
            64
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "oprationId": 0,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 536,
                "lvIndex": 0
            },
            {
                "id": 426,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 376,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            219,
            0,
            158,
            157,
            191
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            }
        ],
        "ships": [
            122,
            62,
            161,
            3,
            25,
            63,
            354
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            }
        ],
        "ships": [
            63,
            161,
            3,
            177,
            122,
            180,
            25
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 E2",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            }
        ],
        "ships": [
            3,
            180,
            179,
            62,
            161,
            122,
            25
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 T,U",
        "taskforceType": "U",
        "sortieTag": 2,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 911,
                "lvIndex": 0
            },
            {
                "id": 555,
                "lvIndex": 0
            },
            {
                "id": 696,
                "lvIndex": 0
            },
            {
                "id": 189,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 1
            },
            {
                "id": 656,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 1
            },
            {
                "id": 578,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 1
            }
        ],
        "ships": [
            340,
            118,
            347,
            250,
            75,
            374,
            84,
            87,
            368,
            149,
            46,
            103
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 G",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            62,
            354,
            161,
            3,
            25,
            63
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 E2",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            }
        ],
        "ships": [
            3,
            179,
            180,
            161,
            25,
            62,
            122
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 D",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            }
        ],
        "ships": [
            179,
            63,
            354,
            25,
            3,
            62,
            122
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 J",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            }
        ],
        "ships": [
            63,
            161,
            3,
            177,
            122,
            180,
            25
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 2,
        "allowedTags": [],
        "oprationId": 1,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 911,
                "lvIndex": 0
            },
            {
                "id": 555,
                "lvIndex": 0
            },
            {
                "id": 297,
                "lvIndex": 0
            },
            {
                "id": 189,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 1
            },
            {
                "id": 656,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 1
            },
            {
                "id": 119,
                "lvIndex": 0
            },
            {
                "id": 578,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 1
            }
        ],
        "ships": [
            340,
            118,
            347,
            100,
            75,
            374,
            84,
            87,
            368,
            46,
            149,
            103
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            }
        ],
        "ships": [
            122,
            161,
            180,
            25,
            3,
            354
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 J",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            3,
            354,
            208,
            161,
            25,
            63
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 I",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            3,
            354,
            208,
            161,
            25,
            63
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック2 P",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            3,
            354,
            208,
            161,
            25,
            63
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック2 R",
        "taskforceType": "U",
        "sortieTag": 3,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 430,
                "lvIndex": 0
            },
            {
                "id": 429,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 393,
                "lvIndex": 0
            },
            {
                "id": 106,
                "lvIndex": 0
            },
            {
                "id": 652,
                "lvIndex": 0
            },
            {
                "id": 314,
                "lvIndex": 0
            },
            {
                "id": 689,
                "lvIndex": 0
            },
            {
                "id": 476,
                "lvIndex": 0
            },
            {
                "id": 670,
                "lvIndex": 0
            },
            {
                "id": 569,
                "lvIndex": 0
            },
            {
                "id": 558,
                "lvIndex": 0
            }
        ],
        "ships": [
            150,
            148,
            92,
            200,
            362,
            56,
            162,
            229,
            172,
            202,
            170,
            128
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 3,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 430,
                "lvIndex": 0
            },
            {
                "id": 429,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 393,
                "lvIndex": 0
            },
            {
                "id": 106,
                "lvIndex": 0
            },
            {
                "id": 652,
                "lvIndex": 0
            },
            {
                "id": 314,
                "lvIndex": 0
            },
            {
                "id": 689,
                "lvIndex": 0
            },
            {
                "id": 476,
                "lvIndex": 0
            },
            {
                "id": 363,
                "lvIndex": 0
            },
            {
                "id": 569,
                "lvIndex": 0
            },
            {
                "id": 558,
                "lvIndex": 0
            }
        ],
        "ships": [
            150,
            148,
            92,
            200,
            362,
            56,
            162,
            229,
            172,
            192,
            170,
            128
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 V1",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 275,
                "lvIndex": 0
            },
            {
                "id": 276,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 466,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 2
            },
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 218,
                "lvIndex": 0
            },
            {
                "id": 893,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 1
            },
            {
                "id": 706,
                "lvIndex": 0
            },
            {
                "id": 196,
                "lvIndex": 0
            }
        ],
        "ships": [
            298,
            300,
            102,
            96,
            181,
            223,
            41,
            30,
            240,
            355,
            267,
            101
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 K",
        "taskforceType": "N",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            }
        ],
        "ships": [
            122,
            161,
            25,
            208,
            3,
            354
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 I,P",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            3,
            354,
            208,
            161,
            25,
            63
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 S2,(T)",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 447,
                "lvIndex": 0
            },
            {
                "id": 513,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 406,
                "lvIndex": 0
            }
        ],
        "ships": [
            208,
            179,
            63,
            154,
            195,
            177,
            132
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 T",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 406,
                "lvIndex": 0
            },
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            }
        ],
        "ships": [
            122,
            132,
            179,
            63,
            177,
            62,
            354
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ3 削り",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 275,
                "lvIndex": 0
            },
            {
                "id": 276,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 466,
                "lvIndex": 0
            },
            {
                "id": 196,
                "lvIndex": 0
            },
            {
                "id": 488,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 2
            },
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 218,
                "lvIndex": 0
            },
            {
                "id": 893,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 1
            },
            {
                "id": 706,
                "lvIndex": 0
            }
        ],
        "ships": [
            298,
            300,
            102,
            96,
            101,
            27,
            223,
            41,
            30,
            240,
            355,
            267
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "oprationId": 2,
        "requiredShips": [
            {
                "id": 275,
                "lvIndex": 0
            },
            {
                "id": 276,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 466,
                "lvIndex": 0
            },
            {
                "id": 196,
                "lvIndex": 0
            },
            {
                "id": 488,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 2
            },
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 218,
                "lvIndex": 0
            },
            {
                "id": 893,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 1
            },
            {
                "id": 706,
                "lvIndex": 0
            }
        ],
        "ships": [
            298,
            300,
            102,
            96,
            101,
            27,
            223,
            41,
            30,
            240,
            355,
            267
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 J",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            0
        ],
        "oprationId": 3,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 889,
                "lvIndex": 0
            },
            {
                "id": 536,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            289,
            219,
            291,
            21,
            112,
            155
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1 K",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            0
        ],
        "oprationId": 3,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            2,
            74,
            291,
            21,
            112,
            155
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            0
        ],
        "oprationId": 3,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            2,
            21,
            291,
            74,
            112,
            155
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック2",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            0
        ],
        "oprationId": 3,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            348,
            21,
            2,
            155,
            74,
            112
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            0
        ],
        "oprationId": 3,
        "requiredShips": [
            {
                "id": 160,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            }
        ],
        "ships": [
            6,
            348,
            21,
            2,
            155,
            74,
            112
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            1
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 1
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 144,
                "lvIndex": 0
            }
        ],
        "ships": [
            122,
            354,
            235,
            366,
            25,
            74,
            81
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            1
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 144,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 1
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 1
            }
        ],
        "ships": [
            122,
            81,
            62,
            25,
            366,
            235,
            354
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック2",
        "taskforceType": "U",
        "sortieTag": 5,
        "allowedTags": [
            4
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 647,
                "lvIndex": 1
            },
            {
                "id": 198,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 435,
                "lvIndex": 0
            },
            {
                "id": 434,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 2
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 706,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 2
            },
            {
                "id": 395,
                "lvIndex": 1
            }
        ],
        "ships": [
            367,
            70,
            181,
            13,
            14,
            197,
            71,
            341,
            235,
            267,
            373,
            386
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 5,
        "allowedTags": [
            4
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 647,
                "lvIndex": 1
            },
            {
                "id": 198,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 435,
                "lvIndex": 0
            },
            {
                "id": 434,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 2
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 706,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 2
            },
            {
                "id": 395,
                "lvIndex": 1
            }
        ],
        "ships": [
            367,
            70,
            181,
            13,
            14,
            197,
            71,
            341,
            235,
            267,
            373,
            386
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 G2",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            1
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 365,
                "lvIndex": 0
            },
            {
                "id": 282,
                "lvIndex": 0
            },
            {
                "id": 406,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 7
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 353,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            179,
            63,
            132,
            381,
            208,
            112,
            164
        ],
        "visible": true
    },
    {
        "name": "破砕 E2,M",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [
            1
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 7
            },
            {
                "id": 578,
                "lvIndex": 2
            },
            {
                "id": 119,
                "lvIndex": 5
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            62,
            122,
            112,
            208,
            381,
            388,
            364
        ],
        "visible": true
    },
    {
        "name": "破砕 Q,U",
        "taskforceType": "U",
        "sortieTag": 5,
        "allowedTags": [
            4
        ],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 889,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 418,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 348,
                "lvIndex": 0
            },
            {
                "id": 547,
                "lvIndex": 0
            },
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            },
            {
                "id": 706,
                "lvIndex": 0
            },
            {
                "id": 538,
                "lvIndex": 0
            },
            {
                "id": 192,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            2,
            289,
            291,
            21,
            112,
            167,
            16,
            41,
            155,
            267,
            296,
            43
        ],
        "visible": true
    },
    {
        "name": "破砕 W",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 704,
                "lvIndex": 0
            },
            {
                "id": 594,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 547,
                "lvIndex": 0
            },
            {
                "id": 538,
                "lvIndex": 0
            },
            {
                "id": 550,
                "lvIndex": 1
            },
            {
                "id": 200,
                "lvIndex": 0
            },
            {
                "id": 195,
                "lvIndex": 0
            },
            {
                "id": 178,
                "lvIndex": 3
            },
            {
                "id": 326,
                "lvIndex": 0
            },
            {
                "id": 564,
                "lvIndex": 0
            },
            {
                "id": 706,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            262,
            26,
            102,
            16,
            296,
            361,
            82,
            4,
            389,
            8,
            160,
            267
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "oprationId": 4,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 1
            },
            {
                "id": 911,
                "lvIndex": 1
            },
            {
                "id": 466,
                "lvIndex": 0
            },
            {
                "id": 698,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 3
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 326,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 2
            },
            {
                "id": 706,
                "lvIndex": 0
            },
            {
                "id": 543,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 1
            },
            {
                "id": 395,
                "lvIndex": 1
            }
        ],
        "ships": [
            109,
            370,
            96,
            83,
            369,
            102,
            8,
            373,
            267,
            117,
            375,
            386
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ1",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 506,
                "lvIndex": 2
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 178,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 3
            }
        ],
        "ships": [
            341,
            71,
            235,
            135,
            291,
            197,
            364
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 6,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 559,
                "lvIndex": 0
            },
            {
                "id": 260,
                "lvIndex": 0
            },
            {
                "id": 666,
                "lvIndex": 0
            },
            {
                "id": 587,
                "lvIndex": 0
            },
            {
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 121,
                "lvIndex": 0
            },
            {
                "id": 199,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 2
            },
            {
                "id": 198,
                "lvIndex": 1
            },
            {
                "id": 489,
                "lvIndex": 1
            },
            {
                "id": 489,
                "lvIndex": 2
            },
            {
                "id": 586,
                "lvIndex": 1
            }
        ],
        "ships": [
            142,
            50,
            12,
            159,
            66,
            120,
            104,
            377,
            379,
            376,
            378,
            271
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ギミック1",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 2
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 2
            },
            {
                "id": 908,
                "lvIndex": 1
            },
            {
                "id": 623,
                "lvIndex": 1
            }
        ],
        "ships": [
            62,
            122,
            380,
            25,
            381,
            382,
            383
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "ゲージ3",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 623,
                "lvIndex": 1
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 147,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 1
            },
            {
                "id": 419,
                "lvIndex": 0
            }
        ],
        "ships": [
            383,
            122,
            62,
            29,
            25,
            382,
            3
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "短縮 Z1",
        "taskforceType": "G",
        "sortieTag": 7,
        "allowedTags": [
            2,
            3
        ],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 911,
                "lvIndex": 0
            },
            {
                "id": 554,
                "lvIndex": 0
            },
            {
                "id": 553,
                "lvIndex": 0
            },
            {
                "id": 586,
                "lvIndex": 0
            },
            {
                "id": 145,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 20
            },
            {
                "id": 395,
                "lvIndex": 0
            },
            {
                "id": 146,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 0
            },
            {
                "id": 550,
                "lvIndex": 0
            }
        ],
        "ships": [
            340,
            118,
            65,
            69,
            228,
            31,
            84,
            374,
            213,
            49,
            46,
            182
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "短縮 G",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 506,
                "lvIndex": 2
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 178,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 3
            }
        ],
        "ships": [
            341,
            71,
            235,
            135,
            291,
            197,
            364
        ],
        "visible": true,
        "invalidRequiredShips": false
    },
    {
        "name": "破砕 G",
        "taskforceType": "G",
        "sortieTag": 5,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 506,
                "lvIndex": 2
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 178,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 3
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            341,
            71,
            235,
            135,
            291,
            197,
            364
        ],
        "visible": true
    },
    {
        "name": "破砕 O",
        "taskforceType": "U",
        "sortieTag": 6,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 260,
                "lvIndex": 0
            },
            {
                "id": 586,
                "lvIndex": 2
            },
            {
                "id": 666,
                "lvIndex": 0
            },
            {
                "id": 587,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 6
            },
            {
                "id": 559,
                "lvIndex": 0
            },
            {
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 4
            },
            {
                "id": 121,
                "lvIndex": 0
            },
            {
                "id": 198,
                "lvIndex": 2
            },
            {
                "id": 199,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 9
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            50,
            271,
            12,
            159,
            378,
            142,
            66,
            377,
            120,
            379,
            104,
            387
        ],
        "visible": true
    },
    {
        "name": "破砕 L",
        "taskforceType": "U",
        "sortieTag": 6,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 260,
                "lvIndex": 0
            },
            {
                "id": 666,
                "lvIndex": 0
            },
            {
                "id": 529,
                "lvIndex": 0
            },
            {
                "id": 587,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 5
            },
            {
                "id": 559,
                "lvIndex": 0
            },
            {
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 503,
                "lvIndex": 4
            },
            {
                "id": 121,
                "lvIndex": 0
            },
            {
                "id": 198,
                "lvIndex": 2
            },
            {
                "id": 199,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 9
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            50,
            12,
            193,
            159,
            378,
            142,
            66,
            377,
            120,
            379,
            104,
            387
        ],
        "visible": true
    },
    {
        "name": "破砕 X",
        "taskforceType": "G",
        "sortieTag": 1,
        "allowedTags": [],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 623,
                "lvIndex": 3
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 147,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 5
            },
            {
                "id": 419,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            384,
            122,
            62,
            29,
            25,
            382,
            3
        ],
        "visible": true
    },
    {
        "name": "破砕 Z1",
        "taskforceType": "U",
        "sortieTag": 7,
        "allowedTags": [
            2,
            3
        ],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 911,
                "lvIndex": 0
            },
            {
                "id": 550,
                "lvIndex": 0
            },
            {
                "id": 553,
                "lvIndex": 0
            },
            {
                "id": 554,
                "lvIndex": 0
            },
            {
                "id": 586,
                "lvIndex": 0
            },
            {
                "id": 145,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 19
            },
            {
                "id": 395,
                "lvIndex": 0
            },
            {
                "id": 146,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            340,
            118,
            182,
            69,
            65,
            228,
            31,
            84,
            342,
            213,
            49,
            46
        ],
        "visible": true
    },
    {
        "name": "ゲージ4",
        "taskforceType": "G",
        "sortieTag": 7,
        "allowedTags": [
            2,
            3
        ],
        "oprationId": 5,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 911,
                "lvIndex": 0
            },
            {
                "id": 659,
                "lvIndex": 0
            },
            {
                "id": 360,
                "lvIndex": 0
            },
            {
                "id": 698,
                "lvIndex": 1
            },
            {
                "id": 586,
                "lvIndex": 0
            },
            {
                "id": 145,
                "lvIndex": 0
            },
            {
                "id": 656,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 1
            },
            {
                "id": 395,
                "lvIndex": 0
            },
            {
                "id": 146,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 0
            }
        ],
        "ships": [
            340,
            118,
            265,
            174,
            385,
            228,
            31,
            84,
            374,
            213,
            49,
            46
        ],
        "visible": true,
        "invalidRequiredShips": false
    }
];
