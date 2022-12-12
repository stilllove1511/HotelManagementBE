import { Request, Response } from 'express';
import UserModel from '../../models/user';
import AccountModel from '../../models/account';
import * as bcrypt from 'bcrypt'
class UserController {
    public async getUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.find()

            console.log(users);
            res.status(200).json({ message: 'Success', data: users });
        } catch (error) {
            res.status(500).json("Error server")
        }
    }
    public async getSingleUser(req: Request, res: Response) {
        try {
            const user = await UserModel.findOne({ _id: req.params.userId })
            if(!user)
                res.status(200).json({ message: 'Success', data: user });
            else 
                res.status(404).json("user not found")
        } catch (error) {
            res.status(500).json("Error server")
        }
    }
    public async createUser(req: Request, res: Response) {
        let bodyUser = req.body
        try {
            const userAccount = await UserModel.findOne({ email: bodyUser.email })
            if (!userAccount) {
                let salt = await bcrypt.genSaltSync(10);
                let password = await bcrypt.hashSync(String(bodyUser.password), salt);
                delete bodyUser.password
               
                
                // add inforuser to table "users"
                const newUser = await UserModel.create({ ...bodyUser, status: 'inactive', role: 'user' });
                console.log(newUser);
                // add account to table "account"
                await AccountModel.create({
                    id: newUser._id,
                    email: bodyUser.email,
                    password: password,
                    role: 'user',
                });
                res.status(200).json({ message: 'Create success', data: newUser });

            } else {
                res.status(404).json("Email is duplicated, please re-enter")
            }
        } catch (error) {
            res.status(500).json("Error server")
        }
    }

    public async editUser(req: Request, res: Response) {
        try {
            const userEdit = await UserModel.findOne({ _id: req.params.userId })
            if (!userEdit) {
                let bodyUser = req.body
                const userData = await UserModel.updateOne({ _id: req.params.userId }, { ...bodyUser }, { runValidators: true });
                res.status(200).json({ message: 'Edit success', data: userData });
            } else {
                res.status(404).json("User not found")
            }
        } catch (error) {
            res.status(500).json("Error server")
        }
    }

    public async removeUser(req: Request, res: Response) {
        try {
            const userRemove = await UserModel.findOne({ _id: req.params.userId })
            console.log(userRemove);
            if (!!userRemove) {
                await UserModel.remove({ _id: req.params.userId })
                await AccountModel.remove({ id: req.params.userId })
                res.status(200).json("Delete user success")
            } else {
                res.status(404).json("User not found")
            }
        } catch (error) {
            res.status(500).json("Error server")
        }
    }
}

export default new UserController()