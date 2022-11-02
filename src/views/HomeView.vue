<template>
    <Header></Header>
    <SubHeader></SubHeader>
    <Help></Help>
    <About></About>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import SubHeader from '@/components/SubHeader.vue'
import Help from '@/components/Help.vue'
import About from '@/components/About.vue'
import { store } from '../store/store'

export default {
  data() {
    return {
      store,
    }
  },
  name: 'HomeView',
  components: {
    Header, SubHeader, Help, About
  }
}
</script>


<style>
section {
  overflow: hidden;
}
.content {
  background: #478174;
}


.btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  color: #BD384D;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  transition: transform .1s;
  background: white;
  border: 1px solid transparent;
}

.btn:hover {
  background: #ffffff;
  text-decoration: none;
  -webkit-box-shadow: 0px 1px 3px #666666;
  -moz-box-shadow: 0px 1px 3px #666666;
  box-shadow: 0px 1px 3px #666666;
  /* transform: scale(1.1); */
  color: #BD384D;
  border: solid #BD384D 1px;
  font-weight: 700;

}

@media only screen and (min-width: 560px) {
  #header .container {
    max-width: 100vw;
  }
  #header .container .overlay {
    display: none;
  }
  #header .container img {
    height: 34em;
  }
  #header .container a {
    margin: 0;
  }
  #header .container .title {
      position: absolute;
      left: 4%;
      text-align: left;
  }
}

#subHeader .btn {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}


.card {
  width: 100%;
  height: 100%;
}


.card .btn {
  border: 2px solid #000;
}

.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn:hover span {
  padding-right: 25px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
