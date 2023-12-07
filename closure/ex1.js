// /Create a closure which has one inner function

function outerFunction(){
    let text = "";
    function thank(){
        text += "Thank you";
        return text;
    }

    function sorry(){
        text += "Sorry";
        return text;
    }

    return {
        thank: thank(),
        sorry: sorry()
    }
    
}

const innerFunction = outerFunction();
console.log(innerFunction.sorry);    //Thank youSorry
// console.log(innerFunction.thank); //Thank you