<template>
    <section class="section">
        <h1 class="title">InVDO</h1>
        <h2 class="subtitle">Youtube Player</h2>
        <p>
            Youtube Video player with a fresh and extremely simplistic look.
            <ul>
                <li> Version : {{version}} </li>
                <li> No Advertisements </li>
                <li> Clutter free and Fresh Look </li>
            </ul>
        </p>
        
        <section class="section">
            <h1 class="title"> Server Details </h1>
            <h2 class="subtitle">Details about the API server.</h2>
            <div> 
                Please refer <strong> https://github.com/iv-org/invidious/wiki/Invidious-Instances </strong> for all the instances.
                Choose one from the list to put here.
                <ul>
                    Example: 
                    <li> https://invidio.us - <strong>Shutdown</strong> </li>
                    <li>https://invidious.snopyta.org</li>
                    <li>https://invidious.13ad.de</li>
                </ul> 
            </div>

            <div class="field has-addons">
                <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Video" v-model="serverString" />
                </p>
                <p class="control"> <button class="button" v-on:click="onSetServer">Set Server</button> </p>
            </div>

            <p class="control"> 
                <button class="button" v-on:click="onInfoClick"> Get Info </button> 
            </p>
            {{ getInfo }}
        </section>
    </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AboutComponent',
    data: function(){
        return({
            serverString: 'https://invidio.us'
        })
    },
    computed: {
        ...mapGetters({
            version : 'messages/getAppVersion', 
            getInfo : 'messages/getInfoMessage'
        })
    },
    methods: {
        ...mapActions({ 
            setServerName : 'messages/set_server_name_action',
            getInfoAction : 'messages/get_info_action' 
        }),
        onInfoClick(){
            //this.$store.dispatch( 'messages/get_info_action' )
            // mapActions maps
            // "getInfoAction" to " this.$store.dispatch( 'messages/get_info_action' ) "
            this.getInfoAction()
        },
        onSetServer(){
            console.log( 'onSetServer', this.serverString )
            this.setServerName( this.serverString )
        }
    }
        
}
</script>