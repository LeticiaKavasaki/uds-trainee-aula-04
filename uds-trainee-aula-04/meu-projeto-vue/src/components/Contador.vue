<template>
<div>
  <div class="link">
    <router-link to="sobre"> Sobre </router-link>
    <router-link to="contador"> Contador </router-link>
  </div>
  <p>valor: {{ valor }} </p>
  <p>{{ NumeroParOuImpar }}</p>
  <input v-model="entrada">
  <button @click="somar">Somar </button>
  <button @click="subtrair">Subtrair</button>
</div>
</template>
<script>
export default {
  data() {
    return {
      valor: 0,
      entrada: 0,
    };
  },
  methods: {
    somar() {
      this.valor += parseInt(this.entrada, 10);
    },
    subtrair() {
      this.valor -= parseInt(this.entrada, 10);
    },
  },
  computed: {
    NumeroParOuImpar() {
      if (this.valor % 2 === 0) {
        return 'Par';
      }
      return 'Ímpar';
    },
    PositivoOuNegativo() {
      if (this.valor >= 0) {
        return 'Positivo';
      }
      return 'Negativo';
    },
    NumeroPrimo() {
      if (this.valor)
    }
  },
};
</script>
<style>
  .link{
  color: black;
  text-decoration: none;
  }
</style>
