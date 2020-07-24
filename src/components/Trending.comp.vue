<template>
    <section class="section">
        <p class="control"> 
            <button class="button" v-on:click="onTrendingClick"> Get Now </button> 
        </p>

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
import { mapGetters, mapActions } from 'vuex'
import TrendingListItem from './TrendingListItem.comp'

export default {
    name: 'TrendingComponent',
    components: { TrendingListItem },
    data: ()=>({}),
    computed: {
        ...mapGetters(['getTrendingList'])
    },
    methods: {
        ...mapActions([ 'onTrendingClick' ]),
        onTrendingClick: function(){
            this.$store.dispatch('get_trending_action')
        }
    }
}
</script>