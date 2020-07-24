<template>
    <div>
        <section class="section">
            <ul id="popular_list" style="height:300px; overflow:scroll">
                <li v-for="(item,index) in getSearchList" :key="index">
                    <div class="mb-4">
                        <div><strong>{{ item.title }}</strong></div>
                        <div>{{ item.description }}</div>
                        <!--<div>{{ item.descriptionHtml }}</div>-->

                        <div>Video Id-{{ item.videoId }}</div>
                        <div>Author-<strong>{{ item.author }}</strong></div>
                        <div>Author Id-{{ item.authorId }}</div>
                        <div>Author URL-{{ item.authorUrl }}</div>
                        <div> ViewCount-{{item.viewCount}} </div>

                        <div> LiveNow-{{item.liveNow?"Yes":"No"}}, Paid-{{item.paid?"Yes":"No"}}, Premium-{{item.premium?"Yes":"No"}}, isUpcoming-{{item.isUpcoming?"Yes":"No"}} </div>
                        
                        <div class="buttons has-addons">
                            <button class="button" v-on:click="onViewVideoClick(item.videoId)"> Play </button>
                            <button class="button" v-on:click="onViewAuthorClick(item.authorId)"> Author </button> 
                            <button class="button" v-on:click="onViewChannelClick(item.authorUrl)"> Channel </button>
                        </div>

                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SearchListItemComponent',
    computed: {
        ...mapGetters([
            'getSearchList'
        ])
    },
    methods:{
        ...mapActions([ 'update_selected_videoId_action' ]),
        onViewVideoClick: function(videoId){
            this.$store.dispatch( 'update_selected_videoId_action', videoId )
            this.$router.push('player')
        },
        onViewAuthorClick: function(authorId){
            console.log('onViewAuthorClick : authorId :', authorId)
        },
        onViewChannelClick: function(channelUrl){
            console.log('onViewChannelClick : channelUrl :', channelUrl)
        }
    }
}
</script>