window.addEventListener( 'resize', sizePictures);

size(600)
let projectPictures = document.getElementsByClassName("projectPic");
function size(min) {
    if (window.innerWidth < min) {
        document.getElementById('pageTop').style.flexDirection = 'column';
        document.getElementById('tyson').style.scale = '0.8';
        let projects = document.getElementsByClassName('projectBox')
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.flexDirection = "column"
        }

        sizePictures(projectPictures)
    } else {
        document.getElementById('pageTop').style.flexDirection = 'row';
        let projects = document.getElementsByClassName('projectBox')
        for (let i = 0; i < projects.length; i++) {
            projects[i].style.flexDirection = "row"
        }
    }
}

sizePictures(projectPictures);
function sizePictures(projectPictures) {
    for (let i = 0; i < projectPictures.length; i++) {
        let w = (window.innerWidth / 5) + 'px';
        projectPictures[i].style.width = w;    
        projectPictures[i].style.height = 'auto';
    }
    size(850);
}