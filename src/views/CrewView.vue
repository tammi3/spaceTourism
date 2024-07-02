<script setup>
import { onBeforeMount, ref } from 'vue'
import data from '../data/data.json'

const crew = ref(null)
const crewImage = ref('')

const crewDetails = ref(null)
const commanderButton = ref(null)
const specialistButton = ref(null)
const pilotButton = ref(null)
const engineerButton = ref(null)

function updateCrew(index) {
  crewDetails.value = data.crew[index]
  crew.value = crewDetails.value
  crewImage.value = crew.value.images.png

  commanderButton.value = document.querySelector('#commander')
  specialistButton.value = document.querySelector('#specialist')
  pilotButton.value = document.querySelector('#pilot')
  engineerButton.value = document.querySelector('#engineer')
  if (index == 0 && commanderButton.value !== null) {
    commanderButton.value.classList.add('bg-white')
    commanderButton.value.classList.remove('bg-gray-600')

    specialistButton.value.classList.remove('bg-white')
    specialistButton.value.classList.add('bg-gray-600')

    pilotButton.value.classList.remove('bg-white')
    pilotButton.value.classList.add('bg-gray-600')

    engineerButton.value.classList.remove('bg-white')
    engineerButton.value.classList.add('bg-gray-600')
  }
  if (index == 1) {
    specialistButton.value.classList.add('bg-white')
    specialistButton.value.classList.remove('bg-gray-600')

    commanderButton.value.classList.remove('bg-white')
    commanderButton.value.classList.add('bg-gray-600')

    pilotButton.value.classList.remove('bg-white')
    pilotButton.value.classList.add('bg-gray-600')

    engineerButton.value.classList.remove('bg-white')
    engineerButton.value.classList.add('bg-gray-600')
  }
  if (index == 2) {
    pilotButton.value.classList.add('bg-white')
    pilotButton.value.classList.remove('bg-gray-600')
    specialistButton.value.classList.remove('bg-white')
    specialistButton.value.classList.add('bg-gray-600')

    commanderButton.value.classList.remove('bg-white')
    commanderButton.value.classList.add('bg-gray-600')

    engineerButton.value.classList.remove('bg-white')
    engineerButton.value.classList.add('bg-gray-600')
  }
  if (index == 3) {
    engineerButton.value.classList.add('bg-white')
    engineerButton.value.classList.remove('bg-gray-600')

    pilotButton.value.classList.remove('bg-white')
    pilotButton.value.classList.add('bg-gray-600')

    specialistButton.value.classList.remove('bg-white')
    specialistButton.value.classList.add('bg-gray-600')

    commanderButton.value.classList.remove('bg-white')
    commanderButton.value.classList.add('bg-gray-600')
  }
}

onBeforeMount(() => {
  updateCrew(0)
})
</script>
<template>
  <div
    class="min-h-screen w-full pt-14 px-6 md:px-12 sm:py-28 md:pb-0 lg:px-16 xl:px-32 flex justify-center items-center text-white"
  >
    <img
      class="absolute w-full h-full top-0 right-0 object-cover md:hidden lg:hidden"
      src="../assets/crew/background-crew-mobile.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden md:block lg:hidden"
      src="../assets/crew/background-crew-tablet.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden lg:block"
      src="../assets/crew/background-crew-desktop.jpg"
      alt=""
    />
    <div class="relative w-full">
      <div class="relative w-full flex flex-col">
        <div
          class="pb-3 sm:pb-14 md:pb-8 lg:pb-12 text-center md:text-left text-gray-500 font-barlowCondensed text-lg md:text-xl lg:text-2.5xl tracking-heroText uppercase font-bold"
        >
          02
          <span class="text-white font-barlowCondensed pl-2 md:pl-4 font-normal"
            >Meet your crew</span
          >
        </div>
        <div
          class="flex flex-col lg:flex-row items-center text-center lg:text-left lg:items-end w-full gap-3 lg:gap-12"
        >
          <div class="flex flex-col items-center lg:items-start w-full lg:w-2/4">
            <div class="pb-6 w-full">
              <div
                class="font-Bellefair font-normal text-xl sm:text-2.5xl xl:text-3.5xl uppercase text-dark-gray pb-1 lg:pb-4"
              >
                {{ crew.role }}
              </div>
              <div class="font-Bellefair font-normal text-lg sm:text-4xl xl:text-5xl uppercase">
                {{ crew.name }}
              </div>
            </div>

            <div
              class="font-Barlow font-normal text-sm sm:text-base xl:text-lg text-light-blue w-full md:w-3/4"
            >
              {{ crew.bio }}
            </div>
            <div class="flex py-8 xl:py-16 justify-start">
              <button
                id="commander"
                @click="updateCrew(0)"
                class="w-3 h-3 md:w-5 md:h-5 rounded-full bg-white hover:bg-dark-gray mr-4"
              ></button>
              <button
                id="specialist"
                @click="updateCrew(1)"
                class="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gray-600 hover:bg-dark-gray mr-4"
              ></button>
              <button
                id="pilot"
                @click="updateCrew(2)"
                class="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gray-600 hover:bg-dark-gray mr-4"
              ></button>
              <button
                id="engineer"
                @click="updateCrew(3)"
                class="w-3 h-3 md:w-5 md:h-5 rounded-full bg-gray-600 hover:bg-dark-gray mr-4"
              ></button>
            </div>
          </div>
          <div
            class="flex relative justify-center w-3/5 sm:w-3/4 md:w-2/5 lg:w-30 xl:w-2/5 2xl:w-2/4"
          >
            <img :src="crewImage" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
