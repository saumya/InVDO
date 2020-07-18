<template>
    <div id="app" class="section">
        Vue + Electron
        <router-link to="/">Home</router-link>
        <router-link to="/vue">VueHelp</router-link>
        <router-view></router-view> 
    </div>
</template>
<script>
export default {
    name: 'AppContainer'
}
</script>
