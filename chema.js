const quizDB =[
    {
        question:"Q1.The Alkali metals are called good reducing agents. This implies that___________:",
        a:"They easily capture electrons",
        b:"They are not stable at room temperature",
        c:"They easily lose electrons",
        d:"They don't act with dilute acids",
        ans:"ans3",
        conhint:"Oxidation"
    },
    {
        question:"Q2.PVC is a polymer of__?",
        a:"Propane",
        b:"Vinyl chloride",
        c:"Styrene",
        d:"Carbonates",
        ans:"ans2",
        conhint:"C2H3CL"
    },
    {
        question:"Q3.Kimberley Process” is related to which among the following ?",
        a:"Gold",
        b:"Diamonds",
        c:"Semi Precious Stones",
        d:"Aluminium",
        ans:"ans2",
        conhint:"Refractive Index=2.418"
    },
    {
         question:"Q4.The colors in the fine cut diamond are because of which among the following?",
         a:"Variance in transparency of diamond",
         b:"Variance in index of refraction",
         c:"Presence of Impurities",
         d:"Existence of definite planer layers",
         ans:"ans3",
         conhint:"Foreign Body"
    },
    {
        question:"Q5.Consider the following pairs:1.Red vitriol - Cobalt(II) sulphate heptahydrate, 2.Black vitriol - Aluminium sulphate, 3.Vitriol of Mars –  Iron(III) sulphate Which of the above is/are correct?",
        a:"1 & 3 Only",
        b:"2 Only",
        c:"3 Only",
        d:"1, 2 & 3",
        ans:"ans1",
        conhint:"RCB"
    },
    {
        question:"Q6.Which of the following chemicals is also known as 'sweet oil of vitriol'?",
        a:"Diethyl ether",
        b:"Aluminium sulphate",
        c:"Sulphuric acid",
        d:"Iron(III) sulphate",
        ans:"ans1",
        conhint:"(C2H5)2O"
    },
    {
        question:"Q7.What is the dimensional formula of Stress?",
        a:"M 1 L-2 T-2",
        b:"M 1 L-1 T-1",
        c:"M 1 L1 T-3",
        d:"M 1 L-1 T-2",
        ans:"ans4",
        conhint:"-2 -1 1"
    },
    {
        question:"Q8.What do we call the strain produced in a body when the deforming force produces a change in its shape without changing its volume?",
        a:"Linear Strain",
        b:"Volumetric Strain",
        c:"Shearing strain",
        d:"Thermal Strain",
        ans:"ans3",
        conhint:"Occurs when sideways force is exerted on a medium."
    },
    {
        question:"Q9.What happens to the non-metallic character of elements in the p-block of the periodic table?",
        a:"non-metallic character decreases down the group",
        b:"non-metallic character increases down the group",
        c:"No fix pattern",
        d:"None",
        ans:"ans1",
        conhint:"<<"
    },
    {
        question:"Q10.Which of the following statements is correct about Diborane?",
        a:"It is pink coloured gas",
        b:"It is a highly toxic gas",
        c:"Both a and b",
        d:"None",
        ans:"ans2",
        conhint:"CO is the ______"
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
    option1.style.display="none";
    option2.style.display="none";
    fifty.style.display = "none";
    // fifty.classList.remove('fifty1');
    }
   else if (quizDB[questionCount]===quizDB[1])
   {
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[2])
   {
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[3])
   {
    option4.style.display="none";
    option2.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[4])
   {
    option3.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[5])
   {
    option3.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[6])
   {
    option3.style.display="none";
    option2.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[7])
   {
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[8])
   {
    option3.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else 
   {
    option3.style.display="none";
    option1.style.display="none";
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


if ( window.getComputedStyle(document.querySelector('#fifty')).display == "none" ) 
{
    if(quizDB[questionCount]===quizDB[1])
    {
    option1.style.display="block";
    option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[2])
    {
        option1.style.display="block";
        option4.style.display="block";   
    }
    else if(quizDB[questionCount]===quizDB[3])
    {
        option1.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[4])
    {
        option4.style.display="block";
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[5])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option3.style.display="block";
        option5.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option3.style.display="block";
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[8])
    {
        option2.style.display="block";
        option4.style.display="block"; 
    }
    else
    {
        option3.style.display="block";
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
timer = 30;

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
const targetDiv = document.getElementById("hint1");
const btn = document.getElementById("hint");
// btn.onclick = function() {
//     if (targetDiv.style.display !== "none") {
//         targetDiv.style.display = "none";
//     } else {
//         targetDiv.style.display = "flex";
//     }
//     };

