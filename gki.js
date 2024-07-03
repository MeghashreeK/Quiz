const quizDB =[
    {
        question:"Q1.Which one of the following river flows between Vindhyan and Satpura ranges?",
        a:"Narmada",
        b:"Mahanadi",
        c:"Son",
        d:"Netravati",
        ans:"ans1"
    },
    {
        question:"Q2.The Central Rice Research Station is situated in?",
        a:"Chennai",
        b:"Cuttack",
        c:"Bangalore",
        d:"Quilon",
        ans:"ans2"
    },
    {
        question:"Q3.Who among the following wrote Sanskrit grammar?",
        a:"Kalidasa",
        b:"Charak",
        c:"Panini",
        d:"Aryabhatt",
        ans:"ans3"
    },
    {
         question:"Q4.Which among the following headstreams meets the Ganges in last?",
         a:"Alaknanda",
         b:"Pindar",
         c:"Mandakini",
         d:"Bhagirathi",
         ans:"ans4"
    },
    {
        question:"Q5.The metal whose salts are sensitive to light is?",
        a:"Zinc",
        b:"Silver",
        c:"Copper",
        d:"Aluminum",
        ans:"ans2"
    },
    {
        question:"Q6.Patanjali is well known for the compilation of -",
        a:"Yoga Sutra",
        b:"Panchatantra",
        c:"Brahma Sutra",
        d:"Ayurveda",
        ans:"ans1"
    },
    {
        question:"Q7.River Luni originates near Pushkar and drains into which one of the following?",
        a:"Rann of Kachchh",
        b:"Arabian Sea",
        c:"Gulf of Cambay",
        d:"Lake Sambhar",
        ans:"ans1"
    },
    {
        question:"Q8.Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
        a:"Pennar",
        b:"Cauvery",
        c:"Krishna",
        d:"Tapti",
        ans:"ans2"
    },
    {
        question:"Q9.The country that has the highest in Barley Production?",
        a:"China",
        b:"India",
        c:"Russia",
        d:"France",
        ans:"ans3"
    },
    {
        question:"Q10.Tsunamis are not caused by",
        a:"Hurricanes",
        b:"Earthquakes",
        c:"Undersea landslides",
        d:"Volcanic eruptions",
        ans:"ans1"
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

/*hint.addEventListener("click",() =>{
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

    
});*/



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