import { Router } from "./router.js";
import { LoginService } from "./services/login-service.js";

window.addEventListener("load", () => {
  loginHandler();
  setLinksEventListeners();
});

window.addEventListener("popstate", () => {
  Router.renderRoute(Router.getCurrentRoute());
});

const logOutButton = document.getElementById("logout-button");
logOutButton.addEventListener("click", () => {
  LoginService.logOut();
  loginHandler();
});

function loginHandler() {
  const nav = document.querySelector("nav");
  const logOutButton = document.getElementById("logout-button");
  console.log(logOutButton)
  const isLogged = LoginService.isLogged();
  console.log("Is Logged: ", isLogged)

  if (isLogged) {
      Router.navigateTo("/PowerSuplements/home");
      nav.style.display = "flex";
      logOutButton.style.display = "flex"
      
  } else {
      Router.navigateTo("/PowerSuplements/login");
      nav.style.display = "none";
      logOutButton.style.display = "none"
  }
}

function setLinksEventListeners() {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const path = link.getAttribute("href");
      Router.navigateTo(path);
    });
  });
}
