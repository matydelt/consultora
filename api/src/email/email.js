const nodemailer = require('nodemailer');

// const emailConfig = require('./config');

const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
// const writeFile = promisify(fs.writeFile);

let transport = nodemailer.createTransport({
    // host: emailConfig.host,
    // port: emailConfig.port,
    // auth: {
    //     user: emailConfig.user,
    //     pass: emailConfig.pass
    // }
    service: 'gmail',
    auth: {
        user: 'no.reply.consultora@gmail.com',
        pass: 'elgrupo10'
    }
});

exports.send = async (options) => {

    const file = await readFile(`${__dirname}/plantillas/${options.htmlFile}`, 'utf8');

    let result;

    if(options.fecha) {
        let mapObj = {
            fecha: options.fecha,
            hora: options.hora,
        }
        result = file.replace(/fecha|hora/gi,function(matched){
            return mapObj[matched];
        });
    } else {
        result = file.replace('[[mensaje]]', options.mensaje);
    }
    
    
    let mailOptions = {
        from: '',
        to: options.email,
        subject: options.subject,
        html: result
    };
    const sendMail = transport.sendMail
    return sendMail.call(transport, mailOptions);
}
