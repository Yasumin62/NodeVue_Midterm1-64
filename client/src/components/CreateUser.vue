<template>
<div>
    <h1>Create User</h1>
    <form v-on:submit.prevent = "createUser">
        <p>name: <input type="text" v-model="user.name"></p>
        <p>system: <input type="text" v-model="user.system"></p>
        <p>capacity: <input type="text" v-model="user.capacity"></p>
        <p>size: <input type="text" v-model="user.size"></p>
        <p><button type="submit">create user</button></p>
    </form>
    <hr>
    <div>
        <p>name: {{ user.name }}</p>
        <p>system: {{ user.system }} </p>
        <p>capacity: {{ user.capacity }}</p>
        <p>size: {{ user.size }}</p>
    </div>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            user:{
                name: '',
                system: '',
                capacity: '',
                size: '',
                status: 'active'
            }
        }
    },
    methods:{
        async createUser(){
            try{
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>


</style>