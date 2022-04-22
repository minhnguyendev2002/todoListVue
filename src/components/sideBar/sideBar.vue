<template>
    <div class="side-bar p-3">
        <img class="w-100" src="images/logo.png" alt="logo" />
        <ul class="side-bar-list mt-5">
            <li><router-link :to="{ name: 'home' }">Todo App</router-link></li>
            <li><router-link :to="{ name: 'card' }">Card</router-link></li>
            <li><router-link :to="{ name: 'userList' }">Signin form</router-link></li>
            <li><router-link :to="{ name: 'weatherApp' }">Weather App</router-link></li>    
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .side-bar {
        position: fixed;
        width: 300px;
        left: 0;
        height: 100vh;
        background-color: #2b2a2a;
        border-right: 1px solid #d0d0d069;
    }
    .side-bar img {
        border-radius: 5px;
    }
    .side-bar-list {
        list-style: none;
        padding: 0px 10px;
    }
    .side-bar-list li a {
        text-decoration: none;
        background-color: transparent;
        padding: 10px 15px;
        color: #FFF;
        display: block;
        text-align: center;
        font-size: 21px;
        border-radius: 8px;
        border: 2px solid transparent;
    }
    .router-link-active {
        color: #0093e9 !important;  
        border-color: #0093e9 !important;
    }
</style>