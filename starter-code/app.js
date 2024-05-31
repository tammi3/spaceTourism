new Vue({
  el: "#vue-app",
  data: {
    burger: "",
    menu: "",
    navBar:"",
    logo:""
  },
  methods: {
    toggleMenu() {
      this.burger = document.querySelector("#burger");
      this.menu = document.querySelector("#menu");
      this.navBar = document.querySelector("#nav-bar");
      this.logo = document.querySelector("#logo");

      if (this.menu.classList.contains("hidden")) {
        this.menu.classList.remove("hidden");
        this.navBar.classList.remove("items-center");
        this.navBar.classList.remove("px-8");
        this.navBar.classList.remove("py-2");
        this.navBar.classList.add("pl-8");
        this.logo.classList.remove("pt-2");
        this.logo.classList.add("pt-6");
        this.burger.classList.add("hidden");
      } else {
        this.menu.classList.add("hidden");
        this.navBar.classList.add("items-center");
        this.navBar.classList.add("px-8");
        this.navBar.classList.remove("pl-8");
        this.logo.classList.add("pt-2");
        this.logo.classList.remove("pt-6");
        this.burger.classList.remove("hidden");
      }
    },
  },
});
