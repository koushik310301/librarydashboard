import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    book_name:{
        type:String,
        reruire:true
    },
    publication:{
        type:String,
        reruire:true
    },
    publicationDate:{
        type:String,
        reruire:true
    },
    quantity:{
        type:Number,
        default:0
    },
    authors:{
        type:Array
    },
    genre:{
        type:Array
    },
    students:{
        type:Array
    }
})

//export default mongoose.model(<Collection Name>,generated schema name (eg. here it is cardSchema));
export default mongoose.model("library",bookSchema);