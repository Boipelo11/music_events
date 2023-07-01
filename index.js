//Form validation using OOP's 
function Form {
    constructor (username, password){
        this.username;
        this.password;
    }
    
} 

validate() {
    //variable declaration
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    //form validation conditions using if statements
    if (this.username.length < 3){
        console.log("Username not Valid");
        return false
}

  if (this.password.length <8){
    console.log("Password must be minimum of 8 Characters");
    return true
  }
// if username is above 3 characters and password is above 8 characters
  return true
}



