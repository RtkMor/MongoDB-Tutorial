const mongoose = require("mongoose");

// connection creation and new db creation if not present
mongoose.connect("mongodb://localhost:27017/ttchannel")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));


// A mongoose schema defines the structure of the document, default values, validators etc
const playlistSchema = new mongoose.Schema({    // Schema Creation
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now()
    }
});


// A Mongoose model is a wrapper on the Mongoose Schema
// A Mongoose model provides an interface to the database for creating, querying, updating, deleting records etc.
const Playlist = new mongoose.model("Playlist", playlistSchema);    // Collection Creation


// Create or Insert document you want to put into the database

// 1st method which is simple and easy but not a good practice
// const reactPlaylist = new Playlist({
//     name: "React JS",
//     ctype: "Front End",
//     videos: 80,
//     author: "Thapar Technical",
//     active: true,
// })

// reactPlaylist.save();   // save the document into the db


// 2nd method, using async await function which is a good practice
// const createDocument = async () => {
//     try{ 
//         const reactPlaylist = new Playlist({
//             name: "Node JS",
//             ctype: "Back End",
//             videos: 50,
//             author: "Thapar Technical",
//             active: true,
//         })
//         const result = await reactPlaylist.save();   // save the document into the db
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


// 3rd method, same as above but how to add multiple data all together
const createDocument = async () => {
    try{ 
        const expressPlaylist = new Playlist({
            name: "Express JS",
            ctype: "Back End",
            videos: 50,
            author: "Thapar Technical",
            active: true,
        })

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype: "Database",
            videos: 10,
            author: "Thapar Technical",
            active: true,
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose JS",
            ctype: "Back End",
            videos: 5,
            author: "Thapar Technical",
            active: true,
        })

        const result = await Playlist.insertMany([expressPlaylist, mongoPlaylist, mongoosePlaylist]);   // insert all the documents into the collection/model
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// createDocument();    --> I dont want to run this everytime to insert the data again and again in my collection, use only once after the db setup


// Lecture - 1 -> How to get data from the database
const getDocument = async () => {
    // showing all the data with .find() method
    // const result = await Playlist.find();   // you can use whatever query here, like findOne, findMany, limit, update, delete, filter methods etc
    // console.log(result);

    try {
        const result = await Playlist.find({ctype: "Back End"})
        .select({name: 1, ctype: 1});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// getDocument();


// Lecture - 2 -> Comparison Operators
// There are total 8 types of comparison operators
// $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
const comparisonOperator = async () => {
    try {
        const result = await Playlist.find({videos : {$gte : 50}})
        .select({name:1, ctype:1, videos:1});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// comparisonOperator();


// Lecture - 3 -> Logical Operators
// There are total 4 types of logical operators
// $and, $or, $not, $nor
const logicalOperators = async () => {
    try {
        const result = await Playlist.find({$and : [ {author:"Thapar Technical"} , {ctype:"Back End"} ]})
        .select({name:1, ctype:1});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// logicalOperators();


// Lecture - 4 -> Sorting and Counting Queries
const sortingQueries = async () => {
    try {
        const result = await Playlist.find()
        .select({name: 1, videos: 1})       // select -> 1 , 0 (1 for I want to show and 0 for dont want to show)
        .sort({videos: 1});         // sort -> 1 , -1 (1 for ascending and -1 for descending)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// sortingQueries();

const countQuery = async () => {
    try {
        const result = await Playlist.find()
        .select({name: 1, videos: 1})
        .countDocuments();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// countQuery();


// Lecture - 5 -> Update operations on the Database
// there are many keywords like, updateOne, updateMany, findByIDAndUpdate
// you have to pass 3 things afterwards -> filter, newValue, options
const updateQuery = async (_id) => {

    // updateOne Query
    // try {
    //     const result = await Playlist.updateOne({_id}, {name: "React JS"});
    //     console.log(result);
    // } catch (error) {
    //     console.log(error);
    // }


    // findByIdAndUpdate    -> https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
    try {
        const result = await Playlist.findByIdAndUpdate({_id}, {$set : {name:"React JS"}}, {    // -> if you don't want to use $set, it will work absolutely fine as well
            new: true,      // -> by default it is set to false, meaning that the old value will be stored in the result and got console.log
            select: {name:1, ctype:1}
        })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// updateQuery("6664a316a5bc83487b0656bc");     // -> I am passing the id from my mangoose compass, pass the id of that object which you want to update


// Lecture - 6 -> Delete Queries
const deleteQuery = async (_id) => {
    try {
        const result = await Playlist.deleteOne({_id})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
deleteQuery("666574768d89c7c7b0a34bec");


// Lecture - 7 -> Insert Queries
const insertQuery = async () => {
    try {
        const result = await Playlist.insertMany([{name:"React JS",ctype:"Front End",videos:80,author:"Thapar Technical",active:true, date:Date.now()}])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// insertQuery();


// Lecture - 8 -> Validation
// learn it from this video -> https://www.youtube.com/watch?v=SorjuKKAMmI&list=PLwGdqUZWnOp1P9xSsJg7g3AY0CUjs-WOa&index=20&ab_channel=ThapaTechnical

// Already present validation options are ->
// lowercase, uppercase, trim, match, enum, minlength, maxlength
// for more validation options visit this link -> https://mongoosejs.com/docs/schematypes.html



// -> Now you have all the basic knowledge of MongoDB and you can move forward to learn the RESTful API creation.