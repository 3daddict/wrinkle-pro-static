$( document ).ready(function() {
    //run on ready functions
    copyrightDate();

});

//Glabal variables
let isPlaying = true;

//toogle for play button
function toggleAudio(){
    const playButton = $('#playButton')
    
    if (isPlaying === true) {
        isPlaying = false;
        playButton.text('Pause Audio');
        audioFile.play();

    } else if (isPlaying === false) {
        isPlaying = true;
        playButton.text('Play Audio');
        audioFile.pause();

    }
}

//copyright date year
function copyrightDate(){
    let date = new Date()
    let year = date.getFullYear();
    document.getElementById("cYear").innerHTML = year;
};