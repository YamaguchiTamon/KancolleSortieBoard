let eventId = "202302";
let sortieTags = [
    {
        "name": "第二艦隊",
        "color": "#cccccc"
    },
    {
        "name": "南沙哨戒部隊",
        "color": "#44aa44"
    },
    {
        "name": "輸送護衛船団",
        "color": "#aaaa44"
    },
    {
        "name": "第一水雷戦隊",
        "color": "#bbbbdd"
    },
    {
        "name": "第五艦隊主力",
        "color": "#66ffff"
    },
    {
        "name": "第一艦隊",
        "color": "#4444aa"
    },
    {
        "name": "欧州遠征先遣隊",
        "color": "#ccffcc"
    },
    {
        "name": "イギリス連絡部隊",
        "color": "#ffaa44"
    },
    {
        "name": "英海軍主力部隊",
        "color": "#aa8844"
    },
    {
        "name": "英D-Day上陸部隊",
        "color": "#88bb88"
    },
    {
        "name": "米D-Day上陸部隊",
        "color": "#ff44cc"
    }
];
let operations = [
    {
        "name": "第一海域:横須賀鎮守府/呉鎮守府"
    },
    {
        "name": "第二海域:南沙諸島沖/カムラン湾沖"
    },
    {
        "name": "第三海域:八戸港沖/三陸沖"
    },
    {
        "name": "第四海域:津軽海峡/北海道釧路沖"
    },
    {
        "name": "第五海域:大西洋/イギリス海峡沖"
    },
    {
        "name": "第六海域:ポートランド島沖/ライム湾"
    },
    {
        "name": "第七海域:ノルマンディー沖"
    }
];
let taskforces = [
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "operationId": 0,
        "requiredShips": [
            {
                "id": 541,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 509,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 543,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            94,
            92,
            351,
            158,
            117,
            122
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "N",
        "sortieTag": 0,
        "allowedTags": [],
        "operationId": 0,
        "requiredShips": [
            {
                "id": 541,
                "lvIndex": 0
            },
            {
                "id": 509,
                "lvIndex": 0
            },
            {
                "id": 408,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 195,
                "lvIndex": 0
            },
            {
                "id": 543,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            94,
            351,
            22,
            122,
            4,
            117
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 2,
        "allowedTags": [],
        "operationId": 1,
        "requiredShips": [
            {
                "id": 557,
                "lvIndex": 0
            },
            {
                "id": 348,
                "lvIndex": 0
            },
            {
                "id": 478,
                "lvIndex": 0
            },
            {
                "id": 703,
                "lvIndex": 0
            },
            {
                "id": 725,
                "lvIndex": 0
            },
            {
                "id": 716,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            161,
            167,
            18,
            259,
            393,
            291
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "N",
        "sortieTag": 1,
        "allowedTags": [],
        "operationId": 1,
        "requiredShips": [
            {
                "id": 591,
                "lvIndex": 0
            },
            {
                "id": 954,
                "lvIndex": 0
            },
            {
                "id": 156,
                "lvIndex": 0
            },
            {
                "id": 567,
                "lvIndex": 0
            },
            {
                "id": 326,
                "lvIndex": 0
            },
            {
                "id": 662,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            73,
            38,
            115,
            19,
            8,
            107
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 3,
        "allowedTags": [],
        "operationId": 2,
        "requiredShips": [
            {
                "id": 411,
                "lvIndex": 0
            },
            {
                "id": 529,
                "lvIndex": 0
            },
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 357,
                "lvIndex": 0
            },
            {
                "id": 559,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            55,
            193,
            71,
            168,
            142,
            155
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "G",
        "sortieTag": 4,
        "allowedTags": [],
        "operationId": 2,
        "requiredShips": [
            {
                "id": 200,
                "lvIndex": 0
            },
            {
                "id": 327,
                "lvIndex": 0
            },
            {
                "id": 700,
                "lvIndex": 0
            },
            {
                "id": 152,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            },
            {
                "id": 330,
                "lvIndex": 0
            },
            {
                "id": 560,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            82,
            139,
            251,
            44,
            25,
            140,
            95
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 0,
        "allowedTags": [],
        "operationId": 2,
        "requiredShips": [
            {
                "id": 408,
                "lvIndex": 0
            },
            {
                "id": 541,
                "lvIndex": 0
            },
            {
                "id": 509,
                "lvIndex": 0
            },
            {
                "id": 406,
                "lvIndex": 0
            },
            {
                "id": 652,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 497,
                "lvIndex": 0
            },
            {
                "id": 194,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 195,
                "lvIndex": 0
            },
            {
                "id": 543,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            22,
            94,
            351,
            132,
            56,
            92,
            77,
            51,
            122,
            158,
            4,
            117
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "N",
        "sortieTag": 3,
        "allowedTags": [],
        "operationId": 3,
        "requiredShips": [
            {
                "id": 487,
                "lvIndex": 0
            },
            {
                "id": 665,
                "lvIndex": 0
            },
            {
                "id": 240,
                "lvIndex": 0
            },
            {
                "id": 718,
                "lvIndex": 0
            },
            {
                "id": 559,
                "lvIndex": 0
            },
            {
                "id": 469,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            71,
            36,
            91,
            295,
            142,
            155
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 5,
        "allowedTags": [],
        "operationId": 3,
        "requiredShips": [
            {
                "id": 594,
                "lvIndex": 0
            },
            {
                "id": 698,
                "lvIndex": 0
            },
            {
                "id": 466,
                "lvIndex": 0
            },
            {
                "id": 412,
                "lvIndex": 0
            },
            {
                "id": 553,
                "lvIndex": 0
            },
            {
                "id": 547,
                "lvIndex": 0
            },
            {
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 395,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 118,
                "lvIndex": 0
            },
            {
                "id": 569,
                "lvIndex": 0
            },
            {
                "id": 578,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            26,
            83,
            96,
            45,
            69,
            16,
            66,
            213,
            62,
            87,
            170,
            149
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 4,
        "allowedTags": [],
        "operationId": 3,
        "requiredShips": [
            {
                "id": 938,
                "lvIndex": 0
            },
            {
                "id": 152,
                "lvIndex": 0
            },
            {
                "id": 592,
                "lvIndex": 0
            },
            {
                "id": 121,
                "lvIndex": 0
            },
            {
                "id": 560,
                "lvIndex": 0
            },
            {
                "id": 296,
                "lvIndex": 0
            },
            {
                "id": 200,
                "lvIndex": 0
            },
            {
                "id": 193,
                "lvIndex": 0
            },
            {
                "id": 330,
                "lvIndex": 0
            },
            {
                "id": 146,
                "lvIndex": 0
            },
            {
                "id": 419,
                "lvIndex": 0
            },
            {
                "id": 464,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            322,
            44,
            89,
            120,
            95,
            99,
            82,
            61,
            140,
            49,
            3,
            25
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "U",
        "sortieTag": 7,
        "allowedTags": [],
        "operationId": 4,
        "requiredShips": [
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 704,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 434,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 711,
                "lvIndex": 0
            },
            {
                "id": 691,
                "lvIndex": 0
            },
            {
                "id": 666,
                "lvIndex": 0
            },
            {
                "id": 915,
                "lvIndex": 0
            },
            {
                "id": 490,
                "lvIndex": 0
            },
            {
                "id": 446,
                "lvIndex": 0
            },
            {
                "id": 659,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            41,
            262,
            102,
            14,
            180,
            278,
            234,
            12,
            302,
            80,
            152,
            265
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 7,
        "allowedTags": [],
        "operationId": 4,
        "requiredShips": [
            {
                "id": 723,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 704,
                "lvIndex": 0
            },
            {
                "id": 713,
                "lvIndex": 0
            },
            {
                "id": 434,
                "lvIndex": 0
            },
            {
                "id": 711,
                "lvIndex": 0
            },
            {
                "id": 691,
                "lvIndex": 0
            },
            {
                "id": 915,
                "lvIndex": 0
            },
            {
                "id": 666,
                "lvIndex": 0
            },
            {
                "id": 647,
                "lvIndex": 0
            },
            {
                "id": 490,
                "lvIndex": 0
            },
            {
                "id": 188,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            318,
            102,
            262,
            282,
            14,
            278,
            234,
            302,
            12,
            180,
            80,
            41
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 7,
        "allowedTags": [],
        "operationId": 4,
        "requiredShips": [
            {
                "id": 723,
                "lvIndex": 0
            },
            {
                "id": 467,
                "lvIndex": 0
            },
            {
                "id": 704,
                "lvIndex": 0
            },
            {
                "id": 713,
                "lvIndex": 0
            },
            {
                "id": 188,
                "lvIndex": 0
            },
            {
                "id": 711,
                "lvIndex": 0
            },
            {
                "id": 691,
                "lvIndex": 0
            },
            {
                "id": 428,
                "lvIndex": 0
            },
            {
                "id": 347,
                "lvIndex": 0
            },
            {
                "id": 915,
                "lvIndex": 0
            },
            {
                "id": 490,
                "lvIndex": 0
            },
            {
                "id": 542,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            318,
            102,
            262,
            282,
            41,
            278,
            234,
            53,
            157,
            302,
            80,
            106
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "G",
        "sortieTag": 6,
        "allowedTags": [],
        "operationId": 5,
        "requiredShips": [
            {
                "id": 538,
                "lvIndex": 0
            },
            {
                "id": 580,
                "lvIndex": 0
            },
            {
                "id": 564,
                "lvIndex": 0
            },
            {
                "id": 1496,
                "lvIndex": 0
            },
            {
                "id": 430,
                "lvIndex": 0
            },
            {
                "id": 568,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            296,
            220,
            160,
            236,
            150,
            76
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 8,
        "allowedTags": [
            5
        ],
        "operationId": 5,
        "requiredShips": [
            {
                "id": 576,
                "lvIndex": 0
            },
            {
                "id": 698,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 360,
                "lvIndex": 0
            },
            {
                "id": 547,
                "lvIndex": 0
            },
            {
                "id": 506,
                "lvIndex": 0
            },
            {
                "id": 630,
                "lvIndex": 0
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 147,
                "lvIndex": 0
            },
            {
                "id": 578,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            221,
            83,
            177,
            181,
            174,
            16,
            62,
            222,
            208,
            235,
            29,
            149
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "G",
        "sortieTag": 9,
        "allowedTags": [],
        "operationId": 5,
        "requiredShips": [
            {
                "id": 546,
                "lvIndex": 0
            },
            {
                "id": 916,
                "lvIndex": 0
            },
            {
                "id": 550,
                "lvIndex": 0
            },
            {
                "id": 397,
                "lvIndex": 0
            },
            {
                "id": 166,
                "lvIndex": 0
            },
            {
                "id": 586,
                "lvIndex": 0
            },
            {
                "id": 705,
                "lvIndex": 0
            },
            {
                "id": 119,
                "lvIndex": 0
            },
            {
                "id": 626,
                "lvIndex": 0
            },
            {
                "id": 893,
                "lvIndex": 0
            },
            {
                "id": 394,
                "lvIndex": 0
            },
            {
                "id": 650,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            340,
            339,
            182,
            215,
            114,
            228,
            266,
            46,
            247,
            240,
            210,
            277
        ],
        "visible": true
    },
    {
        "name": "ゲージ1",
        "taskforceType": "U",
        "sortieTag": 10,
        "allowedTags": [
            0
        ],
        "operationId": 6,
        "requiredShips": [
            {
                "id": 541,
                "lvIndex": 0
            },
            {
                "id": 573,
                "lvIndex": 0
            },
            {
                "id": 554,
                "lvIndex": 0
            },
            {
                "id": 587,
                "lvIndex": 0
            },
            {
                "id": 198,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 889,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 726,
                "lvIndex": 0
            },
            {
                "id": 667,
                "lvIndex": 0
            },
            {
                "id": 497,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            298,
            300,
            65,
            159,
            70,
            92,
            289,
            158,
            401,
            184,
            77,
            122
        ],
        "visible": true
    },
    {
        "name": "ゲージ2",
        "taskforceType": "U",
        "sortieTag": 10,
        "allowedTags": [
            0
        ],
        "operationId": 6,
        "requiredShips": [
            {
                "id": 541,
                "lvIndex": 0
            },
            {
                "id": 573,
                "lvIndex": 0
            },
            {
                "id": 554,
                "lvIndex": 0
            },
            {
                "id": 198,
                "lvIndex": 0
            },
            {
                "id": 346,
                "lvIndex": 0
            },
            {
                "id": 197,
                "lvIndex": 0
            },
            {
                "id": 497,
                "lvIndex": 0
            },
            {
                "id": 670,
                "lvIndex": 0
            },
            {
                "id": 889,
                "lvIndex": 0
            },
            {
                "id": 667,
                "lvIndex": 0
            },
            {
                "id": 587,
                "lvIndex": 0
            },
            {
                "id": 668,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            298,
            300,
            65,
            70,
            158,
            92,
            77,
            202,
            289,
            184,
            159,
            122
        ],
        "visible": true
    },
    {
        "name": "ゲージ3",
        "taskforceType": "U",
        "sortieTag": 8,
        "allowedTags": [
            5
        ],
        "operationId": 6,
        "requiredShips": [
            {
                "id": 576,
                "lvIndex": 0
            },
            {
                "id": 594,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 698,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 630,
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
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 537,
                "lvIndex": 0
            },
            {
                "id": 951,
                "lvIndex": 0
            },
            {
                "id": 360,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            221,
            26,
            177,
            83,
            181,
            222,
            62,
            29,
            66,
            208,
            126,
            174
        ],
        "visible": true
    },
    {
        "name": "ゲージ4",
        "taskforceType": "U",
        "sortieTag": 9,
        "allowedTags": [],
        "operationId": 6,
        "requiredShips": [
            {
                "id": 626,
                "lvIndex": 0
            },
            {
                "id": 586,
                "lvIndex": 0
            },
            {
                "id": 489,
                "lvIndex": 0
            },
            {
                "id": 199,
                "lvIndex": 0
            },
            {
                "id": 959,
                "lvIndex": 0
            },
            {
                "id": 498,
                "lvIndex": 0
            },
            {
                "id": 705,
                "lvIndex": 0
            },
            {
                "id": 394,
                "lvIndex": 0
            },
            {
                "id": 908,
                "lvIndex": 0
            },
            {
                "id": 893,
                "lvIndex": 0
            },
            {
                "id": 563,
                "lvIndex": 0
            },
            {
                "id": 468,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            247,
            228,
            74,
            104,
            17,
            2,
            266,
            210,
            197,
            240,
            112,
            78
        ],
        "visible": true
    },
    {
        "name": "ゲージ5",
        "taskforceType": "U",
        "sortieTag": 8,
        "allowedTags": [
            5
        ],
        "operationId": 6,
        "requiredShips": [
            {
                "id": 576,
                "lvIndex": 0
            },
            {
                "id": 372,
                "lvIndex": 0
            },
            {
                "id": 360,
                "lvIndex": 0
            },
            {
                "id": 630,
                "lvIndex": 0
            },
            {
                "id": 364,
                "lvIndex": 0
            },
            {
                "id": 698,
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
                "id": 395,
                "lvIndex": 0
            },
            {
                "id": 629,
                "lvIndex": 0
            },
            {
                "id": 623,
                "lvIndex": 0
            },
            {
                "id": 961,
                "lvIndex": 0
            }
        ],
        "invalidRequiredShips": false,
        "ships": [
            221,
            181,
            174,
            222,
            177,
            83,
            62,
            29,
            213,
            235,
            66,
            31
        ],
        "visible": true
    }
];
