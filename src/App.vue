<template>
  <div class="topnav">
    <div class="search">
      <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
    </div>
    </div>
    <div class="lightdark font-bold">
      <div class="light border-b-4 border-indigo-500 flex justify-center items-center">Learn</div>
      <div class="dark text-white h-full flex justify-center items-center">Donate</div>
    </div>
  </div>
  <nav class="relative">
    <router-link to="/" class="logo">
      <img alt="Vue logo" class="ml-4" src="./assets/logo.png" />
    </router-link>
    <router-link to="/">{{ store.menuItems[0] }}</router-link>
    <router-link :to="{ name: 'about' }">{{ store.menuItems[1] }}</router-link>
    <router-link :to="{ name: 'thedigitaldivide' }">{{ store.menuItems[2] }}</router-link>
    <router-link :to="{ name: 'getInvolved' }">{{ store.menuItems[3] }}</router-link>
    <router-link :to="{ name: 'insights' }">{{ store.menuItems[4] }}</router-link>
  </nav>
  <router-view/>
</template>


<script>
import { createApp } from 'vue'
import { store } from './store/store.js'

export default {
  data() {
    return {
      store
    }
  }, 
}

</script>

<style>

  body {
    text-align: center;
  }

  nav {
    padding: 25px 15px;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    justify-content: center;
  }

  @media only screen and (min-width: 560px) {
    body {
      text-align: left;
    }
    nav {
        padding: 23px 15px;
        display: flex;
        justify-content: flex-end;
      }
      .logo {
        max-width: 40px;
        max-height: 40px;
        position: absolute;
        left: 0;
        top: 10px;
      }
      .topnav {
        grid-template-columns: 80% 20%;
      }
    }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
  }

  a:hover {
    color: #3BB6D4;
  }

  nav a.router-link-exact-active {
    color: #3BB6D4;
  }

  .topnav {
    height: 50px;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 2px solid rgba(239, 239, 240, 1);
  }

  .search {
    border-left: 2px solid rgba(239, 239, 240, 1);
    justify-content: flex-start;
    max-width: 60%;
  }
  
  .lightdark {
    border-left: 2px solid rgba(239, 239, 240, 1);
    border-right: 2px solid rgba(239, 239, 240, 1);
    justify-content: flex-end;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 48px;
  }

  .light {
    border-bottom: 4px solid teal;
    height: 100%;
  }

  .dark {
    background: #be334a;
  }

  input {
    height: 48px;
  }
  input:focus {
    border: none;
    outline: none;
  }
  .logo {
    max-width: 60px;
    max-height: 60px;
    margin: auto;
    padding-left: 7px;
  }

  .althead .btn  {
    display: none; 
  }

</style>

