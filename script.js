const accessKey = "OLLCh0STdO1OdaZf9jNciFb2ciUQDYdnSi3EIzOuzLg";
const firstForm = document.getElementById("firstForm");
const formInput = document.getElementById("formInput");
const ImageLoad = document.getElementById("image-load");
const showMore = document.getElementById("show-more");

console.log(firstForm.value);

let keyword = "";
let page = 1;

async function Imagesearch() {
  keyword = formInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`;
  const responce = await fetch(url);
  const data = await responce.json();
  if(page === 1){
    ImageLoad.innerHTML = "";

  }
  const results = data.results;
  console.log( results)
  
    results.map((result)=>{
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank"
      imageLink.appendChild(image);
      ImageLoad.append(imageLink); 
      
    })
  console.log(formInput.value)
  showMore.style.display ="block"
}

firstForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page =1;
    Imagesearch();
})

showMore.addEventListener("click",()=>{
  page++;
  Imagesearch();
})