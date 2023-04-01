
// videos from videos.json

// function to take a video object and return a video element
function videoElement(video) {
    var ht = '<div class="row portfolio__gallery">'
    var header = `
    <div class="col-lg-4 col-md-6 col-sm-6 mix ${video['company'].replaceAll(" ", "")}">
                        <div class="portfolio__item">
                            <div class="portfolio__item__text">
                                <h4>${video['company']}</h4>
                                <ul>
                                    <li>${video['date']}</li>
                                </ul>
                                <h6 style="color:white">
                                    ${video['description']}
                                </h6>
                            </div>
                        </div>
                    </div>
    `
    var v = video['videos']
    console.log(v)
    var middle = ''
    for (var i = 0; i < v.length; i++) {
        var vid = v[i]
        var velement = `<div class="col-lg-4 col-md-6 col-sm-6 mix ${video['company'].replaceAll(" ", "")}">
        <div class="portfolio__item">
            <div class="portfolio__item__video set-bg" data-setbg = "${vid['thumbnail']}">
                <a href="${vid['url']}" class="play-btn video-popup"><i
                        class="fa fa-play"></i></a>
            </div>
            `
        if (vid['title'] != "") {
            velement += `<div class="portfolio__item__text">
                <h4>${vid['title']}</h4>
            </div>`
        }
        velement += `</div>
    </div>`
        middle += velement
        // console.log(velement)
    }
    ht += header + middle + "</div>"
    return ht
}

// load json file when page loads

var videos = [];
console.log("loading")
$.getJSON("videos.json", function (data) {
    videos = data;
    console.log(videos);
    var gallery = document.getElementById("gallery_full")
    console.log(videos.length)
    full_string = ""
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i]
        var velement = videoElement(video)
        full_string += velement
    }
    console.log(full_string)
    // gallery.innerHTML = full_string
});

