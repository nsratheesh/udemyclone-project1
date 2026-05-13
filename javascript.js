/* START LEARNING BUTTON */

document.querySelector(".start").addEventListener("click",()=>{

    alert("Welcome To Udemy Clone!");

});

/* COURSE BUTTONS */

const courseButtons = document.querySelectorAll(".course-btn");

courseButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.innerHTML = "Loading...";

        btn.style.background = "black";

        setTimeout(()=>{

            btn.innerHTML = "Course Opened";

            btn.style.background = "#16a34a";

        },1200);

    });

});

/* MEMBERSHIP BUTTONS */

const membershipButtons = document.querySelectorAll(".plan button");

membershipButtons.forEach((btn)=>{

    btn.addEventListener("click",()=>{

        btn.innerHTML = "Activated";

        btn.style.background = "#16a34a";

    });

});