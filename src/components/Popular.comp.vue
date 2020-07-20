<template>
    <section class="section">
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
import { mapGetters } from 'vuex'

import PopularListItem from './PopularListItem.comp'

export default {
    name: 'PopularComponent',
    components: { PopularListItem },
    data: ()=>({}),
    computed: {
        ...mapGetters(['getPopularList'])
    }
}
</script>