<template>
    <section class="section">
        <h1 class="title"> Version- {{ getAppVersion }} </h1>
        <h2 class="subtitle">Welcome to the simple player.</h2>
        

    </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Home_1_Component',
    computed: {
        ...mapGetters([
            'getAppVersion'
        ]),
    }
}
</script>