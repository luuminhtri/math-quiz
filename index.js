function getRandomOperator() {
    let operators = ["+", "-", "*"];
    a = Math.random();
    let ran = Math.floor(a * operators.length);
    console.log(a);

    console.log(a * operators.length);
    console.log(ran);
}
getRandomOperator()