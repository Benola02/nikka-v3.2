//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N2eDlkUHVvMkQvYzNXeWxHQjRkODN6WjMxVzRpU3ZGWUVDZ0txWi8wMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXJPYUhIS3Buc0h0NjZyc3pVQVQ4Z3J2eGtTZnovcG43NXgySDFtS3ZTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RXRTeWxZaC9IQWNxeEJpam4rdjkvZTFscE9wZmxjZklYTVZKdGZqTVZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbW5wY04zaVhaZjROZitxVnRoUWk1Mjhjc0M5NnNKWmsrRmxNM0hhaUFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDZWVNVm96T3d1ZkxRdHFuZkhZeXdNSEl5c3REQnZxeS92SVBPV01PVVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQcmdNWFEzNFRPQmJUVTl5Z0MwWC9VMjFaWTEwcno0Nks2MnQ2MnJxU0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEl5bS92OHhCYThSZ2JSRW8xQ2kyelFZSnVnSmJ6bHBxdnk0eFdJRUpuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHR3L2Z5L0hreHRMZitWVnZjRWx3UnNGUmR4L21MQUcxK29GbHN5VStSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkliL01tVUErUE1oRVhlSmZzOWc2VEdLSXNtUG5uNkN1U1FaK2NmRHVKZ1ZHRW5mTWo0VERxaktJY2loamk3cGd5L3B5TFJlTXA3dUlkTlV6SkFQR2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6Ikt5RWQ5b2YvQ0tpOVQrSlNCM1ZtNE9qZWJ2YjNSanNycnVkaXpiMFlJRGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpVc2RiTDBZVENxVFJhWU9KbnJ4VmciLCJwaG9uZUlkIjoiMjJmMGVjZDQtODFlYS00YTBjLWE2Y2UtNWQ1N2IxMDM2NjFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjQ1lsckIzbHpISldlODZVZlFldWYrZTYybz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmN0U5MDBQT1N4djhWSEZVNHR1Z3Rma1BxUWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDFUTEZUS0wiLCJtZSI6eyJpZCI6IjIzNDgxMDM4NzU1MTI6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012SXFKQUdFSzNlMGJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkyREpHdENISHRNMnl0UnJVbUpwdnFsSllTUHBYTnM2emlVT1JxS2xIUVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdPUTNSTEJEekRHU2lzS0hoUlMwdDRkbTJObG05algyUnY2Mmh5RGJkQVdtYTRKZHB6UWFqQnhZdkVWZmxhTlJEK0NSZ204eTN2dXlkWlFaMzJMYUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiZlZWUUtkTVlxMWRTcEcyeWhYTms3SWUwaXVhRnRoY0o4MTZtTHZzNE5oT2lRcnhaU01MRGd2VG12K1hjV0xtUThzL3p6MDhJd0xadHJVTTZBVmdqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDM4NzU1MTI6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU05neVJyUWh4N1ROc3JVYTFKaWFiNnBTV0VqNlZ6Yk9zNGxEa2FpcFIwRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzU4Njc0N30=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
