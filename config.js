const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347071086449";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_01_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODksXG4gICAgICAgIDk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWpjTVBIY0lkM2o5SE9nYmg3M2pkWi9iSE54VjgxSkZzcnhqUzdqbThNND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQ1NDY5NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzIxMDc4NTNBNzdCNjEwNkQ5RTdBQkNFQTZEQTU3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA1MDU2NzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaC1rQW12c2tUWXlHWVpaaUo4WllTQVwiLFxuICBcInBob25lSWRcIjogXCJlMDJlNjk0Mi04YzI3LTQzMmYtOGVmMi1kZWUzMzJiZDUwM2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNzUsXG4gICAgICA0MyxcbiAgICAgIDE4NSxcbiAgICAgIDUxLFxuICAgICAgODcsXG4gICAgICAyMzgsXG4gICAgICAxNTAsXG4gICAgICAxODYsXG4gICAgICAxNTUsXG4gICAgICAxMTgsXG4gICAgICAxNTksXG4gICAgICAxOTYsXG4gICAgICAxMCxcbiAgICAgIDI1MCxcbiAgICAgIDg0LFxuICAgICAgMTUzLFxuICAgICAgNjAsXG4gICAgICA3NSxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAzOCxcbiAgICAgIDI0OCxcbiAgICAgIDI5LFxuICAgICAgNTUsXG4gICAgICA1NixcbiAgICAgIDY1LFxuICAgICAgMTMzLFxuICAgICAgOTYsXG4gICAgICAxMzUsXG4gICAgICAyNixcbiAgICAgIDExOSxcbiAgICAgIDgxLFxuICAgICAgMTE0LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICAxMDMsXG4gICAgICAxODEsXG4gICAgICAxNjIsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1NaN1FDOFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU0Njk2NTk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzNDYzODIzMDMyNTA5OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi2KfZhNis2KfZhdi5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGZudzZFREVNVFhsYmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMV2hTQnRrZWk5NUFJVDZ3M1Rxb2owNjlwV3VYenorZzRHV1I1MjFVeVdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJOZHJYcy9XaU5ZZVVZQXRCZjR3cFB3Tnp5ZlJ5SXAzS0k4NE1xdk55MUJoeEthNG9taGNoRjRZSnpiVkg2ZU5JSzkrdE9pOS8zMHNpb0hLZ0Vna0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNjMk15azR6RytUUjNPUUE3OC9XZWZ5aHU1RnFETi9aOEhjYVFmbzJ0SXdPKzlkUTJtZ1E0ZWVTQUZCWnBBejBOZ2FRZ1kyU2lOV0pNbXF2VW5VL0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDU0Njk2NTk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUwNTY3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxvaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTG9pLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnUrU3Uydm9EbDZjckdJcGJCRHBoRjZXTEJDZXB0bDZmZkhPMXVIK1lYaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NzU2MjM0MTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY5NzM0OTU2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
