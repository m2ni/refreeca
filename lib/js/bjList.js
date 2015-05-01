// javascript document

var bj = {
    getInfoById : function(id){
        for( var i=0; i<bj.data.length; i++ ){
            if( id === bj.data[i].id ){
                return bj.data[i];
                break;
            }
        }
    },
    getInfoByKeyword : function(keyword){

        var reg = new RegExp(keyword, 'g');

        var result = {
            name : [],
            category : [],
            keyword : []
        }

        for( var i=0; i<bj.data.length; i++ ){
            if( bj.data[i].name.match(reg) ){
                result.name.push(bj.data[i]);
            }
            for( var j=0; j<bj.data[i].category.length; j++ ){
                if( bj.data[i].category[j].match(reg) ){
                    result.category.push(bj.data[i]);
                }
            }
            for( var j=0; j<bj.data[i].keyword.length; j++ ){
                if( bj.data[i].keyword[j].match(reg) ){
                    result.keyword.push(bj.data[i]);
                }
            }
        }
        return result;
    },
    data : [ // 실제 BJ 데이터 부분
        {
            "id" : "AF0001",
            "name" : "김이브님",
            "category" : ["여캠"],
            "keyword" : ["김이브님","김이브"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/evesojin",
            "url_afreeca" : "//afreeca.com/sooki1220"
        },
        {
            "id" : "AF0002",
            "name" : "복 순♡",
            "category" : ["여캠"],
            "keyword" : ["잉여왕","도복순"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/soon2nee",
            "url_afreeca" : "//www.afreeca.com/killyou18"
        },
        {
            "id" : "AF0003",
            "name" : "BJ로이조",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["로이조"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/royjotv",
            "url_afreeca" : "//www.afreeca.com/bigbigjo2"
        },
        {
            "id" : "AF0004 ",
            "name" : "GstarTV",
            "category" : ["게임"],
            "keyword" : ["GE","GSTAR","러너교","야채식","사과몽","우레","이상호","개소주","태윤이","CVMAX","견자희","메도우이","칼쑤","초선","이춘향","DOPA","이초홍","솔선생"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/GEGAMESyt",
            "url_afreeca" : "//www.afreeca.com/gstartv"
        },
        {
            "id" : "AF0005",
            "name" : "예능인[최군]",
            "category" : ["야외"],
            "keyword" : ["최군","쿤티비"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/chKoonTV",
            "url_afreeca" : "//www.afreeca.com/ch1716"
        },
        {
            "id" : "AF0006",
            "name" : "캬하하찍",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["캬하하찍", "이석현"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCVZI7eLie2UlZph6aiBRNrw",
            "url_afreeca" : "//www.afreeca.com/gndbzl"
        },
        {
            "id" : "AF0007",
            "name" : "커맨더지코",
            "category" : ["게임"],
            "keyword" : ["커맨더지코","광우"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/commanderzico",
            "url_afreeca" : "//www.afreeca.com/no3miggi"
        },
        {
            "id" : "AF0008",
            "name" : "악어∀",
            "category" : ["게임","마인크래프트"],
            "keyword" : ["악어", "늪지대"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/bjacau1",
            "url_afreeca" : "//www.afreeca.com/jdm1197"
        },
        {
            "id" : "AF0009",
            "name" : "양띵",
            "category" : ["게임","마인크래프트"],
            "keyword" : ["양띵"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/d7297ut",
            "url_afreeca" : "//www.afreeca.com/wud1"
        },
        {
            "id" : "AF0010",
            "name" : "한손에총들고",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["김보겸","한손에총들고"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/bokyemtv",
            "url_afreeca" : "//www.afreeca.com/bokyem123"
        },
        {
            "id" : "AF0011",
            "name" : "노래하는코트",
            "category" : ["남캠"],
            "keyword" : ["노래하는코트","윤태훈훈"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCd-SfbUz8Xa5ypL_EpL3R0A",
            "url_afreeca" : "//www.afreeca.com/tsoul7"
        },
        {
            "id" : "AF0012",
            "name" : "★소희짱★",
            "category" : ["야외"],
            "keyword" : ["소희짱","메이드","김소희"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/kimsohee7777",
            "url_afreeca" : "//www.afreeca.com/ksh14"
        },
        {
            "id" : "AF0013",
            "name" : "BJ서윤♥:)",
            "category" : ["여캠"],
            "keyword" : ["서윤윤"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCTuYTAcc8R_ONyOD7JXSAdg",
            "url_afreeca" : "//www.afreeca.com/yunheehoho"
        },
        {
            "id" : "AF0014",
            "name" : "대도서관",
            "category" : ["게임"],
            "keyword" : ["대도서관"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/BuzzBean11",
            "url_afreeca" : "//www.afreeca.com/buzzbean"
        },
        {
            "id" : "AF0015",
            "name" : "춤추는 곰돌",
            "category" : ["남캠"],
            "keyword" : ["춤추는곰돌"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/rlaquf0130",
            "url_afreeca" : "//www.afreeca.com/rlaquf0130"
        },
        {
            "id" : "AF0016",
            "name" : "방송천재까루",
            "category" : ["야외"],
            "keyword" : ["까루","김필기"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/vlfrl2",
            "url_afreeca" : "//www.afreeca.com/vlfrl2"
        },
        {
            "id" : "AF0017",
            "name" : "BJ해물파전",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["해물파전"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/dlgksquf159",
            "url_afreeca" : "//www.afreeca.com/dlgksquf159"
        },
        {
            "id" : "AF0018",
            "name" : "범프리카님",
            "category" : ["먹방"],
            "keyword" : ["범프리카"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/mcbeom",
            "url_afreeca" : "//www.afreeca.com/120510"
        },
        {
            "id" : "AF0019",
            "name" : "팡이요",
            "category" : ["게임","메이플스토리"],
            "keyword" : ["팡이요"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/bjpange",
            "url_afreeca" : "//www.afreeca.com/sccha21"
        },
        {
            "id" : "AF0020",
            "name" : "랩해도돼?",
            "category" : ["게임","모두의마블"],
            "keyword" : ["랩해도돼?"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UC13r2XVC5h3unwWgo25puAw",
            "url_afreeca" : "//www.afreeca.com/jwing95"
        },
        {
            "id" : "AF0021",
            "name" : "Hack.wc♥",
            "category" : ["게임","서든어택택"],
            "keyword" : ["hack.wc"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/hackwc",
            "url_afreeca" : "//www.afreeca.com/dkswhden5"
        },
        {
            "id" : "AF0022",
            "name" : "세글자♡",
            "category" : ["게임","메이플스토리"],
            "keyword" : ["세글자"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/skswhdkgo",
            "url_afreeca" : "//www.afreeca.com/skswhdkgo"
        },
                {
            "id" : "AF0023",
            "name" : "액시스마이콜",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["액시스마이콜","엑시스마이콜"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/sn400wja",
            "url_afreeca" : "//www.afreeca.com/sn400wja"
        },
                {
            "id" : "AF0024",
            "name" : "S2섭이",
            "category" : ["게임","피파온라인3"],
            "keyword" : ["S2섭이"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/kimseungseop",
            "url_afreeca" : "//www.afreeca.com/unitelshaki"
        },
                {
            "id" : "AF0025",
            "name" : "세글자",
            "category" : ["게임","메이플스토리"],
            "keyword" : ["세글자"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/kimseungseop",
            "url_afreeca" : "//www.afreeca.com/unitelshaki"
        },
                {
            "id" : "AF0026",
            "name" : "꿀템",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["꿀템","클템"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCtqz-H_Cl4SGefeFky_UxBg",
            "url_afreeca" : "//www.afreeca.com/killgusdnk"
        },
                {
            "id" : "AF0027",
            "name" : "깝도이",
            "category" : ["게임","스타크래프트1"],
            "keyword" : ["깝도이"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/doejuly",
            "url_afreeca" : "//www.afreeca.com/starno1728"
        },
                {
            "id" : "AF0028",
            "name" : "밴쯔▼",
            "category" : ["먹방"],
            "keyword" : ["밴쯔▼"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/eodyd188",
            "url_afreeca" : "//www.afreeca.com/eodyd188"
        },
                {
            "id" : "AF0029",
            "name" : "풍월량",
            "category" : ["게임"],
            "keyword" : ["풍월량"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/hanryang1125",
            "url_afreeca" : "//www.afreeca.com/wind1125"
        },
                {
            "id" : "AF0030",
            "name" : "Bisu김택용",
            "category" : ["게임","스타크래프트1"],
            "keyword" : ["김택용","Bisu"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCBa9U1nh3fe2lBx3a0R0Skg",
            "url_afreeca" : "//www.afreeca.com/rlaxordyd"
        },
                {
            "id" : "AF0031",
            "name" : "잉여맨*",
            "category" : ["게임","마인크래프트"],
            "keyword" : ["잉여맨*"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/olddog928",
            "url_afreeca" : "//www.afreeca.com/black1142"
        },
                {
            "id" : "AF0032",
            "name" : "홍방장",
            "category" : ["게임"],
            "keyword" : ["홍방장"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/game2eye",
            "url_afreeca" : "//www.afreeca.com/music2eye"
        },
                {
            "id" : "AF0033",
            "name" : "BJ두치와뿌꾸",
            "category" : ["게임","피파온라인3"],
            "keyword" : ["BJ두치와뿌꾸"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/galsa11",
            "url_afreeca" : "//www.afreeca.com/galsa"
        },
                {
            "id" : "AF0034",
            "name" : "*망치부인*",
            "category" : ["시사"],
            "keyword" : ["*망치부인*"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/MrPark2012",
            "url_afreeca" : "//www.afreeca.com/gtv7"
        },
                {
            "id" : "AF0035",
            "name" : "택환♥비제이",
            "category" : ["게임","카트라이더"],
            "keyword" : ["택환♥비제이"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/goata1010",
            "url_afreeca" : "//www.afreeca.com/goata111789"
        },
                {
            "id" : "AF0036",
            "name" : "버블디아",
            "category" : ["여캠"],
            "keyword" : ["버블디아"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCw7ej35vkwxRMWvH8DeoCNQ",
            "url_afreeca" : "//www.afreeca.com/bubbledia"
        },
                {
            "id" : "AF0037",
            "name" : "마왕머독",
            "category" : ["게임"],
            "keyword" : ["마왕머독"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/AngrySmiile",
            "url_afreeca" : "//www.afreeca.com/spbabobj"
        },
                {
            "id" : "AF0038",
            "name" : "빅윈",
            "category" : ["게임","피파온라인3"],
            "keyword" : ["빅윈"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/kimbigwin",
            "url_afreeca" : "//www.afreeca.com/dstv"
        },
                {
            "id" : "AF0039",
            "name" : "BJ 당근로그",
            "category" : ["게임","던전앤파이터"],
            "keyword" : ["당근로그"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCe3k0fwnSXvUnRyo4ZZfdxQ",
            "url_afreeca" : "//www.afreeca.com/potoing"
        },
                {
            "id" : "AF0040",
            "name" : "ＢＪ왕쥬",
            "category" : ["여캠"],
            "keyword" : ["ＢＪ왕쥬"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/wangjugoddess",
            "url_afreeca" : "//www.afreeca.com/djsrhkwl"
        },
                {
            "id" : "AF0041",
            "name" : "닝겐자이라",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["닝겐자이라"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/NingenTV1",
            "url_afreeca" : "//www.afreeca.com/kihging"
        },
                {
            "id" : "AF0042",
            "name" : "꿀탱탱",
            "category" : ["게임","리그오브레전드"],
            "keyword" : ["세글자"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCAJAJ9bAvfjFLRrsqeumJIA",
            "url_afreeca" : "//www.afreeca.com/zkwks4413"
        },
                {
            "id" : "AF0043",
            "name" : "돌프는못말려",
            "category" : ["남캠"],
            "keyword" : ["돌프"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/desperazi",
            "url_afreeca" : "//www.afreeca.com/kissboee"
        },
                {
            "id" : "AF0044",
            "name" : "슈기님",
            "category" : ["먹방"],
            "keyword" : ["슈기"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCBCY00Ox6Cins0oRwSLqNGA",
            "url_afreeca" : "//www.afreeca.com/nyy09"
        },
                {
            "id" : "AF0045",
            "name" : "울산큰고래",
            "category" : ["게임"],
            "keyword" : ["울산큰고래"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/ULSANBIGWHALE",
            "url_afreeca" : "//www.afreeca.com/sloo023"
        },
                {
            "id" : "AF0046",
            "name" : "PD대정령",
            "category" : ["게임"],
            "keyword" : ["PD대정령"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/eowjdfudshrghk",
            "url_afreeca" : "//www.afreeca.com/rlaeogus200"
        },
                {
            "id" : "AF0047",
            "name" : "대세는BJ세야",
            "category" : ["남캠"],
            "keyword" : ["박대세"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/qkreotp",
            "url_afreeca" : "//www.afreeca.com/barams01"
        },
                {
            "id" : "AF0048",
            "name" : "BJ쥬팬더",
            "category" : ["게임"],
            "keyword" : ["쥬팬더"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/jupandaBJ",
            "url_afreeca" : "//www.afreeca.com/zizizi1986"
        },
                {
            "id" : "AF0049",
            "name" : "김은우님",
            "category" : ["남캠"],
            "keyword" : ["김은우"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/channel/UCFITKqW12636TGi-BfQzVaA",
            "url_afreeca" : "//www.afreeca.com/moosstang"
        },
                {
            "id" : "AF0050",
            "name" : "불양",
            "category" : ["게임"],
            "keyword" : ["불양"],
            "thumbnail" : "",
            "url_youtube" : "//www.youtube.com/user/TheBullyang",
            "url_afreeca" : "//www.afreeca.com/raminida"
        }
    ]
}
