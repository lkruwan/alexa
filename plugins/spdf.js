let WhatsAlexa = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'spdf ?(.*)', fromMe: true, desc: Lang.SPDF_DESC }, (async (message, match) => {

    var _0x4dcce3=_0x2194;function _0x8b3e(){var _0x295091=['&apiKey=','388072FytFbn','text','data','1555WORQAE','SPDF_PROC','document','7JZUNxt','3364CmzvBv','6445150uzdbHt','arraybuffer','5635008RmYBQQ','12rTqRkV','sendMessage','7297384OFXVNv','WhatsAlexa.pdf','client','get','258028hEVKNQ','jid','SPDF_LINK','9qrRBwp','9982247aEfEWy'];_0x8b3e=function(){return _0x295091;};return _0x8b3e();}(function(_0x176572,_0x4ce6af){var _0x4934aa=_0x2194,_0x3efb96=_0x176572();while(!![]){try{var _0x40a188=-parseInt(_0x4934aa(0x10b))/0x1+parseInt(_0x4934aa(0x111))/0x2*(parseInt(_0x4934aa(0x105))/0x3)+-parseInt(_0x4934aa(0x101))/0x4*(parseInt(_0x4934aa(0xfd))/0x5)+-parseInt(_0x4934aa(0x104))/0x6+-parseInt(_0x4934aa(0x100))/0x7*(-parseInt(_0x4934aa(0x107))/0x8)+parseInt(_0x4934aa(0x10e))/0x9*(-parseInt(_0x4934aa(0x102))/0xa)+parseInt(_0x4934aa(0x10f))/0xb;if(_0x40a188===_0x4ce6af)break;else _0x3efb96['push'](_0x3efb96['shift']());}catch(_0x9953c4){_0x3efb96['push'](_0x3efb96['shift']());}}}(_0x8b3e,0x783f4));function _0x2194(_0x55ea1b,_0x1159e6){var _0x8b3e53=_0x8b3e();return _0x2194=function(_0x2194ad,_0x39f68){_0x2194ad=_0x2194ad-0xfd;var _0x278994=_0x8b3e53[_0x2194ad];return _0x278994;},_0x2194(_0x55ea1b,_0x1159e6);}if(match[0x1]==='')return await message[_0x4dcce3(0x109)][_0x4dcce3(0x106)](message['jid'],Lang[_0x4dcce3(0x10d)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});var webimage=await axios[_0x4dcce3(0x10a)]('https://api.html2pdf.app/v1/generate?url='+match[0x1]+_0x4dcce3(0x110)+SPDF_API,{'responseType':_0x4dcce3(0x103)});await message['client'][_0x4dcce3(0x106)](message[_0x4dcce3(0x10c)],Lang[_0x4dcce3(0xfe)],MessageType[_0x4dcce3(0x112)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4dcce3(0x113)]}),await message[_0x4dcce3(0x106)](Buffer['from'](webimage[_0x4dcce3(0x113)]),MessageType[_0x4dcce3(0xff)],{'mimetype':Mimetype['pdf'],'filename':_0x4dcce3(0x108),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});

    }));  
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'spdf ?(.*)', fromMe: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

    var _0x4dcce3=_0x2194;function _0x8b3e(){var _0x295091=['&apiKey=','388072FytFbn','text','data','1555WORQAE','SPDF_PROC','document','7JZUNxt','3364CmzvBv','6445150uzdbHt','arraybuffer','5635008RmYBQQ','12rTqRkV','sendMessage','7297384OFXVNv','WhatsAlexa.pdf','client','get','258028hEVKNQ','jid','SPDF_LINK','9qrRBwp','9982247aEfEWy'];_0x8b3e=function(){return _0x295091;};return _0x8b3e();}(function(_0x176572,_0x4ce6af){var _0x4934aa=_0x2194,_0x3efb96=_0x176572();while(!![]){try{var _0x40a188=-parseInt(_0x4934aa(0x10b))/0x1+parseInt(_0x4934aa(0x111))/0x2*(parseInt(_0x4934aa(0x105))/0x3)+-parseInt(_0x4934aa(0x101))/0x4*(parseInt(_0x4934aa(0xfd))/0x5)+-parseInt(_0x4934aa(0x104))/0x6+-parseInt(_0x4934aa(0x100))/0x7*(-parseInt(_0x4934aa(0x107))/0x8)+parseInt(_0x4934aa(0x10e))/0x9*(-parseInt(_0x4934aa(0x102))/0xa)+parseInt(_0x4934aa(0x10f))/0xb;if(_0x40a188===_0x4ce6af)break;else _0x3efb96['push'](_0x3efb96['shift']());}catch(_0x9953c4){_0x3efb96['push'](_0x3efb96['shift']());}}}(_0x8b3e,0x783f4));function _0x2194(_0x55ea1b,_0x1159e6){var _0x8b3e53=_0x8b3e();return _0x2194=function(_0x2194ad,_0x39f68){_0x2194ad=_0x2194ad-0xfd;var _0x278994=_0x8b3e53[_0x2194ad];return _0x278994;},_0x2194(_0x55ea1b,_0x1159e6);}if(match[0x1]==='')return await message[_0x4dcce3(0x109)][_0x4dcce3(0x106)](message['jid'],Lang[_0x4dcce3(0x10d)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});var webimage=await axios[_0x4dcce3(0x10a)]('https://api.html2pdf.app/v1/generate?url='+match[0x1]+_0x4dcce3(0x110)+SPDF_API,{'responseType':_0x4dcce3(0x103)});await message['client'][_0x4dcce3(0x106)](message[_0x4dcce3(0x10c)],Lang[_0x4dcce3(0xfe)],MessageType[_0x4dcce3(0x112)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4dcce3(0x113)]}),await message[_0x4dcce3(0x106)](Buffer['from'](webimage[_0x4dcce3(0x113)]),MessageType[_0x4dcce3(0xff)],{'mimetype':Mimetype['pdf'],'filename':_0x4dcce3(0x108),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});

    }));    
}
