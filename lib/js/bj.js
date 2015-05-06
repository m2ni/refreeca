// javascript document

var bj = {
    getInfo : function(keyword){

        var result = new Array(),
            rawInfo = bj.getInfoByKeyword(keyword);

        for( var i=0; i<rawInfo.name.length; i++ ){
            result.push(rawInfo.name[i]);
        }
        for( var i=0; i<rawInfo.category.length; i++ ){
            if( checkOverlap(rawInfo.category[i]) ){
                result.push(rawInfo.category[i]);
            }
        }
        for( var i=0; i<rawInfo.keyword.length; i++ ){
            if( checkOverlap(rawInfo.keyword[i]) ){
                result.push(rawInfo.keyword[i]);
            }
        }

        function checkOverlap(elem){
            if( result.length === 0 ){
                return true;
            }
            for( var i=0; i<result.length; i++ ){
                if( result[i].id === elem.id ){
                    return false;
                } else {
                    return true;
                }
            }
        }

        return result;
    },
    getInfoById : function(id){
        var list = new bj.data();
        for( var i=0; i<list.length; i++ ){
            if( id === list[i].id ){
                return list[i];
                break;
            }
        }
    },
    getInfoByKeyword : function(keyword){

        var list = new bj.data();
        var reg = new RegExp(keyword, 'g');

        var result = {
            name : [],
            category : [],
            keyword : []
        }

        for( var i=0; i<list.length; i++ ){
            if( list[i].name.match(reg) ){
                result.name.push(list[i]);
            }
            for( var j=0; j<list[i].category.length; j++ ){
                if( list[i].category[j].match(reg) ){
                    result.category.push(list[i]);
                }
            }
            for( var j=0; j<list[i].keyword.length; j++ ){
                if( list[i].keyword[j].match(reg) ){
                    result.keyword.push(list[i]);
                }
            }
        }
        return result;
    },
    data : function(){

        var xhr = new XMLHttpRequest();
            xhr.open('GET', './lib/js/bj.json', false);
            xhr.send();

        if( xhr.status === 200 ){
            var raw = JSON.parse(xhr.response);
            return raw.data;

        } else {

            console.log('network error');
            return false;

        }
    }
}
