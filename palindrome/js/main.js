function checkIfPalindrome(str){
    str = str.replace(/\s/g, '').toLowerCase();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

function checkPalindrome(){
    const input = document.getElementById("inputText").value;
    const result = document.getElementById("result");


    if(input.trim() === ''){
        result.innerText = "Please enter a word.";
        return;
    }

    if(checkIfPalindrome(input)){
        result.innerText = "true";
    } else{
        result.innerText = "false";
    }
}