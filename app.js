const express = require("express");
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");

// const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTED TO MONGO!');
    })
    .catch((err) => {
        console.log('ERROR');
        console.log(err);
    });

const itemsSchema = new mongoose.Schema ({
    name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item ({
    name: "Welcome to your todolist!"
});

const item2 = new Item ({
    name: "Hit + button to add a new item."
});

const item3 = new Item ({
    name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems)
    .then(function (){
        console.log("Successfully added default items!");
    })
    .catch((err) => {
        console.log('ERROR');
        console.log(err);
    });



app.get("/", function(req, res){

    // Code before it was created and refactored as a module in date.js
    // let today = new Date();

    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };

    // today day = today.toLocaleDateString("en-US", options);

   
// const day = date.getDate();   

    res.render("list", {listTitle: day, newListItems: items});
})

app.post("/", function(req, res){

    const item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

})

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server's up on port 3000.")
})