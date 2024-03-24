
function prePopulate(){
    $("#game_Name").val(videoGame['title']);
    $("#v_id").val(videoGame['Trailer']['videoId']);
    $("#si_val").val(videoGame['Trailer']['si']);
    $("#game_summary").val(videoGame['summary']);
    $("#year").val(videoGame['year']);
    $("#copies").val(videoGame['list_of_data']['total_copies_sold']);
    $("#c_rating").val(videoGame['list_of_data']['metacritic_rating']['critics']);
    $("#u_rating").val(videoGame['list_of_data']['metacritic_rating']['users']);
    $("#related_g").val(videoGame['list_of_data']['related_games']);
    $("#img_path option").each(function() {
        if ($(this).val() === videoGame['image']) {
            $(this).prop('selected', true);
        } else {
            $(this).prop('selected', false);
        }
    });
    console.log($("#img_path").val());
}


function addingData(list_item) {

    let count_1 = checkEmptyVal(list_item);
    let count_2 = checkNumberVal(list_item);
    console.log("List = ", list_item);
    console.log("Count 1 = ", count_1);
    console.log("Count 2 = ", count_2);
    if (count_1 === 5 && count_2 === 5) {
     $.ajax({
         type: "POST",
         url: "/edit_data",                
         dataType : "json",
         contentType: "application/json; charset=utf-8",
         data : JSON.stringify(list_item),
        //  success: function(result){
        //  },
        //  error: function(request, status, error){
        //      console.log("Error");
        //      console.log(request)
        //      console.log(status)
        //      console.log(error)
        //  }
     });
    }
 
 }
 
 function checkEmptyVal(list_item){
     let count2 = 0;
     let game_Name = $("#game_Name").val().trim();
     let v_id = $("#v_id").val().trim();
     let si_val = $("#si_val").val().trim();
     let game_summary = $("#game_summary").val().trim();
     let img_path = $("#img_path").val().trim();
 
     if(img_path === ""){
         $("#img_p").text("Cannot be empty");
         $("#img_p").addClass("warning");
         $("#img_path").focus();
     }
     else{
         $("#img_p").text("");
         count2++;
         // list_item['image'] = img_path;
     }
 
     if(game_summary===""){
         $("#g_s").text("Cannot be empty");
         $("#g_s").addClass("warning");
         $("#game_summary").focus();
     }
     else{
         $("#g_s").text("");
         count2++;
         // list_item['summary'] = game_summary;
     }
 
     if(si_val === ""){
         $("#s_").text("Cannot be empty");
         $("#s_").addClass("warning");
         $("#s_val").focus();
     }
     else{
         $("#s_").text("");
         count2++;
         // list_item['Trailer']['si'] = si_val;
     }
     if (v_id === ""){
         $("#v_").text("Cannot be empty");
         $("#v_").addClass("warning");
         $("#v_id").focus();
     }
     else{
         $("#v_").text("");
         count2++;
         // list_item['Trailer']['videoId'] = v_id;
     }
 
     if(game_Name === ""){
         $("#g_n").text("Cannot be empty");
         $("#g_n").addClass("warning");
         $("#game_Name").focus();
     }
     else{
         $("#g_n").text("");
         count2++;
         // list_item['title'] = game_Name;
     }
     return count2;
 
 }
 
 function checkNumberVal(list_item){
     let count = 0;
     let year = $("#year").val().trim();
     let copies = $("#copies").val().trim();
     let c_rating = $("#c_rating").val().trim();
     let u_rating = $("#u_rating").val().trim();
     let related_g = $("#related_g").val().trim();
 
     if(year === ""){
         $("#y_").text("Cannot be empty");
         $("#y_").addClass("warning");
         $("#year").focus();
     }
     else{
         if(isNaN(year)){
             $("#y_").text("Invalid Year value");
             $("#y_").addClass("warning");
             $("#year").focus();
         }
         else{
             $("#y_").text("");
             count++;
             // list_item['year'] = year;
         }
     }
     if (copies === ""){
         $("#cop_").text("Cannot be empty");
         $("#cop_").addClass("warning");
         $("#copies").focus();
     }
     else{
         if(isNaN(copies)){
             $("#cop_").text("Invalid # of Copies ");
             $("#cop_").addClass("warning");
             $("#copies").focus();
         }
         else if(copies < 0){
             $("#cop_").text("Number of Copies cannot be negative");
             $("#cop_").addClass("warning");
             $("#copies").focus();
         }
         else{
             $("#cop_").text("");
             count++;
             //list_item['list_of_data']['total_copies_sold'] = copies;
         }
     }
     if (c_rating === ""){
         $("#cr_").text("Cannot be empty");
         $("#cr_").addClass("warning");
         $("#c_rating").focus();
     }
     else{
         if(isNaN(c_rating)){
             $("#cr_").text("Invalid critics rating Number");
             $("#cr_").addClass("warning");
             $("#c_rating").focus();
         }
         else if(c_rating < 0 || c_rating > 100){
             $("#cr_").text("Value needs to be between 0 and 100");
             $("#cr_").addClass("warning");
             $("#c_rating").focus();
         }
         else{
             $("#cr_").text("");
             count++;
             //list_item['list_of_data']['metacritic_rating']['critics'] = c_rating;
         }
 
     }
     if (u_rating === ""){
         $("#ur_").text("Cannot be empty");
         $("#ur_").addClass("warning");
         $("#u_rating").focus();
     }
     else{
         if(isNaN(u_rating)){
             $("#ur_").text("Invalid user rating Number");
             $("#ur_").addClass("warning");
             $("#u_rating").focus();
         }
         else if(u_rating < 0 || u_rating > 10){
             $("#ur_").text("Value needs to be between 0 and 10");
             $("#ur_").addClass("warning");
             $("#u_rating").focus();
         }
         else{
             $("#ur_").text("");
             count++;
             //list_item['list_of_data']['metacritic_rating']['users'] = u_rating;
         }
     }
     if (related_g === ""){
         $("#rg_").text("Cannot be empty");
         $("#rg_").addClass("warning");
         $("#related_g").focus();
     }
     else{
 
         let numberStrings = related_g.split(/[,\s]+/);
         let allValid = true;

         // Iterate over each substring
         for (let i = 0; i < numberStrings.length; i++) {
             // Convert the substring to a number
             let number = parseFloat(numberStrings[i]);
         
             // Check if the conversion was successful and the result is a number
             if (!isNaN(number) &&  (number > 0 && number <= current_index) ) {
                 list_item['list_of_data']['related_games'].push(numberStrings[i]);
             } else {
                 allValid = false;
                 $("#rg_").text(`List of values needs to be between 0 and ${current_index}`);
                 $("#rg_").addClass("warning");
                 $("#related_g").focus();
              
             }
         }
         console.log("checking ", list_item['list_of_data']['related_games']);
         if(allValid) {
             count++;
             $("#rg_").text("");
         }
     }   
     return count;
 }



$(document).ready(function(){
    prePopulate();
    $("#submit_edit_btn").click(function(){
        let game_Name = $("#game_Name").val().trim();
        let v_id = $("#v_id").val().trim();
        let si_val = $("#si_val").val().trim();
        let game_summary = $("#game_summary").val().trim();
        let img_path = $("#img_path").val().trim();
        let year_ = $("#year").val().trim();
        let copies = $("#copies").val().trim();
        let c_rating = $("#c_rating").val().trim();
        let u_rating = $("#u_rating").val().trim();
        let related_g = $("#related_g").val().trim();
        let g_id = videoGame['id'];
        let list_item = {
            id: g_id,
            title: game_Name ,
            Trailer: {
                videoId: v_id ,
                si: si_val
            },
            summary: game_summary,
            year: year_,
            list_of_data: {
                total_copies_sold: copies ,
                metacritic_rating: {critics: c_rating , users: u_rating },
                related_games: []
            },
            image: img_path,
    
        };
        addingData(list_item);
        window.location.href = "/view/" + videoGame['id'];
    });

    $("#discard_btn").click(function(){
        let confirm = window.confirm("Are you sure you want to discard?");
        if (confirm) {
            window.location.href = "/view/" + videoGame['id'];
        }
    });

})