const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const queue = new Map()

let botname = "Bot"


bot.on("ready", async() => {
 console.log(`${bot.user.username} running!`)

  let státuszok = [
    "Prefix: -help"
  ]

   setInterval(function() {
    let status = státuszok[Math.floor(Math.random()* státuszok.length)]

    bot.user.setActivity(status, {type: "PLAYING"})
   }, 3000)   
})

bot.on("message", async message => {
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0];
  let args = MessageArray.slice(1);
  let prefix = botconfig.prefix;

  if(cmd === `${prefix}anything`){
    message.channel.send("xd")
  }
 
 if(cmd === `${prefix}hey`){
             message.channel.send("**Heyyoo!**")
           }

  if(cmd === `${prefix}wassup?`){
          message.channel.send("**I'm always fine! And you??**")
        }
      
   if(cmd === `${prefix}metoo`){
          message.channel.send("**I am very pleased with this!**")
        }
   
   if(cmd === `${prefix}ifeelbad`){
          message.channel.send("**Oh, don't be sad! I will cheer you up! But if I can't, then get better! :c**")
        }




    if(cmd === `${prefix}help`){
      let HelpEmbed = new Discord.MessageEmbed()
     .setAuthor(message.author.username)
     .setTitle("Help")
     .addField("**Commands:**", "-hey\n -wassup?\n -help\n -metoo\n -ifeelbad\n -version")
     .setThumbnail(message.author.displayAvatarURL())
     .setDescription("**You can find everything here!**")
     .setFooter(`${botname} | ${message.createdAt}`)
     .setColor("RANDOM")

     message.channel.send(HelpEmbed)
    }
 
 
  
   if(cmd === `${prefix}version`){
      let HelpEmbed = new Discord.MessageEmbed()
     .setAuthor(message.author.username)
     .setTitle("**Adumee Bot Version**")
     .addField("Version:", "**1.1.0**")
     .setThumbnail(message.author.displayAvatarURL())
     .setFooter(`${botname} | ${message.createdAt}`)
     .setColor("RANDOM")

     message.channel.send(HelpEmbed)
    }


  console.log(cmd)
