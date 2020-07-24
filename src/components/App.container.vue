<template>
    <div>
        
        <router-link to="/">Home</router-link> | 
        <!-- <router-link to="/check">Check</router-link> | -->
        <router-link to="/player">Player</router-link> | 
        <router-link to="/search">Search</router-link> | 
        <router-link to="/popular">Popular</router-link> | 
        <router-link to="/trending">Trending</router-link> | 
        <router-link to="/about">About</router-link> | 
        <!-- <router-link to="/vue">VueHelp</router-link> -->
        <span> Version- {{getAppVersion}} </span>

        <router-view></router-view> 
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'AppContainer',
    computed: {
        ...mapGetters([
            'getAppVersion'
        ])
    }
}
</script>
