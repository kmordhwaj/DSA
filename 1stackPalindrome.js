/* Stacks */

// Functions: push, pop, peek, length provided by stack




//  ---------- Palindrom problem -----------

var letters = []; //this is our stack

var word = "racecar";

var rword = ""; //to put reverse of word

//put letters of word into stack
for (var i = 0; i < word.length; i++){    // ["r"] then ["r", "a"] then ["r", "a", "c"] then ["r", "a", "c", "e"]
    letters.push(word[i]);                // then ["r", "a", "c", "e","c"] then ["r", "a", "c", "e","c", "a"]
}                                         // then ["r", "a", "c", "e","c", "a", "r"]    (also word is going to empty)
                                         
//pop off the stack in reverse order      // reverse of above ^  (also rword is going to be full)
for (var i = 0; i < word.length; i++){
    rword += letters.pop();
}

if (rword === word){
   console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}
