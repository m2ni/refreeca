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
    },
    itemLoad : function(container, query){
        var a; // source connect
    }
}

var video = {
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
