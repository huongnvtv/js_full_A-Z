var generatePassword = require("password-generator"); // tạo password
var markdown = require( "markdown" ).markdown; // chuyển về dạng html
var password =generatePassword(12, false) ;
console.log(password);
console.log( markdown.toHTML( "Hello *World*!" ) );
