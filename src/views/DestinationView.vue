<script setup>
import { onBeforeMount, ref } from 'vue'
import data from '../data/data.json'

const destination = ref(null)
const destinationImage = ref('')

const destinationDetails = ref(null)
const moonButton = ref(null)
const marsButton = ref(null)
const europaButton = ref(null)
const titanButton = ref(null)

function updatePlanet(index) {
  destinationDetails.value = data.destinations[index]
  destination.value = destinationDetails.value
  destinationImage.value = destination.value.images.png

  moonButton.value = document.querySelector('#moon')
  marsButton.value = document.querySelector('#mars')
  europaButton.value = document.querySelector('#europa')
  titanButton.value = document.querySelector('#titan')
  if (index == 0 && moonButton.value !== null) {
    moonButton.value.classList.add('border-white')
    moonButton.value.classList.add('border-solid')
    moonButton.value.classList.add('border-b-2')
    marsButton.value.classList.remove('border-white')
    marsButton.value.classList.remove('border-solid')
    marsButton.value.classList.remove('border-b-2')
    europaButton.value.classList.remove('border-white')
    europaButton.value.classList.remove('border-solid')
    europaButton.value.classList.remove('border-b-2')
    titanButton.value.classList.remove('border-white')
    titanButton.value.classList.remove('border-solid')
    titanButton.value.classList.remove('border-b-2')
  }
  if (index == 1) {
    marsButton.value.classList.add('border-white')
    marsButton.value.classList.add('border-solid')
    marsButton.value.classList.add('border-b-2')
    moonButton.value.classList.remove('border-white')
    moonButton.value.classList.remove('border-solid')
    moonButton.value.classList.remove('border-b-2')
    europaButton.value.classList.remove('border-white')
    europaButton.value.classList.remove('border-solid')
    europaButton.value.classList.remove('border-b-2')
    titanButton.value.classList.remove('border-white')
    titanButton.value.classList.remove('border-solid')
    titanButton.value.classList.remove('border-b-2')
  }
  if (index == 2) {
    europaButton.value.classList.add('border-white')
    europaButton.value.classList.add('border-solid')
    europaButton.value.classList.add('border-b-2')
    marsButton.value.classList.remove('border-white')
    marsButton.value.classList.remove('border-solid')
    marsButton.value.classList.remove('border-b-2')
    moonButton.value.classList.remove('border-white')
    moonButton.value.classList.remove('border-solid')
    moonButton.value.classList.remove('border-b-2')
    titanButton.value.classList.remove('border-white')
    titanButton.value.classList.remove('border-solid')
    titanButton.value.classList.remove('border-b-2')
  }
  if (index == 3) {
    titanButton.value.classList.add('border-white')
    titanButton.value.classList.add('border-solid')
    titanButton.value.classList.add('border-b-2')
    europaButton.value.classList.remove('border-white')
    europaButton.value.classList.remove('border-solid')
    europaButton.value.classList.remove('border-b-2')
    marsButton.value.classList.remove('border-white')
    marsButton.value.classList.remove('border-solid')
    marsButton.value.classList.remove('border-b-2')
    moonButton.value.classList.remove('border-white')
    moonButton.value.classList.remove('border-solid')
    moonButton.value.classList.remove('border-b-2')
  }
}

onBeforeMount(() => {
  updatePlanet(0)
})
</script>
<template>
  <div
    class="min-h-screen w-full pt-14 px-12 sm:py-28 md:pb-0 lg:px-16 xl:px-32 flex justify-center items-center text-white"
  >
    <img
      class="absolute w-full h-full top-0 right-0 object-cover md:hidden lg:hidden"
      src="../assets/destination/background-destination-mobile.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden md:block lg:hidden"
      src="../assets/destination/background-destination-tablet.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden lg:block"
      src="../assets/destination/background-destination-desktop.jpg"
      alt=""
    />
    <div class="relative w-full flex flex-col">
      <div
        class="pb-3 sm:pb-14 md:pb-3 xl:pb-20 text-gray-500 font-barlowCondensed text-center md:text-left text-base sm:text-xl lg:text-2.5xl tracking-heroText uppercase font-bold"
      >
        01<span class="text-light-blue font-barlowCondensed tracking-heroText font-normal pl-3"
          >Pick your destination</span
        >
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center w-full gap-6 sm:gap-12">
        <div class="flex justify-center w-3/4 md:w-2/4">
          <img class="w-3/4" :src="destinationImage" alt="" />
        </div>

        <div class="w-full lg:w-2/4 flex flex-col justify-center items-center lg:items-start">
          <div
            class="flex gap-8 font-barlowCondensed text-light-blue font-normal tracking-2px uppercase text-sm sm:text-base"
          >
            <button
              id="moon"
              class="border-white border-solid border-b-2 hover:border-white/50 hover:border-solid hover:border-b-2"
              @click="updatePlanet(0)"
            >
              Moon
            </button>
            <button
              id="mars"
              class="hover:border-white/50 hover:border-solid hover:border-b-2"
              @click="updatePlanet(1)"
            >
              Mars
            </button>
            <button
              id="europa"
              class="hover:border-white/50 hover:border-solid hover:border-b-2"
              @click="updatePlanet(2)"
            >
              Europa
            </button>
            <button
              id="titan"
              class="hover:border-white/50 hover:border-solid hover:border-b-2"
              @click="updatePlanet(3)"
            >
              Titan
            </button>
          </div>

          <div
            class="text-center lg:text-left py-6 sm:py-10 md:py-6 xl:py-10 w-full lg:w-3/4 border-solid border-b border-dark-gray"
          >
            <div class="font-Bellefair font-normal text-5xl sm:text-6xl lg:text-8xl uppercase">
              {{ destination.name }}
            </div>

            <div class="font-Barlow font-normal text-sm sm:text-base md:text-lg text-light-blue">
              {{ destination.description }}
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row w-full justify-center lg:justify-start pt-6 sm:pt-10 lg:pt-6 xl:pt-10 gap-3 md:gap-7 uppercase"
          >
            <div class="flex flex-col justify-center items-center lg:items-start">
              <span class="font-barlowCondensed text-xs sm:text-sm text-light-blue tracking-2px"
                >Avg. distance</span
              ><span
                class="font-Bellefair font-normal text-base sm:text-lg lg:text-xl lg:text-2.5xl"
              >
                {{ destination.distance }}</span
              >
            </div>

            <div class="flex flex-col justify-center items-center lg:items-start">
              <span class="font-barlowCondensed text-xs sm:text-sm text-light-blue tracking-2px"
                >Est. travel time</span
              ><span
                class="font-Bellefair font-normal text-base sm:text-lg lg:text-xl lg:text-2.5xl"
              >
                {{ destination.travel }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
