const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiRenponse = document.getElementById('aiRenponse');
const responseContent = document.getElementById('response-content');
const form = document.getElementById('form');

const sendForm = (event) => {
    event.preventDefault()
    console.log(event)

}

form.addEventListener('submit', sendForm)

