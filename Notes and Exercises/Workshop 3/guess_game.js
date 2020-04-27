var word = window.word;
var correct_guesses = [];
var incorrect_guesses = [];
const guess_limit = 10;
const word_list = ["berry","dangerous","permit","cover","flavour", "attach", "diligent", "fair", "divergent", "mysterious", "hissing", "trucks"]

function set_word(){
    num=Math.ceil(Math.random()*(word_list.length-1));
    word = word_list[num];
}

function check_word(guess){
    let correct_nums = [];
    let seen_alphabet = correct_guesses.concat(incorrect_guesses)
    j=0;

    for (let i=0; i<seen_alphabet.length; i++){
        if(seen_alphabet[i]==guess){
            alert("you guessed this alphabet already!");
            return;
        }
    }

    for (let i=0; i<word.length; i++){
        if(word[i]==guess){
            correct_nums[j] = i;
            j+=1;
        }
    }
    if(correct_nums.length){
        correct_guesses[correct_guesses.length] = guess;
    }
    else{
        incorrect_guesses[incorrect_guesses.length]=guess;
    }
    return;
}

function check_end(){
    if(incorrect_guesses.length>guess_limit){
        alert("Game Over! You lost!");
        reset_game();
    }
    else{
        for(let i=0; i<word.length;i++){
            if(!validate_word(word[i])){
                console.log(word[i]);
                return;
            }
        }
        alert("Game Over! You win!");
        reset_game();
    }
}

function update_words(){
    let text = "";
    for(let i=0; i<word.length; i++){
        text+="<li>";
        if(word[i]==' '){
            text += ' ';
        }
        else if(validate_word(word[i])){
            text += word[i];
        }
        else{
            text += '_';
        }
        text+="</li>"
    }
    document.getElementById("guess_word").innerHTML= text;
}

function update_nums(){
    document.getElementById("correct_id").innerHTML = correct_guesses.length;
    document.getElementById("incorrect_id").innerHTML = incorrect_guesses.length;
    document.getElementById("word_length").innerHTML = word.length;
}

function validate_word(check){
    for(let i=0; i<correct_guesses.length; i++){
        if(check==' '){
            return true;
        }
        if(check==correct_guesses[i]){
            return true;
        }
    }
    return false;
}

function full_update(){
    update_words();
    update_nums();
}

function guess_game(){
    let my_guess = document.getElementById("guess").value;
    if(my_guess.length >1){
        alert("Please enter an alphabet!");
        return;
    }
    check_word(my_guess);
    full_update();
    check_end();
}

function reset_game(){
    correct_guesses = [];
    incorrect_guesses = [];
    set_word();
    full_update();
}

if (!word){
    reset_game();
}
