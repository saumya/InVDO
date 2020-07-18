<template>
    <section class="section">

        Welcome.comp.js - {{getInfoMessage}} - {{getWhetherBusy}}

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