$("#basicDate").flatpickr({
  inline: true,
  enableTime: true,
  dateFormat: "F, d Y H:i",
  altInput: true,
  altFormat: "F j, Y (h:i K)"
});


// document
//   .querySelector('#basicDate')
//   .addEventListener('submit', dateFormHandler);

const confirmBtn = document.querySelector("#confirmBtn");
const dateInput = document.querySelector("#basicDate");
// needs searchResults function
confirmBtn.addEventListener("click", async function () {
  console.log(dateInput.value);
  const response = await fetch('/api/appointments', {
    method: 'POST',
    body: JSON.stringify({ date: dateInput.value }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

});

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", async function (){
  const selectDate = document.querySelector("#dateSelect");
  const dateid = selectDate.options[selectDate.selectedIndex].value
  const response = await fetch('/api/appointments/'+ dateid, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }

})

const dateFormHandler = async (event) => {
  event.preventDefault();
  //Collect values from date form
  const dateInput = document.querySelector("#basicDate").value.trim();
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
// function booked(){
//     if (dateInput===){
//         alert(dateInput+"is already booked");
//     }
// }