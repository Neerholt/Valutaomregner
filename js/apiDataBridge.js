$(".guiDrop").change(function (){
   idk();
})

$("#userin").keyup(function (){
    idk();
})

function idk(){
    let dropDownValueOne = $("#dropDownOne").val();
    let dropDownValueTwo = $("#dropDownTwo").val();
    let userInput = $("#userin").val();
    $.ajax({
        type: "POST",
        url: "PHP/curl_fetch_api_data.php",
        success: function(result){
            $json = JSON.parse(result)
            let resultS = (userInput * $json.rates[dropDownValueTwo]) / $json.rates[dropDownValueOne];
            document.getElementById("resultIn").value = resultS;

            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("lastsearch", resultS);
                document.getElementById("his").innerHTML = localStorage.getItem("lastsearch");
            } else {
                document.getElementById("result").innerHTML = "Bad browser";
            }


        }
    });
}

