const d = document,
    w = window,
    l = function(arg) {console.log(arg)};

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
 let breakpoint = w.matchMedia(mq)


 const responsive = (e) => {
     if(e.matches) {
         d.getElementById(id).innerHTML = desktopContent
     } else {
         d.getElementById(id).innerHTML = mobileContent
     }
    // console.log("MQ", breakpoint, e.matches)
 }
 breakpoint.addListener(responsive) //w.rezise
 responsive(breakpoint) //w. load  
}






