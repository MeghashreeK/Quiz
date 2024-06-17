const quizDB =[
    {
        question:"Q1.121 Divided by 11 is",
        a:"11",
        b:"10",
        c:"19",
        d:"18",
        ans:"ans1"
    },
    {
        question:"Q2.60 Times of 8 Equals to",
        a:"480",
        b:"300",
        c:"250",
        d:"400",
        ans:"ans1"
    },
    {
        question:"Q3.Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _, 54, 60.",
        a:"32, 45",
        b:"30, 48",
        c:"24, 40",
        d:"25, 49",
        ans:"ans2"
    },
    {
         question:"Q4.What is the Next Prime Number after 7 ?",
         a:"13",
         b:"12",
         c:"14",
         d:"11",
         ans:"ans4"
    },
    {
        question:"Q5.Solve 3 + 6 × ( 5 + 4) ÷ 3 - 7",
        a:"11",
        b:"16",
        c:"14",
        d:"15",
        ans:"ans3"
    },
    {
        question:"Q6.Solve 23 + 3 ÷ 3",
        a:"24",
        b:"25",
        c:"26",
        d:"27",
        ans:"ans1"
    },
    {
        question:"Q7.What is 6% Equals to",
        a:"0.06",
        b:"0.6",
        c:"0.006",
        d:"0.0006",
        ans:"ans1"
    },
    {
        question:"Q8.The Product of 131 × 0 × 300 × 4",
        a:"11",
        b:"0",
        c:"46",
        d:"45",
        ans:"ans2"
    },
    {
        question:"Q9.How Many Years are there in a Decade?",
        a:"5 years",
        b:"10 years",
        c:"15 years",
        d:"20 years",
        ans:"ans2"
    },
    {
        question:"Q10.How Many Months Make a Century?",
        a:"12",
        b:"120",
        c:"1200",
        d:"12000",
        ans:"ans3"
    }

];

// const quizDB =[
//     {
//         question:"Q1.What is the full form of HTML?",
//         a:"HELLO To My Land",
//         b:"Hey text Markup Language",
//         c:"Hypertext Makeup Language",
//         d:"Hypertext Markup Language",
//         ans:"ans4",
//         conhint:"my11"
//     },
//     {
//         question:"Q2.What is the full form of CSS?",
//         a:"Cascading Style Sheet",
//         b:"Hey text Markup Language",
//         c:"Hypertext Makeup Language",
//         d:"Hypertext Markup Language",
//         ans:"ans1",
//         conhint:"my12"
//     },
//     {
//         question:"Q3.What is the full form of HTTP?",
//         a:"HELLO To My Land",
//         b:"Hey text Markup Language",
//         c:"Hypertext Makeup Language",
//         d:"Hypertext Transfer Protocol",
//         ans:"ans4",
//         conhint:"my13"
//     },
//     {
//         question:"Q4.What is the full form of JS?",
//         a:"JavaScript",
//         b:"Hey text Markup Language",
//         c:"Hypertext Makeup Language",
//         d:"Hypertext Markup Language",
//         ans:"ans1",
//         conhint:"my14"
//     }

// ];

let guide = document.querySelector("#guide");
let continueBtn = document.querySelector("#continue");
let quiz=document.querySelector("#quiz");
let time=document.querySelector("#time");
let fifty=document.querySelector("#fifty");

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
const hint=document.querySelector('#hint');
const hintd=document.querySelector('.hintd');
const btnd=document.querySelector('.btnd');
const button1=document.querySelector('.button1');
const conhint=document.querySelector('#conhint');
let questionCount=0;
let score=0;
let timer = 0;
let interval = 0;

continueBtn.addEventListener("click", () => {
    guide.style.display = "none";
    quiz.style.display = "block"; 
    interval = setInterval(countDown, 1000); 
});

fifty.addEventListener("click", () => {
    if (quizDB[questionCount]===quizDB[0])
    {
    option3.style.display="none";
    option2.style.display="none";
    fifty.style.display = "none";
    }
   else if (quizDB[questionCount]===quizDB[1])
   {
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[2])
   {
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[3])
   {
    option2.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[4])
   {
    option1.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[5])
   {
    option2.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[6])
   {
    option2.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[7])
   {
    option1.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[8])
   {
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else 
   {
    option2.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
});

hint.addEventListener("click",() =>{
    const questionList=quizDB[questionCount];
    if (quizDB[questionCount]===quizDB[0])
    {
    hintd.style.display="block";
    btnd.style.display="none";
    conhint.innerHTML=questionList.conhint;
    }  
    else if (quizDB[questionCount]===quizDB[1])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[2])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[3])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[4])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[5])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[6])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[7])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else if (quizDB[questionCount]===quizDB[8])
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }
    else 
    {
        hintd.style.display="block";
        btnd.style.display="none";
        conhint.innerHTML=questionList.conhint;
    }

    
});



let countDown = () => {
    if (timer === 00) {
        clearInterval(interval);
        submit.click();
        interval = setInterval(countDown, 1000);
    } else {
        timer--;
        time.innerText = timer;
    }
}

function loadQuestion()
{
    showScore.style.display="none";
const questionList=quizDB[questionCount];
question.innerHTML=questionList.question;
fifty.style.display="none";
btnd.style.display="none";

if ( window.getComputedStyle(document.querySelector('#fifty')).display == "none" ) 
{
    if(quizDB[questionCount]===quizDB[1])
    {
    option3.style.display="block";
    option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[2])
    {
        option1.style.display="block";
        option4.style.display="block";   
    }
    else if(quizDB[questionCount]===quizDB[3])
    {
        option2.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[4])
    {
        option2.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[5])
    {
        option1.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option2.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option2.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[8])
    {
        option1.style.display="block";
        option3.style.display="block"; 
    }
    else
    {
        option1.style.display="block";
        option4.style.display="block"; 
    }
    
}
if (window.getComputedStyle(document.querySelector('.btnd')).display == "none")
{
    hintd.style.display="none";
}




option1.innerHTML=questionList.a;
option2.innerHTML=questionList.b;
option3.innerHTML=questionList.c;
option4.innerHTML=questionList.d;
timer = 20;

}
loadQuestion();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    }
    
    );
    return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click',() =>{
    const checkedAnswer=getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans)
{
score++;
};
questionCount++;
deselectAll();
// if ( fifty.style.display !== "none" ) 
// {
//     option1.style.display="block";
//     option3.style.display="block"; 
// }
if (questionCount<quizDB.length)
{
    loadQuestion();
}
// else if (questionCount<quizDB.length && fifty.style.display !== "none" )
// {
//     loadQuestion();
//     option1.style.display="block";
//     option3.style.display="block"; 
// }
else
{
button1.style.display="none";
btnd.style.display="none";
showScore.style.display="block";
showScore.innerHTML=`
<h3 style="color:black;">Your Score: ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play Again</button>
`;
showScore.classList.remove('scoreArea');
}
}
);
// const targetDiv = document.getElementById("hint1");
// const btn = document.getElementById("hint");
// btn.onclick = function() {
//     if (targetDiv.style.display !== "none") {
//         targetDiv.style.display = "none";
//     } else {
//         targetDiv.style.display = "flex";
//     }
//     };