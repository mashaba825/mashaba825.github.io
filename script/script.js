document.getElementById('memberPhoto').hidden = true;
let x=7;

function go()
{
    console.log(x);
    x = Math.floor(Math.random() * (7 - 1 + 1)) + 1;;
    document.getElementById('memberPhoto').hidden = false;
    if(x == 1)
    {
        document.getElementById('memberPhoto').src = './images/junghoseok.jpg';
        document.getElementById('memberPhoto').width = '200';
        document.getElementById('memberPhoto').height = '265';
        document.getElementById('memberName').textContent = 'Jung Hoseok/J-Hope';
    }
    else if(x == 2)
    {
        document.getElementById('memberPhoto').src = './images/jungkook.jpg';
        document.getElementById('memberPhoto').width = '320';
        document.getElementById('memberPhoto').height = '265';
        document.getElementById('memberName').textContent = 'Jeon Jung-kook';
    }
    else if(x == 3)
    {
        document.getElementById('memberPhoto').src = './images/kimnamjoon.jpg';
        document.getElementById('memberPhoto').width = '280';
        document.getElementById('memberPhoto').height = '300';
        document.getElementById('memberName').textContent = 'Kim Namjoon';
    }
    else if(x == 4)
    {
        document.getElementById('memberPhoto').src = './images/kimseokjin.jpg';
        document.getElementById('memberPhoto').width = '250';
        document.getElementById('memberPhoto').height = '300';
        document.getElementById('memberName').textContent = 'Kim Seokjin';
    }
    else if(x == 5)
    {
        document.getElementById('memberPhoto').src = './images/kimtaehyung.jpg';
        document.getElementById('memberPhoto').width = '250';
        document.getElementById('memberPhoto').height = '300';
        document.getElementById('memberName').textContent = 'Kim Taehyung/V';
    }
    else if(x == 6)
    {
        document.getElementById('memberPhoto').src = './images/minyoongi.jpg';
        document.getElementById('memberPhoto').width = '310';
        document.getElementById('memberPhoto').height = '300';
        document.getElementById('memberName').textContent = 'Min Yoongi/Suga';
    }
    else if(x == 7)
    {
        document.getElementById('memberPhoto').src = './images/parkjimin.jpg';
        document.getElementById('memberPhoto').width = '250';
        document.getElementById('memberPhoto').height = '320';
        document.getElementById('memberName').textContent = 'Park Jimin';
    }
}