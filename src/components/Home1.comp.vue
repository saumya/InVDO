<template>
    <div>
        Home1.comp.vue
        <Nav1Comp />
        <PopularComp />
        <TrendingComp />
    </div>
</template>
<script>
import Nav1Comp from './Nav1.comp'
import TrendingComp from './Trending.comp'
import PopularComp from './Popular.comp'

export default {
    name: 'Home_1_Component',
    components: { Nav1Comp, TrendingComp, PopularComp },
}
</script>