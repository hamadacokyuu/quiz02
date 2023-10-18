'use strict'

let question = [
    [
        "山形県の県庁所在地はどこ",
        "1.天童市",
        "2.東根市",
        "3.山形市",
        "3"
    ],
    [
        "山形県のお米といえば",
        "1.ひとめぼれ",
        "2.はえぬき",
        "3.こしひかり",
        "2"
    ],
    [
        "山形県の果物といえばどこ",
        "1.さくらんぼ",
        "2.マンゴー",
        "3.みかん",
        "1"
    ]
];

// console.log(question[0][1]);

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;
let quizCnt = 0;

function quizSet(){
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
};

quizSet();

function answerCheck(ans){
    if(ans == question[quizCnt][4]){
        alert("正解です");
        correct++;
    } else {
        alert("不正解です");
    }
    quizCnt++;
    if(quizCnt == question.length){
        quiz.textContent = `正解数は${correct}でした！`;
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
    }else{
        quizSet();
    }
};