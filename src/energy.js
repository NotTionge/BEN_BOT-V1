const _0x5c7914=_0x122a;(function(_0x3c40b3,_0x2a2026){const _0x33a84f=_0x122a,_0x33bf9c=_0x3c40b3();while(!![]){try{const _0x47258d=parseInt(_0x33a84f(0x9f))/0x1*(parseInt(_0x33a84f(0xa4))/0x2)+-parseInt(_0x33a84f(0xa7))/0x3+-parseInt(_0x33a84f(0xa2))/0x4*(parseInt(_0x33a84f(0xae))/0x5)+-parseInt(_0x33a84f(0x9c))/0x6+parseInt(_0x33a84f(0xa8))/0x7+-parseInt(_0x33a84f(0xa1))/0x8+-parseInt(_0x33a84f(0xad))/0x9*(-parseInt(_0x33a84f(0xa0))/0xa);if(_0x47258d===_0x2a2026)break;else _0x33bf9c['push'](_0x33bf9c['shift']());}catch(_0x3909f7){_0x33bf9c['push'](_0x33bf9c['shift']());}}}(_0x59ca,0x4a76a));function hi(){const _0x4f7953=_0x122a;console['log'](_0x4f7953(0xaa));}hi();const fs=require('fs');function _0x59ca(){const _0x2f8d40=['healtt','8939547ZecUQr','5bFVkaR','3460650jNHxDz','./src/energy.json','stringify','1vgdyHH','10rwIVor','740392YHUBKj','1854044RHmcIm','writeFileSync','726718JBgRTr','push','keys','311922TkdkAQ','1296183MFNziG','forEach','Hello\x20World!','readFileSync'];_0x59ca=function(){return _0x2f8d40;};return _0x59ca();}let _energyOrg=JSON['parse'](fs[_0x5c7914(0xab)](_0x5c7914(0x9d)));function _0x122a(_0x5f1d78,_0x535e91){const _0x59cae3=_0x59ca();return _0x122a=function(_0x122a29,_0x1f2160){_0x122a29=_0x122a29-0x9c;let _0x407d14=_0x59cae3[_0x122a29];return _0x407d14;},_0x122a(_0x5f1d78,_0x535e91);}const addInventorienergy=(_0x3a740c,_0x4aa42e)=>{const _0x4acd32=_0x5c7914,_0x567d1={'id':_0x3a740c,'healtt':_0x4aa42e};_energyOrg[_0x4acd32(0xa5)](_0x567d1),fs[_0x4acd32(0xa3)](_0x4acd32(0x9d),JSON[_0x4acd32(0x9e)](_energyOrg));},cekDuluJoinAdaApaKagaDiJsonenergy=_0x503553=>{const _0x37cce0=_0x5c7914;let _0xff3ccd=![];return Object[_0x37cce0(0xa6)](_energyOrg)[_0x37cce0(0xa9)](_0x339bae=>{_energyOrg[_0x339bae]['id']===_0x503553&&(_0xff3ccd=!![]);}),_0xff3ccd;},addenergy=(_0x5163b7,_0x576709)=>{const _0xb3b242=_0x5c7914;let _0x5ca73c=![];Object[_0xb3b242(0xa6)](_energyOrg)['forEach'](_0x3828f7=>{_energyOrg[_0x3828f7]['id']===_0x5163b7&&(_0x5ca73c=_0x3828f7);}),_0x5ca73c!==![]&&(_energyOrg[_0x5ca73c]['healtt']+=_0x576709,fs[_0xb3b242(0xa3)]('./src/energy.json',JSON['stringify'](_energyOrg)));},kurangenergy=(_0xd6a555,_0x234a6a)=>{const _0x4ecc67=_0x5c7914;let _0x2afba0=![];Object[_0x4ecc67(0xa6)](_energyOrg)[_0x4ecc67(0xa9)](_0x83c1f7=>{_energyOrg[_0x83c1f7]['id']===_0xd6a555&&(_0x2afba0=_0x83c1f7);}),_0x2afba0!==![]&&(_energyOrg[_0x2afba0]['healtt']-=_0x234a6a,fs[_0x4ecc67(0xa3)](_0x4ecc67(0x9d),JSON['stringify'](_energyOrg)));},getenergy=_0x4c6f82=>{const _0x2273f9=_0x5c7914;let _0x263474=![];Object[_0x2273f9(0xa6)](_energyOrg)[_0x2273f9(0xa9)](_0x11a1b9=>{_energyOrg[_0x11a1b9]['id']===_0x4c6f82&&(_0x263474=_0x11a1b9);});if(_0x263474!==![])return _energyOrg[_0x263474][_0x2273f9(0xac)];};module['exports']={'addInventorienergy':addInventorienergy,'cekDuluJoinAdaApaKagaDiJsonenergy':cekDuluJoinAdaApaKagaDiJsonenergy,'addenergy':addenergy,'kurangenergy':kurangenergy,'getenergy':getenergy};