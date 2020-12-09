require('dotenv').config();
const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.get('/list', async (req, res) => {
    const users = await User.find();

    res.json({ users });
});

router.get('/list/:id', async (req, res) => {
    const id = await User.findById(req.params.id)

    return res.json(id)
});

router.post('/register', async (req, res) => {

    const { cpf } = req.body;

    try {

        if (await User.findOne({ cpf }))
            return res.status(400).send({ error: 'User already exist' });

        const user = await User.create(req.body);

        return res.send({ user });
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' })
    }

});

router.put('/list/:id', async (req, res) => {

    const id = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    return res.json(id)
    
});

router.delete('/list/:id', async (req, res) => {

    const id = await User.findByIdAndDelete(req.params.id)

    return res.send({message: "Successfully deleted"})

});


module.exports = app => app.use('/user', router)