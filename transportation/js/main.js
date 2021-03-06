window.onload = function(){
    const skip = document.querySelector('#skip');
    const scrollHeight = $("section").innerHeight();
    const scrollHeight2 = ($("section").innerHeight())*2;
    const hopin = document.querySelector('#hopin');
    let myObj =  document.getElementById('theObject').contentDocument;
    let myCar =  myObj.getElementById('streetcar');
    let thePath = [
        {
            x:0,
            y:0
        },{
            x:-950,
            y:-530
        }
    ];

    // clicking on the skip will scroll down the window
    skip.addEventListener('click', function(){
        
        $("body, html").animate({scrollTop: scrollHeight}, 500, "easeOutExpo");
    });

    // clicking on the hop in will scroll down the window
    hopin.addEventListener('click', e=> {
        
        TweenMax.to(myCar,5,{
            bezier:{
                type:"thru",
                values:thePath
            },
            ease:Linear.easeNone,
        });

        TweenMax.to(myCar,5,{
            css: {
                scale: 0.5,
            },
            ease:Linear.easeNone,
        });

        $("body, html").delay(5000).animate({scrollTop: scrollHeight2}, 500, "easeOutExpo");
        $("#hopin").fadeOut();

        
    });

    // for the slider section

    var jssor_1_SlideoTransitions = [
        [{b:0,d:1000,o:1}],
        [{b:0,d:1000,y:-88,ls:0.1,e:{y:3,ls:1}}],
        [{b:-1,d:1,da:[0,2000]},{b:600,d:1500,da:[460,2000],e:{da:1}}],
        [{b:1600,d:500,o:0.4}],
        [{b:1500,d:500,o:0.4}],
        [{b:1400,d:500,o:0.7}],
        [{b:600,d:1000,o:1}],
        [{b:-1,d:1,tZ:-100},{b:600,d:1000,x:668,y:302,rY:12,tZ:-30,e:{x:1,y:1,rY:1,tZ:1}}],
        [{b:-1,d:1,tZ:-20}],
        [{b:-1,d:1,tZ:20}],
        [{b:-1,d:1,da:[460,2000]},{b:1200,d:1500,da:[760,2000],e:{da:1}}],
        [{b:1200,d:500,o:0.4}],
        [{b:1100,d:500,o:0.4}],
        [{b:1000,d:500,o:0.7}],
        [{b:0,d:1500,y:60,o:1,e:{y:1}}],
        [{b:-1,d:1,ls:1},{b:0,d:1500,o:1,ls:0,e:{ls:1}}],
        [{b:-1,d:1,da:[760,2000]},{b:1600,d:1500,da:[1040,2000],e:{da:1}}],
        [{b:1600,d:500,o:0.4}],
        [{b:1500,d:500,o:0.4}],
        [{b:1400,d:500,o:0.7}],
        [{b:-1,d:1,so:1},{b:0,d:1000,so:0,e:{so:1}}],
        [{b:-1,d:1,rY:-20}],
        [{b:-1,d:1,so:1},{b:1000,d:1000,so:0,e:{so:1}}],
        [{b:-1,d:1,rY:-20}],
        [{b:-1,d:1,ls:2},{b:0,d:2000,y:68,o:0.7,ls:0.12,e:{y:7,ls:1}}],
        [{b:-1,d:1,ls:2},{b:0,d:2000,y:68,o:0.7,ls:0.12,e:{y:7,ls:1}}],
        [{b:1100,d:1200,y:-40,o:1},{b:2300,d:1200,y:-80,o:0}],
        [{b:1700,d:1200,y:-40,o:1},{b:2900,d:1200,y:-80,o:0}],
        [{b:2300,d:1200,y:-40,o:1},{b:3500,d:1200,y:-80,o:0}],
        [{b:2900,d:1200,y:-40,o:1},{b:4100,d:1200,y:-80,o:0}],
        [{b:3500,d:1200,y:-40,o:1},{b:4700,d:1200,y:-80,o:0}],
        [{b:4100,d:1200,y:-40,o:1},{b:5300,d:1200,y:-80,o:0}]
    ];

    var jssor_1_options = {
        $AutoPlay: 1,
        $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions,
        $Controls: [{r:1100,e:4700},{r:1700,e:5300},{r:2300,e:5900},{r:2900,e:6500},{r:3500,e:7100},{r:4100,e:7700}]
        },
        $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 20,
        $SpacingY: 20
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/





    // close button for the main map
    document.querySelector(".close_icon").addEventListener("click",function(){
        
        window.location.replace("../index.html");
    });



}