window.addEventListener( 'resize', sizePictures );

if (window.innerWidth < 400) {
    document.getElementById('pageTop').style.flexDirection = 'column';
    document.getElementById('tyson').style.scale = '0.5';
}

/**
 * Sizing and resizing the images that hold the social medias.
 */
let mediaPictures = document.getElementsByClassName('mediaPic');
let projectPictures = document.getElementsByClassName('projectPic');
sizePictures();

function sizePictures() {
    for (let i = 0; i < mediaPictures.length; i++) {
        let w = (window.innerWidth / 6) + 'px';
        mediaPictures[i].style.width = w;    
        mediaPictures[i].style.height = 'auto';
    }

    for (let i = 0; i < projectPictures.length; i++) {
        let w = (window.innerWidth / 9) + 'px';
        projectPictures[i].style.width = w;    
        projectPictures[i].style.height = 'auto';
    }
}