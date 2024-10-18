function copiarDados() {
  const email =
    document.querySelector('input[title="E-Mail"]').value ||
    "Email não encontrado";
  const nome =
    document.querySelector('input[title="Nome"]').value ||
    "Nome não encontrado";
  const cnpj =
    document.querySelector('input[title="CNPJ"]').value ||
    "CNPJ não encontrado";

  const text = `Email: ${email}\nNome: ${nome}\nCNPJ: ${cnpj}`;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Dados copiados com sucesso!");
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
}
