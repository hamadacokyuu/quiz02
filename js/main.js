'use strict'

let question = [
    [
        "山形県の県庁所在地はどこ",
        "1.天童市",
        "2.東根市",
        "3.山形市",
        "3",
        "3の「山形市」"
    ],
    [
        "山形県のお米といえば",
        "1.ひとめぼれ",
        "2.はえぬき",
        "3.こしひかり",
        "2",
        "2の「はえぬき」"
    ],
    [
        "山形県の果物といえばどこ",
        "1.さくらんぼ",
        "2.マンゴー",
        "3.みかん",
        "1",
        "1の「さくらんぼ」"
    ]
];

// スタート画面
const startPage = document.getElementById('startPage');
const startButton = document.getElementById('startButton');

// クイズ画面に移動
startButton.addEventListener('click' , function(){
    startPage.style.display = 'none';
    questionPage.style.display = 'block';
});


// クイズ画面
const questionPage = document.getElementById('questionPage');

let quiz = document.getElementById('question');
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');

let correct = 0;
let quizCnt = 0;

// 回答画面-正解
let answerCorrectModal = document.getElementById('answerCorrectModal');
let CorrectNextButton = document.getElementById('CorrectNextButton');

// 回答画面-不正解
let answerIncorrectModal = document.getElementById('answerIncorrectModal');
let correctResult  = document.getElementById('correctResult');
let incorrectNextButton = document.getElementById('incorrectNextButton');

// 結果画面
const resultPage =  document.getElementById('resultPage');
let yourType  =  document.getElementById('yourType');
let backButton  =  document.getElementById('backButton');

// クイズの処理_初期化
function quizSet(){
    quiz.textContent = question[quizCnt][0];
    ans1.textContent = question[quizCnt][1];
    ans2.textContent = question[quizCnt][2];
    ans3.textContent = question[quizCnt][3];
};

quizSet();

function answerCheck(ans){
    if(ans == question[quizCnt][4]){
        answerCorrectModal.style.display = 'block';
        correct++;
    } else {
        answerIncorrectModal.style.display = 'block';
        correctResult.textContent = `正解数は${question[quizCnt][5]}でした！`;
    }

    CorrectNextButton.addEventListener('click' , function(){
        answerCorrectModal.style.display = 'none';       
    });

    incorrectNextButton.addEventListener('click' , function(){
        answerIncorrectModal.style.display = 'none';
    });

    quizCnt++;
    
    // 結果画面
    if(quizCnt == question.length){
        quiz.textContent = `正解数は${correct}でした！`;
        ans1.textContent = "";
        ans2.textContent = "";
        ans3.textContent = "";
    }else{
        quizSet();
    }
};

// 課題
// 重複しているところをまとめる。foreachを使う。
// 結果画面のJSを書く。
// correctResultの書き方工夫する。