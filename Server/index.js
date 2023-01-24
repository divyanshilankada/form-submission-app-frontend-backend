const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');
const FormModel = require('./models/form');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(bodyParser());

app.get("/", async (req,res) => {

    try
    {
        const result = await FormModel.find();

        res.status(200).json({
            status:"Success",
            message:result
        });
    }
    catch(e)
    {
        res.status(400).json({
            status:"Failed",
            message:e.message
        });
    }

});

app.post("/", [body('firstName', "Invalid First Name").isAlpha(),body("lastName", "Invalid Last Name").isAlpha(),body("dob").isDate(),body("email", "Invalid E-mail").isEmail(),body("middleName", "Invalid Middle Name").isAlpha(), body("phoneNumber", "Invalid Phone Number").isNumeric(), body("phoneNumber", "Invalid Phone Number").isLength(min=10,max=10)]
            , async(req,res) => {

    try{
        const errors = validationResult(req);
        console.log(errors.errors.length);
        if(errors.errors.length !== 0)
        {
            res.status(200).json({
                status:"Failed",
                errors:errors.errors
            });
        }
        else
        {
            //console.log(req.body);
            const result = await FormModel.create(req.body);
            console.log(result);
            res.status(200).json({
                status:"Success",
                message:result
            });
        }
    }
    catch(e)
    {
        res.status(400).json({
            status:"Failed",
            message:e.message
        });
    }
    
});

mongoose.connect(
    "mongodb+srv://lankadadivyanshi:password321@cluster1.9bovumu.mongodb.net/?retryWrites=true&w=majority",
    (err) => {
      if (err) console.log(err);
      else console.log("Database Connected");
    }
  );

app.listen(5000, () => console.log("Server up on 3000..."));