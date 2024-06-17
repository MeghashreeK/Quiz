const submit=document.querySelector('#submit');
const block1=document.querySelector('#block1');
const block2=document.querySelector('#block2');
const uname=document.querySelector('#uname');
const loginForm = document.getElementById("login-form");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    if (username==="") {
        alert(" Please enter your name!");
        location.reload();
    } else {
        block1.style.display = "none";
        block2.style.display = "block";
        document.getElementById("uname").innerHTML = "Hello,"+username;
    
    }
});








