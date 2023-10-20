document.getElementById('guideSteps').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === "LI") {
        let imgSrc = e.target.getAttribute('data-image');
        document.getElementById('imageDisplay').src = imgSrc;
        document.getElementById('imageDisplay').style.display = 'block';
    }
});
