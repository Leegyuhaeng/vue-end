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
    
    <div>
        <label for="nickname">nickname: </label>
        <input type="text" v-model="nickname">
    </div>
    <button type="submit">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index.js'
export default {    
    data() {
        return {
            username:null,
            password:null,
            nickname:null,
            logMessage:null,
        }
    },
    methods: {
        async submitForm(){
            const userData = {
                username: this.username,
                password: this.password,
                nickname: this.nickname,
            }
           const { data } =  await registerUser(userData);
           console.log(data);
           this.logMessage = `${data.nickname}님이 가입되었습니다`
           this.initForm();

        },
        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        }
    }
}
</script>

<style>

</style>