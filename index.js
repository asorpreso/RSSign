const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
function showPDF() {
  window.open("https://rssign.netlify.app/documento.pdf", "_blank");
}
async function generateHash() {
  // recupera o arquivo PDF do servidor
  const pdfResponse = await fetch("https://www.example.com/document.pdf");
  const pdfBuffer = await pdfResponse.arrayBuffer();

  // recupera os 5 dígitos do CPF informados pelo usuário
  const cpf = document.getElementById("cpf").value.slice(0, 5);

  // concatena o PDF com o CPF e gera o hash SHA256
  const pdfCpfBuffer = new TextEncoder().encode(`${cpf}${pdfBuffer}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", pdfCpfBuffer);

  // converte o hash para uma string hexadecimal
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // exibe o hash na tela
  document.getElementById("hash").textContent = hashHex;
}
