<template>
    <section class="section">
        <h1 class="title"> Search </h1>
        <h2 class="subtitle">Search Youtube</h2>
        <Nav1Comp />
        <SearchListItemComp />
        <!--
        <section class="section">
            <ul id="popular_list" style="height:300px; overflow:scroll">
            <li v-for="(item,index) in getSearchList" :key="index">
                
                {{ JSON.stringify(item) }}
                <span>----------------------</span>
                <br/>
            </li>
        </ul>
        </section>
        -->
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
import Nav1Comp from './Nav1.comp'
import SearchListItemComp from './SearchListItem.comp'

export default {
    name: 'SearchComponent',
    components: { Nav1Comp, SearchListItemComp },
    computed: {
        ...mapGetters({
            searchedList : 'messages/getSearchList'
        })
    }
}
</script>