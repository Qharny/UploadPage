let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

// function for displaying images
function preview(){
    imageContainer.innerHTML ="";
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;

    for(let i of fileInput.files){
        let reader = new FileReader();
        let figure = document.createElement("figure"); // add a new element
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload=()=>{
            let img = document.createElement("img");
            let delBtn = document.createElement("div")
            img.appendChild(delBtn);
            delBtn.classList.add("del"); // a button to cancel a seleted the image
            delBtn.textContent="";
            delBtn.addEventListener("click", function(){
                img.src ="";
                img.remove("img"); // remove the image
            })
            img.setAttribute("src",reader.result);
            figure.insertBefore(img,figCap);
        }
        imageContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }

}
