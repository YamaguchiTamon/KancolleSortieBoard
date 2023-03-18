const eventId = '202208';

const fleetTags = [
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

const operations = [
    { name:'第一海域:インド洋/アラビア海' },
    { name:'第二海域:アラビア海/アデン湾/紅海' },
    { name:'第三海域:スエズ湾/地中海' },
    { name:'第四海域:大西洋/ジブラルタル沖' },
    { name:'第五海域:ジブラルタル沖/北アフリカ沖' },
    { name:'第六海域:カサブランカ沖' },
];

let fleets = [
    { name:'ギミック1 J', fleetType:'N', fleetTag:0, oprationId:0, taskId:'gm-1j', ships:[], visible:false },
    { name:'ギミック1 K', fleetType:'N', fleetTag:0, oprationId:0, taskId:'gm-1k', ships:[], visible:false },
    { name:'ゲージ1 攻略', fleetType:'N', fleetTag:0, oprationId:0, taskId:'ga-1f', ships:[], visible:true },
    { name:'ゲージ1 攻略', fleetType:'N', fleetTag:1, oprationId:1, taskId:'ga-1f', ships:[], visible:true },
    { name:'ギミック1', fleetType:'N', fleetTag:1, oprationId:1, taskId:'gm-1', ships:[], visible:false },
    { name:'ギミック2 J', fleetType:'N', fleetTag:1, oprationId:1, taskId:'gm-2j', ships:[], visible:false },
    { name:'ギミック2 O', fleetType:'N', fleetTag:1, oprationId:1, taskId:'gm-2o', ships:[], visible:false },
    { name:'ゲージ2 攻略', fleetType:'U', fleetTag:2, oprationId:1, taskId:'ga-2f', ships:[], visible:true },
    { name:'ギミック1 E', fleetType:'N', fleetTag:2, oprationId:2, taskId:'gm-1e', ships:[], visible:false },
    { name:'ギミック1 C2', fleetType:'N', fleetTag:2, oprationId:2, taskId:'gm-1c2', ships:[], visible:false },
    { name:'ゲージ1 攻略', fleetType:'U', fleetTag:3, oprationId:2, taskId:'ga-1f', ships:[], visible:true },
    { name:'ギミック2', fleetType:'U', fleetTag:3, oprationId:2, taskId:'gm-2', ships:[], visible:false },
    { name:'ギミック3 P', fleetType:'U', fleetTag:3, oprationId:2, taskId:'gm-3p', ships:[], visible:false },
    { name:'ギミック3 N', fleetType:'U', fleetTag:3, oprationId:2, taskId:'gm-3n', ships:[], visible:false },
    { name:'ゲージ2 削り', fleetType:'U', fleetTag:3, oprationId:2, taskId:'ga-2p', ships:[], visible:false },
    { name:'破砕 S', fleetType:'U', fleetTag:3, oprationId:2, taskId:'cr-s', ships:[], visible:false },
    { name:'破砕 P', fleetType:'U', fleetTag:3, oprationId:2, taskId:'cr-p', ships:[], visible:false },
    { name:'破砕 N', fleetType:'U', fleetTag:3, oprationId:2, taskId:'cr-n', ships:[], visible:false },
    { name:'ゲージ2 攻略', fleetType:'U', fleetTag:3, oprationId:2, taskId:'ga-2f', ships:[], visible:true },
    { name:'ゲージ1 攻略', fleetType:'G', fleetTag:4, oprationId:3, taskId:'ga-1f', ships:[], visible:true },
    { name:'ギミック1 L1 L2', fleetType:'G', fleetTag:4, oprationId:3, taskId:'gm-1l1l2', ships:[], visible:false },
    { name:'ギミック1 G2', fleetType:'N', fleetTag:4, oprationId:3, taskId:'gm-1g2', ships:[], visible:false },
    { name:'ギミック2 O2', fleetType:'U', fleetTag:5, oprationId:3, taskId:'gm-2o2', ships:[], visible:false },
    { name:'ギミック2 T', fleetType:'U', fleetTag:5, oprationId:3, taskId:'gm-2t', ships:[], visible:false },
    { name:'ゲージ2 攻略', fleetType:'U', fleetTag:5, oprationId:3, taskId:'ga-2f', ships:[], visible:true },
    { name:'ゲージ1 攻略', fleetType:'G', fleetTag:6, oprationId:4, taskId:'ga-1f', ships:[], visible:true },
    { name:'ギミック1', fleetType:'G', fleetTag:6, oprationId:4, taskId:'gm-1', ships:[], visible:false },
    { name:'ゲージ2 攻略', fleetType:'U', fleetTag:7, oprationId:4, taskId:'ga-2f', ships:[], visible:true },
    { name:'ギミック2', fleetType:'U', fleetTag:7, oprationId:4, taskId:'gm-2', ships:[], visible:false },
    { name:'ゲージ3 攻略', fleetType:'U', fleetTag:3, oprationId:4, taskId:'ga-3f', ships:[], visible:true },
    { name:'ゲージ4 削り', fleetType:'U', fleetTag:3, oprationId:4, taskId:'ga-4p', ships:[], visible:false },
    { name:'破砕 P I', fleetType:'U', fleetTag:3, oprationId:4, taskId:'cr-pi', ships:[], visible:false },
    { name:'破砕 I(遊撃)', fleetType:'G', fleetTag:3, oprationId:4, taskId:'cr-i2', ships:[], visible:false },
    { name:'ゲージ4 攻略', fleetType:'U', fleetTag:3, oprationId:4, taskId:'ga-4f', ships:[], visible:true },
    { name:'ギミック1', fleetType:'N', fleetTag:8, oprationId:5, taskId:'gm-1', ships:[], visible:false },
    { name:'ゲージ1', fleetType:'G', fleetTag:8, oprationId:5, taskId:'ga-1f', ships:[], visible:true },
    { name:'ギミック2', fleetType:'G', fleetTag:8, oprationId:5, taskId:'gm-2', ships:[], visible:false },
    { name:'ゲージ2', fleetType:'U', fleetTag:9, oprationId:5, taskId:'ga-2f', ships:[], visible:true },
    { name:'ギミック3', fleetType:'U', fleetTag:5, oprationId:5, taskId:'gm-3', ships:[], visible:false },
    { name:'ゲージ3', fleetType:'U', fleetTag:5, oprationId:5, taskId:'ga-3f', ships:[], visible:true },
    { name:'ゲージ4 削り', fleetType:'U', fleetTag:9, oprationId:5, taskId:'ga-4p', ships:[], visible:false },
    { name:'ギミック4(短縮) N S', fleetType:'U', fleetTag:9, oprationId:5, taskId:'gm-4ns', ships:[], visible:false },
    { name:'ギミック4(短縮) G', fleetType:'G', fleetTag:8, oprationId:5, taskId:'gm-4g', ships:[], visible:false },
    { name:'破砕 S(=短縮 S 不要?)', fleetType:'U', fleetTag:5, oprationId:5, taskId:'cr-s', ships:[], visible:false },
    { name:'破砕 D1', fleetType:'G', fleetTag:8, oprationId:5, taskId:'cr-d1', ships:[], visible:false },
    { name:'破砕 Y', fleetType:'U', fleetTag:9, oprationId:5, taskId:'cr-y', ships:[], visible:false },
    { name:'破砕 U', fleetType:'U', fleetTag:5, oprationId:5, taskId:'cr-u', ships:[], visible:false },
    { name:'ゲージ4 攻略', fleetType:'U', fleetTag:9, oprationId:5, taskId:'ga-4f', ships:[], visible:true },
];
