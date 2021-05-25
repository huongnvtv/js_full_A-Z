var generatePassword = require("password-generator"); // tạo password
var markdown = require( "markdown" ).markdown; // chuyển về dạng html
const boxen = require('boxen'); //tạo ra một hộp
const sparkly = require('sparkly'); //tạo núi
const axios = require('axios');

var password =generatePassword(12, false) ;
// console.log(password);
// console.log( markdown.toHTML( "Hello *World*!" ) );
// console.log(boxen('My name is Hướng', {padding: 1}));
// console.log(boxen('Learn js', {padding: 1, margin: 1, borderStyle: 'double'}));// thêm các style cho hộp
// console.log(sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'}));
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });