
const btnGetAllToDosUsingXmlHttpRequest = document.getElementById("btnGetAllToDosUsingXmlHttpRequest");

const GetData = () => {

    event.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://localhost:7123/ToDo/GetList");

    xhr.responseType = 'json';

    xhr.onload = () => {
        console.log(xhr.response);

    };

    xhr.send();

};

btnGetAllToDosUsingXmlHttpRequest.addEventListener("click", GetData);