var qrcode = new QRCode("qrcode");



function generateQR(){
    let text = document.getElementById("qrInput").value;
    if (!text){
        document.getElementById("noTextError").style.visibility = "visible";
        return;
    }
    document.getElementById("noTextError").style.visibility = "hidden";
    qrcode.makeCode(text)
}