<template>
  <div class="login">
    <h1>Cadastro</h1>
    <form @submit.prevent="sub()">
      <input type="text" v-model="dados.nome" :placeholder="place.nome" />
      <input type="text" v-model="dados.email" :placeholder="place.email" />
      <input type="text" v-model="dados.senha" :placeholder="place.senha" />
      <button type="submit">Cadastro</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cadastro",
  data() {
    return {
      rgexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      rgexSenha: /^[a-z0-9]+$/i,
      url: "",
      dados: {
        nome: "",
        email: "",
        senha: "",
      },
      place: {
        nome: "nome",
        email: "email",
        senha: "senha",
      },
    };
  },
  methods: {
    sub() {
      axios.post(this.url, {
        nome: this.dados.nome,
        email: this.dados.email,
        senha: this.dados.senha,
      });
      if (
        !this.dados.nome ||
        !this.rgexEmail.test(this.dados.email) ||
        !this.rgexSenha.test(this.dados.senha)
      ) {
        this.$router.push("/cadastro");
        this.place.nome = "campo vazio";
        this.place.email = "campo vazio";
        this.place.senha = "campo vazio";
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style src="../CSS/Login.css"></style>