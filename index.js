const divForImg = document.getElementById("img-box");
const requestOne = "https://api.unsplash.com/search/photos?page=1&query=&client_id=bAPR1_k1FnU5FS6TpS-t496HH0VqB87EM1i3cA4oN8M";
const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=trees&client_id=bAPR1_k1FnU5FS6TpS-t496HH0VqB87EM1i3cA4oN8M";
function makeRequestToUnsplash(requestUrl){  
    
    fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {    
        
       

    data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });    });
}
function createImage(imageObj)
{  
    const imageDiv = document.createElement("div");
  const image = document.createElement("img");  // styling for the elements  
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "500px";
  image.style.height = "400px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}
  
makeRequestToUnsplash(requestOne);
makeRequestToUnsplash(requestTwo);