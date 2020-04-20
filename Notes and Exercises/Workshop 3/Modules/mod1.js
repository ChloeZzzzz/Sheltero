function print_my_mod(){
    console.log("excessing mod 1")
}

var mod1_string = "Hello Mod1!"

module.exports.print_my_mod = print_my_mod;
module.exports.mod1_string = mod1_string;