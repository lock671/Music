const Command = require("../structures/command.js");
const {MessageEmbed} = require('discord.js');
const config = require("../config");

module.exports = new Command({
        name: "links",
        aliases: ["link"],
        description: "Displays associated links",
        permission: "SEND_MESSAGES",
        async run(message, args, client, slash) {
                const embed = new MessageEmbed();
                embed.setColor('0x36393e');
                embed.setDescription(`**Links:**\n
                *https://jukebox.sickgod.xyz/*`);
                
                return message.reply({embeds: [embed]});
        }
});