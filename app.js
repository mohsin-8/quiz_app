var quizStartBtn = document.getElementsByClassName('quizStartBtn');
var quizForm = document.getElementsByClassName('quizForm');
var quizBtn = document.getElementById("quizBtn");


var setUserName = document.getElementById("setUserName")
var setEmail = document.getElementById("setEmail")

function onSubmit() {
    var FormName = document.getElementById('FormName');
    var FormEmail = document.getElementById('FormEmail');
    var FormCell = document.getElementById('FormCell');
    var FormSchool = document.getElementById('FormSchool');
    var FormNameError = document.getElementById("FormNameError")
    var FormEmailError = document.getElementById("FormEmailError")
    var FormCellError = document.getElementById("FormCellError")
    var FormSchoolError = document.getElementById("FormSchoolError")

    if (FormName.value != "") {
        if (!(FormName.value.length < 3)) {
            FormNameError.innerHTML = ""
            FormName.style.borderBottom = "2px solid green"
        }
        else {
            FormNameError.innerHTML = "Please enter a correct Name.."
            FormName.style.borderBottom = "2px solid red"

        }
    }

    else {
        FormNameError.innerHTML = "Please enter  Your Name.."

    }

    var email_valid = /^[a-zA-Z0-9_.]{1,}[@]{1}[a-z]{1,}[.]{1}[a-z]{1,}$/

    if (FormEmail.value != "") {
        if (FormEmail.value.match(email_valid)) {
            FormEmailError.innerHTML = ""
            FormEmail.style.borderBottom = "2px solid green"
        }
        else {
            FormEmailError.innerHTML = "Please enter a correct Email.."
            FormEmail.style.borderBottom = "2px solid red"

        }
    }

    else {
        FormEmailError.innerHTML = "Please enter  Your Email.."

    }

    if (FormCell.value != "") {
        if (FormCell.value.length == 11) {
            FormCellError.innerHTML = ""
            FormCell.style.borderBottom = "2px solid green"

        }
        else {
            FormCellError.innerHTML = "Please enter a correct Cell #.."
            FormCell.style.borderBottom = "2px solid red"

        }
    }
    else {
        FormCellError.innerHTML = "Please enter a  Cell #.."
        FormCell.style.borderBottom = "2px solid red"

    }

    if (FormSchool.value != "") {
        if (FormSchool.value.length > 2) {
            FormSchoolError.innerHTML = ""
            FormSchool.style.borderBottom = "2px solid green"

        }
        else {
            FormSchoolError.innerHTML = "Please enter a correct Institute Name.."
            FormSchool.style.borderBottom = "2px solid red"

        }
    }
    else {
        FormSchoolError.innerHTML = "Please enter your Institute Name.."
        FormSchool.style.borderBottom = "2px solid red"

    }

    if (FormNameError.innerHTML == "" && FormEmailError.innerHTML == "" && FormCellError.innerHTML == "" && FormSchoolError.innerHTML == "") {
        quizForm[0].classList.add("hide");
        quizStartBtn[0].classList.remove("hide")
        setUserName.innerText = `Name: ${FormName.value}`
        setEmail.innerText = `Email: ${FormEmail.value}`
    }

}




var quizQuestions = [
    {
        num: 1,
        question: "HTML stand for",
        Option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        Option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        Option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    }
    ,
    {
        num: 4,
        question: "who is the present president of pakistan",
        Option: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    }
    ,
    {
        num: 5,
        question: "How many prayers in a day:",
        Option: {
            a: "6",
            b: "5",
            c: "3",
            d: "none",

        },
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        Option: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        Option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    }
]

///////Result Calculator////

var wordingScore = document.getElementById("wordingScore");
var rightCount = document.getElementById("rightCount")
var wrongCount = document.getElementById("wrongCount")
var resultMainBox = document.getElementById("resultMainBox")
//////


var optionUl = document.getElementsByClassName('optionUl');
var optionLists = document.getElementsByClassName("option");
var QuestBox = document.getElementsByClassName("QuestBox")
var count = 0;
var Quizquestion = document.getElementById('Quizquestion');
var quesNum = document.getElementById("quesNum")
var nextQuest = document.getElementById("nextQuest")
var score = 0;
quizBtn.onclick = function () {
    quizStartBtn[0].classList.add("hide");
    QuestBox[0].classList.remove("hide");
    quesChange(0)
    quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
    nextQuest.style.display = "none"
    for (var i = 0; i < optionLists.length; i++) {
        optionLists[i].setAttribute("onclick", "optionSelected(this)")
    }

}

function nextQuestion() {
    count++
    if (count < quizQuestions.length) {
        quesChange(count)
        quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
        nextQuest.style.display = "none"
    }
    else {
        QuestBox[0].classList.add("hide");
        resultMainBox.classList.remove("hide")
    }

}

function quesChange(index) {

    Quizquestion.innerText = quizQuestions[index].question
    optionLists[0].innerHTML = quizQuestions[index].Option.a
    optionLists[1].innerHTML = quizQuestions[index].Option.b
    optionLists[2].innerHTML = quizQuestions[index].Option.c
    optionLists[3].innerHTML = quizQuestions[index].Option.d

    ////REMOVE Options Background/////
    for (var i = 0; i < optionLists.length; i++) {
        optionLists[i].classList.remove("success")
        optionLists[i].classList.remove("wrong")
    }
    ////REMOVE CLICK disabled  Background/////
    for (var i = 0; i < optionLists.length; i++) {
        optionLists[i].classList.remove("disabled")
    }
}

function optionSelected(answer) {
    // console.log(answer.innerHTML)
    if (answer.innerHTML === quizQuestions[count].answer) {
        console.log("correct")
        nextQuest.style.display = "block"
        answer.classList.add("success")
        score += 1;
        console.log(score)
        rightCount.lastChild.nodeValue = `${score} Corrects`

    }
    else {
        console.log("block")
        nextQuest.style.display = "block"
        answer.classList.add("wrong")
        var wrongCouting = 0;
        wrongCouting++
        wrongCount.lastChild.nodeValue = `${wrongCouting} Wrongs`

        for (var i = 0; i < optionLists.length; i++) {

            if (optionLists[i].innerHTML === quizQuestions[count].answer) {
                optionLists[i].classList.add("success")
                // console.log(answer.innerHTML)
            }
        }




    }

    ///User select one option all option is block/////
    for (var i = 0; i < optionLists.length; i++) {
        optionLists[i].classList.add("disabled")
    }


}


////RESULT CALCULATION PERFORM////
console.log(wrongCount.lastChild.nodeValue)