const quizDB =[
    {
        question:"Q1.Name the first Hindi Movie that received the national award.",
        a:"Dilwale Dulhania Le Jayenge",
        b:"Zindagi Na Milegi Dobara",
        c:"Mirza Ghalib",
        d:"Azaad",
        ans:"ans3"
    },
    {
        question:"Q2.How many songs did Kishore Kumar sung in his life ?",
        a:"975 songs",
        b:"1792 songs",
        c:"2678 songs",
        d:"643 songs",
        ans:"ans3"
    },
    {
        question:"Q3.What is the name of Sholay's iconic villain?",
        a:"Kalia",
        b:"Gabbar Singh",
        c:"Shakaal",
        d:"Bulla",
        ans:"ans2"
    },
    {
         question:"Q4.In which year was Aishwarya Rai crowned Miss World?",
         a:"1991",
         b:"1996",
         c:"1994",
         d:"1990",
         ans:"ans3"
    },
    {
        question:"Q5.Which is the first golden jubilee film of India?",
        a:"Pundalik",
        b:"Alam Ara",
        c:"Sant Tukaram",
        d:"Raja Harishchandr",
        ans:"ans3"
    },
    {
        question:"Q6.Which is the first Sanskrit film?",
        a:"Shankaracharya",
        b:"Bhagavad Gita",
        c:"Gunda",
        d:"Margazhi Raagam",
        ans:"ans1"
    },
    {
        question:"Q7.Which is the first serialised animation film in India?",
        a:"Ek Anek aur ekta",
        b:"Ghayab Aya",
        c:"Kittu",
        d:"Motu Patlu",
        ans:"ans2"
    },
    {
        question:"Q8.Which movie from India won the best film award in the Asian Film Competition section at the 20th Dhaka International Film Festival in January 2022?",
        a:"Sulthan",
        b:"Koozhangal",
        c:"Maanaadu",
        d:"Annaatthe",
        ans:"ans2"
    },
    {
        question:"Q9.Who plays the female lead in the movie 'Chandni Chowk to China'?",
        a:"Kajol",
        b:"Deepika Padukone",
        c:"Alia Bhat",
        d:"Shraddha Kapoor",
        ans:"ans2"
    },
    {
        question:"Q10.Not many people know that Tara Sutaria is also a professional______.",
        a:"Model",
        b:"Actress",
        c:"Singer",
        d:"Dancer",
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
    option2.style.display="none";
    option1.style.display="none";
    fifty.style.display = "none";
    }
   else if (quizDB[questionCount]===quizDB[1])
   {
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[2])
   {
    option1.style.display="none";
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[3])
   {
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[4])
   {
    option1.style.display="none";
    option2.style.display="none";
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
    option1.style.display="none";
    option4.style.display="none";
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
    option3.style.display="none";
    fifty.style.display = "none";
   }
   else 
   {
    option1.style.display="none";
    option4.style.display="none";
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
    option2.style.display="block";
    option1.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[2])
    {
        option2.style.display="block";
        option4.style.display="block";   
    }
    else if(quizDB[questionCount]===quizDB[3])
    {
        option1.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[4])
    {
        option1.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[5])
    {
        option1.style.display="block";
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option2.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option1.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[8])
    {
        option1.style.display="block";
        option3.style.display="block"; 
    }
    else
    {
        option1.style.display="block";
        option3.style.display="block"; 
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
timer = 10;

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