/**
 * 默认浮标渲染方式
 * @param data {link:XX,stInfo:XX}
 */
AerosolSDK.Run(function(yangzuo,AerosolSDK,data) {
    show.$inject = ["$Interval","$templateCache"];
    function show($Interval,$templateCache){
        var html = $templateCache.get("aerosol-default");
        yangzuo.element('body').append(html);
        var aImage = yangzuo.element("#aerosolRoot > a");
        var classList = AerosolSDK.getImageClasses().slice(0,2);
        aImage.attr("href",data.link);
        aImage.attr("db-log",data.stInfo);
        if(classList.length==1){
            aImage.addClass(classList[0]);
        }else{
            aImage.addClass(classList[0]);
            var i = 0;
            $Interval(function(){
                aImage.removeClass(classList[i]);
                i = (i+1) % classList.length;
                aImage.addClass(classList[i]);
            },400);
        }
    }
    if(!data.show){
        return;
    }
    yangzuo.injectExecute(show);
    DB.Statistics.initLog();
});