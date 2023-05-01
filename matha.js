const quizDB =[
    {
        question:"Q1.A circle has a number of tangents equal to",
        a:"0",
        b:"1",
        c:"2",
        d:"Infinite",
        ans:"ans4",
        conhint:"Tangent can be anywhere"
    },
    {
        question:"Q2.A tangent intersects the circle at:",
        a:"One point",
        b:"Two distinct point",
        c:"At the circle",
        d:"None of the above",
        ans:"ans1",
        conhint:"A tangent touches the circle only on its boundary"
    },
    {
        question:"Q3.Which of the following triangles have the same side lengths? ",
        a:"Scalene",
        b:"Isosceles",
        c:"Equilateral",
        d:"None of these",
        ans:"ans3",
        conhint:"="
    },
    {
         question:"Q4.Area of an equilateral triangle with side length a is equal to:",
         a:"(√3/2)a",
         b:"(√3/2) a^2",
         c:"(√3/4) a^2",
         d:"(√3/4) a",
         ans:"ans3",
         conhint:"(√3/4)*____"
    },
    {
        question:"Q5.If one of the zeroes of cubic polynomial is x3+ax2+bx+c is -1, then product of other two zeroes is:",
        a:"b-a-1",
        b:"b-a+1",
        c:"a-b+1",
        d:"a-b-1",
        ans:"ans2",
        conhint:"b_a_1"
    },
    {
        question:"Q6.If p(x) is a polynomial of degree one and p(a) = 0, then a is said to be:",
        a:"Zero of p(x)",
        b:"Value of p(x)",
        c:"Constant of p(x)",
        d:"None of the above",
        ans:"ans1",
        conhint:"0 of___"
    },
    {
        question:"Q7.The point which divides the line segment of points P(-1, 7) and (4, -3) in the ratio of 2:3 is:",
        a:"(-1, 3)",
        b:"(-1, -3)",
        c:"(1, -3)",
        d:"(1, 3)",
        ans:"ans4",
        conhint:" Only Positive"
    },
    {
        question:"Q8.The ratio in which the line segment joining the points P(-3, 10) and Q(6, -8) is divided by O(-1, 6) is:",
        a:"1:3",
        b:"3:4",
        c:"2:7",
        d:"2:5",
        ans:"ans3",
        conhint:"4:14"
    },
    {
        question:"Q9.If we join two hemispheres of same radius along their bases, then we get a;",
        a:"Cone",
        b:"Cylinder",
        c:"Sphere",
        d:"Cuboid",
        ans:"ans3",
        conhint:"Ball"
    },
    {
        question:"Q10.A cylindrical pencil sharpened at one edge is the combination of",
        a:"a cone and a cylinder",
        b:"frustum of a cone and a cylinder",
        c:"a hemisphere and a cylinder",
        d:"two cylinders",
        ans:"ans1",
        conhint:"Birthday cap & drum"
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
    option2.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[2])
   {
    option1.style.display="none";
    option2.style.display="none";
    fifty.style.display = "none";
   }
   else if (quizDB[questionCount]===quizDB[3])
   {
    option2.style.display="none";
    option4.style.display="none";
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
    option2.style.display="none";
    option3.style.display="none";
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
    option1.style.display="none";
    option4.style.display="none";
    fifty.style.display = "none";
   }
   else 
   {
    option2.style.display="none";
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
        option2.style.display="block";
        option4.style.display="block";   
    }
    else if(quizDB[questionCount]===quizDB[3])
    {
        option1.style.display="block";
        option2.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[4])
    {
        option2.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[5])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[6])
    {
        option3.style.display="block";
        option4.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[7])
    {
        option2.style.display="block";
        option3.style.display="block"; 
    }
    else if(quizDB[questionCount]===quizDB[8])
    {
        option2.style.display="block";
        option4.style.display="block"; 
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

