$("#basicDate").flatpickr({
    inline:true,
    enableTime: true,
    dateFormat: "F, d Y H:i",
    altInput: true,
    altFormat: "F j, Y (h:i K)"
});


// document
//   .querySelector('#basicDate')
//   .addEventListener('submit', dateFormHandler);

const confirmBtn= document.querySelector("#confirmBtn");
const dateInput= document.querySelector("#basicDate");
// needs searchResults function
confirmBtn.addEventListener("click", function(){
    console.log(dateInput.value);

});

const dateFormHandler = async (event) => {
    event.preventDefault();
  //Collect values from date form
    const dateInput= document.querySelector("#basicDate").value.trim();
    console.log(dateInput);
  //send a post request to the API endpoint
    if (dateInput) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ dateInput }),
        headers: { 'Content-Type': 'application/json' },
      });
  
    } else {
        alert(response.statusText);
    }
};

//disable selected date and time function
function booked(){
    if (dateInput===){
        alert(dateInput+"is already booked");
    }
}