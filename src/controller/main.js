import path from 'node:path';
// import nodemailer from 'nodemailer';

export const main = (req, res) => {
    return res.sendFile(path.join(process.cwd(), '/src/views', 'index.html'));
    
}

// export const enviarMail = (req, res) => {
//     const { nombre, email, msj } = req.body;

//     try{
//         // Configura el transportador de correo
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false,
//             auth: {
//                 user: 'roman.borla2004@gmail.com',
//                 pass: 'azwl kmbj ltei jdyy'
//             }
//         });
    
//         // Define el correo electrónico
//         const mailOptions = {
//             from: email,
//             to: 'roman.borla2004@gmail.com',
//             subject: 'Nuevo mensaje desde tu sitio web',
//             text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${msj}`
//         };
    
//         // Envía el correo electrónico
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error(error);
//                 res.status(500).send('Error al enviar el correo electrónico');
//             } else {
//                 console.log('Email enviado: ' + info.response);
//                 res.send('¡Mensaje enviado correctamente!');
//             }
//         });
//         return res.sendFile(path.join(process.cwd(), '/src/views', 'index.html'));
//     }catch (error){
//         res.status(500).send("error al enviar el mail", error);
//         console.error("error al enviar el mail", error);
//     }
// }
