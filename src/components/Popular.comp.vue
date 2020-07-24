<template>
    <section class="section">
        <p class="control"> 
            <button class="button" v-on:click="onPopularClick"> Get Now </button> 
        </p>

        <h1 class="title">Popular : {{getPopularList.length}} </h1>
        {{/* JSON.stringify(getPopularList) */}}
        
        
        <ul id="popular_list" style="height:300px; overflow:scroll">
            <li v-for="(item,index) in getPopularList" :key="index">
                {{/* JSON.stringify(item) */}}
                <PopularListItem :itemData="item"  />
            </li>
        </ul>

    </section>
</template>
<script>
import { mapGetters, mapActions} from 'vuex'

import PopularListItem from './PopularListItem.comp'

export default {
    name: 'PopularComponent',
    components: { PopularListItem },
    data: ()=>({}),
    computed: {
        ...mapGetters(['getPopularList'])
    },
    methods: {
        ...mapActions([ 'get_popular_action' ]),
        onPopularClick: function(){
            this.$store.dispatch('get_popular_action', this.searchString)
        }
    }
}
</script>