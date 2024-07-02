<script setup>
import { onBeforeMount, ref } from 'vue'
import data from '../data/data.json'

const technology = ref(null)
const technologyImage = ref(null)
const technologyDetails = ref(null)
const vehicleButton = ref(null)
const spacePortButton = ref(null)
const capsuleButton = ref(null)

function updateTech(index) {
  technologyDetails.value = data.technology[index]
  technology.value = technologyDetails.value
  technologyImage.value = technology.value.images

  vehicleButton.value = document.querySelector('#vehicle')
  spacePortButton.value = document.querySelector('#spaceport')
  capsuleButton.value = document.querySelector('#capsule')
  if (index == 0 && vehicleButton.value !== null) {
    vehicleButton.value.classList.add('bg-white')
    vehicleButton.value.classList.add('text-very-dark-navy')
    spacePortButton.value.classList.remove('bg-white')
    spacePortButton.value.classList.remove('text-very-dark-navy')
    capsuleButton.value.classList.remove('bg-white')
    capsuleButton.value.classList.remove('text-very-dark-navy')
  }
  if (index == 1) {
    spacePortButton.value.classList.add('bg-white')
    spacePortButton.value.classList.add('text-very-dark-navy')
    capsuleButton.value.classList.remove('bg-white')
    capsuleButton.value.classList.remove('text-very-dark-navy')
    vehicleButton.value.classList.remove('bg-white')
    vehicleButton.value.classList.remove('text-very-dark-navy')
  }
  if (index == 2) {
    capsuleButton.value.classList.add('bg-white')
    capsuleButton.value.classList.add('text-very-dark-navy')
    vehicleButton.value.classList.remove('bg-white')
    vehicleButton.value.classList.remove('text-very-dark-navy')
    spacePortButton.value.classList.remove('bg-white')
    spacePortButton.value.classList.remove('text-very-dark-navy')
  }
}

onBeforeMount(() => {
  updateTech(0)
})
</script>

<template>
  <div
    class="min-h-screen w-full pl-0 lg:pl-16 xl:pl-32 pt-20 lg:pt-32 flex justify-center items-center text-white"
  >
    <img
      class="absolute w-full h-full top-0 right-0 object-cover md:hidden lg:hidden"
      src="../assets/technology/background-technology-mobile.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden md:block lg:hidden"
      src="../assets/technology/background-technology-tablet.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden lg:block"
      src="../assets/technology/background-technology-desktop.jpg"
      alt=""
    />
    <div class="relative w-full flex flex-col gap-8 md:gap-5 lg:gap-0">
      <div
        class="text-gray-500 px-10 lg:px-0 font-barlowCondensed text-center md:text-left text-lg md:text-2xl xl:text-2.5xl tracking-heroText uppercase font-bold"
      >
        03
        <span class="pl-2 text-white font-normal">Space launch 101</span>
      </div>
      <div class="relative text-white">
        <div
          class="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-8 w-full"
        >
          <div class="flex flex-col lg:flex-row w-full lg:w-2/4 gap-4 px-10 lg:px-0 pb-6 lg:gap-16">
            <div
              class="flex w-full gap-3 lg:gap-0 lg:w-1/4 lg:flex-col items-start justify-center font-Bellefair font-normal text-xl md:text-3.5xl"
            >
              <button
                id="vehicle"
                class="text-very-dark-navy bg-white w-10 h-10 md:w-16 md:h-16 rounded-full mb-8 border-dark-gray hover:border-white border-solid border flex justify-center items-center"
                @click="updateTech(0)"
              >
                1
              </button>
              <button
                id="spaceport"
                class="w-10 h-10 md:w-16 md:h-16 rounded-full mb-8 border-dark-gray hover:border-white border-solid border flex justify-center items-center"
                @click="updateTech(1)"
              >
                2
              </button>
              <button
                id="capsule"
                class="w-10 h-10 md:w-16 md:h-16 rounded-full border-dark-gray hover:border-white border-solid border flex justify-center items-center"
                @click="updateTech(2)"
              >
                3
              </button>
            </div>
            <div class="w-full font-Bellefair font-normal text-center lg:text-left text-wrap">
              <div
                class="text-xl md:text-2xl lg:text-3xl xl:text-3.5xl pb-4 text-dark-gray uppercase"
              >
                The terminology...
              </div>
              <div class="text-2.5xl md:text-4xl lg:text-5xl xl:text-5.5xl uppercase pb-2">
                {{ technology.name }}
              </div>

              <div class="font-Barlow text-sm lg:text-base xl:text-lg text-light-blue">
                {{ technology.description }}
              </div>
            </div>
          </div>
          <div class="w-full lg:w-2/4 flex justify-end justify-items-center lg:py-8">
            <img class="w-3/4 hidden lg:block" :src="technologyImage.portrait" alt="" />
            <img class="w-full lg:hidden" :src="technologyImage.landscape" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
