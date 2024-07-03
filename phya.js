const quizDB =[
    {
        question:"Q1.A 220 V, 100 W bulb is connected to a 110 V source. Calculate the power consumed by the bulb.",
        a:"10 W",
        b:"15 W",
        c:"20 W",
        d:"25 W",
        ans:"ans4",
        conhint:"(0.5×(2×5))^2"

    },
    {
        question:"Q2.A man weighing 65 kg jumps from a 100 ft high building with a load of 35 kg. What will be the load experienced by him?",
        a:"20 kg",
        b:"100 kg",
        c:"300 kg",
        d:"0 kg",
        ans:"ans4",
        conhint:"2×4×5×6×7×9×0×6×5×4×8"
    },
    {
        question:"Q3.Pressure cooker cooks rice faster because",
        a:"It always lets the steam escape",
        b:"High pressure raises the boiling point of water",
        c:"It does not let the heat energy escape easily",
        d:"High pressure crushes the hard covering of rice grains",
        ans:"ans2",
        conhint:"↑"
    },
    {
         question:"Q4.Where is image formed when an object is placed beyond the centre of curvature of concave mirror?",
         a:"At the Centre of Curvature",
         b:"Beyond the Centre of Curvature",
         c:"Between Focus and the Centre of Curvature",
         d:"At Infinity",
         ans:"ans3",
         conhint:"F      .       C"
    },
    {
        question:"Q5.An object which produces high energy and is very distant is the",
        a:"globular cluster",
        b:"open cluster",
        c:"nebula",
        d:"quasar",
        ans:"ans4",
        conhint:"Supermassive black hole"
    },
    {
        question:"Q6.The first successful liquid fuel rocket was launched by",
        a:"Yuri Gagarian",
        b:"Robert Goddard",
        c:"Jules Verne",
        d:"Konstantin Tsiolkovosky",
        ans:"ans2",
        conhint:"Received Langley Gold medal in 1960"
    },
    {
        question:"Q7.Pioneer and Voyager were sent to",
        a:"Jupiter",
        b:"Mars",
        c:"Venus",
        d:"Moon",
        ans:"ans2",
        conhint:"Red planet"
    },
    {
        question:"Q8.PKS 0637-752 has a mass equal to ",
        a:"1 billion suns",
        b:"10 billion suns",
        c:"1 billion earth",
        d:"10 billion earth",
        ans:"ans2",
        conhint:"10×10^3 jupiters"
    },
    {
        question:"Q9.The first probe space which focused mainly on comet was",
        a:"Stardust",
        b:"Clementine",
        c:"Venera",
        d:"Pioneer",
        ans:"ans4",
        conhint:"Charismatic quality"
    },
    {
        question:"Q10.The brightness of a star which can be seen from earth is called ",
        a:"absolute magnitude",
        b:"apparent magnitude",
        c:"light year",
        d:"parallax",
        ans:"ans2",
        conhint:"Along the line of sight to the observer"
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
    option3.style.display="none";
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
    option2.style.display="none";
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
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[7])
   {
    option3.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[8])
   {
    option3.style.display="none";
    option2.style.display="none";
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
    option3.style.display="block"; 
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
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[8])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else
    {
        option3.style.display="block";
        option2.style.display="block"; 
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
    // console.log(checkedAnswer);

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