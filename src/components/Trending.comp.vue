<template>
    <section class="section">
        
        <div class="field has-addons">
            <p class="control"> <button class="button" v-on:click="onTrendingClick">Default</button> </p>

            <p class="control"> <button class="button" v-on:click="onMusicClick">Music</button> </p>
            <p class="control"> <button class="button" v-on:click="onMoviesClick">Movies</button> </p>
            <p class="control"> <button class="button" v-on:click="onGamingClick">Gaming</button> </p>
            <p class="control"> <button class="button" v-on:click="onNewsClick">News</button> </p>
            <!-- <p class="control"> <button class="button" v-on:click="onTopClick">Top</button> </p> -->
        </div>

        <h1 class="title">Trending : {{trendingLsit.length}}</h1>
        {{/* JSON.stringify(getTrendingList) */}}
        
        <ul id="popular_list" style="height:300px; overflow:scroll">
            <li v-for="(item,index) in trendingLsit" :key="index">
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
        ...mapGetters({ 
            trendingLsit : 'messages/getTrendingList'
        })
    },
    methods: {
        ...mapActions({ 
            getTrending : 'messages/get_trending_action', 
            getTrendingMusic : 'messages/trending_by_music_action', 
            getTrendingMovies : 'messages/trending_by_movies_action', 
            getTrendingGaming : 'messages/trending_by_gaming_action', 
            getTrendingNews : 'messages/trending_by_news_action' 
        }),
        onTrendingClick: function() { this.getTrending() },
        onMusicClick: function(){ this.getTrendingMusic() },
        onMoviesClick: function(){ this.getTrendingMovies() },
        onGamingClick: function(){ this.getTrendingGaming() },
        onNewsClick: function(){ this.getTrendingNews() }
    }
}
</script>