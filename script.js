var links = document.getElementById("navLinks")

function showMenu(){
    navLinks.style.right = "0"
}
function hideMenu(){
    navLinks.style.right = "-200px"
}

function validate(){
    var username=document.getElementById("name").value
    var email=document.getElementById("email").value
    var country=document.getElementById("country").value
    var agreement=document.getElementById("agreement")

    if(username.length < 5){
        Swal.fire("Name length must be at least 5 characters!")
    }
    else if(!email.endsWith("@gmail.com")){
        Swal.fire("Email must end with @gmail.com!")
    }
    else if(!agreement.checked){
        Swal.fire("Agreement must be checked!")
    }else{
        window.location.href = "ContactUs.html"
    }
}