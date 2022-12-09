console.log("Stopify- Where music don't stop");

//Initialization of all the elements that we will be using 
let songIndex=0;
let Audioelement= new Audio('Nothing.mp3');
let Play=document.getElementById('Play');
let MyProgressBar=document.getElementById('Progress');

//Initialization of all the songs that is in our playlist
let songs=[
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"},
    {songName:"Nothing", filepath:"nothing.mp3",coverpath:"Nothingcover.jpg"}
]


//The song will start playing when you will click this button 
Play.addEventListener('click',()=>{
    if(Audioelement.paused|| Audioelement.currentTime<=0)
    {
        Audioelement.play();
        Play.classList.remove('fa-play');
        Play.classList.add('fa-pause');
    }
})
//The Progress Bar will get updated as soon as you play the song
MyProgressBar.addEventListener('timeupdate',()=>{
    console.log("The time is getting updated");
})