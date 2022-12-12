import { Request, Response } from 'express';
import AccountModel from '../models/account';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

// const checkPassword = await bcrypt.compareSync(String(data.password), accountUser.password)
class UserController {
    public async loginAccount(req: Request, res: Response) {
        let bodyUser = req.body
        console.log(bodyUser);

        try {
            console.log("Duong");
            const test = await AccountModel.find()
            console.log(test);
            const userAccount = await AccountModel.findOne({ email: bodyUser.email })
            console.log(userAccount);
            if (!!userAccount) {
                const checkPassword = await bcrypt.compareSync(String(bodyUser.password), userAccount.password)
                console.log(checkPassword);

                if (checkPassword) {
                    let token = jwt.sign({ id: userAccount.id }, 'intern-web-eastgate');
                    console.log(token);
                    res.status(200).json({ message: 'Login success', token: token });
                } else {
                    res.status(404).json("Password is incorrect, please re-enter")
                }
            } else {
                res.status(404).json("Email is duplicated, please re-enter")
            }
        } catch (error) {
            res.status(500).json("Error server")
        }
    }
}

export default new UserController()