function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("Image hovered/focused.");
}

function unDo() {
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
    console.log("Image unhovered/blurred.");
}

function addTabFocus() {
    let images = document.getElementsByClassName('preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

window.onload = function() {
    addTabFocus();
    console.log("Page loaded.");
};