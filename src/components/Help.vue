
<template>
    <section :id="`${ help.id }`">
     <div class="bg-slate-300 h-96 flex justify-center items-center">
        <div class="container p-4 relative">
          <h3 class="text-2xl font-bold mb-4 lg:text-left">{{ help.title }}</h3>
          <p class="lg:text-left">{{ help.text }}</p>
          <form action="" class="bg-white p-8 mt-8 grid grid-cols-5 px-8 lg:px-96">
              <h3 class="inline flex justify-center items-center">I am a</h3>
              <select v-model="selectedA" id="underline_select" class=" flex justify-center text-cyan-500 font-bold items-center inline py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 ">
                <option class="text-cyan-500" value="" disabled selected hidden>{{ help.optA.a }} &darr;</option>    
                <option :value="`${ help.optA.a }`">{{ help.optA.a }}</option>
                <option :value="`${ help.optA.b }`">{{ help.optA.b }}</option>
              </select>
              <h3 class="inline flex justify-center items-center">i want</h3>
              <select v-model="selectedB" id="underline_select" class=" flex justify-center text-cyan-500 font-bold items-centerinline py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option class="text-cyan-500" value="" disabled selected hidden>{{ help.optB.a }} &darr;</option>    
                <option selected :value="`${ help.optB.a }`">{{ help.optB.a }}</option>
                  <option :value="`${ help.optB.b }`">{{ help.optB.b }}</option>
              </select>
              <button @click="getSelected()" class="btn"><span>Submit</span></button>
          </form>
          <div class="modal absolute hidden">
            <h3 class="selectedOutput text-2xl font-bold my-4 opacity-100">You're a {{ selectedA }} and you want {{ selectedB }}, Rhys approves!</h3>
        </div>
        </div>
     </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        help: {
            id: "help",
            title: "How can we help you?",
            text: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo",
            optA: {
                a: "individual",
                b: "goat" 
            },
            optB: {
                a: "to learn",
                b: "to graze"
            }
        },
        selectedA: '',
        selectedB: '',
        
    }
  },
  methods: {
        getSelected() {
            event.preventDefault();
            const modal = document.querySelector(".modal")
            modal.classList.remove('hidden');
            modal.classList.toggle('fadeInModal');
            setTimeout(() => {
                // modal.classList.remove('fadeInModal');
                modal.classList.toggle('fadeInModa');
            }, "2000");
            setTimeout(() => {
                // modal.classList.remove('fadeInModal');
                modal.classList.toggle('hidden');
            }, "4000");
        },
    }
}
</script>

<style>

#help .btn {
    min-width: 108px
}

option:selected {
    color: cyan !important;
}

.modal {
    height: 100vh;
    width: 100vw;
}

.fadeInModal {
    animation: fadeIn 5s;
}

.fadeOutModal {
    animation: fadeOut 5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadeOut {
    0% { opacity: 1;}
    99% { opacity: 0.01;width: 100%; height: 100%;}
    100% { opacity: 0;width: 0; height: 0;}
}

</style>