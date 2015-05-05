// javascript document

var video = {
    info : {
        key : 'AIzaSyCbDxQ0p2NiWdc41WJQajjQeqxq_LCfM6I'
    },
    load : function( option ){

//        markup
//        option = {
//            type : 'list or item',
//            query : 'string',
//            pageToken : 'string'
//        }

        var totalResults, pageToken

        start();

        function start(){

            if( option.type === 'item' ){

            } else {

                getList( option.query );

            }

        }
//
//
//
        function getItem( query ){
        }

        function getList( query ){
            query = encodeURI(query);
            var url = 'https://www.googleapis.com/youtube/v3/search';
            var xhr = new XMLHttpRequest();
                xhr.open('GET', url + '?part=snippet&q=' + query + '&key=' + video.info.key, false);
                xhr.send();

            var data = JSON.parse(xhr.response);

            pageToken = data.nextPageToken;
            totalResults = data.pageInfo.totalResults;

            return data.item;
        }

        function duplicationCheckVideo( query ){
            var url = '../php/duplicationCheckVideo.php';
            var dxhr = new XMLHttpRequest();
                dxhr.open('GET', url + '?q=' + query, false);
                dxhr.send();

            if( dxhr.status === 200 ){
                if( dxhr.response === 'true' ){
                    return true; //중복안됨
                } else {
                    return false; //중복됨
                }
            }
        }

        function pagination(){
        }

    },
    record : function(){
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
    loadlistByChannelId : function( cid ){
    },
    loaditem : function( vid ){
    }
}
