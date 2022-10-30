
const btnGetAllToDosUsingXmlHttpRequest = document.getElementById("btnGetAllToDosUsingXmlHttpRequest");

//Async Operations should use Promises

const GetData = (method, url, data) => {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send();
    });


};

btnGetAllToDosUsingXmlHttpRequest.addEventListener("click", () => {
    event.preventDefault();

    GetData("GET", "https://localhost:7123/ToDo/GetList").then((response) => {
        console.log(response);
    }).catch(err => { console.error(err) });

});