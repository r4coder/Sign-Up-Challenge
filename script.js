let email=document.getElementById("email");
let password=document.getElementById("password");
let e1=document.getElementById("e-1");
let e2=document.getElementById("e-2");

let form=document.getElementById("my-form");

email.addEventListener("input",function(){
    if(email.value.length>3&&email.value.includes("@")&&email.value.includes(".")){
        e1.textContent=" ";
    }else{
        e1.textContent="Make sure email is more than 3 characters and has @ and .";
    }
});

password.addEventListener("input",function(){
    if(password.value.length<8){
        e2.textContent="Make sure password is more than 8 characters";
    }else{
        e2.textContent=" ";
    }
});

form.addEventListener("submit",function(e){
    e.preventDefault();

    alert("successful signup!");

});






