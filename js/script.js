document.addEventListener("DOMContentLoaded", function() {
    const encryptBtn = document.getElementById("encryptBtn");
    const decryptBtn = document.getElementById("decryptBtn");
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");

    encryptBtn.addEventListener("click", function() {
        const text = inputText.value.trim();
        if (text === "") {
            alert("Por favor, ingresa un texto para encriptar.");
            return;
        }
        const utf8Encode = new TextEncoder().encode(text);
        const encrypted = btoa(String.fromCharCode(...utf8Encode));
        outputText.value = encrypted;
    });

    decryptBtn.addEventListener("click", function() {
        const text = inputText.value.trim();
        if (text === "") {
            alert("Por favor, ingresa un texto para desencriptar.");
            return;
        }
        try {
            const base64Decoded = atob(text);
            const utf8Array = new Uint8Array(base64Decoded.length);
            for (let i = 0; i < base64Decoded.length; i++) {
                utf8Array[i] = base64Decoded.charCodeAt(i);
            }
            const utf8Decode = new TextDecoder().decode(utf8Array);
            outputText.value = utf8Decode;
        } catch (e) {
            alert("Entrada inválida para desencriptar. Asegúrate de que el texto esté en Base64.");
        }
    });
});
