function generateQRCode() {
    
    
    document.getElementById("qrcode").innerHTML = ""; // Limpar o QR Code anterior

    var inputText = document.getElementById("inputText").value; // obtem o que foi digitado

    if (inputText.trim() === ""){
        alert("Por favor, insira algum texto ou URL.")
        return;
    }

    var qrCode = new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // Níivel de correção de erro
    })
}