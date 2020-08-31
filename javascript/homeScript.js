// hover effects
function homeHover(){
    document.querySelector(".albumNav").style.opacity="0.6";
    document.querySelector(".activityNav").style.opacity="0.6";
    document.querySelector(".aboutNav").style.opacity="0.6";
}
function albumHover(){
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".activityNav").style.opacity="0.6";
    document.querySelector(".aboutNav").style.opacity="0.6";
}
function activityHover(){
    document.querySelector(".albumNav").style.opacity="0.6";
    document.querySelector(".homeNav").style.opacity="0.6";
    document.querySelector(".aboutNav").style.opacity="0.6";
}
function aboutHover(){
    document.querySelector(".albumNav").style.opacity="0.6";
    document.querySelector(".activityNav").style.opacity="0.6";
    document.querySelector(".homeNav").style.opacity="0.6";
}


function hoverend(){
    document.querySelector(".homeNav").style.opacity="1";
    document.querySelector(".albumNav").style.opacity="1";
    document.querySelector(".activityNav").style.opacity="1";
    document.querySelector(".aboutNav").style.opacity="1";
}

// hover effect for albums

// function albumHover(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="1";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="0.6";
// }
// function potraitHover(){
//     document.querySelector(".potrait p").style.opacity="1";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="0.6";
// }
// function animationHover(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="1";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="0.6";
// }
// function productHover(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="1";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="0.6";
// }
// function craftHover(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="1";
// }
// function digitalHover(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="1";
//     document.querySelector(".craft p").style.opacity="0.6";
// }
// function hoverendAlbum(){
//     document.querySelector(".potrait p").style.opacity="0.6";
//     document.querySelector(".abstract p").style.opacity="0.6";
//     document.querySelector(".animation p").style.opacity="0.6";
//     document.querySelector(".product p").style.opacity="0.6";
//     document.querySelector(".digital p").style.opacity="0.6";
//     document.querySelector(".craft p").style.opacity="0.6";
// }

// album functions

function potraitThumbnails(){
    document.getElementById("p1").src="Portrait/1.jpg";
    document.getElementById("p2").src="Portrait/2.jpg";
    document.getElementById("p3").src="Portrait/3.jpg";
    document.getElementById("p4").src="Portrait/4.jpg";
    document.getElementById("p5").src="Portrait/5.jpg";
    document.getElementById("p6").src="Portrait/6.jpg";
    document.getElementById("p7").src="Portrait/7.jpg";
    document.getElementById("p8").src="Portrait/8.jpg";
    document.getElementById("p5").style.display="block";           //  displays again when craft of digital is once clicked since they turn the display to hide
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="block";

    document.getElementById("l1").href="Portrait/1.jpg";
    document.getElementById("l2").href="Portrait/2.jpg";
    document.getElementById("l3").href="Portrait/3.jpg";
    document.getElementById("l4").href="Portrait/4.jpg";
    document.getElementById("l5").href="Portrait/5.jpg";
    document.getElementById("l6").href="Portrait/6.jpg";
    document.getElementById("l7").href="Portrait/7.jpg";
    document.getElementById("l8").href="Portrait/8.jpg";

    document.getElementById("viewMore").href="#";
    document.getElementById("albumName").innerHTML="Portrait";

    document.querySelector(".potrait p").style.opacity="1";
    document.querySelector(".abstract p").style.opacity="0.6";
    document.querySelector(".animation p").style.opacity="0.6";
    document.querySelector(".product p").style.opacity="0.6";
    document.querySelector(".digital p").style.opacity="0.6";
    document.querySelector(".craft p").style.opacity="0.6";
}

function animationThumbnails(){
    document.getElementById("p1").src="Animation/1.jpg";
    document.getElementById("p2").src="Animation/2.jpg";
    document.getElementById("p3").src="Animation/3.jpg";
    document.getElementById("p4").src="Animation/4.jpg";
    document.getElementById("p5").src="Animation/5.jpg";
    document.getElementById("p6").src="Animation/6.jpg";
    document.getElementById("p7").src="Animation/7.jpg";
    document.getElementById("p8").src="Animation/8.jpg";
    document.getElementById("p5").style.display="block";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="block";

    document.getElementById("l1").href="Animation/1.jpg";
    document.getElementById("l2").href="Animation/2.jpg";
    document.getElementById("l3").href="Animation/3.jpg";
    document.getElementById("l4").href="Animation/4.jpg";
    document.getElementById("l5").href="Animation/5.jpg";
    document.getElementById("l6").href="Animation/6.jpg";
    document.getElementById("l7").href="Animation/7.jpg";
    document.getElementById("l8").href="Animation/8.jpg";

    document.getElementById("viewMore").href="#";
    document.getElementById("albumName").innerHTML="Animation"

    document.querySelector(".potrait p").style.opacity="0.6";
    document.querySelector(".abstract p").style.opacity="0.6";
    document.querySelector(".animation p").style.opacity="1";
    document.querySelector(".product p").style.opacity="0.6";
    document.querySelector(".digital p").style.opacity="0.6";
    document.querySelector(".craft p").style.opacity="0.6";
}
function abstractThumbnails(){
    document.getElementById("p1").src="Abstract/1.jpg";
    document.getElementById("p2").src="Abstract/2.jpg";
    document.getElementById("p3").src="Abstract/3.jpg";
    document.getElementById("p4").src="Abstract/4.jpg";
    document.getElementById("p5").src="Abstract/5.jpg";
    document.getElementById("p6").src="Abstract/6.jpg";
    document.getElementById("p7").src="Abstract/7.jpg";
    document.getElementById("p8").src="Abstract/8.jpg";
    document.getElementById("p5").style.display="block";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="block";

    document.getElementById("l1").href="Abstract/1.jpg";
    document.getElementById("l2").href="Abstract/2.jpg";
    document.getElementById("l3").href="Abstract/3.jpg";
    document.getElementById("l4").href="Abstract/4.jpg";
    document.getElementById("l5").href="Abstract/5.jpg";
    document.getElementById("l6").href="Abstract/6.jpg";
    document.getElementById("l7").href="Abstract/7.jpg";
    document.getElementById("l8").href="Abstract/8.jpg";

    document.getElementById("viewMore").href="#";
    document.getElementById("albumName").innerHTML="Abstract"

    document.querySelector(".potrait p").style.opacity="0.6";
    document.querySelector(".abstract p").style.opacity="1";
    document.querySelector(".animation p").style.opacity="0.6";
    document.querySelector(".product p").style.opacity="0.6";
    document.querySelector(".digital p").style.opacity="0.6";
    document.querySelector(".craft p").style.opacity="0.6";
}

