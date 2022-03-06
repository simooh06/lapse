const Discord = require("discord.js");
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]
 } )


client.login (process.env.token)

client.once('ready', () => {
    console.log('Lapse on')
})


client.on("messageCreate", (message) => {

    if (message.content == "!commands"){
        var embed = new Discord.MessageEmbed()
          .setTitle("💻 commands of lapse bot")
          .setAuthor('simooh', 'https://cdn.discordapp.com/avatars/582986261120417803/a_c54a5b13324e22217172cbc6ca12014c.webp?size=128')
          .setThumbnail("https://static.wikia.nocookie.net/lapse/images/3/3a/Lapse2_Icon.png/revision/latest?cb=20200121095708")
          .setColor('#2f3135')
          .addFields(
            {
                 name: '🔔 info of lapse', 
                 value: '!lapse info', 
                 inline: true
            },
            {
                 name: '🔗 download lapse', 
                 value: '!download help', 
                 inline: true
            },

           {
                  name: '🔨 moderations ', 
                 value: '!moderations', 
                 inline: true
           },

          )
            

          
         .setTimestamp();
          message.channel.send({ embeds: [embed] })
        }


    if (message.content == "!moderations"){
        var embed = new Discord.MessageEmbed()
          .setTitle("🔨 moderations commands")
          .setThumbnail("https://static.wikia.nocookie.net/lapse/images/7/73/General_Ramsey.png/revision/latest/top-crop/width/360/height/450?cb=20191221141136")
          .setColor('#2f3135')
          .addFields(
            {
                 name: 'ban command', 
                 value: '!ban [user]', 
                 inline: true
            },
            {
                name: 'kick command', 
                value: '!kick [user]', 
                inline: true
            },
            )
     
          message.channel.send({ embeds: [embed] })
    
    
    }


})

client.on("message", (message) => {
    if (message.content.startsWith("!kick")) {
        var utenteKick = message.mentions.members.first();

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send('you dont have the permission');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!message.mentions.members.first().kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.kick()
        var embed = new Discord.MessageEmbed()
        .setTitle("MEMBER HAS BEEN KICKED")
        .setDescription("<@" + utenteKick + ">" + " has been kicked")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3KjapxQnWbmDWLtkMjhVrv6TNV31rmF8BXUMfUAykQbZw68lvelodmb1DCsYzxAe84As&usqp=CAU")
        .setColor('#EAD648')
        .setTimestamp()
    
        message.channel.send({ embeds: [embed] })

    }

    if (message.content.startsWith("!ban")) {
        var utenteBan = message.mentions.members.first();

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteBan) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!utenteBan.kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteBan.ban()
        var embed = new Discord.MessageEmbed()
        .setTitle("MEMBER HAS BENN BANNED   ")
        .setDescription("<@" + utenteBan + ">" + " has been banned")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7-g7xTR2ugybToDi0umSsxhSPwy_k89cY2TOMWNUzx57ed1E4Zrf3oPAgyczMowKd5Y&usqp=CAU")
        .setColor('#9E0814')
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
    }
})

client.on("messageCreate", (message) => {

    if (message.content == "!download help"){
        var embed = new Discord.MessageEmbed()
          .setTitle("🔗 download lapse game")
          .setThumbnail("https://static.wikia.nocookie.net/lapse/images/9/90/K.jpg/revision/latest?cb=20200222054213")
          .setColor('#2f3135')
          .addFields(
            {
                 name: 'download lapse 1,2 ios', 
                 value: '!download ios,                            !download 2 ios', 
                 inline: true
            },
            {
                name: '!download lapse 1,2 androide', 
                value: '!download androide,                  !download 2 androide', 
                inline: true
            },
            )
     
          message.channel.send({ embeds: [embed] })


    }

    if(message.content == "!download ios"){
        message.channel.send("link for ios download : https://apps.apple.com/it/app/lapse-a-forgotten-future/id1509252675 !")
    }

    if(message.content == "!download androide"){
        message.channel.send("link for androide download : https://play.google.com/store/apps/details?id=com.cornago.stefano.lapse&hl=it&gl=US !")
    }

    if(message.content == "!download 2 ios"){
        message.channel.send("link for ios download 2 : https://apps.apple.com/us/app/lapse-2-before-zero/id1524444955 !")
    }

    if(message.content == "!download 2 androide"){
        message.channel.send("link for androide download 2 : https://play.google.com/store/apps/details?id=com.cornago.stefano.lapse2&hl=en_US&gl=US !")
    }



    if (message.content == "!lapse info"){
        var embed = new Discord.MessageEmbed()
          .setTitle("🎓 info of Lapse bot")
          .setDescription("for all info of the game [click me](https://www.cornagostefano.it/lapse-a-forgotten-future/) !")
          .setThumbnail("https://play-lh.googleusercontent.com/wtXk-RO6u834Z9TD8izqckwKUqq6e_FUIOTQPX6LqcDxt3TdGwaLzxn9XuG6miFw0KA=s180-rw")
          .setColor('#2f3135')
          .addField("!commands", "type !commands for command info")

          
     
          message.channel.send({ embeds: [embed] })

    }








    
})


