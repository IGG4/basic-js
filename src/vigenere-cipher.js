const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      const messageIndex = this.alphabet.indexOf(char);

      if (messageIndex === -1) {
        result += char;
      } else {
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
        const encryptedIndex = (messageIndex + keyIndexInAlphabet) % this.alphabet.length;
        result += this.alphabet[encryptedIndex];
        keyIndex++;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      const messageIndex = this.alphabet.indexOf(char);

      if (messageIndex === -1) {
        result += char;
      } else {
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
        const decryptedIndex = (messageIndex - keyIndexInAlphabet + this.alphabet.length) % this.alphabet.length;
        result += this.alphabet[decryptedIndex];
        keyIndex++;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
