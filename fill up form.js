document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    var form = document.getElementById('reservationForm');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();
  
      // Access form data
      var fullName = form.elements.FullName.value;
      var age = form.elements.age.value;
      var date = form.elements.date.value;
      var ticketStatus = form.elements.what.value;
  
      // Do something with the form data (e.g., send it to a server)
      console.log("Full Name:", fullName);
      console.log("Age:", age);
      console.log("Date:", date);
      console.log("Ticket Status:", ticketStatus);
  
      //SubmitButton.addEventListener('click', function (){})
       alert("You have now reserved your ticket!");
    });
  });