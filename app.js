document.addEventListener("DOMContentLoaded",  ()=> {
var window=document.getElementById('window');
var addImageButton=document.getElementById('add-image');
var images=[];

//add image
addImageButton.addEventListener("click", ()=> {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    //choose image
    fileInput.addEventListener("change",()=>{
        var file = fileInput.files[0];
        var reader=new FileReader();

        reader.onload=(e)=>{
            var image = document.createElement("img");
            image.src = e.target.result;
            image.classList.add("image");

            //Just inside the window
            var maxLeft = window.offsetWidth - 100;
            var maxTop = window.offsetHeight - 100;

            //add position to image
            image.style.left = Math.floor(Math.random() * maxLeft) + "px";
            image.style.top = Math.floor(Math.random() * maxTop) + "px";

            image.style.width = "100px";
            image.style.height = "100px";

          //remove white border from all the images
            images.forEach((img)=>{
              img.style.border = "";
              img.removeAttribute("tabindex");
          });

          //add white border
          image.addEventListener("click", ()=> {
            //remove white border from all the images
            images.forEach((img)=>{
              img.style.border = "";
              // img.style.opacity="80%";
              img.removeAttribute("tabindex");
            });                
            image.style.border = "4px solid white";
            image.setAttribute("tabindex", 0);
            // image.opacity="100%";
            image.focus();
        });

        //in keydown
        image.addEventListener("keydown", (e)=> {
            var speed = 10;
            //button:right
            if (e.key === "ArrowRight") {
              // Check if moving right will exceed the animationWindow boundaries
              if (parseInt(image.style.left) + speed < maxLeft) {
                image.style.left = (parseInt(image.style.left) + speed) + "px";
              }
              //button:left
            } else if (e.key === "ArrowLeft") {
              // Check if moving left will exceed the animationWindow boundaries
              if (parseInt(image.style.left) - speed >= 0) {
                image.style.left = (parseInt(image.style.left) - speed) + "px";
              }
              //button:up
            } else if (e.key === "ArrowUp") {
              // Check if moving up will exceed the animationWindow boundaries
              if (parseInt(image.style.top) - speed >= 0) {
                image.style.top = (parseInt(image.style.top) - speed) + "px";
              }
              //button:down
            } else if (e.key === "ArrowDown") {
              // Check if moving down will exceed the animationWindow boundaries
              if (parseInt(image.style.top) + speed < maxTop) {
                image.style.top = (parseInt(image.style.top) + speed) + "px";
              }
            }
          });
  
          window.appendChild(image);
          //add image to images
          images.push(image);
        };
  
        reader.readAsDataURL(file);
      });
  
      fileInput.click();
    });
  });
