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
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'AboutComponent',
    computed: {
        ...mapGetters([
            'getAppVersion'
        ])
    }
}
</script>