function outerFunction(){
    let message="Hello";
    function innerFunction(){
        return message+" World!!"
    }
    return innerFunction
}

let closure=outerFunction()
console.log(closure())