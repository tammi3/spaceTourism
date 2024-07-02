<template>
  <div
    class="min-h-screen w-full pt-14 px-12 sm:py-28 md:pb-0 lg:px-16 xl:px-32 flex justify-center items-center"
  >
    <img
      class="absolute w-full h-full top-0 right-0 object-cover md:hidden lg:hidden"
      src="../assets/home/background-home-mobile.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden md:block lg:hidden"
      src="../assets/home/background-home-tablet.jpg"
      alt=""
    />
    <img
      class="absolute w-full h-full top-0 right-0 object-cover hidden lg:block"
      src="../assets/home/background-home-desktop.jpg"
      alt=""
    />
    <div class="relative w-full">
      <div class="relative flex flex-col lg:flex-row justify-center items-center w-full">
        <div class="lg:w-2/4 w-full text-center pb-2 lg:pb-0 lg:text-left">
          <div
            class="text-light-blue font-barlowCondensed text-xl sm:text-2xl lg:text-2.5xl tracking-heroText uppercase"
          >
            So, you want to travel to
          </div>
          <div
            class="font-Bellefair text-6xl sm:text-7xl md:text-9xl lg:text-10xl py-6 uppercase text-white"
          >
            Space
          </div>
          <div class="font-Barlow text-base sm:text-lg text-light-blue">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </div>
        </div>
        <div
          class="flex justify-center items-center sm:py-6 lg:justify-end lg:align-content-end w-full lg:w-2/4"
        >
          <routerLink
            to="/destination"
            class="flex rounded-full hover:bg-white/30 hover:bg-opacity-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-98 lg:h-98 justify-center items-center font-Bellefair text-2xl sm:text-3xl md:text-4xl uppercase transition-all duration-300 ease-linear"
          >
            <div
              class="bg-white flex justify-center items-center w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
            >
              Explore
            </div>
          </routerLink>
        </div>
      </div>
    </div>
  </div>
</template>
