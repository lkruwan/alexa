let WhatsAlexa = require('../events');
let Config = require('../config');
let {MessageType} = require('@adiwajshing/baileys');
let exec = require('child_process').exec;
let os = require("os");
let fs = require('fs');
let heroku = require('heroku-client');
let Language = require('../language');
let Lang = Language.getString('evaluators');

WhatsAlexa.addCommand({pattern: 'termux ?(.*)', fromMe: true, desc: Lang.TERM_DESC}, (async (message, match) => {   

var _0x6c83b9=_0x5891;function _0x4202(){var _0x5f14f9=['text','50qUWXtq','GIVE_ME_CODE','9CkRbmz','1532862UfysjZ','username','32040XXBdEd','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','jid','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','8244468MzTQNQ','0@s.whatsapp.net','./src/image/WhatsAlexa.png',':~#\x20','3028971Yyserr','status@broadcast','4qNmtCm','35zArqZj','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','28777','image/jpeg','23744GgIsMQ','```','399005czYEZP','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','sendMessage','4389320wEyeMj','userInfo','1610993486','132nqKYYi','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','readFileSync','client'];_0x4202=function(){return _0x5f14f9;};return _0x4202();}function _0x5891(_0x4a21ff,_0x4013f7){var _0x4202b7=_0x4202();return _0x5891=function(_0x5891f9,_0x5d20b7){_0x5891f9=_0x5891f9-0x17a;var _0x1045cc=_0x4202b7[_0x5891f9];return _0x1045cc;},_0x5891(_0x4a21ff,_0x4013f7);}(function(_0x18f27a,_0x48d950){var _0xd015fb=_0x5891,_0x4c10ba=_0x18f27a();while(!![]){try{var _0x253931=parseInt(_0xd015fb(0x198))/0x1+-parseInt(_0xd015fb(0x17e))/0x2*(parseInt(_0xd015fb(0x188))/0x3)+-parseInt(_0xd015fb(0x192))/0x4*(-parseInt(_0xd015fb(0x19a))/0x5)+-parseInt(_0xd015fb(0x186))/0x6*(parseInt(_0xd015fb(0x193))/0x7)+-parseInt(_0xd015fb(0x17b))/0x8*(-parseInt(_0xd015fb(0x185))/0x9)+parseInt(_0xd015fb(0x183))/0xa*(parseInt(_0xd015fb(0x190))/0xb)+parseInt(_0xd015fb(0x18c))/0xc;if(_0x253931===_0x48d950)break;else _0x4c10ba['push'](_0x4c10ba['shift']());}catch(_0x1a2ab3){_0x4c10ba['push'](_0x4c10ba['shift']());}}}(_0x4202,0xb325d));var user=os[_0x6c83b9(0x17c)]()[_0x6c83b9(0x187)];if(match[0x1]==='')return await message[_0x6c83b9(0x181)][_0x6c83b9(0x17a)](message[_0x6c83b9(0x18a)],Lang[_0x6c83b9(0x184)],MessageType[_0x6c83b9(0x182)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message['jid']?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x6c83b9(0x194),'mimetype':_0x6c83b9(0x197),'caption':'▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','fileSha256':_0x6c83b9(0x19b),'fileLength':_0x6c83b9(0x196),'height':0x438,'width':0x437,'mediaKey':_0x6c83b9(0x17f),'fileEncSha256':_0x6c83b9(0x189),'directPath':'/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mediaKeyTimestamp':_0x6c83b9(0x17d),'jpegThumbnail':fs['readFileSync'](_0x6c83b9(0x18e))}}}});exec(match[0x1],async(_0x445506,_0x4d8a93,_0x390d86)=>{var _0x54eda5=_0x6c83b9;if(_0x445506)return await message[_0x54eda5(0x181)][_0x54eda5(0x17a)](message[_0x54eda5(0x18a)],_0x54eda5(0x199)+user+_0x54eda5(0x18f)+match[0x1]+'\x0a'+_0x445506+_0x54eda5(0x199),MessageType[_0x54eda5(0x182)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x54eda5(0x18d),...message[_0x54eda5(0x18a)]?{'remoteJid':_0x54eda5(0x191)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':_0x54eda5(0x197),'caption':_0x54eda5(0x18b),'fileSha256':_0x54eda5(0x19b),'fileLength':_0x54eda5(0x196),'height':0x438,'width':0x437,'mediaKey':_0x54eda5(0x17f),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x54eda5(0x195),'mediaKeyTimestamp':_0x54eda5(0x17d),'jpegThumbnail':fs[_0x54eda5(0x180)](_0x54eda5(0x18e))}}}});return await message[_0x54eda5(0x181)]['sendMessage'](message['jid'],_0x54eda5(0x199)+user+':~#\x20'+match[0x1]+'\x0a'+_0x4d8a93+_0x54eda5(0x199),MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message[_0x54eda5(0x18a)]?{'remoteJid':_0x54eda5(0x191)}:{}},'message':{'imageMessage':{'url':_0x54eda5(0x194),'mimetype':_0x54eda5(0x197),'caption':_0x54eda5(0x18b),'fileSha256':_0x54eda5(0x19b),'fileLength':_0x54eda5(0x196),'height':0x438,'width':0x437,'mediaKey':_0x54eda5(0x17f),'fileEncSha256':_0x54eda5(0x189),'directPath':_0x54eda5(0x195),'mediaKeyTimestamp':_0x54eda5(0x17d),'jpegThumbnail':fs['readFileSync'](_0x54eda5(0x18e))}}}});});
}));

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

var ldc = ''
if (Config.LANG == 'EN') ldc = '*⭕ Link Detected! ⭕*'
if (Config.LANG == 'ML') ldc = '*⭕ ലിങ്ക് കണ്ടെത്തി! ⭕*'
if (Config.LANG == 'ID') ldc = '*⭕ tautan terdeteksi! ⭕*'

WhatsAlexa.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (Config.ANTILINK == 'true' && message.jid !== '94768826133-1630756178@g.us') {
        let regex1 = new RegExp('http://')
        let regex2 = new RegExp('https://')
        if (regex1.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
        } 
        else if (regex2.test(message.message)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
        }
        else if (message.message.match(/((?:[.]com)\b)/i)) {
            var us = await checkUsAdmin(message)
            var im = await checkImAdmin(message)
            if (!im) return;
            if (us) return;
            await message.client.groupRemove(message.jid, [message.data.participant]);         
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
        }
    }
}));

