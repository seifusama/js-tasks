import express from "express";
import mongoose, { Schema } from "mongoose";
const app = express();
const port = 3000;

//creating schema
const noteSchema = new Schema({
    note:{
        type: String,
        required: true,
    }
});
const Note = mongoose.model("note", noteSchema);


//app start
mongoose.connect('mongodb://127.0.0.1:27017/note-app')
.then(()=>{
    app.listen(port, ()=>{
        console.log("app and db running");
    })
});

//view engine
app.set("view engine","ejs")


//middleware settings
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




app.get('/notes', (req, res) => {
  Note.find()
  .then(result => {
    res.render("notes",{notes:result});
  })
  .catch(err => {
    console.log(err);
  })
});

app.get('/new',(req, res) => {
    res.render('new');
})

app.post('/notes', (req, res) => {
    const note = new Note(req.body);
    note.save()
    .then(()=>{
        res.redirect("/notes");
    })
    .catch(err => {
        console.log(err);
    });
})

