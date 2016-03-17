//Shift cifer
function btnEncode(){
    var cipher = document.getElementById('ciphernumber').value;
    var  msg =document.getElementById('textinput').value ;

    document.getElementById('output').value =  encodeCaesar(msg, cipher);
}

function btnDecode(){
    var cipher = document.getElementById('ciphernumber').value;
    var  msg =document.getElementById('textinput').value ;

    document.getElementById('output').value =  encodeCaesar(msg, -cipher);
}

function encodeCaesar(msg, cipher) {
    var char, newStr = "",
        alfabet = "abcdefghijklmnopqrstuvwxyz";

    if(isNaN(parseFloat(cipher))){
       cipher = 0;
    } else {
        cipher = parseInt(cipher);   
    }
    msg = msg.replace(/[^a-zA-Z ]+/g, '').toLowerCase();

    for (var i = 0, len = msg.length; i < len; i++) {
        char = msg[i];
        if (char === " " ){
        newStr +=  " " } else
        {
             newStr += alfabet[((alfabet.indexOf(char) + cipher + 26) % 26)];
        }
    };
    return (newStr);
};

//Vigenere
function btnVencode(isDecode){
    var vcode = document.getElementById('vcipher').value;
    var  msg =document.getElementById('textinput').value ;
    document.getElementById('venoutput').value =  encodeVigenere(msg, vcode, isDecode);
}

function encodeVigenere(vmsg, vcode, isDecode) {
    var char, newStr = "", vcodeChar,newCipher,
        alfabet = "abcdefghijklmnopqrstuvwxyz";

    if(isNaN(parseFloat(vcipher))){
       vcipher = 0;
    } else {
        vcipher = parseInt(vcipher);   
    }
  var  vmsg = vmsg.replace(/[^a-zA-Z ]+/g, '').toLowerCase();
  var  vcode = vcode.replace(/[^a-zA-Z]+/g, '').toLowerCase();
   var vcodeLength= vcode.length;
   var vcodeCount= 0;
    
    for (var i = 0, len = vmsg.length; i < len; i++) {
                 
        char = vmsg[i];
        if (char === " " ){
        newStr +=  " " 
        }else {
           vcodeChar = vcode[vcodeCount%vcodeLength];
            vcipher =alfabet.indexOf(vcodeChar) ;
                if(isDecode){
       vcipher = -vcipher;
        }    
            newCipher = (alfabet.indexOf(char) + vcipher + 26) % 26;
             newStr += alfabet[newCipher];
            vcodeCount = vcodeCount +1;
        }
    };
    return (newStr);
};

//GCD
function btngcd(){
    var a = document.getElementById('inputa').value;
    var b = document.getElementById('inputb').value;
    document.getElementById('gcdoutput').value = GCD(a,b);
}
function GCD(a, b)
{
  var r;
    if(a=== 0 || b=== 0)return;
    
 while (b > 0)
 {
     r = a % b; //this means (modulo) in both c# and javascript.
     a = b;
     b = r;
 }
 return(a);
}