
function showpassword(){
    var x;
    x = document.getElementById("UserPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function Validatepass(){
    var x;
    var y;
    x = document.getElementById("UserPassword");
    y = document.getElementById("Password");
    if(!(x.value == y.value)){
        alert("password is not matching")
    }
    else if(x.value  == ""){
        alert("password is empty")
    }
    else{
        window.open('senwalchange.html', '_self')
    }
}



function myfunction(){
    var copytext = document.getElementById("myinput");
    copytext.select();
    document.execCommand("copy");
}
function myfunction2(){
    var copytext = document.getElementById("myinput2");
    copytext.select();
    document.execCommand("copy");
}
