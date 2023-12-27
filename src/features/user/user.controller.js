import UserModel from "./user.model.js";

export default class UserController {

    signUp(req, res) {
        const { name, email, password, type } = req.body;
        const user = UserModel.SignUp(name, email, password, type);
        console.log("New user signup", user);
        res.status(201).send(user);
    }

    signIn(req, res) {
        const { email, password } = req.body;
        const result = UserModel.SignIn(email, password);
        console.log("result", result);
        if (!result) {
            return res.status(400).send("Incorrect Credentials");
        } else {
            return res.send("Login successful");
        }

    }


} 