const { WAConnection } = require("@adiwajshing/baileys")

const chalk = require('chalk')

const fs = require("fs")

const exec = require('child_process')

const oogway06 = new WAConection()

exports.oogway06 = oogway06

exports.connect = async() => {

    oogway06.version = [2, 2143, 3]

    console.log(chalk.keyword("blue")('◦ Conectando ◦'))

    let auth = './oogway06.json'

      oogway06.logger.level = 'warn'

    oogway06.on("qr", () => {

        console.log(chalk.keyword("yellow")(' ♪  Escanea el codigo...'))

    })

    fs.existsSync(auth) && oogway06.loadAuthInfo(auth)

    oogway06.on('connecting', () => {

        console.log(chalk.whiteBright("⌛"), chalk.keyword("red")("□ Estado de oogwaybot"), chalk.keyword("aqua")("Connecting..."))

    })

        oogway06.on('open', () => {

        console.log(chalk.keyword("green")('╒═══ '), chalk.keyword("green")('⌈ '), chalk.keyword("aqua")('CONECTADO'), chalk.keyword("blue")(' ⌉'), chalk.keyword("green")(' ═══'))

        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("WA Version : "), chalk.whiteBright(oogway06.user.phone.wa_version))

        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Version : "), chalk.whiteBright(oogway06.user.phone.os_version))

        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Device : "), chalk.whiteBright(oogway06.user.phone.device_manufacturer))

        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Model : "), chalk.whiteBright(oogway06.user.phone.device_model))

        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Build Number : "), chalk.whiteBright(oogway06.user.phone.os_build_number))

        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮'))

        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("yellow")('       BIENVENIDO'))

        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("aqua")(' Creditos:'))

        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("magenta")(' oogway | MankBarBar'))

        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯'))

        const authInfo = oogway06.base64EncodedAuthInfo()

        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))

    })

    await oogway06.connect({ timeoutMs: 30 * 1000 })

    return oogway06

}
