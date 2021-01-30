let amount = +prompt("Введите количество примеров");

function example(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

function symExmaple(){
    return Math.floor(Math.random() * (5 - 1) + 1);
}

for(let i = 0; i < amount; i++){
    let examNum1 = example(1,10),
    examNum2 = example(1,10),
    examSym = symExmaple();
    exam = 0;

if (examSym == 1){
    exam = examNum1 + examNum2;
    examSym = "+";
}else if (examSym == 2){
    exam = examNum1 - examNum2;
    examSym = "-";
}else if (examSym == 3){
    exam = examNum1 * examNum2;
    examSym = "*";
}else if (examSym == 4){
    exam = examNum1 / examNum2;
    examSym = "/";
}

    let answer = +prompt(examNum1 + examSym + examNum2);
    console.log(exam == answer ? "ваш ответ верный - " + answer : "Ваш ответ неверный " + answer + " Правильный ответ " + exam);
}


