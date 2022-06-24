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
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            username:null,
            password:null,
            nickname:null,
        }
    },
    methods: {
        submitForm(){
            alert("submit")
        }
    }
}
</script>

<style>

</style>