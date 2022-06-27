<template>
  <form @submit.prevent="submitForm">
    <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
    </div>
    
    <div>
        <label for="password">pw: </label>
        <input type="password" v-model="password">
    </div>
        <button type="submit">로그인</button>
  </form>
</template>

<script>
import { loginUser } from '@/api/index'
export default {
    name: 'VueTilLoginForm',

    data() {
        return {
            username:null,
            password:null,
        };
    },

    mounted() {
        console.log("process.enc.api====>",process.enc.VUE_APP_API_URL)
    },

    methods: {
        async submitForm() {
            console.log("form click event====>",process.env.VUE_APP_API_URL)
            const userData = {
                username:this.username,
                password:this.password,
            }
           const response = await loginUser(userData)
           console.log(response)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>