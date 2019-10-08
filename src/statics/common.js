export const device = function () {
    var userAgent = window.navigator.userAgent;
     if (userAgent.indexOf('iPhone') !== -1) {
        return {
            version: 'IOS',
            regChanelId: 'N0002001'
        }
     }  else if (userAgent.indexOf('Android') !== -1)  {
         return {
             version: 'Android',
             regChanelId: 'N0002000'
         }
     }
}

export const getQueryString = function (str, variable){
       var query = str.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return false;
}

export const getApiKey = function () {
    var hostname = window.location.hostname;
    var apiKey = '';
    if (hostname.indexOf('huopan.baijiajiekuan.com') != -1) {
        apiKey = "1ea29da71a2f45398f68a77f6141c06a"
    } else {
        apiKey = "ef0b4270da254c7e86b20d97d759c3dd"
    }
    return apiKey;
}