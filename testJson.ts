const crypt=require('crypto-js')
var key=process.env.npm_config_env

var ciphertext = 'U2FsdGVkX1/2QXUsFJ0D0CPzsa0D6h8JZ0VunTnezGQ='
// Decrypt
var bytes  = crypt.AES.decrypt(ciphertext,key);
var originalText = bytes.toString(crypt.enc.Utf8);

console.log(originalText); // 'my message'