const quizDB =[
    {
        question:"Q1.What was the first movie of Megastar Chiranjeevi?",
        a:"Nana oori pandavalu",
        b:"Biggboss",
        c:"2",
        d:"Donga",
        ans:"ans4",
        conhint:"Actress:Radha"
    },
    {
        question:"Q2.Which was the 1st movie directed by Yogaraj Bhat?",
        a:"Mungaru male",
        b:"Galipata",
        c:"Mani",
        d:"Manasare",
        ans:"ans3",
        conhint:"Bead"
    },
    {
        question:"Q3.Which Bollywood actor was honoured with the 24th Crystal Award at the world Economic Forum meeting in january 2018?",
        a:"Shahrukh Khan",
        b:"Aamir Khan",
        c:"Salman Khan",
        d:"Saif Ali Khan",
        ans:"ans3",
        conhint:"First movie:Biwi ho to aise"
    },
    {
         question:"Q4.Who directed Dil Chahta Hai?",
         a:"Amir Khan",
         b:"Zoya Akhtar",
         c:"Reema Kagti",
         d:"Farhan Akhtar",
         ans:"ans4",
         conhint:"Don"
    },
    {
        question:"Q5.Which of these people sang a part in the song 'Maahi Ve'?",
        a:"Alka Yagnik",
        b:"Shaan",
        c:"Loy Mendosa",
        d:"Sadhana Sargam",
        ans:"ans2",
        conhint:"Chand Sifarish"
    },
    {
        question:"Q6.Which Bollywood personality has launched an online platform called 'Pravasi Rojgar' to help migrants find job opportunities?",
        a:"Nana Patekar",
        b:"Nawazuddin Siddiqui",
        c:"Sonu Sood",
        d:"Amitabh Bachchan",
        ans:"ans3",
        conhint:"Samrat Prithviraj"
    },
    {
        question:"Q7.The famous dialogue kyare bul bul mataadakilva  is from which movie?",
        a:"Nagarahole",
        b:"Nagarahavu",
        c:"Mandyada gandu",
        d:"Masanada hoovu",
        ans:"ans2",
        conhint:"Actor:Dr.Vishnuvardhan"
    },
    {
        question:"Q8.Which movie did Thalapathy vijay and Ajith act together?",
        a:"Nanban",
        b:"Rajavin paruvaiyile",
        c:"Selva",
        d:"Chandraleka",
        ans:"ans3",
        conhint:"Song:Dont care Master"
    },
    {
        question:"Q9.Which is the first Malayalam movie cross 50 cr and 75 cr?",
        a:"Nayatta",
        b:"Kala",
        c:"Drishyam",
        d:"Veyil",
        ans:"ans1",
        conhint:"Scene"
    },
    {
        question:"Q10.On which year Shankar Nag died?",
        a:"1988",
        b:"1991",
        c:"1986",
        d:"1990",
        ans:"ans1",
        conhint:"Rihanna born in the year______"
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
    option1.style.display="none";
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
    option3.style.display="none";
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
    option4.style.display="none";
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
    option1.style.display="block"; 
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
        option3.style.display="block";
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

