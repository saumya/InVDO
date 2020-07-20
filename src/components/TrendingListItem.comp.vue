<template>
    <div class="container mb-1">
        <div class="notification">
            {{/* JSON.stringify(itemData) */}}

            <div>Video id - {{itemData.videoId}}</div>
            <div>Video - <strong>{{itemData.title}}</strong> </div>
                
            <div>View Count- {{itemData.viewCount}} | Published- {{itemData.publishedText}}</div>

            <div>{{itemData.type}} - {{itemData.lengthSeconds}} secs</div>
            <div>Author - {{itemData.author}}</div>
            <div>Author id - {{itemData.authorId}}</div>
            <div>Author url - {{itemData.authorUrl}}</div>

            <div>liveNow - {{itemData.liveNow}}</div>
            <div>paid - {{itemData.paid}}</div>
            <div>premium - {{itemData.premium}}</div>
            <div>isUpcoming - {{itemData.isUpcoming}}</div>

            <div>Description - {{itemData.description}}</div>
            <!-- <div>DHTML - {{itemData.descriptionHtml}}</div> -->
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'TrendingListItemCompoment',
    props: {
        itemData: {}
    }
}
</script>