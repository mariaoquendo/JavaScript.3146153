const video = document.querySelector('#video');
const playVideo = document.querySelector('#play-video');
const stopVideo = document.querySelector('#stop-video');
const playStopImg1 = document.querySelector('#play-stop-img1');
const playStopImg2 = document.querySelector('#play-stop-img2');
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");  




//Función para reproducir video
function reproducirVideo() {
  video.play()
}
 playVideo.addEventListener('click', reproducirVideo);


//Función para detener video
function pausarVideo() {
   video.pause()
}
stopVideo.addEventListener('click', pausarVideo);


function toggleAudio1() {

    if(audio1.paused){
        audio1.play()
        playStopImg1.textContent = 'Stop ⏸️';
    }else{
        audio1.pause()
        playStopImg1.textContent = 'Play ▶️';
    }

}



playStopImg1.addEventListener('click', toggleAudio1);


function toggleAudio2() {

    if(audio2.paused){
        audio2.play()
        playStopImg2.textContent = 'Stop ⏸️';
    }else{
        audio2.pause()
        playStopImg2.textContent = 'Play ▶️';
    }

}



playStopImg2.addEventListener('click', toggleAudio2);

