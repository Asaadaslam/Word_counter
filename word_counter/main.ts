import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    type : "input", 
    name:  "words",
    message: "Please enter your scentence"

})
let word_count = user_ans.words.trim().split(" ").length

console.log(word_count)