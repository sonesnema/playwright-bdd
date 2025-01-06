const crypt=require('crypto-js')
// const args = process.argv.slice(2);
// const profileArg = args.find((arg) => arg.startsWith("--arg="));
// const profileName = profileArg ? profileArg.split("=")[1] : "default";
const secretKey=process.argv[2]
if(!secretKey)
{
    console.log("secret ley not provided")
}
else{
    console.log("Using secret key",secretKey)
}


var ciphertext = 'U2FsdGVkX18PF2nlKZLhDOV7o83oC/3IekZmb4X0hzs='
// Decrypt
var bytes  = crypt.AES.decrypt(ciphertext,secretKey);
var originalText = bytes.toString(crypt.enc.Utf8);
// var enc  = crypt.AES.encrypt("test",process.env.npm_config_env).toString();
// console.log(enc)

console.log(originalText); // 'my message'
