function generateQRCode() {
  const bgColor = document.getElementById("bg-color").value;
  const qrcodeColor = document.getElementById("qrcode-color").value;
  const qrcodeSize = document.getElementById("qrcode-size").value;

  document.getElementById("qrcode").innerHTML = ""; // Limpar o QR Code anterior

  var inputText = document.getElementById("inputText").value; // obtem o que foi digitado

  if (inputText.trim() === "") {
    alert("Por favor, insira algum texto ou URL.");
    return;
  }

  var qrCode = new QRCode(document.getElementById("qrcode"), {
    text: inputText,
    width: qrcodeSize,
    height: qrcodeSize,
    colorDark: qrcodeColor,
    colorLight: bgColor,
    correctLevel: QRCode.CorrectLevel.H, // Níivel de correção de erro
  });

  hiddenLabelAndColor();
  changeButton();
}

const state = {
  container: {
    label: document.getElementById("label"),
    color: document.getElementById("qrCodeColor"),
    generateButton: document.getElementById("generateQRCode"),
    resetButton: document.getElementById("resetButton"),
  },
};

function hiddenLabelAndColor() {
  state.container.label.style.display = "none";
  state.container.color.style.display = "none";
}

function changeButton() {
  state.container.generateButton.style.display = "none";
  state.container.resetButton.style.display = "flex";
}

const qrcode = document.getElementById("qrcode");

document.getElementById("saveQrCode").addEventListener("click", function () {
  const qrCanvas = document.querySelector("#qrcode canvas");

  if (qrCanvas) {
    const link = document.createElement("a");
    link.href = qrCanvas.toDataURL();
    link.download = "qrcode.png";

    link.click();
  }
});
