const jwt = require('jsonwebtoken');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const { secret } = require("./config/auth.json")
const connection = require('./../models/connection')

module.exports = {
    async login(req, res) {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        const user = await connection('users').where('email', req.body.email).select(['users.hash_password', 'users.id']).first();
    
        if (!user) {
            return res.status(400).send('Incorrect email or password.');
        }

        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.hash_password).catch(error);
            if (!validPassword) {
                return res.status(400).send('Incorrect email or password.');
            }
            const token = jwt.sign({ _id: user._id }, secret);
            const id = user.id;
            res.json({id, token});
        } 
    }
}

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(255).required()
    };

    return Joi.validate(req, schema);
}