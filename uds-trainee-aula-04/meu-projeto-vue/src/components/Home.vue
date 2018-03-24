<template>
<div>
  <div>
    <router-link to="sobre"> Sobre </router-link>
    <router-link to="contador"> Contador </router-link>
  </div>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Olá, bem vindo',
    };
  },
};
</script>
<style>
</style>
