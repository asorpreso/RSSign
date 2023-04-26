const inputCpf = document.querySelector("#cpf");
const btnAssinar = document.querySelector("#assinar");
const btnPdf = document.querySelector("#pdf");
const message = document.querySelector("#message");

btnPdf.addEventListener("click", function () {
  window.open("https://rssign.netlify.app/documento.pdf");
});

btnAssinar.addEventListener("click", function () {
  if (!inputCpf.value) {
    message.textContent = "Digite os 5 primeiros digitos do CPF";
    return;
  }
  if (inputCpf.value.length !== 5) {
    message.textContent = "Digite os 5 primeiros digitos do CPF";
    return;
  }
  message.textContent = "Processando...";
  const cpf = inputCpf.value;
  const pdfUrl = "https://yourwebsite.com/path/to/pdf.pdf";
  const hashInput = `${pdfUrl}-${cpf}`;
  const sha256Hash = sha256(hashInput);
  message.innerHTML = `HASH SHA256: <br> ${sha256Hash}`;
});
