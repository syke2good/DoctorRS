const searchBtn= document.querySelector("#drSubmit");
const searchInput= document.querySelector("#searchy");

async function searchHandler(event){
    event.preventDefault();
    const response = await fetch(`/search`,{
        method:"GET"
    });
    if (response.ok) {
        alert("successful request");
      }
};

searchBtn.addEventListener("click", function(){
    searchHandler()
    console.log(searchInput.value);

});