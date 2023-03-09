let shorts = document.getElementsByClassName("shorts-video");
for (i = 0; i < shorts.length; i++) {
  shorts[i].addEventListener('mouseover', function() {
    this.play();
  });
  shorts[i].addEventListener('mouseout', function() {
    this.pause();
    this.currentTime = 0;
  })
}

let all = document.getElementsByClassName("shorts-all")[0];

function shortsLess(x) {
  let all = document.getElementsByClassName("shorts-all")[x];
  all.scrollLeft -= 350;
}


function shortsMore(x) {
  let all = document.getElementsByClassName("shorts-all")[x];
  all.scrollLeft += 350;
}