let eventId = '202302';

let sortieTags = [
    /* 0 */ { name:'横須賀防備戦隊', color:'#cccccc' },
    /* 1 */ { name:'第二水雷戦隊', color:'#ccffcc' },
    /* 2 */ { name:'支援連合艦隊', color:'#88cc88' },
    /* 3 */ { name:'連合艦隊', color:'#44aa44' },
    /* 4 */ { name:'空母機動部隊', color:'#88ccff' },
    /* 5 */ { name:'伊号作戦部隊', color:'#aaaa44' },
    /* 6 */ { name:'逆上陸部隊', color:'#ccaa44' },
    /* 7 */ { name:'決戦連合艦隊', color:'#cc88cc' },
];

let operations = [
    { name:'第一海域:S21作戦' },
    { name:'第二海域:第二水雷戦隊 海上遊撃戦' },
    { name:'第三海域:敵空襲部隊を討て！' },
    { name:'第四海域:伊号輸送作戦' },
    { name:'第五海域:出撃！八幡部隊' },
    { name:'第六海域:決戦!硫黄島逆上陸作戦' },
];

let taskforces = [
    // E1
    { name:'ギミック1 J', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], ships:[], visible:false },
    { name:'ギミック1 G2', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], ships:[], visible:false },
    { name:'ギミック1 C2', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ1', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], ships:[], visible:true },
    // E2
    { name:'ゲージ1', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 E2', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 T,U', taskforceType:'U', sortieTag:2, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'破砕 G', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'破砕 E2', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'破砕 D', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'破砕 J', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:2, allowedTags:[], oprationId:1, requiredShips:[], ships:[], visible:true },
    // E3
    { name:'ゲージ1', taskforceType:'N', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 J', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 I', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2 P', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2 R', taskforceType:'U', sortieTag:3, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:3, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'破砕 V1', taskforceType:'U', sortieTag:4, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'破砕 K', taskforceType:'N', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'破砕 I,P', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'破砕 S2,(T)', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'破砕 T', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ3 削り', taskforceType:'U', sortieTag:4, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:4, allowedTags:[], oprationId:2, requiredShips:[], ships:[], visible:true },
    // E4
    { name:'ギミック1 J', taskforceType:'G', sortieTag:5, allowedTags:[0], oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 K', taskforceType:'G', sortieTag:5, allowedTags:[0], oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ1', taskforceType:'G', sortieTag:5, allowedTags:[0], oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2', taskforceType:'G', sortieTag:5, allowedTags:[0], oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'G', sortieTag:5, allowedTags:[0], oprationId:3, requiredShips:[], ships:[], visible:true },
    // E5
    { name:'ギミック1', taskforceType:'G', sortieTag:5, allowedTags:[1], oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ1', taskforceType:'G', sortieTag:5, allowedTags:[1], oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2', taskforceType:'U', sortieTag:5, allowedTags:[4], oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:5, allowedTags:[4], oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:4, allowedTags:[], oprationId:4, requiredShips:[], ships:[], visible:true },
    // E6
    { name:'ゲージ1', taskforceType:'G', sortieTag:5, allowedTags:[], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:6, allowedTags:[], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'G', sortieTag:1, allowedTags:[], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'短縮 Z1', taskforceType:'G', sortieTag:7, allowedTags:[2,3], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'短縮 G', taskforceType:'G', sortieTag:5, allowedTags:[], oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ4', taskforceType:'G', sortieTag:7, allowedTags:[2,3], oprationId:5, requiredShips:[], ships:[], visible:true },
];
