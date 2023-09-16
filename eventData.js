let eventId = '202308';

let sortieTags = [
    /* 0 */ { name:'第二艦隊', color:'#cccccc' },
    /* 1 */ { name:'南沙哨戒部隊', color:'#44aa44' },
    /* 2 */ { name:'輸送護衛船団', color:'#aaaa44' },
    /* 3 */ { name:'第一水雷戦隊', color:'#bbbbdd' },
    /* 4 */ { name:'第五艦隊主力', color:'#66ffff' },
    /* 5 */ { name:'第一艦隊', color:'#4444aa' },
    /* 6 */ { name:'欧州遠征先遣隊', color:'#ccffcc' },
    /* 7 */ { name:'イギリス連絡部隊', color:'#ffaa44' },
    /* 8 */ { name:'英海軍主力部隊', color:'#aa8844' },
    /* 9 */ { name:'英D-Day上陸部隊', color:'#88bb88' },
    /* 10 */ { name:'米D-Day上陸部隊', color:'#ff44cc' },
];

let operations = [
    { name:'第一海域:横須賀鎮守府/呉鎮守府' },
    { name:'第二海域:南沙諸島沖/カムラン湾沖' },
    { name:'第三海域:八戸港沖/三陸沖' },
    { name:'第四海域:津軽海峡/北海道釧路沖' },
    { name:'第五海域:大西洋/イギリス海峡沖' },
    { name:'第六海域:ポートランド島沖/ライム湾' },
    { name:'第七海域:ノルマンディー沖' },
];

let taskforces = [
    // E1
    { name:'ゲージ1', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'N', sortieTag:0, allowedTags:[], oprationId:0, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E2
    { name:'ゲージ1', taskforceType:'N', sortieTag:2, allowedTags:[], oprationId:1, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'N', sortieTag:1, allowedTags:[], oprationId:1, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E3
    { name:'ゲージ1', taskforceType:'N', sortieTag:3, allowedTags:[], oprationId:2, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'G', sortieTag:4, allowedTags:[], oprationId:2, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:0, allowedTags:[], oprationId:2, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E4
    { name:'ゲージ1', taskforceType:'N', sortieTag:3, allowedTags:[], oprationId:3, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:5, allowedTags:[], oprationId:3, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:4, allowedTags:[], oprationId:3, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E5
    { name:'ゲージ1', taskforceType:'U', sortieTag:7, allowedTags:[], oprationId:4, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:7, allowedTags:[], oprationId:4, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:7, allowedTags:[], oprationId:4, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E6
    { name:'ゲージ1', taskforceType:'G', sortieTag:6, allowedTags:[], oprationId:5, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:8, allowedTags:[5], oprationId:5, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'G', sortieTag:9, allowedTags:[], oprationId:5, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    // E7
    { name:'ゲージ1', taskforceType:'U', sortieTag:10, allowedTags:[0], oprationId:6, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ2', taskforceType:'U', sortieTag:10, allowedTags:[0], oprationId:6, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ3', taskforceType:'U', sortieTag:8, allowedTags:[5], oprationId:6, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ4', taskforceType:'U', sortieTag:9, allowedTags:[], oprationId:6, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
    { name:'ゲージ5', taskforceType:'U', sortieTag:8, allowedTags:[5], oprationId:6, requiredShips:[], invalidRequiredShips:false, ships:[], visible:true },
];
