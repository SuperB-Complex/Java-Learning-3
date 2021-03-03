"use strict";
//get top level elements by their ID.
var $w=window,$d=document,elements = $d.querySelectorAll('*');
for(var i=0;i<elements.length;i++)if(elements.id)$w[id]=$d.getElementById(id);
//Define some top level variables.
main.style.opacity=document.body.style.opacity=0;
var isPlaying = true, isSelected = false,
    prodCarBool = false, isError = false,
    isFeed = false, isPromo = false,
    maxProds=5, feedResult=[],
    adWidth=300, adHeight=250,//temp->grabs from manifest on load
    currentFrame=0, HLCount=0,
    ia, backupData={},clockId="clock";
//Random Tracking Vars and such.
var isWindowLoaded_bool=false,isIALoaded_bool=false,TrackerArray,currentHeadline=1,carouselItem=0,carouselStarted=false,tl1,svgReplaced=false,positionDefaults={},iaVarDefaults={};
//Loading listeners
$d.addEventListener("DOMContentLoaded", function() {initializeInstantAds();});
$w.onload = function() {isWindowLoaded_bool = true;}
//Some Macro Functions
function feedMacro(s,fo){
    var r=s,modifiers=["","U","C","L"],identifier="%"
    for(var o in fo)for(var i=0;i<modifiers.length;i++)if(s.split("["+modifiers[i]+identifier+o+"]").length>1){
        r=r.split("["+modifiers[i]+identifier+o+"]").join(stringModifier(fo[o],modifiers[i]));}
    return r
}
function iaVarMacro(ia){
    var alt=JSON.parse(JSON.stringify(ia));
    var modifiers=["","U","C","L"],identifier="$";
    var hit=true;
    while(hit){hit=false;
        for(var n in alt)for(var i=0;i<modifiers.length;i++)for(var m in alt)if(alt[n].split("["+modifiers[i]+identifier+m+"]").length>1&&n!=m){
            hit=true,alt[n].split("["+modifiers[i]+identifier+m+"]").join(stringModifier(alt[m],modifiers[i]));
        }
    }
    return alt;
}
function stringModifier(s,m){
    if(m=="")return(s);
    if(m=="U")return(s.toUpperCase());
    if(m=="L")return(s.toLowerCase());
    s=s.split(" ");
    for(var i=0;i<s.length;i++)s[i]=s[i].substr(0,1).toUpperCase()+s[i].substr(1,s[i].length);
    return(s.join(" "))
}
function lz(n,l){
    var nl=n.toString().length,lzs="";l=l||2;
    for(var i=nl;i<l.length;i++)lzs+="0";
    return (lzs+n.toString())
}
//Initilize ad getting vars and setting logo images.
function initializeInstantAds() {
    platformBodyClasses();
    TweenMax.ticker.useRAF(false);TweenMax.lagSmoothing(0);
    myFT.on('instantads', function() {
        $w.background_vid = myFT.$("#background_vid")[0];
        $w.bumper_vid= myFT.$("#bumper_vid")[0];
        adWidth=myFT.manifestProperties.width,adHeight=myFT.manifestProperties.height;
        for(var n in iaVarDefaults)if(myFT.instantAds[n]=="")myFT.instantAds[n]=iaVarDefaults;
        $w.ia=iaVarMacro(myFT.instantAds);
        var F1=ia.hl_Timing.split(",")[0];
        ia.hl_Timing=ia.hl_Timing.split(",");
        if(F1.indexOf("a")>-1)ia.animateFirst="a",F1=F1.split("a").join(""),ia.hl_Timing[0]=F1;
        if(F1.indexOf("l")>-1)ia.animateFirst="l",F1=F1.split("l").join(""),ia.hl_Timing[0]=F1;
        if(F1.indexOf("r")>-1)ia.animateFirst="r",F1=F1.split("r").join(""),ia.hl_Timing[0]=F1;
        ia.hl_Timing=ia.hl_Timing.join(",");
        if(ia.feedURL=="")ia.feedURL=defaultFeedURL;
        if(ia.defaultFeedURL=="")ia.defaultFeedURL=ia.feedURL;
        $d.head.appendChild($d.createElement("script")).src=ia.ProductBackupScript;
        lenovoLogo.src = ia.Lenovo_Logo_img;
        efBackground.src = myFT.instantAds.EF_BG_img;
        efBackground.style.opacity=0;
        if (myFT.instantAds.Lenovo_Logo_img.indexOf(".svg")>0) lenovoLogo.className = "svg ef";
        svgReplace();
        var feedParams = new FTFeedParams();
        feedParams.segmentId = myFT.instantAds.segmentId;
        feedParams.feedEndpoint = ia.feedURL;
        feedParams.defaultFeedEndpoint = ia.defaultFeedURL;
        var ftFeed = new FTFeed(myFT, feedParams);
        maxProds=Number(ia.NumProducts_txt);
        maxProds=maxProds==1?2:maxProds;
        $w.lenovoFront.src=ia.logo_Overlay_img;
        if(ia.feedURL.indexOf("{")>-1){feedSuccessful(JSON.parse(ia.feedURL))}else{ftFeed.getFeed(feedSuccessful, feedLoadError);}
    });
}
//Feed successful load
function feedSuccessful(feedItems, feedUrl) {
    myFT.tracker("feedSuccess");
    feedResult=feedItems;
    TrackerArray=[];
    maxProds=Math.min(feedItems.length,maxProds);
    for(var i=0;i<feedResult.length;i++)TrackerArray.push(feedResult[i].powerfeeds_id+"|"+feedResult[i].powerfeeds_price+"|"+feedResult[i].sale_price||"");
    for(var i=TrackerArray.length;i<5;i++)TrackerArray.push("||");
    console.log("TRACKING STRING: "+TrackerArray.toString());
    Tracker.impressionTrackEvent(TrackerArray);
    setupElements();
}
//Feed not successful
function feedLoadError() {
    isError = true;
    myFT.tracker("feedFail");
    feedResult=trackerArray=[];
    for(var i=TrackerArray.length;i<5;i++)TrackerArray.push("||");
    console.log("TRACKING STRING: "+TrackerArray.toString());
    Tracker.impressionTrackEvent(TrackerArray);
    setupElements();
}
//Set up headlines
function setupElements(){
    //Set up 5 headlines
    for(var i=1;i<6;i++){
        var hl=introHeadlines.appendChild($d.createElement("div"));
        hl.innerHTML="<div class='hl'>"+logoInject(ia["F"+i+"_Headline_Subhead"].split("|")[0],"intro")+"<div class='sh'>"+logoInject(ia["F"+i+"_Headline_Subhead"].split("|")[1],"intro")+"</div></div>"
        hl.id="headline"+i,hl.style.opacity=(i==1?1:0);
        hl.style.position="absolute";
        var im=introImages.appendChild($d.createElement("img"));
        im.src=ia["F"+i+"_Bg_Img"];
        im.id="bgImg"+i,im.setAttribute("style","position:absolute;top:0px;left:0px;width:"+adWidth+"px;height:"+adHeight+"px;opacity:"+(i==1?1:0)+";");
    }
    //Set up endframe
    var ea=ia.EF_Headline_XY_Size.split(","),la=ia.EF_Legal_offset_Align_Sz.split(",");
    efHeadlines.setAttribute("style","position:absolute;font-size:"+ea[2]+";opacity:0;");
    efHeadlines.innerHTML="<div class='eh'>"+hlSplit(logoInject(ia.EF_Headline_Subhead.split("|")[0],"end"),"end")+(ia.EF_Headline_Subhead.split("|")[1].length==0?"":"<div class='es' style='font-size:"+(ea[3]||ea[2])+"'>"+hlSplit(logoInject(ia.EF_Headline_Subhead.split("|")[1],"end"),"end")+"</div>")+"</div>";
    EF_legal.innerHTML=ia.EF_Legal;
    EF_legal.setAttribute("style","opacity:0;position:absolute;left:"+la[0]+"px;top:"+la[1]+"px;text-align:"+la[2]+";font-size:"+la[3]+";");
    efCTA.innerHTML=ia.CTA_Text,efCTA.style.opacity=0;
    injectCountdownClock(JSON.parse(ia.countdownClock_Params||'{"divId":"clock"}').divId||"clock");
    var frames = JSON.parse(ia.
    countdownClock_Params||'{"frames_to_display":""}').frames_to_display.split(",");
    if(frames.indexOf(currentHeadline.toString())>-1||(carouselStarted&&frames.indexOf("carousel")>-1)){
        $d.getElementById(clockId).style.display="block";
    } else {
        $d.getElementById(clockId).style.display="none"
    }
    setupCarousel();
}
//Inject and start Countdown Clock"
function injectCountdownClock(id){
    clockId=id
    var ss="style='display:inline-block;'",
        clockDeets = JSON.parse(ia.
        countdownClock_Params||'{"EndTime"":"12/31/2021 23:59","divId":"clock","xywh":"0,0,300,50","TextColor":"#FFFFFF","bgColor":"#000000","frames_to_display":"1,2,3,4,5,carousel","inlinePreCopy":"Check It Out!","inlinePostCopy":"<br>Not Much Time Left!","expiredClockImg":""}'),
        markers = clockDeets.markers.split(","),
        xywh=clockDeets.xywh.split(","),
        clockWrapper="<div class='clockWrapper' style='display:block;position:absolute;left:"+xywh[0]+"px;top:"+xywh[1]+"px;'>$$</div>",
        clockString="<div style='display:inline-block;'><div class='clock' style='background-color:"+clockDeets.bgColor+";color:"+clockDeets.TextColor+";display:table;width:"+xywh[2]+"px;height:"+xywh[3]+"px;vertical-align:middle;'><div style='display:table-cell;vertical-align:middle;text-align:center;'><div class='preClock' "+ss+">"+clockDeets.inlinePreCopy+"</div><div class='innerClock' "+ss+"><div class='dayBlock tBlock' "+ss+"><div class='days nBlock' "+ss+">00</div><div class='mBlock'>"+markers[0]+"</div></div><div class='hourBlock tBlock' "+ss+"><div class='hours nBlock' "+ss+">00</div><div class='mBlock'>"+markers[1]+"</div></div><div class='minBlock tBlock' "+ss+"><div class='mins nBlock' "+ss+">00</div><div class='mBlock'>"+markers[2]+"</div></div><div class='secBlock tBlock' "+ss+"><div class='secs nBlock' "+ss+">00</div><div class='mBlock'>"+markers[3]+"</div></div></div><div class='postClock' "+ss+">"+clockDeets.inlinePostCopy+"</div></div></div></div></div>"
    $d.getElementById(id).innerHTML=clockWrapper.split("$$").join(clockString);
    setInterval(updateTime,1000,id);
}
//Interval to increment clock.
function updateTime(id){
    var clockTime=JSON.parse(ia.Countdown_Clock_Definition||'{"EndTime":"12/31/2021 23:59"}').EndTime;
    var endCount=Number(new Date(clockTime)),current=Math.floor((endCount-Number(new Date()))/1000),times={};
    times.days=current>0?lz(Math.floor(current/(3600*24)),2):"00",
    times.hours=current>0?lz(Math.floor((current%(3600*24),2)/3600)):"00",
    times.mins=current>0?lz(Math.floor((current%3600)/60)):"00",
    times.secs=current>0?lz(Math.floor(current%60)):"00";
    var markers="days,hours,mins,secs".split(","),vals={}
    vals.days = document.getElementsByClassName("days"),
    vals.hours= document.getElementsByClassName("hours"),
    vals.mins = document.getElementsByClassName("mins"),
    vals.secs = document.getElementsByClassName("secs");
    for(var i=0;i<markers.length;i++)for(var j=0;j<vals[markers[i]].length;j++)vals[markers[i]][j].innerHTML=times[markers[i]];
}
//Logo injector for headlines.
function logoInject(t,i){
    t=t||"",i=i||"intro";
    t=t.split("[LOGO]").join(i=="intro"?ia.Intro_HL_Logo_Injector:ia.EF_HL_Logo_Injector);
    return t;
}
//Split Headlines by manual line breaks.< modify to be more intuitive.
function hlSplit(t,type){
    var items=[t];
    for(var i=0;i<items.length;i++)items[i]="<div class='splitHead' style='display:inline-block;"+(type=="end"?"opacity:1":"")+"'>"+items[i]+"</div>";
    return items.join("</br>");
}
//Set up product carousel for pre-animation.
function setupCarousel(){
    var backupCount=0,backupArray=[];
    for(var n in backupData)backupData[n].name=n,backupArray.push(backupData[n]);
    backupArray.sort(function(a,b){return(a.priority>b.priority)?1:b.priority>a.priority?-1:0})
    for(var i=1;i<maxProds+1;i++){
        var ii=carousel.appendChild($d.createElement("div")),it=carousel.appendChild($d.createElement("div"));
        ii.id="itemImg"+i,it.id="itemText"+i;
        if(feedResult[i-1]){
            var name = feedResult[i-1].powerfeeds_name.split(" - ")[0];
            name=(name.split("Lenovo ")[1]||name).split(" ");
            for(var k=0;k<name.length;k++)if(name[k]=="Lenovo"){name[k]="";}else{k+=500;}
            name=name.join("_").split("Desktop").join("").split("Laptop").join("").split("PC").join("").split("Gaming").join("").split("desktop").join("").split("laptop").join("").split("pc").join("").split("gaming").join("").split("Mobile").join("").split("Workstation").join("").split("mobile").join("").split("workstation").join("").split("_");
            for(var k=name.length-1;k>-1;k--)if (name[k]=="")name.splice(k,1);
            name= name.join(" ");
            var rp=parseFloat(feedResult[i-1].powerfeeds_price_raw.split(" ")[0].split(",").join("")),
            sp=parseFloat(feedResult[i-1].sale_price.split(",").join("").split(" USD").join("").split(" CAD").join("")),
            lp=rp>=sp?sp:rp,tp=rp>=sp?rp:"";
            it.innerHTML=ia["Product"+i+"_Override_txt"]==""?("<div><div class='itemName'>"+name+"</div><div class='itemPriceBig'>$"+checkZeroes(lp)+"</div><div class='itemPriceSmall'>"+(checkZeroes(tp).toString().length>0?"$":"")+checkZeroes(tp)+"</div></div>"):("<div>"+ia["Product"+i+"_Override_txt"]+"</div></div>");
            ii.innerHTML='<div class="carouselImages"><img src="'+(ia["Product"+i+"_Override_img"].indexOf("1x1.png")>-1?feedResult[i-1].powerfeeds_image:ia["Product"+i+"_Override_img"])+'" style="max-height: 100%; max-width: 100%; vertical-align: middle;"></div>';
        } else {
            it.innerHTML=ia["Product"+i+"_Override_txt"]==""?("<div>"+backupArray[backupCount].headline+"</div>"):("<div>"+ia["Product"+i+"_Override_txt"]+"</div");
            ii.innerHTML='<div class="carouselImages" style=""><img src="'+(ia["Product"+i+"_Override_img"].indexOf("1x1.png")>-1?(ia.ProductBackupScript.substr(0,ia.ProductBackupScript.lastIndexOf("/"))+"/"+backupArray[backupCount].name):(ia["Product"+i+"_Override_img"]))+'" style="max-height: 100%; max-width: 100%; vertical-align: middle;"></div>';
            backupCount++;
        }
        it.style.opacity=1,ii.style.opacity=0;
        it.style.position=ii.style.position="absolute";
        ii.style.marginTop="0px";
        ii.style.marginLeft=i==1?"0px":ii.getElementsByClassName("carouselImages")[0].offsetWidth+"px";
        it.className = "itemText",ii.className="itemImg";
    }
    function checkZeroes(n){
        var cents = n.toString().split(".")[1]||""
        if(cents.length==0)return n;
        if(cents.length==1) return n.toString().split(".")[0]+"."+cents+"0";
        return n;
    }
    var introLogoFill = ia.Lenovo_Logo_fg_bg_hex.split(",")[0];
    var introHLSpecs = ia.intro_HL_xy_sizes.split(",");
    var introLogoBg = ia.Lenovo_Logo_fg_bg_hex.split(",")[1];
    var styles = $d.createElement('style');
    styles.innerHTML = "#lenovoLogo{background-color:"+matchColor(introLogoBg)+"}.carouselImages>img,#introImages>img{image-rendering: -moz-crisp-edges;image-rendering: -o-crisp-edges;image-rendering: -webkit-optimize-contrast;image-rendering: crisp-edges;-ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */}#introHeadlines{top:"+introHLSpecs[1]+"px;left:"+introHLSpecs[0]+"px;}.hl{font-size:"+introHLSpecs[2]+"}.sh{font-size:"+introHLSpecs[3]+"} .ef.svg #fillerOne, .ef.svg #fillerTwo, .ef.svg #fillerThree, .ef.svg #fillerFour { fill:"+ matchColor(introLogoFill) +" !important; }"+".hl,.sh,.eh,.es,#EF_legal,#carousel,.itemPriceBig,.itemPriceSmall,.itemName{color:"+matchColor(ia.Headline_base_accent.split(",")[0])+";}"+"ac{color:"+matchColor(ia.Headline_base_accent.split(",")[1])+";}#efCTA{background-color:"+matchColor(ia.CTA_FG_BG_OL_hex.split(",")[1])+";color:"+matchColor(ia.CTA_FG_BG_OL_hex.split(",")[0])+";filter:drop-shadow(0px 0px 1px "+matchColor(ia.CTA_FG_BG_OL_hex.split(",")[2])+");}"+ia.insert_CSS;
    $d.getElementsByTagName('head')[0].appendChild(styles);
    setTimeout(function(){styles.innerHTML+="#introHeadlines{top:"+checkAuto(ia.intro_HL_xy_sizes.split(",")[1],document.getElementById("introHeadlines"),"height")+"px;left:"+checkAuto(ia.intro_HL_xy_sizes.split(",")[0],document.getElementById("introHeadlines"),"width")+"px;}#efHeadlines{top:"+checkAuto(ia.EF_Headline_XY_Size.split(",")[1],document.getElementById("efHeadlines"),"height")+"px;left:"+checkAuto(ia.EF_Headline_XY_Size.split(",")[0],document.getElementById("efHeadlines"),"width")+"px}"},500);
    var svgInterval=setInterval(function (){if(svgReplaced){$d.getElementById("lenovoLogo").setAttribute("viewBox","40 40 460 1540");clearInterval(svgInterval);}},10);
    setupClick();
}

