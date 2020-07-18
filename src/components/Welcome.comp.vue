<template>
    <section class="section">

        Welcome.comp.js - {{getInfoMessage}} - {{getWhetherBusy}}

        
        <div class="field has-addons">
            <p class="control"> <button class="button">Info</button> </p>
            <p class="control"> <button class="button">Popular</button> </p>
            <p class="control"> <button class="button">Trending</button> </p>
        </div>
        <div class="field has-addons">
            <p class="control">
                <input class="input" type="text" placeholder="Video">
            </p>
            <p class="control"> <button class="button">Search</button> </p>
        </div>
    
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'WelcomeComponent',
    computed: {
        ...mapGetters([
            'getInfoMessage', 'getWhetherBusy'
        ])
    }
}
</script>