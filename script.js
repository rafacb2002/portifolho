document.addEventListener('DOMContentLoaded', () => {
  const encryptButton = document.getElementById('encrypt-btn');
  const decryptButton = document.getElementById('decrypt-btn');
  const newTextButton = document.getElementById('new-text-btn');
  const copyButton = document.getElementById('copy-btn');
  const inputText = document.getElementById('input-text');
  const outputText = document.getElementById('output-text');

  const encrypt = (text) => {
      return text
          .replace(/e/g, 'enter')
          .replace(/i/g, 'imes')
          .replace(/a/g, 'ai')
          .replace(/o/g, 'ober')
          .replace(/u/g, 'ufat');
  };

  const decrypt = (text) => {
      return text
          .replace(/enter/g, 'e')
          .replace(/imes/g, 'i')
          .replace(/ai/g, 'a')
          .replace(/ober/g, 'o')
          .replace(/ufat/g, 'u');
  };

  const handleEncrypt = () => {
      const text = inputText.value.toLowerCase().trim();
      if (text) {
          outputText.value = encrypt(text);
      } else {
          outputText.value = 'Nenhuma mensagem encontrada';
      }
  };

  const handleDecrypt = () => {
      const text = inputText.value.toLowerCase().trim();
      if (text) {
          outputText.value = decrypt(text);
      } else {
          outputText.value = 'Nenhuma mensagem encontrada';
      }
  };

  const handleNewText = () => {
      inputText.value = '';
      outputText.value = 'Nenhuma mensagem encontrada';
  };

  const handleCopy = () => {
      outputText.select();
      document.execCommand('copy');
  };

  encryptButton.addEventListener('click', handleEncrypt);
  decryptButton.addEventListener('click', handleDecrypt);
  newTextButton.addEventListener('click', handleNewText);
  copyButton.addEventListener('click', handleCopy);
});