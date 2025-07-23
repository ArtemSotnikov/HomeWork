import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
}, {
    collection: 'users',
    timestamps: true
});

userSchema.statics.findByName = function (namePart) {
    return this.find({ name: new RegExp(namePart, 'i') }); // Case-insensitive
};

export default mongoose.model('User', userSchema);

