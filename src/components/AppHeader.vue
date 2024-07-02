<script setup>
import { ref } from 'vue'
const burger = ref(null)
const menu = ref(null)
const navBar = ref(null)
const logo = ref(null)
function toggleMenu() {
  burger.value = document.querySelector('#burger')
  menu.value = document.querySelector('#menu')
  navBar.value = document.querySelector('#nav-bar')
  logo.value = document.querySelector('#logo')

  if (menu.value.classList.contains('hidden')) {
    menu.value.classList.remove('hidden')
    navBar.value.classList.remove('items-center')
    navBar.value.classList.remove('px-8')
    navBar.value.classList.remove('py-2')
    navBar.value.classList.add('pl-8')
    logo.value.classList.remove('pt-2')
    logo.value.classList.add('pt-6')
    burger.value.classList.add('hidden')
  } else {
    menu.value.classList.add('hidden')
    navBar.value.classList.add('items-center')
    navBar.value.classList.add('px-8')
    navBar.value.classList.remove('pl-8')
    logo.value.classList.add('pt-2')
    logo.value.classList.remove('pt-6')
    burger.value.classList.remove('hidden')
  }
}
</script>

<template>
  <div class="absolute z-100 lg:z-50 w-full text-white top-0 right-0 lg:pt-10 flex items-center">
    <div
      id="nav-bar"
      class="z-100 flex w-full absolute lg:relative px-8 py-2 sm:p-8 md:p-0 top-0 left-0 justify-start items-center"
    >
      <div
        class="w-full md:w-1/5 lg:w-full flex md:justify-start lg:justify-center md:items-center lg:-mr-8"
      >
        <routerLink id="logo" class="pt-2 md:pl-8 lg:pl-16 xl:pl-20 lg:pr-12 xl:pr-16" to="/">
          <img class="w-3/4 lg:w-full" src="../assets/shared/logo.svg" alt=""
        /></routerLink>
        <div class="hidden lg:block border-solid border-b border-dark-gray w-full z-100"></div>
      </div>
      <div
        class="p-8 cursor-pointer flex w-full justify-end md:hidden"
        id="burger"
        @click="toggleMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <div
        id="menu"
        class="hidden w-full font-barlowCondensed uppercase text-base tracking-nav backdrop-blur-5xl md:backdrop-blur-4xl md:flex justify-start lg:justify-center items-center md:px-16 md:pt-8"
      >
        <div class="cursor-pointer md:hidden flex justify-end pr-16 py-8" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>

        <div
          class="flex flex-col md:flex-row justify-start pl-12 md:pl-0 gap-12 pr-24 sm:pr-40 md:pr-0 pb-48 md:pb-0"
        >
          <routerLink
            activeClass="border-white border-solid border-b-2"
            class="hover:border-white/50 hover:border-solid hover:border-b-2 transition-all duration-75 ease-linear"
            to="/"
            ><div class="mb-6 flex gap-3 justify-start md:justify-center items-center">
              <span class="font-bold">00</span>Home
            </div></routerLink
          >
          <routerLink
            activeClass="border-white border-solid border-b-2"
            class="hover:border-white/50 hover:border-solid hover:border-b-2 transition-all duration-75 ease-linear"
            to="/destination"
            ><div class="mb-6 flex gap-3 justify-start md:justify-center items-center">
              <span class="font-bold">01</span>Destination
            </div>
          </routerLink>
          <routerLink
            activeClass="border-white border-solid border-b-2"
            class="hover:border-white/50 hover:border-solid hover:border-b-2 transition-all duration-75 ease-linear"
            to="/crew"
            ><div class="mb-6 flex gap-3 justify-start md:justify-center items-center">
              <span class="font-bold">02</span>Crew
            </div></routerLink
          >
          <routerLink
            activeClass="border-white border-solid border-b-2"
            class="hover:border-white/50 hover:border-solid hover:border-b-2 transition-all duration-75 ease-linear"
            to="/technology"
            ><div class="mb-6 flex gap-3 justify-start md:justify-center items-center">
              <span class="font-bold">03</span>Technology
            </div></routerLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
