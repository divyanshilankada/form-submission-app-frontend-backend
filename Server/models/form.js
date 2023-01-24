const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
            firstName:String, 
            lastName:String, 
            email:String,
            phoneNumber:String,
            middleName:String,
            address:String,
            website:String,
            dob:Date
});

const FormModel = mongoose.model("form", Schema);

module.exports = FormModel;