<template>
    <section class="section">
        <h1 class="title">Trending : {{getTrendingList.length}}</h1>
        {{ JSON.stringify(getTrendingList) }}
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TrendingComponent',
    data: ()=>({}),
    computed: {
        ...mapGetters(['getTrendingList'])
    }
}
</script>