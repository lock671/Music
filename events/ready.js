const Event = require("../structures/event.js");

module.exports = new Event("ready", client => {
	console.log(`${client.user.tag} ready!`);
	client.user.setActivity(`${client.prefix}help jukebox.sickgod.xyz`, { type: 'LISTENING' });
});