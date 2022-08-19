const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const queue = new Map()

let botname = "Adumee bot"


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
