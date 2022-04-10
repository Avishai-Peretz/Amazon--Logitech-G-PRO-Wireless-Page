let slider = tns({
    container: ".my-slider",
    "slideBy" : "5",
    "speed":100,
    "nav":false,
    // autoplay :true,
    // controls : true,
    // autoplayButtinOutput : false,
    responsive: {
        1600: {
            items: 5,
            gutter:20
        },
        1024: {
            items: 3,
            gutter : 20
        },
        768: {
            items:2,
            gutter:20
        },
        480: {
            items:1
        }
    }
})