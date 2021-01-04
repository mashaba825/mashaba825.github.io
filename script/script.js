document.getElementById('memberPhoto').hidden = true;
let x=3;

function go()
{
    //x = Math.random(1,7);
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
}