new Vue({
  el: "#vue-app",
  data: {
    burger: "",
    menu: "",
  },
  methods: {
    toggleMenu() {
      this.burger = document.querySelector("#burger");
      this.menu = document.querySelector("#menu");

      if (this.menu.classList.contains("hidden")) {
        this.menu.classList.remove("hidden");
        this.burger.classList.add("hidden");
      } else {
        this.menu.classList.add("hidden");
        this.burger.classList.remove("hidden");
      }
    },
  },
});
