// javascript document

var main = {
    info : {
    },
    create : function(){
        if ( main.created ){
            return false;
        }

        main.created = true;
        return true;
    }
}

var refreeca = {
    info : new Object(),
    create : function(){
        var itemlist = document.getElementById('videolist');

        if( !itemlist ){
            console.log('error:not found #videolist');
            return false;
        }

        if( refreeca.info.status === 'created' ){
            console.log('error:refreeca has already created.');
            return false;
        }

//        for(var i=0; i<4; i++){refreeca.create();}

        start();

        function start(){
            appenditem(makeitem({
                title : 'test',
                author : 'test',
                thumb : './common/sam.svg',
                date : '25/02/2022',
                view : '112',
                like : '32'
            }));
        }

        function appenditem(elem, destination){

            var fF = itemlist.children[itemlist.children.length - 1];
            itemlist.removeChild(fF);

            itemlist.appendChild(elem);
            itemlist.appendChild(fF);

            var elem = document.querySelectorAll('.video');
            if( window.innerWidth < 640){
                for( var i=0; i<elem.length; i++ ){
                    elem[i].children[1].style.height = elem[i].children[0].clientHeight + 'px';
                }
            } else {
                for( var i=0; i<elem.length; i++ ){
                    elem[i].children[1].style.height = elem[i].children[0].clientHeight / 2 + 'px';
                }
            }

        }

        function makeitem( option ){
            var elem = document.createElement('li');
                elem.className = 'column l2 dq tt m0';
            var container = document.createElement('div');
                container.className = 'video';
            var thumb = document.createElement('div');
                thumb.className = 'thumb';
            var thumbImg = document.createElement('img');
                thumbImg.setAttribute('src', option.thumb);
                thumbImg.setAttribute('alt', 'thumbnails');
            var other = document.createElement('div');
            var desc = document.createElement('div');
                desc.className = 'desc';
            var descTitle = document.createElement('p');
                descTitle.className = 'title';
                descTitle.innerHTML = option.title;
            var descAuthor = document.createElement('p');
                descAuthor.className = 'author';
                descAuthor.innerHTML = option.author;
            var info = document.createElement('div');
                info.className = 'info';
            var infoDate = document.createElement('p');
                infoDate.className = 'date';
                infoDate.innerHTML = option.date;
            var infoView = document.createElement('p');
                infoView.className = 'view';
                infoView.innerHTML = option.view;
            var infoLike = document.createElement('p');
                infoLike.className = 'like';
                infoLike.innerHTML = option.like;

            var floatFix = document.createElement('p');
                floatFix.className = 'floatFix';

            info.appendChild(infoDate);
            info.appendChild(infoView);
            info.appendChild(infoLike);
            info.appendChild(floatFix);
            desc.appendChild(descTitle);
            desc.appendChild(descAuthor);
            other.appendChild(desc);
            other.appendChild(info);
            thumb.appendChild(thumbImg);
            container.appendChild(thumb);
            container.appendChild(other);
            elem.appendChild(container);

            console.log(elem, container);

            return elem;

        }



    },
    data : {
        load : function(){
        },
        build : function(){
        },
        append : function(){
        }
    },
    video : {
    },

}

var layout = {

    centerAlign : function(selector, option){

        var target = document.querySelectorAll( selector );

        for(var i=0; i<target.length; i++){

            if( !option ){
                target[i].style.position = 'absolute';
                target[i].style.top = '50%';
                target[i].style.left = '50%';
                target[i].style.marginTop = '-' + target[i].offsetHeight / 2 + 'px';
                target[i].style.marginLeft = '-' + target[i].offsetWidth / 2 + 'px';
            } else if( option === 'topOnly' ){
                target[i].style.position = 'absolute';
                target[i].style.top = '50%';
                target[i].style.marginTop = '-' + target[i].offsetHeight / 2 + 'px';
            }

        }

    },
    sizing : function(selector, ratio, origin){ // ratio, origin - optional

        if( !ratio ){

            ratio = 1;

        }

        if( !origin ){

            origin = 'element';

        }

        var target = document.querySelectorAll( selector );

        for(var i=0; i<target.length; i++ ){

            if( origin === 'element' ){

                target[i].style.height = target[i].offsetWidth * ratio + 'px';

            } else if( origin === 'screen' ){

                target[i].style.height = window.innerHeight * ratio + 'px';

            }

        }

    },
    getScreenRatio : function(){

        var w = window.innerWidth;
        var h = window.innerHeight;

        return w / h;

    },
    getScreenType : function(){

        var ua;
        var w = window.innerWidth;

        if(w >= 997){

            return 'desktop';

        } else {

            if( w >=641 ){

                return 'tablet';

            } else {

                return 'mobile';

            }
        }

    }

}


var isMobile = function(){

    var mobileKeyWords = new Array('BB10', 'iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson', 'HTC', 'Hwawei', 'iOS');

    var device_name = '';

    for (var word in mobileKeyWords){

        if (navigator.userAgent.match(mobileKeyWords[word]) != null){

            device_name = mobileKeyWords[word];

            break;

        }

    }

    if(device_name == ''){

        return false;

    }

    return true;

}
