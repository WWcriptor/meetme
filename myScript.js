let star =document.querySelectorAll('.star');
let starRect = [], starX = [], starY = [], starNum = [];
let line = document.querySelectorAll('.line');
let vw =window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let vw6 = 0.06*vw

for(const s of star)
{
    s.addEventListener('click',function () {
        point(s);
      });
}

function point(selectedStar) {
    for (let i = 0; i <= 7; i++) {
        if (starNum.length == 7) {
            i =0;
            starNum.length = 0;
            line.length =0;
            remove();
            starNum[0] = selectedStar;
            break;
        } else if (starNum.length == i) {
            starNum[i] = selectedStar;
            break;
        }
    }

    if (starNum.length == 7) {
        draw();
    }
}

function draw() {
    for (let i = 0; i < 7; i++) {
        starRect[i] = starNum[i].getBoundingClientRect();
        starX[i] = starRect[i].left;
        starY[i] = starRect[i].top;
    }

    // Set line properties
    line[0].style.width = Math.sqrt((starX[1] - starX[0]) ** 2 + (starY[1] - starY[0]) ** 2) + 'px';
    line[0].style.left = starX[0]+vw6 + 'px';
    line[0].style.top = starY[0]+vw6 + 'px';
    line[0].style.transform = 'rotate(' + angle(starX[0], starY[0], starX[1], starY[1]) + 'deg)';
    line[0].style.transformOrigin = '0% 0%';

    line[1].style.width = Math.sqrt((starX[2] - starX[1]) ** 2 + (starY[2] - starY[1]) ** 2) + 'px';
    line[1].style.left = starX[1]+vw6 + 'px';
    line[1].style.top = starY[1]+vw6 + 'px';
    line[1].style.transform = 'rotate(' + angle(starX[1], starY[1], starX[2], starY[2]) + 'deg)';
    line[1].style.transformOrigin = '0% 0%';

    line[2].style.width =Math.sqrt((starX[3] - starX[2]) ** 2 + (starY[3] - starY[2]) ** 2) + 'px';
    line[2].style.left = starX[2]+vw6 + 'px';
    line[2].style.top = starY[2]+vw6 + 'px';
    line[2].style.transform = 'rotate(' + angle(starX[2], starY[2], starX[3], starY[3]) + 'deg)';
    line[2].style.transformOrigin = '0% 0%';

    line[3].style.width = Math.sqrt((starX[4] - starX[3]) ** 2 + (starY[4] - starY[3]) ** 2) + 'px';
    line[3].style.left = starX[3]+vw6 + 'px';
    line[3].style.top = starY[3]+vw6 + 'px';
    line[3].style.transform = 'rotate(' + angle(starX[3], starY[3], starX[4], starY[4]) + 'deg)';
    line[3].style.transformOrigin = '0% 0%';

    line[4].style.width = Math.sqrt((starX[5] - starX[4]) ** 2 + (starY[5] - starY[4]) ** 2) + 'px';
    line[4].style.left = starX[4]+vw6 + 'px';
    line[4].style.top = starY[4]+vw6 + 'px';
    line[4].style.transform = 'rotate(' + angle(starX[4], starY[4], starX[5], starY[5]) + 'deg)';
    line[4].style.transformOrigin = '0% 0%';

    line[5].style.width = Math.sqrt((starX[6] - starX[5]) ** 2 + (starY[6] - starY[5]) ** 2) + 'px';
    line[5].style.left = starX[5]+vw6 + 'px';
    line[5].style.top = starY[5]+vw6 + 'px';
    line[5].style.transform = 'rotate(' + angle(starX[5], starY[5], starX[6], starY[6]) + 'deg)';
    line[5].style.transformOrigin = '0% 0%';
    
}

function remove()
{
    for (let i =0; i<line.length;i++)
    {
        line[i].style.width = 0;
    }
}

function angle(x1, y1, x2, y2)
{
    let rad = Math.atan2(y2-y1, x2-x1);
    let degree = (rad*180)/Math.PI;

    if (degree < 0) {
        degree += 360;
    }

    return degree;
}