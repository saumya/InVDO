<template>
    <section class="section">
        <h1 class="title"> Search </h1>
        <h2 class="subtitle">Search Youtube</h2>
        <Nav1Comp />
        
        <section class="section">
            {{ getSearchList }}
        </section>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
import Nav1Comp from './Nav1.comp'

export default {
    name: 'SearchComponent',
    components: { Nav1Comp },
    computed: {
        ...mapGetters([
            'getSearchList'
        ])
    }
}
</script>