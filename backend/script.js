function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("formMsg").innerText="Message sent successfully!";
this.reset();
});