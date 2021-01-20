$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "PHP/curl_fetch_api_data.php",
        success: function(result){
            $json = JSON.parse(result)
            let select = document.getElementById("dropDownOne");
            let select2 = document.getElementById("dropDownTwo");
            for (x in $json.rates) {
                var optn = x;
                var el = document.createElement("option");
                var el2 = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                el2.textContent = optn;
                el2.value = optn;
                select.appendChild(el);
                select2.appendChild(el2);
            }
        }
    });
});