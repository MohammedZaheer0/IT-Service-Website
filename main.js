document.addEventListener('DOMContentLoaded', function () {


      window.addEventListener("scroll", function() {
        if (window.pageYOffset > 0) {
            Navbar.classList.add("sticky");
        } else {
            Navbar.classList.remove("sticky");
        }
    });



   let open = document.getElementById("menu"); 
   let close = document.getElementById("close"); 
   let Navbar = document.getElementById("navbar"); 
   
   open.addEventListener("click",()=>{
    Navbar.style.display = "flex";
    close.style.display = "block";
    Navbar.style.right = "0";
    open.style.display = "none"
   });

   close.addEventListener("click",()=>{
    Navbar.style.display = "none";
    open.style.display = "block";
   })





   let FormBtn = document.querySelector(".submit-button");
   let Inputs = document.querySelector(".email");
   
   if (FormBtn && Inputs) {
     FormBtn.addEventListener("click", (e) => {
       e.preventDefault();
       setTimeout(() => {
         if (Inputs.value.trim() !== "") {
           window.location.href = "/thankyou.html";
           Inputs.value = "";
         }
       }, 300);
     });
   }
   



});
