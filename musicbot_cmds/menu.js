const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
zokou({ nomCom: "menu1", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }
    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });
    moment.tz.setDefault('Etc/GMT');
// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');
  let infoMsg =  `
╭▱▰「 *${s.BOT}* 」▱▰❍⁠⁠⁠⁠
┃❍⁠⁠⁠⁠╭▰▱▰▱▰▱▰▱➻
┃❍⁠⁠⁠⁠│◆ 𝙾𝚠𝚗𝚎𝚛 : ${s.OWNER_NAME}
┃❍⁠⁠⁠⁠│◆ 𝙿𝚛𝚎𝚏𝚒𝚡 : [ ${s.PREFIXE} ] 
┃❍⁠⁠⁠⁠│◆ 𝙼𝚘𝚍𝚎 : *${mode}*
┃❍⁠⁠⁠⁠│◆ 𝚁𝚊𝚖  : 𝟴/𝟭𝟯𝟮 𝗚𝗕
┃❍⁠⁠⁠⁠│◆ 𝙳𝚊𝚝𝚎  : *${date}* 
┃❍⁠⁠⁠⁠│◆ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃❍⁠⁠⁠⁠│◆ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂 
┃❍⁠⁠⁠⁠│◆ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : ${cm.length}
┃❍⁠⁠⁠⁠│◆ 𝚃𝚑𝚎𝚖𝚎 : CASEYRHODES 🍀 
┃❍⁠⁠⁠⁠└▰▱▰▱▰▱▰▱➻
╰▱▰▱▰▱▰⊷▱▰▱▰▱❍⁠⁠⁠⁠\n${readmore}`;
    let menuMsg = `CHARITY-XMD`;
    for (const cat in coms) {
        menuMsg += `
╭▱▱▱❍⁠⁠⁠⁠ *${cat}* ❍⁠⁠⁠⁠▰▰▰⊷ 
┊│┌▰▱▰⊷•∞•⊷▱▰▱❍⁠⁠⁠⁠
┊│┊
┌┤┊ `;for (const cmd of coms[cat]) {
          menuMsg += `          
┊│┊☆  *${cmd}*`    
        } 
        menuMsg +=`
┊│└▰▱▰⊷•∞•⊷▱▰▱❍⁠⁠⁠⁠ 
╰▰▰▰═⊷❍⁠⁠⁠⁠•∞•❍⁠⁠⁠⁠⊷═▱▱▱⊷`
    }
    menuMsg += `
> 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙲𝙰𝚂𝙴𝚈𝚁𝙷𝙾𝙳𝙴𝚂\n
`;
   var lien = mybotpic();
   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Luckymd*, déveloper Fredie Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
       console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Luckymd*, déveloper Fredie Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(infoMsg + menuMsg);
}
});
