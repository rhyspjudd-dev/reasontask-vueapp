

<template>
    <section :id="`${ about.id }`">
     <div class="bg-cyan-700 flex justify-center items-center text-white">
        <div class="container p-4">
          <h3 class="text-2xl font-bold mt-8 mb-4 lg:text-left">{{ about.title }}</h3>
          <p class="lg:text-left">{{ about.text }}</p>
          <div class="grid grid-cols-1 gap-3.5 h-auto mt-8 mb-8 md:mx-1.5 md:grid-cols-4 md:gap-2.5 sm:h-96 md:h-96 md:mb-4 lg:grid-cols-4 lg:gap-2.5">
            <div class="card bg-white flex justify-center items-center text-center p-8 md:p-4">
              <div class="container">
                <h3 class="text-black text-2xl font-bold mb-4">{{ about.card.title01 }}</h3>
                <p class="text-black mb-8">{{ about.card.text }}</p>
                <a :href="`${ about.card.btnLink }`" class="btn border-2 border-black"><span>{{ about.card.btnText }}</span></a>
              </div>
            </div>
            <div class="card bg-white flex justify-center items-center text-center p-8 md:p-4">
              <div class="container">
                <h3 class="text-black text-2xl font-bold mb-4">{{ about.card.title02 }}</h3>
                <p class="text-black mb-8">{{ about.card.text }}</p>
                <a :href="`${ about.card.btnLink }`" class="btn border-2 border-black"><span>{{ about.card.btnText }}</span></a>
              </div>
            </div>
            <div class="card bg-white flex justify-center items-center text-center p-8 md:p-4">
              <div class="container">
                <h3 class="text-black text-2xl font-bold mb-4">{{ about.card.title03 }}</h3>
                <p class="text-black mb-8">{{ about.card.text }}</p>
                <a :href="`${ about.card.btnLink }`" class="btn border-2 border-black"><span>{{ about.card.btnText }}</span></a>
              </div>
            </div>
            <div class="card bg-white flex justify-center items-center text-center p-8 md:p-4">
              <div class="container">
                <h3 class="text-black text-2xl font-bold mb-4">{{ about.card.title04 }}</h3>
                <p class="text-black mb-8">{{ about.card.text }}</p>
                <a :href="`${ about.card.btnLink }`" class="btn border-2 border-black"><span>{{ about.card.btnText }}</span></a>
              </div>
            </div>
          </div>
            <div class="rounded-md mb-8">
              <a href="#" class="btn flex w-1/4 m-auto mt-2 items-center justify-center rounded-md border border-transparent bg-white-500/50 px-8 py-3 text-base font-medium text-white hover:bg-cyan-700 sm:text-cyan-500 md:py-4 md:px-10 md:text-lg lg:mt-8"><span>{{ about.finalbtnText }}</span></a>
            </div>
        </div>
     </div>
    </section>
</template>

<script>

export default {
  data() {
    return {
        about: {
          id: "about",
          title: "What do we do?",
          text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",

          card: {
            title01: "Get online week",
            title02: "Learn my way",
            title03: "Make it click",
            title04: "Digital you",
            text: "Rhys hopes you like his tech task!",
            btnText: "read more",
            btnLink: "http://rpj-dev.com/",
          },
          finalbtnText: "More about stuff we do"
      },
    }
  }
}

</script>

