const data=JSON.parse(datacontent).data;

//find by id
const main_img=document.getElementById('main-img');
const preview_title =document.getElementById('preview-title');
const preview_details=document.getElementById('preview-details');
const module_content=document.querySelector('.module-content');


//call load data
loadContent();

//load content module
function loadContent(){
    module_content.innerHTML= data.map(function(res){
        return `<div  class="module-item" id="${res._id}">
        <div onclick="showContent(this,${res._id})" class="module-head">
            <input onclick="checkbox(this)" type="checkbox" id="checkbox">
            <p id="title">${res.name}</p>
            
        </div>
        <div class="module-body">
            ${res.modules.map(function(res){
                return `<div class="text-body">
                <p id="details">
                    ${res.name}
                </p>
            </div>`
            }).join("")}
            </div>
    </div>`
    }).join("");
}

function checkbox(check){
    patent=check.parentElement.parentElement;
    console.log(patent);
   module_content.removeChild(patent);
}

//show content
function showContent(item, id){
    let body =item.parentElement.querySelector('.module-body');
    let name=item.querySelector('#title');

    if(module_content.classList.contains('active')){
        name.classList.remove('active');
    }
   
    if(body.style.display=='block'){
        body.style.display='none';
        name.classList.remove('active');
    }else{
        body.style.display='block';
        name.classList.add('active');
    }

    //show image and title
   main_img.src=data[id].image;
   preview_title.textContent=data[id].name;
   preview_details.textContent=data[id].description;
   main_img.style.opacity='0';






    

}

main_img.onload=()=>{
    main_img.style.opacity='1';
}