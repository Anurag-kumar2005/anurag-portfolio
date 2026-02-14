document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
      "service_s2gofeq",
      "template_32ddp9f",
      this
    ).then(() => {
      msg.innerHTML = "Message sent successfully!";
      contactForm.reset();
    }).catch((error) => {
      console.log(error);
      msg.innerHTML = "Failed to send message.";
    });
  });

});
