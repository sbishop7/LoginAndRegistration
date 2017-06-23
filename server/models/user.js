const mongoose = require("mongoose");

const UserSchema = mongoose.Schema ({
    email: {type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
    birthday: {type: Date, required: true}
    
}, {timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}})

mongoose.model("User", UserSchema)