const crypt=require('crypto-js')

var ciphertext = 'U2FsdGVkX18PF2nlKZLhDOV7o83oC/3IekZmb4X0hzs='
// Decrypt
var bytes  = crypt.AES.decrypt(ciphertext,process.env.npm_config_env);
var originalText = bytes.toString(crypt.enc.Utf8);
// var enc  = crypt.AES.encrypt("test",process.env.npm_config_env).toString();
// console.log(enc)

console.log(originalText); // 'my message'