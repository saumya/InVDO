<template>
    <div>
        <!--
        <div class="field has-addons">
            <p class="control"> <button class="button" v-on:click="onInfoClick">Info</button> </p>
            <p class="control"> <button class="button" v-on:click="onPopularClick">Popular</button> </p>
            <p class="control"> <button class="button" v-on:click="onTrendingClick">Trending</button> </p>
            <p class="control"> <button class="button" v-on:click="onTopClick">Top</button> </p>
        </div>
        -->
        <div class="field has-addons">
            <p class="control is-expanded">
                <input class="input" type="text" placeholder="Video" v-model="searchString" />
            </p>
            <p class="control"> <button class="button" v-on:click="onSearchClick">Search Video</button> </p>
        </div>
        
        
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Nav_1_Component',
    data: function(){
        // 'Michael Jackson - They Don't Care About Us (Prison Version) (Official Video)'
        return({
            searchString : 'live now'
        })
    },
    computed: {
        ...mapGetters({
            info : 'messages/getInfoMessage', 
            searchedList : 'messages/getSearchList'
        })
    },
    methods: {
        ...mapActions({ 
            getTestInfo : 'messages/test_api_action', 

            getInfo : 'messages/get_info_action', 
            searchVideo : 'messages/search_video_action',
            
            popularVideoAction : 'messages/get_popular_action', 
            trendingVideoAction : 'messages/get_trending_action', 
            topVideoAction : 'messages/get_top_action' 
        }),
        onInfoClick(){
            //this.$store.dispatch('messages/get_info_action', this.searchString)
            this.getInfo( this.searchString )
        },
        onSearchClick(){
            //console.log('onSearchClick', this.searchString)
            //console.log( this.searchString )
            
            //this.$store.dispatch('messages/search_video_action', this.searchString)
            this.searchVideo( this.searchString )
        },
        onPopularClick(){
            //this.$store.dispatch('messages/get_popular_action', this.searchString)
            this.popularVideoAction()
        },
        onTrendingClick(){
            //this.$store.dispatch('messages/get_trending_action', this.searchString)
            this.trendingVideoAction()
        },
        onTopClick(){
            //this.$store.dispatch('messages/get_top_action', this.searchString)
            this.topVideoAction()
        },
    }
}
</script>