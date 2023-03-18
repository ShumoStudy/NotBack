const form = document.getElementById('word-form');
const input = document.getElementById('word-input');
const container = document.getElementById('word-container');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const word = input.value;
	input.value = '';
	if (word) {
		fetch('/add-word', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ word })
		})
		.then(response => response.json())
		.then(data => {
			container.innerHTML = `<div class="word
function loadWords() {
  fetch('/words')
    .then(response => response.json())
    .then(data => {
      const wordList = document.getElementById('word-list');
      wordList.innerHTML = '';
      for (const word of data.words) {
        const li = document.createElement('li');
        li.textContent = word;
        wordList.appendChild(li);
      }
    })
    .catch(error => console.error(error));
}
