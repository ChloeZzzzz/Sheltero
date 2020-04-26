var http = require('http');

var mod1 = require('./mod1')
var mod2 = require('./mod2')

const nums=10

console.log(mod1.mod1_string)
mod2.print_my_mod()

modules.exports = {
    myfunc: function (){
        mod1.print_my_mod()
    },
    mystring: mod2.mod2_string
}