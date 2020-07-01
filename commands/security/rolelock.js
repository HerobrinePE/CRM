const { RichEmbed } = require("discord.js");
module.exports = {
  name: "rlock",
  aliases: ["slock"],
  category: "security",
  description: "Lock a role",
  run: (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message
        .reply("You don't have the required permissions to use this command.")
        .then(m => m.delete(5000));
    let ge = args[0];
    let rRole = message.guild.roles.find("name", ge);
    if (!ge) return message.channel.send("please select role to lock");
    if (!rRole) return message.reply("role not found");
    try {
      let m = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(rRole + " ROLE HAS BEEN LOCKED BY " + message.author);
      message.channel.send(m);
      let server = message.guild;
      const channel = server.channels.forEach(channel => {
        channel.overwritePermissions(rRole, {
          SEND_MESSAGES: false
        });
      });
    } catch (e) {
      let user = "475435277444186114";
      message.user.send(e.stack);
    }
  }
};
