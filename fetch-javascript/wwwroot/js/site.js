// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//alert("test");

const AddBtn = document.querySelector("#btnAddNewToDo");
const btnGetAllToDos = document.getElementById("btnGetAllToDos");
const AddForm = document.querySelector("#AddForm");
const TitleText = document.querySelector("#Title");
const MainList = document.querySelector("#main-list");
const LoadingSpinner = document.querySelector("#LoadingSpinner");

btnGetAllToDos.addEventListener("click", function (event) {

    console.log("Get Data");
    btnGetAllToDos.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...`;
    fetch("https://localhost:7123/ToDo/GetList")
        .then((response) => {
            if (!response.ok)
                throw new Error("Error");
            return response.json();
        }).then((data) => {
            MainList.innerHTML =
                data.map(el => `<li class="list-group-item">${el.id} ${el.title}</li>`)
                    .join("\n");
            console.log(data);
            btnGetAllToDos.innerHTML = 'Get Data';
        }).catch((err) => {
            console.log(err);
        });

    event.preventDefault();
});


AddForm.addEventListener("submit", (event) => {

    console.log('Add To DO');
    LoadingSpinner.innerHTML = "<p>Loading ...</p>";
    fetch("AddJSON", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Title: TitleText.value })
    })
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            MainList.innerHTML += `<li class="list-group-item">${data.id} ${data.title}</li>`;
            TitleText.value = '';
            LoadingSpinner.innerHTML = "";
        });

    event.preventDefault();
});

console.log(btnGetAllToDos);
