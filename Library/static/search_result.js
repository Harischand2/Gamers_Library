


function getSearchResult(titles){
    let searchT = `<h1>Showing Results for "${user_input}"<h1>`
    $("#searchTop").append(searchT);
    if(titles.length > 0){
    titles.forEach((element)=>{
        let img_=  element['image'];
        let id = element['id'];
        let title = element['title'];
        let list = `<div class=" mt-5 col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center" >
        <img class="img-fluid" src=${img_} alt="${title}"/>
        <a class="btn btn-outline-success mt-2" href="/view/${id}">Select</a>
        </div>`;
        $("#output_list").append(list);
    });
    }
    else{
        let notFound = `<li>No result found</li>`;
        $("#output_list").append(notFound);
    }
}





$(document).ready(function(){
    getSearchResult(titles);
});