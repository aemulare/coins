
$(document).ready(function(){
    $(".card-grid").flip({
        trigger: 'hover'
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var theTotal = 0;
    var coinQuantity = 0;
    var idClicked, currentPrice, parentCard, coinName, parentCardId, btnIndex;
    var itemQuantities = new Array(1000).fill(0);

    $("button").click(function(e){
        idClicked = this.id;
        coinPrice = this.value;

        btnIndex = Number(idClicked.substring(4));
        coinQuantity = itemQuantities[btnIndex];


        parentCard = $(this).parents().eq(2);
        // alert(parentCard.prop("tagName") + " class: " + parentCard.prop("className") + ", id = " + parentCard.prop("id"));

        parentCardId = "#" + parentCard.prop("id");

        coinName = $(parentCardId).find("span").eq(0).text();
        coinDescription = $(parentCardId).find("span").eq(1).text();
        coinImg = $(parentCardId).find("img").eq(0).attr("src");


        if (coinQuantity === 0) {
            itemQuantities[btnIndex] += 1;
            $(".dropdown-content").append("<li><table><tr>" +
                "<td><img class='coin' src='" + coinImg + "'></td>" +
                "<td>" + coinName + "</td>" +
                "<td id='"+btnIndex+"'>" + itemQuantities[btnIndex] + "x</td>" +
                "<td>$" + numberWithCommas(coinPrice) + "</td>" +
                "</tr></table></li>");
        }
        else {
                itemQuantities[btnIndex] += 1;
                sel = "#" + btnIndex;
                $(sel).text(itemQuantities[btnIndex] + "x");
        }


        // alert("You clicked button: " + idClicked + ", item price = " + coinPrice);

        theTotal = Number(theTotal) + Number($(this).val());
        $("#total").text(numberWithCommas(theTotal.toFixed(2)));

        var msg = "1 item has been added to your cart:\n\t" + coinName + "\n\t" + coinDescription + "\n\t$" + numberWithCommas(coinPrice);
        alert(msg);
        e.preventDefault();

    }); // end click function


}); // end ready function











