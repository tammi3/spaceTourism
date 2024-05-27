new Vue({
    el:'#vue-app',
    data:{
        burger:'',
        menu:'',
        logo:''
    },
    methods:{
        toggleMenu(){
            this.burger = document.querySelector('#burger');
             this.menu = document.querySelector('#menu');
             this.logo = document.querySelector('#logo');
             if (this.menu.classList.contains('hidden')) {
                this.menu.classList.remove('hidden');
                this.burger.classList.add('hidden');
                this.logo.classList.add('hidden');
              } else {
                this.menu.classList.add('hidden');
                this.burger.classList.remove('hidden');
                this.logo.classList.remove('hidden');
              }
        }
    }
})
