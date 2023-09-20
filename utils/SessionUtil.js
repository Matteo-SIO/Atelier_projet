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
        }, Config.JWK_TOKEN, {
            expiresIn: '1h'
        });
    }

    return null;
}

export let verifyToken = (token) => {
    return jwt.verify(token, Config.JWK_TOKEN);
}

export let getUserFromToken = (token) => {
    try {
        let decoded = verifyToken(token);
        return Tables.User.findOne({
            where: {
                id: decoded.id
            }
        });
    } catch (error) {
        return null;
    }
}