const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tu_correo@gmail.com",
    pass: "tu_contraseña_de_correo",
  },
});

// Función que se activará cuando se agregue un nuevo documento a la colección "contactMessages"
exports.sendEmailNotification = functions.firestore
  .document("contactMessages/{docId}")
  .onCreate((snap, context) => {
    const newValue = snap.data();
    const mailOptions = {
      from: "tu_correo@gmail.com",
      to: "olmosfabian@hotmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${newValue.nombre}\nApellido: ${newValue.apellido}\nEmail: ${newValue.email}\nMensaje: ${newValue.mensaje}`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar correo:", error);
      } else {
        console.log("Correo enviado:", info.response);
      }
    });
  });
