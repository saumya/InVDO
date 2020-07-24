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
                        <div>Author-{{ item.author }}</div>
                        <div>Author Id-{{ item.authorId }}</div>
                        <div>Author URL-{{ item.authorUrl }}</div>
                        <div> ViewCount-{{item.viewCount}} </div>

                        <div> LiveNow-{{item.liveNow?"Yes":"No"}}, Paid-{{item.paid?"Yes":"No"}}, Premium-{{item.premium?"Yes":"No"}}, isUpcoming-{{item.isUpcoming?"Yes":"No"}} </div>
                        
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SearchListItemComponent',
    computed: {
        ...mapGetters([
            'getSearchList'
        ])
    }
}
</script>