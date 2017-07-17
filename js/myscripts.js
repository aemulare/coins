
$(document).ready(function(){
    $(".card-grid").flip({
        trigger: 'hover'
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var theTotal = 0;
    $("button").click(function(){
        theTotal = Number(theTotal) + Number($(this).val());
        $("#total").text(numberWithCommas(theTotal.toFixed(2)));
    });

});








