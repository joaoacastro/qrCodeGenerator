function generateQRCode() {
  const bgColor = document.getElementById("bg-color").value;
  const qrcodeColor = document.getElementById("qrcode-color").value;
  const qrcodeSize =  document.getElementById("qrcode-size").value;

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
}
