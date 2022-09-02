const d = document,
n=navigator,
l = function(arg) {console.log(arg)};

export default function webCam(id) {
    const $video = d.getElementById(id);
    //l(n.mediaDevices.getUserMedia)

    if(n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:true, audio:false}).then(stream => {
            l(stream);
            $video.srcObject = stream; 
            $video.play();
        }).catch(err => {
            $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error: <mark>${err}</mark></p>`)
            l(`Sucedio el siguiente error: ${err}`)});
    }
}