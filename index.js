const image_slider_container = document.getElementById("image-slider-container")
const slide_left_btn = document.getElementById("slider-left")
const slide_right_btn = document.getElementById("slider-right")
const images_container = document.getElementById("images-container")
slide_right_btn.addEventListener('click', () => {
    if (image_slider_container.scrollLeft < image_slider_container.scrollLeftMax) {
        image_slider_container.scrollTo({
            left: image_slider_container.scrollLeft + window.innerWidth,
            behavior: 'smooth'
        });
    }
})

slide_left_btn.addEventListener('click', () => {
    if (image_slider_container.scrollLeft > 0) {
        image_slider_container.scrollTo({
            left: image_slider_container.scrollLeft - window.innerWidth,
            behavior: 'smooth'
        });

    }
})