function productThumbnails(){
    document.getElementById("p1").src="Product/1.jpg";
    document.getElementById("p2").src="Product/2.jpg";
    document.getElementById("p3").src="Product/3.jpg";
    document.getElementById("p4").src="Product/4.jpg";
    document.getElementById("p5").src="Product/5.jpg";
    document.getElementById("p6").src="Product/6.jpg";
    document.getElementById("p6").src="Product/7.jpg";
    document.getElementById("p6").src="Product/8.jpg";
    document.getElementById("p5").style.display="block";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="block";

    document.getElementById("l1").href="Product/1.jpg";
    document.getElementById("l2").href="Product/2.jpg";
    document.getElementById("l3").href="Product/3.jpg";
    document.getElementById("l4").href="Product/4.jpg";
    document.getElementById("l5").href="Product/5.jpg";
    document.getElementById("l6").href="Product/6.jpg";
    document.getElementById("l7").href="Product/7.jpg";
    document.getElementById("l8").href="Product/8.jpg";

    document.getElementById("viewMore").href="#";
    document.getElementById("albumName").innerHTML="Product"

    document.querySelector(".potrait p").style.opacity="0.6";
    document.querySelector(".abstract p").style.opacity="0.6";
    document.querySelector(".animation p").style.opacity="0.6";
    document.querySelector(".product p").style.opacity="1";
    document.querySelector(".digital p").style.opacity="0.6";
    document.querySelector(".craft p").style.opacity="0.6";
}

function digitalThumbnails(){
    document.getElementById("p1").src="Digital/1.png";
    document.getElementById("p2").src="Digital/2.jpg";
    document.getElementById("p3").src="Digital/3.jpg";
    document.getElementById("p4").src="Digital/4.jpg";
    document.getElementById("p5").style.display="none";        //  not enough images so this hides the space for excess images
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";
    document.getElementById("albumName").innerHTML="Digital"

    document.getElementById("l1").href="Digital/1.jpg";
    document.getElementById("l2").href="Digital/2.jpg";
    document.getElementById("l3").href="Digital/3.jpg";
    document.getElementById("l4").href="Digital/4.jpg";

    document.querySelector(".potrait p").style.opacity="0.6";
    document.querySelector(".abstract p").style.opacity="0.6";
    document.querySelector(".animation p").style.opacity="0.6";
    document.querySelector(".product p").style.opacity="0.6";
    document.querySelector(".digital p").style.opacity="1";
    document.querySelector(".craft p").style.opacity="0.6";
}

function craftThumbnails(){
    document.getElementById("p1").src="Craft/1.jpg";
    document.getElementById("p2").src="Craft/2.jpg";
    document.getElementById("p3").src="Craft/3.jpg";
    document.getElementById("p4").src="Craft/4.jpg";
    document.getElementById("p5").src="Craft/5.jpg";
    document.getElementById("p6").src="Craft/6.jpg";
    document.getElementById("p7").src="Craft/5.jpg";
    document.getElementById("p8").style.display="none";        
    document.getElementById("p5").style.display="block";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("albumName").innerHTML="Craft"

    document.getElementById("l1").href="Craft/1.jpg";
    document.getElementById("l2").href="Craft/2.jpg";
    document.getElementById("l3").href="Craft/3.jpg";
    document.getElementById("l4").href="Craft/4.jpg";
    document.getElementById("l5").href="Craft/5.jpg";
    document.getElementById("l6").href="Craft/6.jpg";
    document.getElementById("l7").href="Craft/7.jpg";

    document.querySelector(".potrait p").style.opacity="0.6";
    document.querySelector(".abstract p").style.opacity="0.6";
    document.querySelector(".animation p").style.opacity="0.6";
    document.querySelector(".product p").style.opacity="0.6";
    document.querySelector(".digital p").style.opacity="0.6";
    document.querySelector(".craft p").style.opacity="1";
}