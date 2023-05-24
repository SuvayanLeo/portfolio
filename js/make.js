
// videos from videos.json

// function to take a video object and return a video element
function videoElement(video) {
    var portfolio__filter = document.getElementById("filterList")
    // <li data-filter=".OmegaStudios">Omega Studios</li>
    var filter = `<li data-filter=".${video['title'].replaceAll(" ", "")}">${video['title']}</li>`
    portfolio__filter.innerHTML += filter
    var ht = ''
    var header = `
    <div class="col-lg-4 col-md-6 col-sm-6 mix ${video['title'].replaceAll(" ", "")}">
                        <div class="portfolio__item">
                            <div class="portfolio__item__text">
                                <h4>${video['title']}</h4>
                                <h6 style="color:white">
                                    ${video['description']}
                                </h6>
                            </div>
                        </div>
                    </div>
    `
    var v = video['videos']
    //console.log(v)
    var middle = ''
    for (var i = 0; i < v.length; i++) {
        var vid = v[i]
        var velement = `<div class="col-lg-4 col-md-6 col-sm-6 mix ${video['title'].replaceAll(" ", "")}">
        <div class="portfolio__item">
            <div class="portfolio__item__video set-bg" data-setbg = "https://img.youtube.com/vi/${vid.split("=")[1]}/maxresdefault.jpg" style="background-image: url(https://img.youtube.com/vi/${vid.split("=")[1]}/maxresdefault.jpg);">
                <a href="${vid}" class="play-btn video-popup"><i
                        class="fa fa-play"></i></a>
            </div>
            `
        // if (vid['title'] != "") {
        //     velement += `<div class="portfolio__item__text">
        //         <h4>${vid['title']}</h4>
        //     </div>`
        // }
        velement += `</div>
    </div>`
        middle += velement
        // //console.log(velement)
    }
    ht += header + middle + "</div>"
    return ht
}

// load json file when page loads

var videos = [];
//console.log("loading")
$.getJSON("generated.json", function (data) {
    videos = data;
    //console.log(videos);
    var gallery = document.getElementById("gallery_full")
    //console.log(videos.length)
    full_string = ""
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i]
        var velement = videoElement(video)
        full_string += velement
    }
    //console.log(full_string)

    gallery.innerHTML = full_string

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
            Portfolio filter
        --------------------*/
    $('.portfolio__filter li').on('click', function () {
        $('.portfolio__filter li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.portfolio__gallery').length > 0) {
        var containerEl = document.querySelector('.portfolio__gallery');
        var mixer = mixitup(containerEl);
    }
});

