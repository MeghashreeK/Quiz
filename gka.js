const quizDB =[
    {
        question:"Q1.When was the first human heart transplant operation, which was performed by Dr. Christian Bernard on Louis Washkansky conducted?",
        a:"1943",
        b:"1988",
        c:"1967",
        d:"1963",
        ans:"ans3",
        conhint:"Corporation for Public Broadcasting was created in the year!"
    },
    {
        question:"Q2.Which is the religion for which the Fire temple is the place of worship?",
        a:"Hinduism",
        b:"Jainism",
        c:"Zoroastrianism",
        d:"Buddhism",
        ans:"ans3",
        conhint:"An Iranian Religion"
    },
    {
        question:"Q3.Where can Coral reefs be found in India?",
        a:"The Malabar Coast",
        b:"Rameshwaram",
        c:"Trivandrum",
        d:"Mahabalipuram",
        ans:"ans2",
        conhint:"South eastern TamilNadu"
    },
    {
         question:"Q4.The United Nations Organization has its Headquarters at ",
         a:"Bali",
         b:"Hague",
         c:"New York, USA",
         d:"Washington DC",
         ans:"ans3",
         conhint:"One of the holiest Hindu Char Dham"
    },
    {
        question:"Q5.Objects at the surface of water can be viewed from a submarine under water by using this instrument.",
        a:"Stethescope",
        b:"Periscope",
        c:"Kaleidoscope",
        d:"Telescope",
        ans:"ans2",
        conhint:"Lets you look around walls, corners or other obstacles."
    },
    {
        question:"Q6.Professor Amartya Sen received the Nobel Prize in this field.",
        a:"Literature",
        b:"Electronics",
        c:"Economics",
        d:"Geology",
        ans:"ans3",
        conhint:"Adam Smith is the Father of ?"
    },
    {
        question:"Q7.Which of the following musical instruments is played by Amjad Ali Khan?",
        a:"Veena",
        b:"Tabla",
        c:"Sarod",
        d:"Guitar",
        ans:"ans3",
        conhint:"It is also known as Bass Rubab."
    },
    {
        question:"Q8.Greta Garbo is associated with",
        a:"Classical dance",
        b:"Music",
        c:"Acting",
        d:"Literature",
        ans:"ans3",
        conhint:"Doing the job mentioned for a short time."
    },
    {
        question:"Q9.Dr. V. Kurien is famous in the field of _________.",
        a:"Atomic power",
        b:"Dairy development",
        c:"Economic reforms",
        d:"Poultry farms",
        ans:"ans2",
        conhint:"Cheese"
    },
    {
        question:"Q10.Ms. Meera Sahib Fathima Beevi has the distinction of being the first lady",
        a:"Prime minister of Pakisthan",
        b:"Judge of the District Court",
        c:"Chief Minister of a State",
        d:"Judge of Supreme Court",
        ans:"ans4",
        conhint:"Dhananjaya Y Chandrachud (Present)"
    }

];
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
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
    // fifty.classList.remove('fifty1');
    }
   else if (quizDB[questionCount]===quizDB[1])
   {
    option1.style.display="none";
    option2.style.display="none";
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
    option1.style.display="none";
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
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[6])
   {
    option2.style.display="none";
    option4.style.display="none";
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
    option2.style.display="block";
    option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[2])
    {
        option1.style.display="block";
        option2.style.display="block";   
    }
    else if(quizDB[questionCount]===quizDB[3])
    {
        option1.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[4])
    {
        option1.style.display="block";
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[5])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option2.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option2.style.display="block";
        option4.style.display="block"; 
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
