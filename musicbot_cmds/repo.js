.enc const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, nomAuteurMessage } = commandeOptions;

    // Set timezone to GMT
    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    // Message content
    let infoMsg = `
*AVAILABLE REPO AND GROUPS* 
*hellow Friend👋👋*
this is* *CASEYRHODES-XMD👊.*

🗼 *REPOSITORY:* https://github.com/caseyweb/NHEZHO
💫 *STARS:* 20
🧧 *FORKS:* 63
📅 *RELEASE DATE:* 08/01/2025
🕐 *UPDATE ON:* 2025-01-13T21:36:23Z
🙊 *OWNER:* *Mr Caseyrhodes*
🍃 *THEME:* *CASEYRHODES-XMD*
🍷 *Am Safe To Fight In My Life*
╭─────────────────
│❍│▸ *REPO* : https://github.com/caseyweb/NHEZHO
│❍│▸ *YTUBE* : https://www.youtube.com/@Caseyrhodes01
╰──────────────────
    `;

    let menuMsg = `
  MADE EASY BY CASEYRHODES🔱
❍────────────────────❍`;

    try {
        // Send message without using any bot image
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    title: "𝐂𝐀𝐒𝐄𝐘𝐑𝐇𝐎𝐃𝐄𝐒 𝐗𝐌𝐃 WHATSAPP BOT",
                    body: "MADE BY 𝗖𝗔𝗦𝗘𝗬𝗥𝗛𝗢𝗗𝗘𝗦",
                    thumbnailUrl: "https://files.catbox.moe/81hhl0.jpg", // Static bot image URL
                    sourceUrl: "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: ms });
    } catch (error) {
        console.error("❌ Error sending GitHub info:", error);
        repondre("❌ Error sending GitHub info: " + error.message);
    }
});
