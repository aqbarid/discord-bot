const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./configt.json');

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);