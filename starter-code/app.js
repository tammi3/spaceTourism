new Vue({
  el: "#vue-app",
  data: {
    burger: "",
    menu: "",
    navBar:""
  },
  methods: {
    toggleMenu() {
      this.burger = document.querySelector("#burger");
      this.menu = document.querySelector("#menu");
      this.navBar = document.querySelector("#nav-bar");

      if (this.menu.classList.contains("hidden")) {
        this.menu.classList.remove("hidden");
        this.navBar.classList.remove("items-center");
        this.burger.classList.add("hidden");
      } else {
        this.menu.classList.add("hidden");
        this.navBar.classList.add("items-center");
        this.burger.classList.remove("hidden");
      }
    },
  },
});
