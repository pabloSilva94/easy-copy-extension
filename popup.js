document.getElementById("copiar").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: copiarDadosNaPagina,
      },
      (results) => {
        if (results && results[0]) {
          setInfos(results[0]);
        }
      }
    );
  });
});
function copiarDadosNaPagina() {
  const emailInput = document.querySelector('input[title="E-Mail"]');
  const nomeInput = document.querySelector('input[title="Nome"]');
  const cnpjInput = document.querySelector('input[title="CNPJ"]');

  if (!emailInput || !nomeInput || !cnpjInput) {
    alert("Um ou mais campos não foram encontrados.");
    return;
  }

  const email = emailInput.value || "Email não encontrado";
  const nome = nomeInput.value || "Nome não encontrado";
  const cnpj = cnpjInput.value || "CNPJ não encontrado";

  return { email, nome, cnpj };
}
function setInfos(results) {
  document.getElementById("inputNome").value = results.result.nome;
  document.getElementById("inputEmail").value = results.result.email;
  document.getElementById("inputCNPJ").value = results.result.cnpj;
}

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
