const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        age: {
            type: Number,
            required: true,
            default: 0
        },
        contact_number: {
            type: Number,
            required: true,
            default: 0
        },
        working: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("Users", UserSchema);

module.exports = User;
