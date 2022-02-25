var images =["images/one.jpg","images/two.jpg","images/three.jpg","images/four.jpg","images/five.jpg","six.jpg" ];
      
var i=0;

function slide(){
    document.getElementById("slideshow").src = images[i];
   if(i<(images.length-1))
   i++;
   else
   i=0;
}
setInterval(slide, 2000);