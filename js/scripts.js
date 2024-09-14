// Instanciate the QR Code
var qrcode = new QRCode("qrcode");


// Generate the QR code 
function generateQR(){
    let text = document.getElementById("qrInput").value;
    if (!text){
        document.getElementById("noTextError").style.visibility = "visible";
        return;
    }
    document.getElementById("noTextError").style.visibility = "hidden";
    qrcode.makeCode(text)
    remove = document.getElementById("downloadButton")
    if(!remove){
        createButton();
    }
}

// create the download button
function createButton(){
    let button = document.createElement("BUTTON");
    button.id = "downloadButton"
    button.innerHTML = "Download QR Code"
    button.addEventListener("click", downloadQRCode);
    let qr = document.getElementById("qrcode");
    qr.appendChild(button);
}

// Downloads the created QR Code
function downloadQRCode(){
    let qrImage = document.querySelector("#qrcode img");
    if (qrImage) {
        let link = document.createElement('a');
        link.href = qrImage.src;
        let downloadName = document.getElementById("qrcode").title;
        link.download = `${downloadName} QRCode.png`; // Set the name for the downloaded file
        link.click();
    }
}
