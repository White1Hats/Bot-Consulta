const { ApplicationCommandType, PermissionFlagsBits, EmbedBuilder, StringSelectMenuBuilder,ActionRowBuilder } = require("discord.js")

module.exports = {
  name: "consultapainel", // Coloque o nome do comando
  description: "Puxe os dados do mlk", // Coloque a descrição do comando
  type: ApplicationCommandType.ChatInput,


  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
        interaction.reply({content:"Painel Puxadas ON", ephemeral:true})
        interaction.channel.send({
            embeds:[
                new EmbedBuilder().setFooter({text:"Feito por white.hats. Servidor: discord.gg/schemaposse"})
                .setTitle("Consultar Dados")
                .setDescription("Puxe os dados da pessoa que te ameaça idiota, nossos serviços: \n\n **IP:** Localize a pessoa pelo ip dela \n **Cnpj:** Veja os dados do cnpj da pessoa \n **CEP:** Veja a localização do cep da pessoa \n **PLACA:** Consulte a placa do carro do zé buceta")
                .setColor("Red")
                .setImage("https://media.discordapp.net/attachments/1085409508223881276/1168747641606250587/05fbd76b6f712d1ae55250c2d6520bd6.png?ex=6552e410&is=65406f10&hm=483dae4b58fb9b924bd218eccfe764c6193de3dc185f1b6df3180fa575f95752&=&width=828&height=466")
            ],
            components:[
                new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId("painelpuxada")
                    .setPlaceholder("Escolha uma das formas de puxar dados")
                    .addOptions(
                        {
                            label:"IP",
                            description:"Puxar o ip do destinario",
                            value:"puxarip"
                        },
                        {
                            label:"CNPJ",
                            description:"Puxar o cnpj do destinario",
                            value:"puxarcnpj"
                        },
                        {
                            label:"CEP",
                            description:"Puxar o cep do destinario",
                            value:"puxarcep"
                        },
                        {
                            label:"PLACA",
                            description:"Puxar a placa do carro",
                            value:"puxarplaca"
                        },
                        {
                            label:"CPF",
                            description:"Puxar O dados do cpf",
                            value:"puxarcpf"
                        },
                    )
                )
            ]
        })
    }


  }
}