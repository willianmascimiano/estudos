

  const searchIndexCaesar = what=>alphabet.findIndex(el => el===what);
  
  class Caesar {
      
  
  
      crypt(shift,message){
       return this.generic("crypt",shift,message);
   }
      decrypt(shift,message){
       return this.generic("decrypt",shift,message);
   }
      bruteForce(message){
          var tmpMessage = message.split("");
          var attackedMessage="";
          var attackedMessageArray=new Array();
          
          for(var i=25;i>=1;i--){
              tmpMessage.forEach((value,index)=>{
                  if(value==" "){
                         attackedMessage += " "; 
                  }else{
                      var tmpShift = this.shiftGen(parseInt(searchIndexCaesar(value.toUpperCase()) + parseInt(i))) ;
                      attackedMessage+=alphabet[tmpShift];
                  }
  
          });
          //console.log(attackedMessage);
          attackedMessageArray.push(attackedMessage);
          attackedMessage="";
          }
          return attackedMessageArray;
          
      }
   
   
  
  
  
   //Generic Code to Encrypt and Decrypt  
   generic(type,shift,message){
  
      if(shift<0||shift>26){
          console.log("Number not allowed");
          return;
      }
   
     var cryptedMessage="";
  
     message.split("").forEach((value,index)=>{
      if(value==" "){
          cryptedMessage+=" ";
      }else{
  
          var tmpShift="";
          if(type=="crypt"){
              var tmpShift = this.shiftGen(parseInt(searchIndexCaesar(value.toUpperCase()) + parseInt(shift))) ;
                  cryptedMessage+=alphabet[tmpShift];
              }else if(type=="decrypt"){
                  var tmpShift = this.shiftGen(parseInt(searchIndexCaesar(value.toUpperCase()) + parseInt(26-shift))  ) ;
                  cryptedMessage+=alphabet[tmpShift];
              }
          
      }
  
      });
     
     
     return cryptedMessage;
    }
  
   
  
    shiftGen( shift){
  
        if(shift>=26){
          
          shift = shift-26;
        }else if(shift<1){
          shift=shift*-1;
        }
        return shift;
    }
  
  }
  