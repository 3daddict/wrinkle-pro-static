$( document ).ready(function() {
    copyrightDate();
});


const audioFile = document.getElementById("playAudio"); 

function playAudio() { 
    audioFile.play();

}

function pauseAudio() { 
    audioFile.pause();
    
}

function copyrightDate(){
    let date = new Date()
    let year = date.getFullYear();
    console.log('day', date)
    console.log('year', year)
    document.getElementById("cYear").innerHTML = year;
};