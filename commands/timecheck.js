//probably needs fixing since i dont think it will tell the time in chat
//halp me carnagion

//Slash Command builder
const { SlashCommandBuilder } = require("@discordjs/builders");

//Slash Command
const data = new SlashCommandBuilder();
data.setName("timecheck");
data.setDescription("Shows the current time in isleward");

//the time

//const execute = async function(interaction)
//{
//  const d = new Date(timestamp);
//  date = d.getHours() + ":" + d.getMinutes();
//  console.log(date);
//  await interaction.reply({
//         content: `Time is ${halp me carnagion}`,
//         ephemeral: true,
//    });
//}
   
//execute
module.exports =
{
    data,
    execute,
}