function checkAuto(a,b,c){
    console.log([a,b,c].join(" | ")+" | "+b.offsetWidth+" | "+b.offsetHeight+" | "+adWidth+" | "+adHeight);
    if(a=="auto"){
        if(c=="height"){
            return(adHeight-b.offsetHeight)/2
        }else{
            return(adWidth-b.offsetWidth)/2
        }
    }else{return a}
}
//Set up clicks.
function setupClick(){
    bgExit.setAttribute("style","position:absolute;top:0px;left:0px;width:"+adWidth+"px;height:"+adHeight+"px;");
    bgExit.addEventListener("click", function(){bgExitHandler(carouselItem)});
    initAnim();
}
function initAnim(){
    var img,txt
    main.style.opacity=0;
    if(ia.animateFirst&&$d.getElementById("bgImg1")){
        img=$d.getElementById("bgImg1"),txt=$d.getElementById("headline1");
        if(ia.animateFirst=="r"){
            txt.style.left=img.style.left=adWidth+"px";
        }else if (ia.animateFirst=="l"){
            txt.style.left=img.style.left=-adWidth+"px";
        }
        else if(ia.animateFirst=="a"){
            txt.style.left=-adWidth+"px",img.style.left=adWidth+"px";
        }
    }
    TweenMax.to(main, 0.25, {opacity: 1,delay:.5,onStart:function(){
        if(ia.animateFirst&&$d.getElementById("bgImg1")){
            img=$d.getElementById("bgImg1"),txt=$d.getElementById("headline1");
            if(ia.animateFirst=="r"){
                txt.style.left=img.style.left=adWidth+"px";
                TweenMax.to(img,1,{x:-(adWidth+(img.offsetWidth-adWidth)),delay:.5,ease:Power4.easeOut});
                TweenMax.to(txt,1,{x:-adWidth,delay:.5,ease:Power4.easeOut});
            }else if (ia.animateFirst=="l"){
                txt.style.left=img.style.left=-adWidth+"px";
                TweenMax.to(img,1,{x:(adWidth+(img.offsetWidth-adWidth)),delay:.5,ease:Power4.easeOut});
                TweenMax.to(txt,1,{x:adWidth,delay:.5,ease:Power4.easeOut});
            }
            else if(ia.animateFirst=="a"){
                txt.style.left=-adWidth+"px",img.style.left=adWidth+"px";
                TweenMax.to(img,1,{x:-(adWidth+(img.offsetWidth-adWidth)),delay:.5,ease:Power4.easeOut});
                TweenMax.to(txt,1,{x:adWidth,delay:.5,ease:Power4.easeOut});
            }
        }
    }});
        if(ia.intro_Background_vid.indexOf("null")==-1)background_vid.play();
        for(var i=0;i<eoa.length;i++)elemOuters[eoa[i]]=document.getElementById(eoa[i]).outerHTML;
    animateGo();
    
}
var elemOuters={},eoa=["introImages","introHeadlines","efHeadlines","efCTA","EF_legal","carousel","clock"]
//Set up Timeouts for all animations (headlines and carousel)
function animateGo() {
    HLCount=0;
    for(var i=1;i<6;i++)if($d.getElementById("headline"+i).innerText.length>0)HLCount++
    var maxTime=0;
    ia.efHLSplit=ia.efHLSplit||ia.hl_Timing.substr(ia.hl_Timing.lastIndexOf(",")+1,ia.hl_Timing.length);
    if(ia.efHLSplit.indexOf("split")==-1)carouselItem=1;
    if(ia.efHLSplit.indexOf("s")>-1||ia.efHLSplit.indexOf("h")>-1)ia.hl_Timing=ia.hl_Timing.split(",").splice(0,ia.hl_Timing.split(",").length-1);
    for(var i=0;i<HLCount;i++){
        if(typeof(ia.hl_Timing)=="string")ia.hl_Timing=ia.hl_Timing.split(",");
        console.log("HL SWITCH TIMER ="+ia.hl_Timing[i]*1000);
        setTimeout(headlineSwitcher,500+Number(ia.hl_Timing[i])*1000);
        if(Number(ia.hl_Timing[i])>maxTime)maxTime=Number(ia.hl_Timing[i]);
        if(i==HLCount-1){
            setTimeout(callBumper,14000);
            var itemCount=maxProds+(ia.efHLSplit.indexOf("split")>-1?1:0),cTime=(14000-maxTime*1000)/itemCount;
            for(var i=0;i<itemCount;i++){
                setTimeout(advanceCarousel,maxTime*1000+i*cTime+500);
            }
        }
    }
    setTimeout(function(){document.body.style.opacity=1;},100);
}
//Switch headlines (based on timeouts)
function headlineSwitcher(){
    currentHeadline++;
    var prevH=currentHeadline-1;
    //console.log("Calling Headline Switcher "+currentHeadline);
    var oldImg=$d.getElementById("bgImg"+prevH),oldTxt=$d.getElementById("headline"+prevH),
        img=$d.getElementById("bgImg"+currentHeadline),txt=$d.getElementById("headline"+currentHeadline);
    if(ia.animateFirst=="r"){
        txt.style.left=img.style.left=adWidth+"px";
        console.log("Switching Headlines");
        TweenMax.to(img,.25,{x:-adWidth,delay:.1,ease:Power4.seaseOut});
        TweenMax.to(txt,.25,{x:-adWidth,delay:.1,ease:Power4.easeOut,onComplete:checkVisible});
        TweenMax.to(oldTxt,.25,{opacity:0});
    }else if (ia.animateFirst=="l"){
        txt.style.left=img.style.left=-adWidth+"px";
        console.log("Switching Headlines");
        TweenMax.to(img,.25,{x:adWidth,delay:.1,ease:Power4.seaseOut});
        TweenMax.to(txt,.25,{x:adWidth,delay:.1,ease:Power4.easeOut,onComplete:checkVisible});
        TweenMax.to(oldTxt,.25,{opacity:0});
    }
    else if (ia.animateFirst=="a"){
        txt.style.left=-adWidth+"px",img.style.left=adWidth+"px";
        console.log("Switching Headlines");
        TweenMax.to(img,.25,{x:-adWidth,delay:.1,ease:Power4.seaseOut});
        TweenMax.to(txt,.25,{x:adWidth,delay:.1,ease:Power4.easeOut,onComplete:checkVisible});
        TweenMax.to(oldTxt,.25,{opacity:0});
    }else{oldTxt.style.opacity=0;}
    txt.style.opacity=img.opacity=1;
    var frames = JSON.parse(ia.countdownClock_Params||'{"frames_to_display":""}').frames_to_display.split(",");
    if(frames.indexOf(currentHeadline.toString())>-1||(carouselStarted&&frames.indexOf("carousel")>-1)){
        $d.getElementById(clockId).style.display="block";
    } else {
        $d.getElementById(clockId).style.display="none"
    }
}
//Switch carousel items based on timeouts
function advanceCarousel(useTime){
    useTime=useTime||1;
    carouselStarted=true;
    var s=document.getElementById("newStyle")||document.head.appendChild(document.createElement("style"));
    if(!s.id)s.id="newStyle",s.innerHTML=".ef.svg #fillerOne, .ef.svg #fillerTwo, .ef.svg #fillerThree, .ef.svg #fillerFour { fill:"+ matchColor(ia.EF_Logo_FG_BG_hex.split(",")[0]||"#FFFFFF") +" !important; }";
    lenovoLogo.style.backgroundColor=matchColor(ia.EF_Logo_FG_BG_hex.split(",")[1]||"#00000000")
    var frames = JSON.parse(ia.
        countdownClock_Params||'{"frames_to_display":""}').frames_to_display.split(",");
        if(frames.indexOf(currentHeadline.toString())>-1||(carouselStarted&&frames.indexOf("carousel")>-1)){
            $d.getElementById(clockId).style.display="block";
        } else {
            $d.getElementById(clockId).style.display="none"
    }
    var efItems=[],efHeads=[efHeadlines.getElementsByClassName("eh")[0]],deets=$d.getElementById("itemText1").children,cImg=$d.getElementById("itemImg1");
    $w.efBackground.style.opacity=1,$w.efBackground.style.width=adWidth+"px",efHeadlines.style.opacity=1;
    for(var i=0;i<deets[0].children.length;i++)deets[0].children[i].style.opacity=1;deets[0].style.opacity=0;
    for(var i=0;i<efHeads.length;i++)efItems.push(efHeads[i]);
    if(ia.efHLSplit.indexOf("split")==-1) for(var i=0;i<deets.length;i++)efItems.push(deets[i]);
    efItems.push(cImg),efItems.push(efCTA),efItems.push(EF_legal);
    if(carouselItem==0||(carouselItem==1&&ia.efHLSplit.indexOf("split")==-1)){
        for(var i=0;i<efItems.length;i++){
            if(efItems[i]!=cImg){
                efItems[i].style.marginTop=adHeight/6+"px";
            }else{
                efItems[i].style.marginLeft=cImg.getElementsByClassName("carouselImages")[0].offsetWidth+"px";
            }
            efItems[i].style.opacity=0;
            efAnimIn(efItems[i],i);
        }
        cImg.style.marginLeft=cImg.getElementsByClassName("carouselImages")[0]+"px";
    } else if(carouselItem==1&&ia.efHLSplit.indexOf("split")>-1){
        TweenMax.to($d.getElementById("efHeadlines"),useTime*.25,{y:-1*adHeight+parseInt($d.getElementById("efHeadlines").style.top||0), ease:Power4.easeIn})
        for(var i=0;i<deets.length;i++){
            deets[i].style.opacity=0,TweenMax.to(deets[i],useTime*.25,{opacity:1,delay:useTime*.25,onComplete:checkVisible})
        }
        deets[0].parentElement.style.opacity=1;
    }else{
        var oldDeets=$d.getElementById("itemText"+(carouselItem-1)).children,newDeets=$d.getElementById("itemText"+(carouselItem)).children,oldImg=$d.getElementById("itemImg"+(carouselItem-1)),newImg=$d.getElementById("itemImg"+carouselItem);
        for(var i=0;i<oldDeets.length;i++)TweenMax.to(oldDeets[i],useTime*.25,{opacity:0});
        for(var i=0;i<newDeets.length;i++){
            TweenMax.to(newDeets[i],useTime*.25,{opacity:1,delay:useTime*.25});
            for(var i=0;i<newDeets[0].children.length;i++)newDeets[0].children[i].style.opacity=1;
            newDeets[0].style.opacity=0;
        };
        console.log("Switching Products");
        if(adWidth>adHeight){
            TweenMax.to(oldImg,useTime*.25,{marginTop:adHeight})
        }else {
            TweenMax.to(oldImg,useTime*.25,{marginLeft:-adWidth})
        }
        newImg.style.marginLeft=newImg.getElementsByClassName("carouselImages")[0].offsetWidth+"px";
        TweenMax.to(newImg,useTime*.25,{marginLeft:0,opacity:1,delay:useTime*.25,onComplete:checkVisible});
    }
    carouselItem++;
}
var cvCount=0;
function checkVisible(){console.log("CHECK VISIBLE-FIRED: "+cvCount);cvCount++}
//Animate the initial carousel frame:
function efAnimIn(item,t){
    TweenMax.to(item, .5, {marginTop: 0,marginLeft:0,rotate: .01,ease:Power4.easeOut,delay: t/10,opacity:1})
}
//Activate bumper based on timeouts.
function callBumper(){
    if(ia.efHLSplit.indexOf("hide")==-1){
        bumperExit.addEventListener("click", bumperExitHandler);
        bumperExit_img.style.display=bumperExit.style.display=bumper_vid.style.display="block";
        bumper_vid.play();
        bumper_vid.onended=function(){
            if(ia.efHLSplit.indexOf("flip")>-1){
                TweenMax.to(bumper_vid,.25,{opacity:0,onComplete:function(){bumperExit.style.display=bumper_vid.style.display=bumperExit_img.style.display="none";bumper_vid.style.opacity=1;}})
            }

        }
    }
}
//BG Click for headlines nad products.
function bgExitHandler(e) {
    var clickAppend="";
    if(ia.clickTag.indexOf("&cid") != -1||ia.clickTag.indexOf("?cid")!=-1)clickAppend = ia.clickTag.split("&cid")[1]||ia.clickTag.split("?cid")[1]||"";
    if (carouselStarted){
        e=e==1?2:e;
        if(feedResult[e-2]){
            Tracker.clickTrackEvent(TrackerArray[e-2], 'ft_c1', false);
            var clickOut = feedResult[e-2].link+ "?cid" + clickAppend;
            myFT.clickTag((e+2), clickOut);
        } else {
            myFT.clickTag((e+2),ia.clickTag)
        }
    } else{
        myFT.clickTag(1, ia.clickTag);
    }
}
//BG Click for Bumper
function bumperExitHandler(e) {
    if(ia.bumper_clickTag != "")myFT.clickTag(2, ((ia.Bumper_clickTag!=""&&ia.Bumper_clickTag.toLowerCase().indexOf("cid")>-1)?ia.Bumper_clickTag:ia.clickTag));
    if(ia.efHLSplit.indexOf("hide")==-1&&ia.efHLSplit.indexOf("flip")==-1)bumper_vid.play();
}
//Match Color function.
function matchColor(colorCode) {
    return {"lenovored":"#E1140A", "lenovoorange":"#FF6A00",
        "lenovoyellow":"#FEE600", "lenovogreen":"#6AC346",
        "lenovocyan":"#46C8E1", "lenovoblue":"#3E8DDD",
        "lenovopink":"#F04187", "lenovopurple":"#8246AF",
        "lenovodarkgray":"#333F48", "lenovomediumgray":"#6F7170",
        "lenovolightgray":"#C4BEB6", "lenovoblack":"#000000"}[colorCode]||colorCode
}
//Replace SVGs to allow for logo coloring.
function svgReplace(){
    jQuery("img.svg").each(function(){var t=jQuery(this),e=t.attr("id"),r=t.attr("class"),a=t.attr("src");jQuery.get(a,function(a){var i=jQuery(a).find("svg");svgReplaced=true;"undefined"!=typeof e&&(i=i.attr("id",e)),"undefined"!=typeof r&&(i=i.attr("class",r+" replaced-svg")),i=i.removeAttr("xmlns:a"),t.replaceWith(i)})});
    
}
//Apply platform body classes so that platform/browser specific CSS can be used.
function platformBodyClasses() {
        var a = new Array(),n=navigator,np=n.platform,nu=n.userAgent,nv=n.vendor,nut=nu.toLowerCase(),npt=np.toLowerCase();
        if (np.toLowerCase().indexOf("mac") > -1) {a[0] = "macOS";}
        else if (npt.indexOf("win") > -1) {a[0] = "windows";}
        else if (npt.indexOf("iphone")>-1){a[0]= "iphone";}
        else if (npt.indexOf("linux arm")>-1){a[0] ="android";}
        var MSIE=nu.indexOf("MSIE"),Edge=nu.indexOf("Edge/"),Trdt = nu.indexOf("Trident/");
        if (nut.indexOf("chrome") > -1) {a[1] = "chrome";}
        else if (nut.indexOf("firefox") > -1) {a[1] = "firefox";}
        else if (nv && nv.toLowerCase().indexOf("apple") > -1) {a[1] = "safari";}
        else if (MSIE > 0 || Edge > 0 || Trdt > 0) {a[1] = "IE";}
        for(var i=0;i<a.length;i++){if(a[i])$d.body.className+=" "+a[i]}
} 

