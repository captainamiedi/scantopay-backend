import models from '../models/index.js'
import { compareSync } from 'bcrypt';

const {User} = models


export const signupService = async (userObj) => {
    try {
        const userRes = await User.create(userObj)
        return userRes;
    } catch (error) {
        throw error
    }
}

export const findUserByEmail = async (email) => {
    try {
        return await User.findOne({where: {email}})
    } catch (error) {
        throw error
    }
}
export const findUserById = async (id) => {
    try {
        return await User.findOne({where: {id}})
    } catch (error) {
        throw error
    }
}

export const updatePassword = async (hash, id) => {
    try {
      return await User.update(hash, { where: { id } });
    } catch (err) {
      throw err;
    }
};

export const comparePassword = (password, hashedPassword) => compareSync(password, hashedPassword);