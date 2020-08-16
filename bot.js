const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://kahrbaa-x.glitch.me/`);
}, 280000);
 
// طبعا الكود هيبقا صعب انك تفهم لوحدك لنو معقد شويتين لكن فكرتو سهلة وحاولت اوفرلكم حاجات كتير مثل انك تقدر تشغل 20 توكانات ف الكود ده
// 
const Discord = require('discord.js');
const fs = require("fs");
const config = require("./config.json")
const prefix = config.prefix
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); // كههربا (حسن ياسر)
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); // كههربا (حسن ياسر)
const client20 = new Discord.Client();


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on('ready', () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite 
client.on("ready", () => { console.log(`[BOT] ${client.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN } })}) 
}, 1000)

client2.on("ready", () => { console.log(`[BOT] ${client2.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN2 } })}) 
}, 2000)

client3.on("ready", () => { console.log(`[BOT] ${client3.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN3 } })}) 
}, 3000)

client4.on("ready", () => { console.log(`[BOT] ${client4.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN4 } })}) 
}, 4000)

client5.on("ready", () => { console.log(`[BOT] ${client5.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN5 } })}) 
}, 5000)

client6.on("ready", () => { console.log(`[BOT] ${client6.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN6 } })}) 
}, 6000)

client7.on("ready", () => { console.log(`[BOT] ${client7.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN7 } })}) 
}, 7000)

client8.on("ready", () => { console.log(`[BOT] ${client8.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN8 } })}) 
}, 8000)

client9.on("ready", () => { console.log(`[BOT] ${client9.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN9 } })}) 
}, 9000)

client10.on("ready", () => { console.log(`[BOT] ${client10.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN10 } })}) 
}, 10000)

client11.on("ready", () => { console.log(`[BOT] ${client11.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN11 } })}) 
}, 11000)

client12.on("ready", () => { console.log(`[BOT] ${client12.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN12 } })}) 
}, 12000)

client13.on("ready", () => { console.log(`[BOT] ${client13.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN13 } })}) 
}, 13000)

client14.on("ready", () => { console.log(`[BOT] ${client14.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN14 } })}) 
}, 14000)

client15.on("ready", () => { console.log(`[BOT] ${client15.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN15 } })}) 
}, 15000)

client16.on("ready", () => { console.log(`[BOT] ${client16.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN16 } })}) 
}, 16000)

client17.on("ready", () => { console.log(`[BOT] ${client17.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN17 } })}) 
}, 17000)

client18.on("ready", () => { console.log(`[BOT] ${client18.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN18 } })}) 
}, 18000)

client19.on("ready", () => { console.log(`[BOT] ${client19.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN19 } })}) 
}, 19000)

client20.on("ready", () => { console.log(`[BOT] ${client20.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN20 } })}) 
}, 20000)
// DONE //
// ======= [ Console LOG - END   ] ======== //


// ======= [ Say MODE  ] ======== //
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"1") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client2.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"2") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client3.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"3") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client4.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"4") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client5.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"5") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client6.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"6") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client7.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"7") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client8.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"8") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client9.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"9") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client10.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"10") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client11.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"11") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client12.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"12") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client13.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"13") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client14.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"14") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client15.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"15") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client16.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"16") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client17.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"17") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client18.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"18") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client19.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"19") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client20.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"20") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});

// ======= [ Say MODE - END   ] ======== //

// ======= [ RANDOM - AVATAR  ] ======== //

const kahAVA = 'Ava';
client.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client2.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client2.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client3.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client3.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client4.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client4.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client5.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client5.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client6.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client6.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client7.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client7.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client8.on('message', message => {
 // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client8.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client9.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client9.user.setAvatar(randomf); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client10.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client10.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client11.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client11.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client12.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client12.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client13.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client13.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client14.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client14.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client15.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client15.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client16.on('message', message => { // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + ''; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client16.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client17.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
       if(message.content.startsWith(prefix + 'randomava')) {
        client17.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client18.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)]; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client18.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client19.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client19.user.setAvatar(randomf);
				        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
client20.on('message', message => {

        fs.readFile(`./${kahAVA}.txt`, function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let randomf = lines[Math.floor(Math.random()*lines.length)];
    let argresult = message.content.split(` `).slice(1).join(' ');
     if (!config.kahrbaaid.includes(message.author.id)) return;
       if(message.content.startsWith(prefix + 'randomava')) {
        client20.user.setAvatar(randomf);
		        message.channel.send(`**» لقد حصلت علي صورة شخصية , شكرا لك <3 **`)
       }})});
