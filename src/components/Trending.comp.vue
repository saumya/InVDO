<template>
    <section class="section">
        <h1 class="title">Trending : {{getTrendingList.length}}</h1>
        {{/* JSON.stringify(getTrendingList) */}}
        
        <ul id="popular_list" style="height:300px; overflow:scroll">
            <li v-for="(item,index) in getTrendingList" :key="index">
                <TrendingListItem :itemData="item"  />
            </li>
        </ul>

    </section>
</template>
<script>
import { mapGetters } from 'vuex'
import TrendingListItem from './TrendingListItem.comp'

export default {
    name: 'TrendingComponent',
    components: { TrendingListItem },
    data: ()=>({}),
    computed: {
        ...mapGetters(['getTrendingList'])
    }
}
</script>