<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="sub()">
      <input type="text" v-model="dados.email" :placeholder="place.email" />
      <input type="text" v-model="dados.senha" :placeholder="place.senha" />
      <button type="submit">Login</button>
    </form>
    <button @click="this.$router.push('/cadastro')" style="margin-top: 5px">
      Cadastre-se
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      url: "",
      dados: {
        email: "",
        senha: "",
      },
      place: {
        email: "email",
        senha: "senha",
      },
      rgexEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      rgexSenha: /^[a-z0-9]+$/i,
    };
  },
  methods: {
    sub(e) {
      axios.post(this.url, {
        email: this.dados.email,
        senha: this.dados.senha,
      });
      if (
        !this.rgexEmail.test(this.dados.email) ||
        !this.rgexSenha.test(this.dados.senha)
      ) {
        this.$router.push("/");
        this.place.senha = "campo vazio";
        this.place.email = "campo vazio";
      } else {
        this.$router.push("/page");
      }
    },
  },
  mounted() {},
};
</script>

<style src="../CSS/Login.css" scoped>
</style>