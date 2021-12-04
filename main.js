var canvas = new fabric.Canvas('mycanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	


   fabric.Image.fromURL("cake.jpg",function(Img)
        
    {
    block_image_obj=Img;

    block_image_obj.scaleToWidth(700);
    block_image_obj.scaleToHeight(510);
    block_image_obj.set({
    top:0,
    left:0

});

canvas.add(block_image_obj);   

});
}


function playsound()
{
	x.play();
}


