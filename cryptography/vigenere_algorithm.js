/**
 * Created by Willian Mascimiano
 * https://willian.eti.br/contato/
 * 
 * 
 * Vigenere Algorithm Cipher on Caesar Cipher Algorithm..
 * 
 * 
 */



const searchIndexVigenere = what=>alphabet.findIndex(el => el===what);


class Vigenere {


    crypt(key, message){
        return this.generic("crypt", key,message);
    }

    decrypt(key, message){
        return this.generic("decrypt", key,message);
    }

    /**
     * This code will break the message to only 30 characteres
     * and will try to brute force each letter of the message until
     * one word does effect when comparing with the LanguageDictionary.
     */
    bruteForce(message){

        var caeserVigenere = new Caesar();
        console.log(message);

        var msgTemp1 = "";

        var bruteForceKey = ""; 

        for(var j = 0 ; j<=10;j++){
           for(var i = 0 ; i<=25 ; i++){
               bruteForceKey=alphabet[i];
               console.log(bruteForceKey);
            }
        }

                
            //     for(var i=0;i<=25;i++){
            //         message.split("").forEach((value,index)=>{
            //         //console.log(alphabet[i]);
            //         msgTemp1 += this.decrypt(alphabet[i], value);
            //     });
            // }
           msgTemp1 +=" ";

           console.log(msgTemp1);


        return message;

    }

    generic(type,key,message){
        
        var messageWithoutSpace = message.replace(/ /gi, "").toUpperCase();
        var key = this.genKey(key, messageWithoutSpace);
        //console.log(messageWithoutSpace);
        
        var messageIndex = null;
        var keyIndex = null;
        var keyLetter = null;
        var cryptedMessage = "";
        var caesarVigenere = new Caesar();


        //console.log(key);
        messageWithoutSpace.split("").forEach((value, index)=>{
            //messageIndex = caesarVigenere.shiftGen(searchIndexVigenere(value)-1);
            

            keyLetter = key.split("")[index]; 
            keyIndex = caesarVigenere.shiftGen(searchIndexVigenere(keyLetter));
            //console.log("The letter %s must be shifted to letter %s and the correspondent keyindex is %s", value, keyLetter, keyIndex)
            
            if(type=="crypt"){
                cryptedMessage += caesarVigenere.crypt(keyIndex, value);
            }else if(type=="decrypt"){
                cryptedMessage += caesarVigenere.decrypt(keyIndex, value);

            }
            

        });

        return cryptedMessage;
    }


    /**
     * Generate the Key.
     * This code will repeat the key until fill the size of the original message
     */
    genKey(key,messageWithoutSpace){
        var tmpKey="";


        //if(key.length<=messageWithoutSpace.length){
            
            while(tmpKey.length<=messageWithoutSpace.length){
                 
                tmpKey=tmpKey+key;
            }
            tmpKey = tmpKey.substring(0,messageWithoutSpace.length);

        //}else if(key.length==messageWithoutSpace.length){
        //    tmpKey = key;
        //}else if(key.length>=messageWithoutSpace.length){
        //    tmpKey = key.substring(0,messageWithoutSpace.length-1);
       // }

        return tmpKey.toUpperCase();


    }


}