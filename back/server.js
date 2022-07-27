// const express=require('express');
import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Library from './bookSchema.js';
const app = express();
const connection_url = "mongodb+srv://admin:admin123@cluster0.snuyc.mongodb.net/dbmsMiniProject?retryWrites=true&w=majority";

app.use(express.json());
app.use(Cors());


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
})


app.get("/", (req, res) => {
    res.send("Mini Project DBMS");
});


app.post("/insert", (req, res) => {
    const Book = req.body;
    Library.create(Book, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});

app.post("/update", (req, res) => {
    console.log("The data received from front end is : ", req.body);
    Library.findById(req.body.id)
        .then(doc => {
            console.log(doc);
            doc.students.push(req.body.roll_no);

            doc.save(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Student successfully inserted")
                    console.log(doc)
                }
            })
        })
        .catch(err => {
            console.log(err);
        });

})


app.post("/remove", (req, res) => {
    console.log("Data received is : ", req.body);
    Library.findById(req.body.id)
        .then(doc => {
            console.log(doc);
            doc.students.splice(req.body.key,1)
            console.log(doc.students)
            doc.save(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Student successfully removed")
                    console.log(doc)
                }
            })
        })
        .catch(err => {
            console.log(err);
        });
})

// app.patch("/update",async(req,res)=>{

//     try{
//         const {data}=req.body;





//     }catch(e){
//         console.log(e);
//     }

// })


app.get("/library", (req, res) => {

    Library.find((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    });
});



app.listen(8000, () => { console.log("Listening on port 8000") });