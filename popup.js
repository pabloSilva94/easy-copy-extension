function copyToClipboard(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Erro ao copiar: ", err);
  } finally {
    document.body.removeChild(input);
  }
}
function copyToAllClipboard(allText) {
  const textToCopy = JSON.stringify(allText, null, 2);
  const input = document.createElement("input");
  input.value = textToCopy;
  document.body.appendChild(input);
  input.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Erro ao copiar: ", err);
  } finally {
    document.body.removeChild(input);
  }
}
// copiar campos separados
document.getElementById("copyNome").addEventListener("click", () => {
  const nome = document.getElementById("inputNome").value;
  copyToClipboard(nome);
});

document.getElementById("copyEmail").addEventListener("click", () => {
  const email = document.getElementById("inputEmail").value;
  copyToClipboard(email);
});

document.getElementById("copyCNPJ").addEventListener("click", () => {
  const cnpj = document.getElementById("inputCNPJ").value;
  copyToClipboard(cnpj);
});
document.getElementById("copyNS").addEventListener("click", () => {
  const NS = document.getElementById("inputNS").value;
  copyToClipboard(NS);
});
document.getElementById("copyPass").addEventListener("click", () => {
  const pass = document.getElementById("inputPass").value;
  copyToClipboard(pass);
});
document.getElementById("copyPhone").addEventListener("click", () => {
  const phone = document.getElementById("inputPhone").value;
  copyToClipboard(phone);
});
// copiar os elementos juntos
document.getElementById("all").addEventListener("click", () => {
  const nome = document.getElementById("inputNome").value;
  const email = document.getElementById("inputEmail").value;
  const cnpj = document.getElementById("inputCNPJ").value;
  const NS = document.getElementById("inputNS").value;
  const pass = document.getElementById("inputPass").value;
  const phone = document.getElementById("inputPhone").value;
  const allText = {
    nome,
    email,
    cnpj,
    phone,
    NS,
    pass,
  };
  copyToAllClipboard(allText);
});
//exibir campos ou ocultar campos
document.getElementById("copyFields").addEventListener("click", () => {
  document.getElementById("compareInputs").style.display = "none";
  document.getElementById("copyFieldsForm").style.display = "flex";
});
document.getElementById("compareFields").addEventListener("click", () => {
  document.getElementById("compareInputs").style.display = "block";
  document.getElementById("copyFieldsForm").style.display = "none";
});
document.getElementById("compareButton").addEventListener("click", () => {
  const text1 = document.getElementById("inputCompareText1").value;
  const text2 = document.getElementById("inputCompareText2").value;
  const result = document.getElementById("inputCompareResult");
  if (text1 === text2) {
    result.textContent = "Válido";
    result.style.color = "green";
  } else {
    result.textContent = "Inválido";
    result.style.color = "red";
  }
});