var eih,ewa,wots,words,lines,minDevs=5000,mindevsn=null,sizer={};
function blockSplitter(e,n){
    if(e.innerHTML.indexOf("<br>")==-1){
        n=n||[3];
        var maxN = n.reduce(function(a, b){return Math.max(a, b);}),sw=parseInt(e.style.width=e.offsetWidth+"px"),eh=e.innerHTML
        for(var w=parseInt(e.style.width);w>sw*.5;w--){
            e.style.width=w+'px',eih=e.innerHTML=eh,ewa=e.innerText.split(" ");
            for(var i=0;i<ewa.length;i++)eih=eih.split(ewa[i]).join("<span class='word'>"+ewa[i]+"</span>");
            for(var i=0;i<5;i++)eih=eih.split("<span class='word'><span class='word'>").join("<span class='word'>").split("</span></span>").join("</span>");
            e.innerHTML=eih,wots=[],words=document.getElementsByClassName("word"),lines=[],wl=words.length;
            for(var i=0;i<words.length;i++){words[i].id="word"+i;if(wots.indexOf(words[i].offsetTop)==-1)wots.push(words[i].offsetTop);}
            for(var i=0;i<wots.length;i++)for(var j=0;j<words.length;j++)if(words[j].offsetTop==wots[i]){lines[i]=lines[i]||[],lines[i].push(words[j]);}
            for(var i=0;i<lines.length;i++){for(var j=0;j<lines[i].length;j++){lines[i][j]=lines[i][j].outerHTML;}lines[i]="<span class='line' id='line"+i+"'>"+lines[i].join(" ")+"</span>"}
            e.innerHTML=lines.join(" "),lines=document.getElementsByClassName("line");
            if(n.indexOf(lines.length)!=-1||maxN*2>wl) {
                var lws=0,avg=0,devs=0,avgd=0;
                for(var i=0;i<lines.length;i++)lws+=lines[i].offsetWidth;
                avg=lws/lines.length;
                for(var i=0;i<lines.length;i++)devs+=Math.abs(lines[i].offsetWidth-avg);
                avgd=devs/lines.length,words=[];
                for(var i=0;i<lines.length;i++)words.push(lines[i].getElementsByClassName("word").length);
                sizer[w]={avg:avg,avgd:avgd,wordCount:words.join(",")};
            }
        }
        for(var ws in sizer)if(sizer[ws].avgd<minDevs)minDevs=sizer[ws].avgd,mindevsn=ws;
        e.style.width=sw+"px",words=e.innerText.split(" ");
        var wcounts = sizer[mindevsn].wordCount.split(","),injectString=[];
        for(var i=0;i<wcounts.length;i++)injectString.push(words.splice(0,wcounts[i]).join(" "));
        e.innerHTML=injectString.join("<br>");
    }
}
function replay(){
    main.style.opacity=document.body.opacity=0;
    currentHeadline=1;carouselItem=0;
    ia.hl_timing=myFT.instantAds.hl_timing;
    bumper_vid.style.display="none",bumper_vid.style.opacity=1;
    for(var i=0;i<eoa.length;i++)document.getElementById(eoa[i]).outerHTML=elemOuters[eoa[i]];
    setTimeout(initAnim,1000);
}