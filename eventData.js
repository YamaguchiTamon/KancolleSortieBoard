let eventId = '202208';

let sortieTags = [
    { name:'前路掃討部隊', color:'#808080' },       // 0
    { name:'遠征偵察部隊', color:'#99cc00' },       // 1
    { name:'遠征艦隊先遣隊', color:'#008000' },     // 2
    { name:'地中海連合艦隊', color:'#993300' },     // 3
    { name:'トーチ作戦英軍部隊', color:'#3366ff' },  // 4
    { name:'トーチ作戦派遣部隊', color:'#00ccff' },  // 5
    { name:'中央任務部隊', color:'#ffcc00' },       // 6
    { name:'東方任務部隊', color:'#ffff00' },       // 7
    { name:'西方先遣部隊', color:'#ff99cc' },       // 8
    { name:'西方任務決戦部隊', color:'#800080' },    // 9
];

let operations = [
    { name:'第一海域:インド洋/アラビア海' },
    { name:'第二海域:アラビア海/アデン湾/紅海' },
    { name:'第三海域:スエズ湾/地中海' },
    { name:'第四海域:大西洋/ジブラルタル沖' },
    { name:'第五海域:ジブラルタル沖/北アフリカ沖' },
    { name:'第六海域:カサブランカ沖' },
];

let taskforces = [
    { name:'ギミック1 J', taskforceType:'N', sortieTag:0, oprationId:0, requiredShips:[], ships:[], visible:false },
    { name:'ギミック1 K', taskforceType:'N', sortieTag:0, oprationId:0, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ1 攻略', taskforceType:'N', sortieTag:0, oprationId:0, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ1 攻略', taskforceType:'N', sortieTag:1, oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1', taskforceType:'N', sortieTag:1, oprationId:1, requiredShips:[], ships:[], visible:false },
    { name:'ギミック2 J', taskforceType:'N', sortieTag:1, oprationId:1, requiredShips:[], ships:[], visible:false },
    { name:'ギミック2 O', taskforceType:'N', sortieTag:1, oprationId:1, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2 攻略', taskforceType:'U', sortieTag:2, oprationId:1, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 E', taskforceType:'N', sortieTag:2, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ギミック1 C2', taskforceType:'N', sortieTag:2, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ1 攻略', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ギミック3 P', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ギミック3 N', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2 削り', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'破砕 S', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'破砕 P', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'破砕 N', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2 攻略', taskforceType:'U', sortieTag:3, oprationId:2, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ1 攻略', taskforceType:'G', sortieTag:4, oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1 L1 L2', taskforceType:'G', sortieTag:4, oprationId:3, requiredShips:[], ships:[], visible:false },
    { name:'ギミック1 G2', taskforceType:'N', sortieTag:4, oprationId:3, requiredShips:[], ships:[], visible:false },
    { name:'ギミック2 O2', taskforceType:'U', sortieTag:5, oprationId:3, requiredShips:[], ships:[], visible:false },
    { name:'ギミック2 T', taskforceType:'U', sortieTag:5, oprationId:3, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2 攻略', taskforceType:'U', sortieTag:5, oprationId:3, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ1 攻略', taskforceType:'G', sortieTag:6, oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1', taskforceType:'G', sortieTag:6, oprationId:4, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2 攻略', taskforceType:'U', sortieTag:7, oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2', taskforceType:'U', sortieTag:7, oprationId:4, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ3 攻略', taskforceType:'U', sortieTag:3, oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ4 削り', taskforceType:'U', sortieTag:3, oprationId:4, requiredShips:[], ships:[], visible:false },
    { name:'破砕 P I', taskforceType:'U', sortieTag:3, oprationId:4, requiredShips:[], ships:[], visible:false },
    { name:'破砕 I(遊撃)', taskforceType:'G', sortieTag:3, oprationId:4, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ4 攻略', taskforceType:'U', sortieTag:3, oprationId:4, requiredShips:[], ships:[], visible:true },
    { name:'ギミック1', taskforceType:'N', sortieTag:8, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ1', taskforceType:'G', sortieTag:8, oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ギミック2', taskforceType:'G', sortieTag:8, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ2', taskforceType:'U', sortieTag:9, oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ギミック3', taskforceType:'U', sortieTag:5, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ3', taskforceType:'U', sortieTag:5, oprationId:5, requiredShips:[], ships:[], visible:true },
    { name:'ゲージ4 削り', taskforceType:'U', sortieTag:9, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ギミック4(短縮) N S', taskforceType:'U', sortieTag:9, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ギミック4(短縮) G', taskforceType:'G', sortieTag:8, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'破砕 S(=短縮 S 不要?)', taskforceType:'U', sortieTag:5, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'破砕 D1', taskforceType:'G', sortieTag:8, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'破砕 Y', taskforceType:'U', sortieTag:9, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'破砕 U', taskforceType:'U', sortieTag:5, oprationId:5, requiredShips:[], ships:[], visible:false },
    { name:'ゲージ4 攻略', taskforceType:'U', sortieTag:9, oprationId:5, requiredShips:[], ships:[], visible:true },
];
