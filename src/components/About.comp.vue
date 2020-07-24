<template>
    <section class="section">
        <h1 class="title">InVDO</h1>
        <h2 class="subtitle">Youtube Player</h2>
        <p>
            Youtube Video player with a fresh and extremely simplistic look.
            <ul>
                <li> Version : {{getAppVersion}} </li>
                <li> No Advertisements </li>
                <li> Clutter free and Fresh Look </li>
            </ul>
        </p>

        <section class="section">
        <h1 class="title"> Server Details </h1>
        <h2 class="subtitle">Details about the API server.</h2>
        <p class="control"> 
            <button class="button" v-on:click="onInfoClick"> Get Info </button> 
        </p>
        {{ getInfoMessage }}
        </section>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AboutComponent',
    computed: {
        ...mapGetters([
            'getAppVersion', 'getInfoMessage'
        ])
    },
    methods: {
        ...mapActions([ 'get_info_action' ]),
        onInfoClick(){
            this.$store.dispatch('get_info_action')
        },
    }
        
}
</script>