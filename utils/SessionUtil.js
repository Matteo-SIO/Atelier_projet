import jwt from 'jsonwebtoken';
import Config from '../Config.js';
import Tables from "../database/Tables.js";

export let generateTokenFromCredentials = async (email, password) => {
    let user = await Tables.User.findOne({
        where: {
            email: email,
            password: password
        }
    });

    if (user) {
        return jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role
        }, Config.JWK_TOKEN, {
            expiresIn: '7d'
        });
    }

    return null;
}

export let verifyToken = (token) => {
    try {
        return jwt.verify(token, Config.JWK_TOKEN);
    } catch (error) {
        return null;
    }
}

export let getUserFromToken = (token) => {
    let decoded = verifyToken(token);
    return decoded ? Tables.User.findOne({
        where: {
            id: decoded.id
        }
    }) : null;
}