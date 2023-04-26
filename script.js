const form = document.querySelector('form');
const enviarButton = document.getElementById('enviar');

enviarButton.addEventListener('click', () => {
	const pdf = document.getElementById('pdf').files[0];
	const nascimento = document.getElementById('nascimento').value;
	const cpf = document.getElementById('cpf').value;

	if (!pdf || !nascimento || !cpf) {
		alert('Preencha todos os campos!');
		return;
	}

	const formData = new FormData();
	formData.append('pdf', pdf);
	formData.append('nascimento', nascimento);
	formData.append('cpf', cpf);

	enviarButton.disabled = true;

	fetch('/api/assinar', {
		method: 'POST',
		body: formData
	})
	.then(response => response.json())
	.then(data => {
		alert(data.message