// ======= [ RANDOM - AVATAR end ] ======== //



// ======= [ SPAM - MODE  ] ======== //

client.on('warn', console.warn);
client.on('error', console.error);
const child_process = require("child_process");
client.on('message', message => {
if(message.content === prefix + "spam on") {
      if (!config.kahrbaaid.includes(message.author.id)) return;
          message.channel.send(`**⚠️ | SPAM ON , <@${config.kahrbaaid}>**`);
        child_process.fork(__dirname + "/spam.js");
        console.log("[SYSTEM-SPAM] - تم التفعيل ..");
    }
  
  });
// ======= [ SPAM - MODE end ] ======== //


// ======= [ Credits - INFO ] ======== //

client.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
		setTimeout(async function (){
        message.channel.send('#credit')
}, 1000
)
  }});
client2.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 2000
)
  }});
client3.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 3000
)
  }});
client4.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 4000
)
  }});
client5.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 5000
)
  }});
client6.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 6000
)
  }});
client7.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 7000
)
  }});
client8.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 8000
)
  }});
client9.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 9000
)
  }});
client10.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 10000
)
  }});
client11.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 11000
)
  }});
client12.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 12000
)
  }});
client13.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 13000
)
  }});
client14.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 14000
)
  }});client15.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 15000
)
  }});client16.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 16000
)
  }});client17.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 17000
)
  }});client18.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 18000
)
  }});client19.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 19000
)
  }});client20.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'cc'){
setTimeout(async function (){
        message.channel.send('#credit')
}, 20000
)
  }});
// ======= [ Credits - INFO end ] ======== //

// ======= [ Daily - INFO ] ======== //

client.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 1000)
    }});
client2.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 2000)
    }});
client3.on('message', message => {
 	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 3000)
    }});
client4.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 4000)
    }});
client5.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 5000)
    }});
client6.on('message', message => {
  	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 6000)
    }});
client7.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 7000)
    }});
client8.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 8000)
    }});
client9.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 9000)
    }});
client10.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 10000)
    }});
client11.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 11000)
    }});
client12.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 12000)
    }});
client13.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 13000)
    }});
client14.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 14000)
    }});
client15.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 15000)
    }});
client16.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 16000)
    }});
client17.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 17000)
    }});
client18.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 18000)
    }});
client19.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 19000)
    }});
client20.on('message', message => {
	  if (!config.kahrbaaid.includes(message.author.id)) return;
    if(message.content === prefix +'dly'){
setTimeout(async function (){
        message.channel.send('#daily')
}, 20000)
    }});


 // جمــيع الحقوق محفوظة لدي "Kahrbaa"




client.login(process.env.KahTOKEN);
client2.login(process.env.KahTOKEN2);
client3.login(process.env.KahTOKEN3); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client4.login(process.env.KahTOKEN4);
client5.login(process.env.KahTOKEN5);
client6.login(process.env.KahTOKEN6);
client7.login(process.env.KahTOKEN7);
client8.login(process.env.KahTOKEN8);
client9.login(process.env.KahTOKEN9);
client10.login(process.env.KahTOKEN10); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client11.login(process.env.KahTOKEN11);
client12.login(process.env.KahTOKEN12);
client13.login(process.env.KahTOKEN13); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client14.login(process.env.KahTOKEN14);
client15.login(process.env.KahTOKEN15);
client16.login(process.env.KahTOKEN16);
client17.login(process.env.KahTOKEN17);
client18.login(process.env.KahTOKEN18);
client19.login(process.env.KahTOKEN19);
client20.login(process.env.KahTOKEN20);