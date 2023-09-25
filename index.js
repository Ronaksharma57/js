let random = document.getElementById("random");
function fileList(Category){
console.log(Category);
let div = document.createElement("div");
div.id = "newsList";
console.log(div.id);
div.innerHTML=  `
    <img src = "${Category.thumbnail_url}" id="img">
    <div id="content">
    <h1 id = "h1">${Category.title}</h1>
    <p id="p">${Category.details}</p>
    <p>${Category.total_view}</p>
    </div>

`
random.append(div);
}

function showdata(ele){
    console.log(ele);
}
async function news(){
    try{
        let data1 = await fetch("https://openapi.programming-hero.com/api/news/category/01");
        let response = await  data1.json();
        // console.log(response.data);
        let category = response.data;
       
        category.forEach((Category)=>{
            // console.log(Category)
            fileList(Category)
        });
      


    }
    catch(error){
        console.log(error);
    }
}
window.addEventListener('load',news);