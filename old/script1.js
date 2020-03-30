var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.crossOrigin = "Anonymous";
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);
ctx.font = "36pt Verdana";
$(document).on('input','#inp',function(){
    //redraw image
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
    //refill text
    ctx.fillStyle = "red";
    ctx.fillText($(this).val(),40,80);
});
$('button').click(function(){
    console.log(ctx.getImageData(50, 50, 100, 100));
});