WhatsAlexa.addCommand({pattern: 'pmsend ?(.*)', fromMe: true, desc: Lang.PMS_DESC}, (async (message, match) => {
const _0x476c78=_0xa42d;(function(_0x4bc656,_0x4555b0){const _0x163918=_0xa42d,_0x21bf72=_0x4bc656();while(!![]){try{const _0x97688a=parseInt(_0x163918(0x1da))/0x1+-parseInt(_0x163918(0x1f0))/0x2*(parseInt(_0x163918(0x1ee))/0x3)+parseInt(_0x163918(0x1eb))/0x4*(parseInt(_0x163918(0x1f1))/0x5)+-parseInt(_0x163918(0x1e4))/0x6*(parseInt(_0x163918(0x1dd))/0x7)+-parseInt(_0x163918(0x1d5))/0x8+parseInt(_0x163918(0x1e8))/0x9*(parseInt(_0x163918(0x1d7))/0xa)+parseInt(_0x163918(0x1d0))/0xb;if(_0x97688a===_0x4555b0)break;else _0x21bf72['push'](_0x21bf72['shift']());}catch(_0x1cc781){_0x21bf72['push'](_0x21bf72['shift']());}}}(_0x1b72,0x37e9a));if(!message[_0x476c78(0x1d3)])return await message[_0x476c78(0x1ec)][_0x476c78(0x1d2)](message[_0x476c78(0x1de)],Lang[_0x476c78(0x1e3)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x476c78(0x1d4),...message[_0x476c78(0x1de)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':_0x476c78(0x1e0),'mimetype':_0x476c78(0x1db),'caption':_0x476c78(0x1d9),'fileSha256':_0x476c78(0x1d8),'fileLength':_0x476c78(0x1d1),'height':0x438,'width':0x437,'mediaKey':_0x476c78(0x1dc),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x476c78(0x1e6),'mediaKeyTimestamp':_0x476c78(0x1e2),'jpegThumbnail':fs['readFileSync']('./src/image/WhatsAlexa.png')}}}});function _0x1b72(){const _0x234ff8=['\x20』\x0a\x0a','29310tqCGCw','127900snACxW','3273512YKTiQb','28777','sendMessage','reply_message','0@s.whatsapp.net','3173112WoXQep','text','4490wVhtWT','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','406078hIAzsg','image/jpeg','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','1455517jJAzWc','jid','SUC_PMS','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','./src/image/WhatsAlexa.png','1610993486','NEED_REPLY','12FegNPU','MSG','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','status@broadcast','8919CuQQJU','NEED_WORDS','readFileSync','52Wivvzx','client','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','90IgLFzj'];_0x1b72=function(){return _0x234ff8;};return _0x1b72();}function _0xa42d(_0x44d5eb,_0x3a4bf4){const _0x1b72ed=_0x1b72();return _0xa42d=function(_0xa42d37,_0xc2fd55){_0xa42d37=_0xa42d37-0x1d0;let _0x4ca962=_0x1b72ed[_0xa42d37];return _0x4ca962;},_0xa42d(_0x44d5eb,_0x3a4bf4);}if(message[_0x476c78(0x1d3)]&&match[0x1]=='')return await message[_0x476c78(0x1ec)][_0x476c78(0x1d2)](message[_0x476c78(0x1de)],Lang[_0x476c78(0x1e9)],MessageType[_0x476c78(0x1d6)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message['jid']?{'remoteJid':_0x476c78(0x1e7)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':'image/jpeg','caption':'▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','fileSha256':_0x476c78(0x1d8),'fileLength':_0x476c78(0x1d1),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x476c78(0x1ed),'directPath':_0x476c78(0x1e6),'mediaKeyTimestamp':_0x476c78(0x1e2),'jpegThumbnail':fs['readFileSync'](_0x476c78(0x1e1))}}}});let uspm=message['reply_message']['jid'];await message['client'][_0x476c78(0x1d2)](uspm,'『\x20'+Lang[_0x476c78(0x1e5)]+_0x476c78(0x1ef)+Lang[_0x476c78(0x1e5)]+':\x20'+match[0x1],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':'0@s.whatsapp.net',...message[_0x476c78(0x1de)]?{'remoteJid':_0x476c78(0x1e7)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':'image/jpeg','caption':_0x476c78(0x1d9),'fileSha256':_0x476c78(0x1d8),'fileLength':_0x476c78(0x1d1),'height':0x438,'width':0x437,'mediaKey':_0x476c78(0x1dc),'fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x476c78(0x1e6),'mediaKeyTimestamp':'1610993486','jpegThumbnail':fs['readFileSync'](_0x476c78(0x1e1))}}}}),await message[_0x476c78(0x1ec)]['sendMessage'](message[_0x476c78(0x1de)],Lang[_0x476c78(0x1df)],MessageType[_0x476c78(0x1d6)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x476c78(0x1d4),...message[_0x476c78(0x1de)]?{'remoteJid':'status@broadcast'}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':_0x476c78(0x1db),'caption':_0x476c78(0x1d9),'fileSha256':'+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','fileLength':_0x476c78(0x1d1),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':_0x476c78(0x1ed),'directPath':_0x476c78(0x1e6),'mediaKeyTimestamp':_0x476c78(0x1e2),'jpegThumbnail':fs[_0x476c78(0x1ea)](_0x476c78(0x1e1))}}}});
}));

/*WhatsAlexa.addCommand({pattern: 'stam$', fromMe: true, desc: Lang.STAM_DESC}, (async (message, match) => {
    if (!message.reply_message) {
        if (match[1] !== '') {
            grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
              await message.client.sendMessage(uye.jid, match[1], MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}})
                                     
    } if (match[1] == '') {
        } if (message.reply_message) {
            grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
              await message.client.sendMessage(uye.jid, message.reply_message.text, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}})
                                     
    } if (match[1] == '') {
        } if (!message.reply_message) {
           await message.client.sendMessage(message.jid, Lang.NEED_BOTH, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "▣ 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮 ▣", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/image/WhatsAlexa.png')}}}});
        }
     }
}));
*/
