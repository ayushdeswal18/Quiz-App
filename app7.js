const questions = [{
    question: "Which is the largest animal in the world?",
    answers: [{
        text: "Shark",
        correct: "false"
    },
    {
        text: "Blue Whale",
        correct: "true"
    },
    {
        text: "Elephant",
        correct: "false"
    },
    {
        text: "Giraffe",
        correct: "false"
    },

    ]
},
{
    question: "Which is the smallest continent in the world?",
    answers: [{
        text: "Asia",
        correct: "false"
    },
    {
        text: "Australia",
        correct: "true"
    },
    {
        text: "Europe",
        correct: "false"
    },
    {
        text: "Africa",
        correct: "false"
    },

    ]
},
{
    question: "Which is the largest desert in the world?",
    answers: [{
        text: "Kalhari",
        correct: "false"
    },
    {
        text: "Gobi",
        correct: "false"
    },
    {
        text: "Sahara",
        correct: "false"
    },
    {
        text: "Antartica",
        correct: "true"
    },

    ]
},
{
    question: "Which is the smallest country in the world?",
    answers: [{
        text: "Vatican city",
        correct: "true"
    },
    {
        text: "Bhutan",
        correct: "false"
    },
    {
        text: "Nepal",
        correct: "false"
    },
    {
        text: "Sri Lanka",
        correct: "false"
    },

    ]
}];
const ques = document.getElementById("q");
const ans = document.querySelector(".an");
const nextbtn = document.getElementById("next");


let index = 0;
let score = 0;

function start() {
    let index = 0;
    let score = 0;

    nextbtn.innerHTML = "Next"
    show()

}
function show(){
   resetState();

    let currentquestion=questions[index];
let questionno=index+1;

ques.innerHTML=questionno+". "+currentquestion.question;

currentquestion.answers.forEach(a=>{
    
      const button=document.createElement("button");
      button.innerHTML=a.text;
      button.classList.add("btn");
   
     ans.appendChild(button);
      if(a.correct){
        button.dataset.correct=a.correct;

      }
      button.addEventListener("click",option);
 

})
}
function option(e){
    const select=e.target;
   const iscorrect=select.dataset.correct==="true"
    if(iscorrect){
        select.classList.add("correct");
       score++;
    }
    else{
        
            select.classList.add("incorrect");
            
        
    }
    Array.from(ans.children).forEach(b=> {
        if(b.dataset.correct=="true"){
            b.classList.add("correct");

        
           }
           b.disabled="true";

    });
    nextbtn.style.display="block";


}

function handlenextbtn(){
    index++;
    if(index< questions.length)
    {
       show();


    }
    else{
        showscore();

    }
}
function showscore(){
    resetState()
    ques.innerHTML=`You scored ${score} out of ${questions.length}!`;

    nextbtn.innerHTML="Play Again";
    
    nextbtn.style.display="block";
    

}
nextbtn.addEventListener("click",()=>{
    if(index<questions.length)
    {
        handlenextbtn();

    }
    else{
        start();

    }
})

function resetState(){
    nextbtn.style.display="none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);

    }
}

start();
