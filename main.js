window.addEventListener( 'resize', sizePictures );

size(600)

function size(min) {
    if (window.innerWidth < min) {
        document.getElementById('pageTop').style.flexDirection = 'column';
        document.getElementById('tyson').style.scale = '0.5';
    }
}


/**
 * Sizing and resizing the images that hold the social medias.
 */
let mediaPictures = document.getElementsByClassName('mediaPic');
let projectPictures = document.getElementsByClassName('projectPic');
sizePictures();

function sizePictures() {
    for (let i = 0; i < projectPictures.length; i++) {
        let w = (window.innerWidth / 5) + 'px';
        projectPictures[i].style.width = w;    
        projectPictures[i].style.height = 'auto';
    }
    size(841)
}