const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

// let pwdButton = document.getElementById("pwdButton")


function generate() { 
    let passwordOne  = document.getElementById("resultButtonLeft")
    let passwordTwo = document.getElementById("resultButtonRight")
    passwordOne.textContent = clicked()
    passwordTwo.textContent = clicked()
    
}

generate()

function clicked() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomMix = Math.floor(Math.random() * characters.length)
        password += characters[randomMix]
}
    return password
    
}
   // for (let i = 0; i < characters.length; i++ ){
      //  let randomPassword = Math.floor(Math.random()*characters.length)
        //console.log(characters[randomPassword])
     //   password += characters[randomPassword]
       // resultButtonLeft.textContent = password
  //  }
 //   for (let i = 0; i < character.length; i++ ){
  //      let randomPassword2 = Math.floor(Math.random()*characters.length)
        //console.log(characters[randomPassword2])
  //      password2 += characters[randomPassword2]
 //       resultButtonRight.textContent = password2
//    }
    //console.log(password)


// function getRandomPwd() {
 //   let randomMix = Math.floor(Math.random() * characters.length)
   // return characters[randomMix]
  //  
//}







