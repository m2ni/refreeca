// javascript document

var video = {
    info : {
        key : 'AIzaSyCbDxQ0p2NiWdc41WJQajjQeqxq_LCfM6I'
    },
    loadlist : function( query ){

        var totalPage,
            nextPageToken,
            result

        query = encodeURI(query);

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + query + '&key=' + video.info.key, false);
        xhr.send();

        var firstData = JSON.parse(xhr.response);

        return firstData.items;

    },
    loadlistByChannelId : function( id ){
    },
    loaditem : function(){
    },
}
