import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController {

    signUp(req, res) {
        const { name, email, password, type } = req.body;
        const user = UserModel.signUp(name, email, password, type);
        console.log("New user signup", user);
        res.status(201).send(user);
    }

    signIn(req, res) {
        const { email, password } = req.body;
        const result = UserModel.signIn(email, password);
        console.log("result", result);
        if (!result) {
            return res.status(400).send("Incorrect Credentials");
        } else {
            // 1. Create token.
            const token = jwt.sign({
                userID: result.id, email: result.email
            }, "DB2CD4F673F33141", {
                expiresIn: '1h',
            });

            // 2. Send token.
            return res.status(200).send(token);
        }

    }


} 