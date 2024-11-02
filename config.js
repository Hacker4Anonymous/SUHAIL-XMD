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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_03_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibDdoVnFHZHhYYTdVODNxTEY0ODlwMFFyUkMvOVluTUg2Y29CRlNVY2dpTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1oxSnBQUVZRVU9DSGc1LTFzbVdFZ1wiLFxuICBcInBob25lSWRcIjogXCIwOTI5ZWM2MC0xY2U1LTRiNGQtODg4Yi04ZWM5ODMyYzJmMDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgODksXG4gICAgICA5MCxcbiAgICAgIDUsXG4gICAgICAxMCxcbiAgICAgIDE2MSxcbiAgICAgIDEzLFxuICAgICAgMjUxLFxuICAgICAgMTk4LFxuICAgICAgMjAwLFxuICAgICAgMTAsXG4gICAgICAxMjEsXG4gICAgICAxMDIsXG4gICAgICAxNzksXG4gICAgICAxOTQsXG4gICAgICAxNDIsXG4gICAgICAxOTksXG4gICAgICAxNCxcbiAgICAgIDIwOCxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAyMDksXG4gICAgICAyMTUsXG4gICAgICA3NixcbiAgICAgIDU3LFxuICAgICAgMTE1LFxuICAgICAgMTc0LFxuICAgICAgMjQwLFxuICAgICAgMjE5LFxuICAgICAgMTczLFxuICAgICAgMTcwLFxuICAgICAgNTUsXG4gICAgICAyNDIsXG4gICAgICAxNzgsXG4gICAgICAxNjcsXG4gICAgICA3LFxuICAgICAgMTc5LFxuICAgICAgMjM3LFxuICAgICAgMTE1LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg1TDI3ODc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcxMDg2NDQ5OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWk9EXCIsXG4gICAgXCJsaWRcIjogXCIyNzM1MjEyMTczODg2NjM6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS96L09JRUVNRDBsYmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSSTdQTmVVSUs4V29XNUhTTmFwZWJ0VlB6NGkveWxldTU1QlpINU9WZ1djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9qbDZUcWNPOXJIdjBUZDdhdWR5QUo5L3ZvT0tqUEFOSm5pKzdNUWRuMkNCbEhxYjVKZjljMXFOOUx6ejliOGR6L1MvcFZjSGRVV0F3bzhvenh5dEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdEd0I5M056dmlvVGVmaGhqbWVWZUI5UHVPSnZnZVNFZEVha21OMTVtVmF5TkM5QlhpblJaRitaZVMrUWQ1ZGtkYktwM0tzQ1Z6ejV6UzNmaXY0TGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzEwODY0NDk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA1MDkzODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOS0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5LTC5qc29uIjogIntcImtleURhdGFcIjpcIlJsN1hBSisxUXRBdHJJUXF0UTNuN1ZFTFVsYXFwN2tIQkZuNWpvaDRvRkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MTMwOTA3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMzg0ODEyNDgyXCJ9Igp9"  // PUT your SESSION_ID 


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
