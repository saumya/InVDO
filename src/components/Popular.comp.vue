<template>
    <section class="section">
        <h1 class="title">Popular : {{getPopularList.length}} </h1>
        {{ JSON.stringify(getPopularList) }}
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PopularComponent',
    data: ()=>({}),
    computed: {
        ...mapGetters(['getPopularList'])
    }
}
</script>