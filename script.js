
let accordion = document.querySelector('.accordion-content');
let header = document.querySelectorAll('.accordion-header');
let item = document.querySelectorAll('.accordion-item');

header.forEach(headers => headers.addEventListener('click', toggleAccordion));
function toggleAccordion() {
    thisItem = this.parentNode;
    item.forEach(items => {
        if(thisItem == items){
            thisItem.classList.toggle('collapsed');
            return;
        }
        items.classList.remove('collapsed');
    })
}

// Menu Mobile

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){ navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu')} )}
if(navClose){ navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu')} )}

// Removing Menu Mobile when clicking in menu

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Background

function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 80) { header.classList.add('scroll-header') } else { header.classList.remove('scroll-header') };
}
window.addEventListener('scroll', scrollHeader);

// Active Link Change while scrolling

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);



// Select the HTML5 video
const video = document.querySelector("#video");
const video2 = document.querySelector("#video2");
// set the pause button to display:none by default
document.querySelector(".video1.fa-pause").style.display = "none";
document.querySelector(".video2.fa-pause").style.display = "none";
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100;
    if (video.ended) {
        document.querySelector(".video1.fa-play").style.display = "block";
        document.querySelector(".video1.fa-play-big").style.display = "block";
        document.querySelector(".video1.fa-pause").style.display = "none";
    }
    document.querySelector(".video1.inner").style.width = `${curr}%`;
});
// update the progress bar
if(video2)
video2.addEventListener("timeupdate", () => {
    let curr = (video2.currentTime / video2.duration) * 100;
    if (video2.ended) {
        document.querySelector(".video2.fa-play").style.display = "block";
        document.querySelector(".video2.fa-play-big").style.display = "block";
        document.querySelector(".video2.fa-pause").style.display = "none";
    }
    document.querySelector(".video2.inner").style.width = `${curr}%`;
});
// pause or play the video
const play2 = (e) => {
	//const videoElement = document.querySelector("#"+id);
    // Condition when to play a video
    if(!video.paused){
        runPlayOrPause(e);
    }
    runPlayOrPause2(e);

};
const runPlayOrPause2 = (e) => {
    if (video2.paused) {
        document.querySelector(".video2.fa-play").style.display = "none";
        document.querySelector(".video2.fa-play-big").style.display = "none";
        document.querySelector(".video2.fa-pause").style.display = "block";
        video2.play();
    } else {
        document.querySelector(".video2.fa-play").style.display = "block";
        document.querySelector(".video2.fa-play-big").style.display = "block";
        document.querySelector(".video2.fa-pause").style.display = "none";
        video2.pause();
    }
}
// pause or play the video
const play = (e) => {
    if(!video2.paused){
        runPlayOrPause2(e);
    }
    runPlayOrPause(e);
};
const runPlayOrPause = (e) => {
    // Condition when to play a video
    if (video.paused) {
        document.querySelector(".video1.fa-play").style.display = "none";
        document.querySelector(".video1.fa-play-big").style.display = "none";
        document.querySelector(".video1.fa-pause").style.display = "block";
        video.play();
    } else {
        document.querySelector(".video1.fa-play").style.display = "block";
        document.querySelector(".video1.fa-play-big").style.display = "block";
        document.querySelector(".video1.fa-pause").style.display = "none";
        video.pause();
    }
}
// trigger fullscreen
const fullScreen = (e) => {
    e.preventDefault();
    video.requestFullscreen();
};
// download the video
const download = (e) => {
    e.preventDefault();
    let a = document.createElement("a");
    a.href = video.src;
    a.target = "_blank";
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
// rewind the current time
const rewind = (e) => {
    video.currentTime = video.currentTime - (video.duration / 100) * 5;
};
// rewind the current time
const rewind2 = (e) => {
    video2.currentTime = video2.currentTime - (video2.duration / 100) * 5;
};
// forward the current time
const forward = (e) => {
    video.currentTime = video.currentTime + (video.duration / 100) * 5;
};
// forward the current time
const forward2 = (e) => {
    video2.currentTime = video2.currentTime + (video2.duration / 100) * 5;
};
