const API_KEY = '';
const myRequest = fetch(
    ''
);

myRequest
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });