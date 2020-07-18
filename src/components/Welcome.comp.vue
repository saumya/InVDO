// Component
//

<template>
    <div>
    Welcome.comp.js - {{getInfoMessage}} - {{getWhetherBusy}}
    </div>
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