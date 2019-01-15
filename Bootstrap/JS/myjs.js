$(document).ready(function () {
    //alert("entre");

    // $.getJSON("../Bootstrap/data/participantes.json"), function(index, data) {
    //     console.table(data);

    // }
  
    var p="";
    $.ajax({
        url: "../Bootstrap/data/participantes.json"
    }).then(function (data) {
        participantes = data;
        $.each(data, function (key, value) {
            //console.log(key);
           

            p +=
                "<div class='col-md-3'>" +
                "<div class='text-center border rounded shadow p-3 mb-5 bg-white'>" +
                "<img src='../Bootstrap/images/participantes/user.png' alt='' class='img-fluid imgParticipante'>" +
                "<p>" + value.nombre + "</p>" +
                "<h5 class='text-uppercase'>"+value.apellidos+"</h5></div></div>";
              
        });

        // alert(data.length);
        $('#participantesDIV').html(p);
    });

    
   

});