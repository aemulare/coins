
$(document).ready(function(){
    $(".card-grid").flip({
        trigger: 'hover'
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var theTotal = 0;
    var idClicked, currentPrice, parentCard, coinName, parentCardId;

    $("button").click(function(e){
        idClicked = this.id;
        coinPrice = this.value;

        parentCard = $(this).parents().eq(2);
        // alert(parentCard.prop("tagName") + " class: " + parentCard.prop("className") + ", id = " + parentCard.prop("id"));

        parentCardId = "#" + parentCard.prop("id");

        coinName = $(parentCardId).find("span").eq(0).text();
        coinDescription = $(parentCardId).find("span").eq(1).text();
        coinImg = $(parentCardId).find("img").eq(0).attr("src");


        $(".dropdown-content").append("<li class='clearfix'>" +
            "<img src='" + coinImg + "'/>" +
            "<span class='item-name'>"+ coinName + "</span>" +
            "<span class='item-quantity'>1x&nbsp;</span>" +
            "<span class='item-price'>" + coinPrice + "</span>" +
        "</li>");

        // alert("You clicked button: " + idClicked + ", item price = " + coinPrice);

        theTotal = Number(theTotal) + Number($(this).val());
        $("#total").text(numberWithCommas(theTotal.toFixed(2)));

    }); // end click function

}); // end ready function








