<template>
    <div class="container mb-1">
        <div class="notification">
            <!-- <div>Video id - {{itemData.videoId}}</div> -->
            <!-- <div>Video - <strong>{{itemData.title}}</strong> </div> -->
            <div> <strong>{{itemData.title}}</strong> </div>
                
            <div>View Count- {{itemData.viewCount}} | Published- {{itemData.publishedText}}</div>

            <div>{{itemData.type}} - {{itemData.lengthSeconds}} secs</div>
            <div>Author - <strong>{{itemData.author}}</strong> </div>
            <!-- <div>Author id - {{itemData.authorId}}</div> -->
            <!-- <div>Author url - {{itemData.authorUrl}}</div> -->

            <div class="buttons has-addons">
                <button class="button" v-on:click="onViewVideoClick(itemData)"> Vdo </button>
                <!--
                <button class="button" v-on:click="onViewAuthorClick(itemData.authorId)"> Author </button> 
                <button class="button" v-on:click="onViewChannelClick(itemData.authorUrl)"> Channel </button>
                -->
            </div>

        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: "PopularListItemCompoment",
    props: {
        itemData: {}
    },
    methods:{
        ...mapActions({ 
            updateSelectedVideo : 'messages/update_selected_video_action' 
        }),
        onViewVideoClick: function(video){
            //console.log('onViewVideoClick : videoId :', video)
            // https://invidio.us/watch?v=0b_eHBZLM6U
            //const url_inv = 'https://invidio.us/watch?v=' + videoId
            // https://www.youtube-nocookie.com/embed/sRrqF8eXs38
            //const url_noc = 'https://www.youtube-nocookie.com/embed/' + videoId

            //console.log('invidious:', url_inv)
            //console.log('nocookie:', url_noc)

            //this.$store.dispatch( 'messages/update_selected_video_action', video )
            this.updateSelectedVideo(video)
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