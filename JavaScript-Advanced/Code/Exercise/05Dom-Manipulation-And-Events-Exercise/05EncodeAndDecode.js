function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.querySelectorAll('textarea');
    const [encodeButton, decodeButton] = document.querySelectorAll('button');

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        let message = '';
        const input = encodeTextArea.value;
        const inputLength = input.length;

        for (let i = 0; i < inputLength; i++) {
            const element = input[i];
            message += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        decodeTextArea.value = message;
        encodeTextArea.value = '';
    }

    function decode() {
        let message = '';
        const input = decodeTextArea.value;
        const inputLength = input.length;

        for (let i = 0; i < inputLength; i++) {
            const element = input[i];
            message += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        decodeTextArea.value = message;
    }
}