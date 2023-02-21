$(document).ready(function(){
    $(".locations-link").click(function(){
        $(".dropdown-filter").toggleClass("active");
        $(".dropdown-list").addClass("active");
    });

   $(".countries ul #option_second").click(function(){
        $(".countries ul #option_second").addClass("active");
        $(".countries ul #selected_by_default").removeClass("active");
        $(".countries ul #option_third").removeClass("active");
        $(".towns__lithuania").css("display", "none");
        $(".towns__latvija").css("display", "block");
        $(".towns__uzsienis").css("display", "none");
    })


    $(".countries ul #option_third").click(function(){
        $(".countries ul #option_third").addClass("active");
        $(".countries ul #selected_by_default").removeClass("active");
        $(".countries ul #option_second").removeClass("active");
        $(".towns__lithuania").css("display", "none");
        $(".towns__latvija").css("display", "none");
        $(".towns__uzsienis").css("display", "block");
    })

    $(".countries ul #selected_by_default").click(function(){
        $(".countries ul #option_third").removeClass("active");
        $(".countries ul #selected_by_default").addClass("active");
        $(".countries ul #option_second").removeClass("active");
        $(".towns__lithuania").css("display", "block");
        $(".towns__latvija").css("display", "none");
        $(".towns__uzsienis").css("display", "none");
    })


    // $(".navbar-toggler").click(function(){
    //     $("#searchform").css("display", "none");
    //     $("#searchform").addClass("unactive");
    // })
    // $(".btn-close").click(function(){
    //     $("#searchform").css("display", "block");
    //    console.log("gkajsgksadgsad");
    // })



});


    
//  $(document).ready(function(){
//     if($('#searchform').css('display') == 'none')
//         {
//             $(".offcanvas").click(function(){
//                $("#searchform").css("display", "block");
//             })
//       console.log("gkajsgksadgsad");
//        }
// });
    
$(document).ready(function(){
    $(".accomodation-link").click(function(){
        $(".dropdown-list").toggleClass("active");
        $(".dropdown-filter").addClass("active");
    });
});
