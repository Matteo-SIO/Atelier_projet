import jwt from 'jsonwebtoken';
import Config from '../Config.js';

export let generateToken = (userInstance) => {
    return jwt.sign({
        id: userInstance.id,
        email: userInstance.email,
    }, Config.JWK_TOKEN, {
        expiresIn: '1h'
    });
}

export let verifyToken = (token) => {
    return jwt.verify(token, Config.JWK_TOKEN);
}