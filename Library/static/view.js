
function addGameTitle(videoGame){
    let t = videoGame['title'];
    let g_id = videoGame['id'];
    let list = `<div class="col-auto edit_btn "> <a class="btn btn-outline-primary" href="/edit/${g_id}">EDIT</a></div>`;
    
    let game_title= `<div class="col-auto title_p"><p>${t}</p></div>`
    $("#gameTitle").append(game_title);
    $("#gameTitle").append(list);
}

function addGameMedia(videoGame){
    let video_id= videoGame['Trailer'].videoId;
    let video_si = videoGame['Trailer'].si;
    var params = {
        si: video_si,
        autoplay: 1, // Set to 1 for autoplay
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
    };
    var youtubeUrl = "https://www.youtube.com/embed/" + video_id + "?" + $.param(params);
    var iframe = $(`<iframe>`, {
        width: "100%",
        height: "80vh",
        src: youtubeUrl,
        title: "YouTube video player",
        frameborder: "0"
    });

    $("#trailer").append(iframe);
}
function addSummary(videoGame){
    let description = `<p><b>Description: </b>${videoGame['summary']}</p>`
    $("#summary").append(description);
}
function addMetaData(videoGame){
    let y = videoGame['year'];
    let copies = videoGame['list_of_data'].total_copies_sold;
    let rate_critics = videoGame['list_of_data'].metacritic_rating["critics"];
    let user_critics =  videoGame['list_of_data'].metacritic_rating['users'];
    console.log(`copies : ${copies}, r_critic: ${rate_critics} , u_critic: ${user_critics}`);
    let output = `<span> <b>Critics rating</b>:  ${rate_critics}/100</span> 
    <span> <b>Gamers rating</b> : ${user_critics}/10</span>
    <span> <b>Copies Sold</b>: ${copies}</span> 
    <span><b>Year</b>: ${y}</span>`;
    $('#m_data').append(output);
}

function addRelatedGames(videoGame, data){
    let list_ = videoGame['list_of_data'].related_games;
    console.log(list_)
    list_.forEach((element)=>{
        let gameT = data[element].title;
        console.log("Images " + data[element].image);
        console.log(gameT);
        let g_id = data[element].id;
        let list = `<div class="span_r d-inline-block"><a class="btn btn-outline-success" href="/view/${g_id}">${gameT}</a></div>`;
        $("#related").append(list);
    });

}

// function addEditBtn(){

//     $("#edit_btn").append(list);
// }




$(document).ready(function(){
  addGameTitle(videoGame);
  addGameMedia(videoGame);
  addSummary(videoGame);
  addMetaData(videoGame);
  addRelatedGames(videoGame, data);
//   addEditBtn();
})