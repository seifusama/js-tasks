//importing modules
import dotenv from "dotenv";
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { check, validationResult } from 'express-validator'
import morgan from "morgan";


//initialize express and middleware
dotenv.config({path: "./config.env"});
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine','ejs');
app.use(morgan("dev"));

//Navigation
app.get('/', (req, res) => {
  res.render("index");
});

app.post("/",urlencodedParser ,
    [check("first","Invalid First Name")
    .matches(/^[A-Za-z]+$/),
    check("first","Invalid Last Name")
    .matches(/^[A-Za-z]+$/),
    check("email","Invalid Email")
    .isEmail(),
    check("password")
    .isLength({ min: 8, max: 64 }).withMessage("Invalid Password length")
    .matches(/\d/).withMessage("No digit in Password")
    .matches(/[A-Z]/).withMessage("No Uppercase letter in Password")
    .matches(/[a-z]/).withMessage("No Lowercase letter in Password"),
    check("birthday","Invalid Birth day")
    .isInt({min:1, max:31}),
    check("birthmonth","Invalid Birth month")
    .isInt({min:1, max:12}),
    check("birthyear","Invalid Birth year")
    .isInt({min:1900, max:2024}),
],
    (req:Request, res:Response)=>{
        const errs = validationResult(req);
        if (!errs.isEmpty()) {
            const alert = errs.array();
            res.render("index", {alert});
        } else {
    res.send("SUCCESSFUL");
    }
})


app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${process.env.PORT || 5000}!`));