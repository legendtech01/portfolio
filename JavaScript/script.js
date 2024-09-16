//navbar

const menuBar = document.getElementById("menuBar");
const navbar = document.getElementById("navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

menuBar.onclick = () =>{
    menuBar.classList.toggle("fa-times");
    navbar.classList.toggle("active");    
};

window.onscroll = () =>{
    menuBar.classList.remove("fa-times");
    navbar.classList.remove("active");


    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
            });
        };
    });
};


// scroll effect

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.img, .heading', {origin: 'top'});
ScrollReveal().reveal('.about-container, .portfolio-content, .home-wrapper, .skill', {origin: 'bottom'});
ScrollReveal().reveal('.personal-info, .contact-content', {origin: 'left'});
ScrollReveal().reveal('.history, .contact-form', {origin: 'right'});


// email linking

let contactName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let messageBody = document.getElementById("messageBody");

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'legendtech966@gmail.com',
        From : email.value,
        Subject : subject.value,
        Body : "Name: " + contactName.value
            +  "<br> Email: " + email.value
            +  "<br> Subject: " + subject.value
            +  "<br> Message: " + messageBody.value
    }).then(
      message => alert("Message sent")
    );
}