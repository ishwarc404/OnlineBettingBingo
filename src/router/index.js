import HomePage from "../components/homePage.vue";
import LoginPage from "../components/loginPage.vue";


const definedRoutes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/*",
    component: LoginPage,
  },
];

export default definedRoutes;
