let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('sticker');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'sticker', fromMe: true, desc: Lang.STICKER_DESC}, (async (message, match) => {    

    var _0x15818a=_0x59bc;(function(_0x4a6a19,_0x3479eb){var _0x39ba89=_0x59bc,_0x51928f=_0x4a6a19();while(!![]){try{var _0x527005=parseInt(_0x39ba89(0xfa))/0x1+parseInt(_0x39ba89(0x112))/0x2+-parseInt(_0x39ba89(0x10e))/0x3*(parseInt(_0x39ba89(0xff))/0x4)+parseInt(_0x39ba89(0xf8))/0x5*(parseInt(_0x39ba89(0x103))/0x6)+parseInt(_0x39ba89(0xfb))/0x7*(parseInt(_0x39ba89(0xf7))/0x8)+parseInt(_0x39ba89(0x106))/0x9*(parseInt(_0x39ba89(0xf3))/0xa)+-parseInt(_0x39ba89(0x101))/0xb;if(_0x527005===_0x3479eb)break;else _0x51928f['push'](_0x51928f['shift']());}catch(_0x3e1c8b){_0x51928f['push'](_0x51928f['shift']());}}}(_0x2e1f,0xeb335));if(message['reply_message']===![])return await message[_0x15818a(0xef)][_0x15818a(0x104)](message['jid'],Lang[_0x15818a(0x105)],MessageType[_0x15818a(0x10d)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x15818a(0x102)]});var downloading=await message['client'][_0x15818a(0x104)](message[_0x15818a(0xf2)],Lang[_0x15818a(0xf6)],MessageType[_0x15818a(0x10d)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']}),location=await message[_0x15818a(0xef)][_0x15818a(0x111)]({'key':{'remoteJid':message['reply_message'][_0x15818a(0xf2)],'id':message[_0x15818a(0xfd)]['id']},'message':message[_0x15818a(0xfd)][_0x15818a(0x102)][_0x15818a(0xf9)]});function _0x59bc(_0x279a8d,_0x49cd23){var _0x2e1ff8=_0x2e1f();return _0x59bc=function(_0x59bcb8,_0x363cc7){_0x59bcb8=_0x59bcb8-0xef;var _0x3412ff=_0x2e1ff8[_0x59bcb8];return _0x3412ff;},_0x59bc(_0x279a8d,_0x49cd23);}if(message[_0x15818a(0xfd)][_0x15818a(0x100)]===![]&&message[_0x15818a(0xfd)][_0x15818a(0xf0)])return execFile(cwebp,[location,'-o',_0x15818a(0x110)],async _0x51bf1b=>{var _0x5c344a=_0x15818a;if(_0x51bf1b)throw _0x51bf1b;await message[_0x5c344a(0x104)](fs[_0x5c344a(0xfe)](_0x5c344a(0xf4)),MessageType['sticker'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x5c344a(0x102)]});}),await message[_0x15818a(0xef)][_0x15818a(0x109)](message[_0x15818a(0xf2)],{'id':downloading['key']['id'],'remoteJid':message['jid'],'fromMe':!![]});function _0x2e1f(){var _0x365d62=['27InHTIF','end','output.webp','downloadAndSaveMediaMessage','2297152IynhJF','client','image','-loop\x200','jid','160050ecRKaD','./output.webp','-lossless\x201','DOWNLOADING','6853576FfhTWt','14185xqFAmy','quotedMessage','1922496dxiOGG','14JjsQzS','sticker','reply_message','readFileSync','118496VDLGjd','video','77334257CqYeMT','data','3594CqjCvp','sendMessage','NEED_REPLY','999eNhkMQ','sticker.webp','save','deleteMessage','-vsync\x200','-qscale\x201','-an','text'];_0x2e1f=function(){return _0x365d62;};return _0x2e1f();}ffmpeg(location)['outputOptions'](['-y','-vcodec\x20libwebp',_0x15818a(0xf5),_0x15818a(0x10b),'-preset\x20default',_0x15818a(0xf1),_0x15818a(0x10c),_0x15818a(0x10a),'-s\x20512x512'])[_0x15818a(0x108)](_0x15818a(0x107))['on'](_0x15818a(0x10f),async()=>{var _0xd019de=_0x15818a;await message[_0xd019de(0x104)](fs[_0xd019de(0xfe)]('sticker.webp'),MessageType[_0xd019de(0xfc)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0xd019de(0x102)]});});return await message['client'][_0x15818a(0x109)](message['jid'],{'id':downloading['key']['id'],'remoteJid':message[_0x15818a(0xf2)],'fromMe':!![]});
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'sticker', fromMe: false, desc: Lang.STICKER_DESC}, (async (message, match) => {    

    var _0x15818a=_0x59bc;(function(_0x4a6a19,_0x3479eb){var _0x39ba89=_0x59bc,_0x51928f=_0x4a6a19();while(!![]){try{var _0x527005=parseInt(_0x39ba89(0xfa))/0x1+parseInt(_0x39ba89(0x112))/0x2+-parseInt(_0x39ba89(0x10e))/0x3*(parseInt(_0x39ba89(0xff))/0x4)+parseInt(_0x39ba89(0xf8))/0x5*(parseInt(_0x39ba89(0x103))/0x6)+parseInt(_0x39ba89(0xfb))/0x7*(parseInt(_0x39ba89(0xf7))/0x8)+parseInt(_0x39ba89(0x106))/0x9*(parseInt(_0x39ba89(0xf3))/0xa)+-parseInt(_0x39ba89(0x101))/0xb;if(_0x527005===_0x3479eb)break;else _0x51928f['push'](_0x51928f['shift']());}catch(_0x3e1c8b){_0x51928f['push'](_0x51928f['shift']());}}}(_0x2e1f,0xeb335));if(message['reply_message']===![])return await message[_0x15818a(0xef)][_0x15818a(0x104)](message['jid'],Lang[_0x15818a(0x105)],MessageType[_0x15818a(0x10d)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x15818a(0x102)]});var downloading=await message['client'][_0x15818a(0x104)](message[_0x15818a(0xf2)],Lang[_0x15818a(0xf6)],MessageType[_0x15818a(0x10d)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']}),location=await message[_0x15818a(0xef)][_0x15818a(0x111)]({'key':{'remoteJid':message['reply_message'][_0x15818a(0xf2)],'id':message[_0x15818a(0xfd)]['id']},'message':message[_0x15818a(0xfd)][_0x15818a(0x102)][_0x15818a(0xf9)]});function _0x59bc(_0x279a8d,_0x49cd23){var _0x2e1ff8=_0x2e1f();return _0x59bc=function(_0x59bcb8,_0x363cc7){_0x59bcb8=_0x59bcb8-0xef;var _0x3412ff=_0x2e1ff8[_0x59bcb8];return _0x3412ff;},_0x59bc(_0x279a8d,_0x49cd23);}if(message[_0x15818a(0xfd)][_0x15818a(0x100)]===![]&&message[_0x15818a(0xfd)][_0x15818a(0xf0)])return execFile(cwebp,[location,'-o',_0x15818a(0x110)],async _0x51bf1b=>{var _0x5c344a=_0x15818a;if(_0x51bf1b)throw _0x51bf1b;await message[_0x5c344a(0x104)](fs[_0x5c344a(0xfe)](_0x5c344a(0xf4)),MessageType['sticker'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x5c344a(0x102)]});}),await message[_0x15818a(0xef)][_0x15818a(0x109)](message[_0x15818a(0xf2)],{'id':downloading['key']['id'],'remoteJid':message['jid'],'fromMe':!![]});function _0x2e1f(){var _0x365d62=['27InHTIF','end','output.webp','downloadAndSaveMediaMessage','2297152IynhJF','client','image','-loop\x200','jid','160050ecRKaD','./output.webp','-lossless\x201','DOWNLOADING','6853576FfhTWt','14185xqFAmy','quotedMessage','1922496dxiOGG','14JjsQzS','sticker','reply_message','readFileSync','118496VDLGjd','video','77334257CqYeMT','data','3594CqjCvp','sendMessage','NEED_REPLY','999eNhkMQ','sticker.webp','save','deleteMessage','-vsync\x200','-qscale\x201','-an','text'];_0x2e1f=function(){return _0x365d62;};return _0x2e1f();}ffmpeg(location)['outputOptions'](['-y','-vcodec\x20libwebp',_0x15818a(0xf5),_0x15818a(0x10b),'-preset\x20default',_0x15818a(0xf1),_0x15818a(0x10c),_0x15818a(0x10a),'-s\x20512x512'])[_0x15818a(0x108)](_0x15818a(0x107))['on'](_0x15818a(0x10f),async()=>{var _0xd019de=_0x15818a;await message[_0xd019de(0x104)](fs[_0xd019de(0xfe)]('sticker.webp'),MessageType[_0xd019de(0xfc)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0xd019de(0x102)]});});return await message['client'][_0x15818a(0x109)](message['jid'],{'id':downloading['key']['id'],'remoteJid':message[_0x15818a(0xf2)],'fromMe':!![]});
    }));
}
