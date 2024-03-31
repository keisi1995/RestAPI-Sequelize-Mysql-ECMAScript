import { validationResult } from 'express-validator';

import { User } from '../../model/';
import { error, success } from '../helpers/httpResponse';
import { validationErrors } from '../helpers/myHelper';

export const index = async (req, res) => {
    try {
        const user = await User.findAll();

        return success(res, 'ok!.', 200, user);
    } catch (e) {
        return error(res, e.message, 500);
    }
}

export const show = async (req, res) => {
    const { id_user } = req.params;
    try {
        const user = await User.findByPk(id_user);
        if (!user) { return error(res, 'The User does not exist!.', 404); }
        
        return success(res, 'ok!.', 200, user);
    } catch (e) {
        return error(res, e.message, 500);
    }
}

export const store = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const myErrors = validationErrors(errors.array());
            return error(res, 'Validation Error!.', 500, myErrors);
        }
        
        const { first_name, last_name, phone_number, email, password } = req.body;
        const user = await User.create({
            first_name, 
            last_name, 
            phone_number, 
            email, 
            password
        });

        return success(res, 'Created successfully!.', 201, user);
    } catch (e) {
        return error(res, e.message, 500);
    }
}

export const update = async (req, res) => {
    const { id_user } = req.params;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const myErrors = validationErrors(errors.array());
            return error(res, 'Validation Error!.', 500, myErrors);
        }

        const user = await User.findByPk(id_user);
        if (!user) { return error(res, 'The User does not exist!.', 404); }

        const { first_name, last_name, phone_number, email, password } = req.body;

        await user.update({
            first_name,
            last_name,
            phone_number,
            email,
            password
        });
        
        return success(res, 'Updated successfully!.', 200);
    } catch (e) {
        return error(res, e.message, 500);
    }
}

export const destroy = async (req, res) => {
    const { id_user } = req.params;
    try {
        const user = await User.findByPk(id_user);
        if (!user) { return error(res, 'The User does not exist!.', 404); }
        user.destroy();

        return success(res, 'Deleted successfully!.', 200);
    } catch (e) {
        return error(res, e.message, 500);
    }
}