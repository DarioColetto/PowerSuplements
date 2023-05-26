let login = {
  "username":"admin",
  "password":'1111'
}


export class LoginService {
  
  static storeLogin() {
    localStorage.setItem("loggedIn", "true");
  }

  static logIn(username, password){
    
    const validation = username === login.username && password === login.password;
    
    if(validation){
      LoginService.storeLogin();
    }
    
    return validation;


  }

  static logOut() {
    localStorage.removeItem("loggedIn");
  }

   static isLogged() {
    
    return  localStorage.getItem("loggedIn") === 'true';
  }
}
