const mongoose = require("../database");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: Number,
    status: String,
    cpf:  {
        type: Number,
        required: true,
    },
    city: String,
    state: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;