const { text } = require("express");
var mongoose = require( "mongoose" );
var hour=new mongoose.Schema({
    days:{type:String, required:true},
    open:{type:Number, min:0, max:23, required:true},
    close:{type:Number, min:0, max:23, required:true},
    isClosed:{type:Boolean, required:false},
});
var comment=new mongoose.Schema({
    author:{type:String, required:true},
    rating:{type:Number, required:true, min:0, max:5},
    text:{type:String, required:true},
    date:{type:Date, default:Date.now},
});
var venue=new mongoose.Schema({
    name:{type:String, required:true},
    address:{type:String},
    rating:{type:Number, default:0, min:0, max:5},
    foodanddrink:[String],
    coordinates:{type:[Number], index:'2dsphere'},
    hours:[hour],
    comments:[comment],
});
mongoose.model("venue", venue, "venues");

