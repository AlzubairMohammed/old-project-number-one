$(document).ready(
    () => {
        // home page code
        $(".nav>li").on("click", function () {
            $(".nav-item>.active").removeClass("active");
            $(this).addClass(".active");
        })
        $(".nav>li>a").on("click", function () {
            $(".tab-pane").removeClass("active");
            Ac = $(this).attr("href");
            $(Ac).addClass("active");

        })
        // fourm page code
        counter = 0;
        $(".list-group-item button").on("click", function () {
            if ($("#exampleFormControlInput1").val() != "" && $("#exampleFormControlTextarea1").val() != "") {
                U_name = $("#exampleFormControlInput1").val();
                $("#exampleFormControlInput1").val("");
                U_comment = $("#exampleFormControlTextarea1").val();
                $("#exampleFormControlTextarea1").val("");
                $("#L-group1").append('<li class="list-group-item"><div class="media"><div class="media-body"><h5 class="mt-0 mb-1">' + U_name + '</h5>' + U_comment + '</div><img class="ml-3" src="./images/person.svg" alt="Generic placeholder image"> </div></li>');
                counter++;
            }
            if (counter >= 2) {
                $(".list-group-item").eq("0").remove();
            }
        })
        // contact page code
        $("#C_form_btn").on("click", () => {
            $(".form-D").animate({
                "margin-left": "0",
                "margin-top": "0",
                "opacity": "0",
            }, 2000)
            setTimeout(() => {
                $("#msg").animate({
                    "margin-left": "40%",
                    "margin-top": "300px",
                    "opacity": "1",
                }, 2000)

            }, 2500);
            setTimeout(() => {
                $("#msg").animate({
                    "margin-left": "0",
                    "margin-top": "0",
                    "opacity": "0",
                }, 2000)
                setTimeout(() => {
                    $(".form-D").animate({
                        "margin-left": "25%",
                        "margin-top": "100px",
                        "opacity": "1",
                    }, 2000)
                }, 2200);
            }, 5000);
        })
        // Store page code
        $("#A_tab").on("click",() => {
            $(".tab-pane").addClass("active");
        })
        $(".A_btn1").on("click",() => {
            $(".tab-pane").removeClass("active");
            $("#lowerclass").addClass("active");
        })
        $(".A_btn2").on("click",() => {
            $(".tab-pane").removeClass("active");
            $("#middleclass").addClass("active");
        })
        $(".A_btn3").on("click",() => {
            $(".tab-pane").removeClass("active");
            $("#upperclass").addClass("active");
        })
        x=0;
        $(".card-body>a").on("click",()=>{
            $("#cart_btn").html(x++);
            v =  $(this).val();
            console.log(v)
        })
        
        

    }
)

