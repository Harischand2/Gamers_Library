
function getRandomVideoGames(data){
    const gameIds =Object.keys(data);
    let store_ids = [];
    let i =0;
    while(store_ids.length < 3){
        let rand_id = Math.floor(Math.random()*gameIds.length);
        let curr =gameIds[rand_id];
        if (!store_ids.includes(curr)){
            store_ids[i] = curr;
            i++;
        }
    }
    return store_ids;
}
function addPopularVideoGames(data){
    let arr_id = getRandomVideoGames(data);
    console.log("id's  " + arr_id);
    arr_id.forEach( (element)=>{
        let g_id = data[element].id;
        let img_ = data[element].image;
        let title = data[element].title;

        let list = `<div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center" >
        <img class="img-fluid" src=${img_} alt="${title}"/>
        <a class="btn btn-outline-success mt-2"  href="/view/${g_id}">Select</a>
        </div>`;
        $("#pop_list").append(list);
    });
}



$(document).ready(function(){
    addPopularVideoGames(data);
   
});