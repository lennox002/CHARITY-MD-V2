const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭━═「 *${s.BOT}* 」═━❍⁠⁠⁠⁠
┃❍⁠⁠⁠⁠╭────••••────➻
┃❍⁠⁠⁠⁠│◆ 𝙾𝚠𝚗𝚎𝚛 : ${s.OWNER_NAME}
┃❍⁠⁠⁠⁠│◆ 𝙿𝚛𝚎𝚏𝚒𝚡 : [ ${s.PREFIXE} ]
┃❍⁠⁠⁠⁠│◆ 𝙼𝚘𝚍𝚎 : *${mode}*
┃❍⁠⁠⁠⁠│◆ 𝚁𝚊𝚖  : 𝟴/𝟭𝟯𝟮 𝗚𝗕
┃❍⁠⁠⁠⁠│◆ 𝙳𝚊𝚝𝚎  : *${date}*
┃❍⁠⁠⁠⁠│◆ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃❍⁠⁠⁠⁠│◆ 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : CASEYRHODES TECH
┃❍⁠⁠⁠⁠│◆ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 : ${cm.length}
┃❍⁠⁠⁠⁠│◆ 𝚃𝚑𝚎𝚖𝚎 : 𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒💖
┃❍⁠⁠⁠⁠└────••••────➻
╰─━━━━══──══━━━❍⁠⁠⁠⁠\n${readmore}
`;

    let menuMsg = `𝐂𝐇𝐀𝐑𝐈𝐓𝐘 𝐗𝐌𝐃 𝐂𝐌𝐃𝐒`;
    
    for (const cat in coms) {
        menuMsg += `
❍⁠⁠⁠⁠━━〔 *${cat}* 〕━━❍⁠⁠⁠⁠
╭━━══••══━━••⊷
║💖┊ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
║💖┊ ${s.PREFIXE}  *${cmd}*`;    
        }
        menuMsg += `
║💖┊
╰─━━═••═━━••⊷`;
    }
    
    menuMsg += `
> Made By CASEYRHODES\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "CHARITY XMD MENU LIST",
                    body: "Dont worry bro I have more tap to follow",
                    thumbnailUrl: "https://files.catbox.moe/cgz610.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
