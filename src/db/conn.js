const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Students")
// .then(()=>{
//     console.log("Connection successfull");
// })
// .catch((e)=>{
//     console.log(e);
// })
mongoose.connect("mongodb+srv://Debanjan:Debanjan1234@cluster0.2bjz9.mongodb.net/Student?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection Established");
})
.catch((e)=>{
    console.log(e);
})