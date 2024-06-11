const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "Title":{type:String,required:true},
        "Category":{type:String,required:true},
        "PublishedYear":{type:String,required:true},
        "AuthorName":{type:String,required:true},
        "Description":{type:String,required:true},
        "Price":{type:String,required:true},
        "Edition":{type:String,required:true},
    }
 
)

let librarymodel=mongoose.model("library",Schema);
module.exports={librarymodel}