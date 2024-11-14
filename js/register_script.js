import bcrypt from 'bcrypt';

import { getConnection } from './connectionMongoDB.js';
const Usuario = require('./models/usuarios'); 

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('submit_registration');
    button.addEventListener('click', () => {
        existeUsuarioPorEmail(document.getElementById('email').value)
            .then(exists => {
                if (exists) {
                    console.log('El usuario ya existe');
                } else if (document.getElementById('password').value !== document.getElementById('password_confirmation').value) {
                    console.log('Las contraseñas no coinciden');
                } else {
                    const data = {
                        _id: v4(),
                        email: document.getElementById('correo').value,
                        hash: generateHash(document.getElementById('contrasena').value),
                        nombre: document.getElementById('nombre').value,
                        apellidos: document.getElementById('apellido').value,
                    };
                    
                    registerdata(data);
                }
            }
        );
    });
});



async function findEmail(email) {
  try {
    const usuario = await Usuario.findOne({ email: email });
    return usuario !== null; // Devuelve true si existe, false si no
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    throw error;
  }
}

async function generateHash(password) { 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

async function registerdata(data) {
    const database = getConnection();
    const result = await database.collection('languages').insertOne(data);
    console.log(result);
    console.log('Usuario registrado');
}