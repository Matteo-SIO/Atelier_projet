import jwt from 'jsonwebtoken';
import Config from '../config';
import Tables from "../database/Tables.js";
import {JwtToken} from "../../@types/api/jwt";

export async function generateTokenFromCredentials (email: string, password: string) {
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
        } as JwtToken, Config.JWK_TOKEN, {
            expiresIn: '7d'
        });
    }

    return null;
}

export function verifyToken (token: string|null|undefined) : JwtToken|null {
    try {
        if (!token) {
            return null;
        }
        return jwt.verify(token, Config.JWK_TOKEN) as JwtToken;
    } catch (error) {
        return null;
    }
}

export let getUserFromToken = (token: string) => {
    let decoded = verifyToken(token);
    return decoded ? Tables.User.findOne({
        where: {
            id: decoded.id
        }
    }) : null;
}