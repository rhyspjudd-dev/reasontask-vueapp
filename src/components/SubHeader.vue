<template>
    <section :id="`${ subHead.id }`" class="mobSubHeader deskSubHeader">
        <div class="h-96 w-full text-center lg:grid lg:grid-cols-2 ">
            <img class="object-cover hidden overflow-hidden sm:hidden md:h-96 lg:inline-block lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="People about walking">
            <div class="content flex justify-center h-96 sm:48 text-white text-center p-4 flex items-center lg:text-left">
                <div class="text p-4">
                    <p class="text-2xl font-bold pb-2">{{ subHead.title }}</p>
                    <p class="text-sm">{{ subHead.text }}</p>
                    <div class="rounded-md mt-4 cursor-pointer">
                        <a v-on:click="scroll2Anchor()" class="btn flex w-1/2 items-center justify-center rounded-md border border-transparent bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-white lg:ml-0 m-auto md:py-4 md:px-10 md:text-lg"><span>{{ subHead.btnText }}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  data() {
    return {
      subHead: {
          id: "subHeader",
          title: "Qui irure qui lorem cupidatat commodo.",
          text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
          btnText: "Get started"
      },
    }
  },
  methods: {
    scroll2Anchor: function() {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth' 
      });
    }
  },
}

</script>