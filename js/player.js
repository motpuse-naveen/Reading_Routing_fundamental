
var MyView = function () {

	var activeStatus = "review";

	function init() {
		addListners();
	} 

	function addListners() {

		$(".nav_items li").off("click keyup").on("click keyup", onClickForReviewListItem);
		$(".header_tab li").off("click keyup").on("click keyup", onTab);
		$(".jump_to").off("click keyup").on("click keyup", onJumpTo);
		$(".close_img,.jump_to_nav_mobile ul li").on("click keyup",closeRightNav);
		svgMouseHover();
		mobileScroll();

	}
	   function mobileScroll() {	
        if ($(window).width() < 769) {	
            $(".right_container div").removeClass("hide");	
            $(".right_container div").removeClass("router_area");	
             $("#imp_professional_learning,#imp_general_Resources,#imp_Distance_Learning_Resources,#imp_grade_1,#imp_grade_2,#imp_grade_3,#imp_grade_4,#imp_grade_5,#imp_author_videos,#imp_kindergarten").addClass("hide");	
        }	
    }
	function closeRightNav(){
		$(".jump_to_nav_mobile").removeClass("nav_show");
    	$(".jump_to_nav_mobile").addClass("hide");
    	$(".overlay_bg").css("display","none");
    }

	function svgMouseHover(){
	    $(".module_list_inner li,.inner_text,.link_text,.GK_list li").hover(function(){
	    $(this).find("svg path").attr("fill", "#2150a3");
	    }, function(){
	    $(this).find("svg path").attr("fill", "#000000");
       });
    }

	function onJumpTo(e) {

		if (e.type == "keyup" && e.keyCode != 13) {
			return true;
		}

		$(".overlay_bg").css("display","block");
		if (activeStatus == "review") {

			$(".review_rightnav").css({ "right": "0", "transition": "all .2s ease-in 0.5s" });
			$(".review_rightnav").addClass("nav_show");

			// $(".review_rightnav li:eq(0)").addClass("right_tab_active");

		} else if (activeStatus == "implementation") {

			$(".review_rightnav").addClass("hide");
			$(".imp_rightnav").css({ "right": "0", "transition": "1s" });
			$(".imp_rightnav").addClass("nav_show");
			// $(".imp_rightnav li:eq(0)").addClass("right_tab_active");

		}

	}

	function onTab(e) {

		if (e.type == "keyup" && e.keyCode != 13) {
			return true;
		}
        $(".jump_to_nav_mobile").removeClass("nav_show");
		$(".jump_to_nav_mobile").addClass("hide");
		

		var id = $(this).attr("id");
		console.log(" >>>>> id :: ", id);
		var dataId;
		$(".nav_items ul li").removeClass("left_tab_active");
		// if (id == "review") {
		// 	activeStatus = "review";
		// 	dataId = $(".review_left_container ul li:eq(0)").attr("data-id");
		// 	$(".for_implementation_element,.implementation_left_container").hide();
		// 	$(".review_left_container").show();
		// 	$(".router_area").hide();
		// 	$("#" + dataId).show();
		// 	$(".review_left_container ul li:eq(0)").addClass("left_tab_active");

		// } else {
		// 	activeStatus = "implementation";
		// 	dataId = $(".implementation_left_container ul li:eq(0)").attr("data-id");
		// 	console.log("dataId", dataId);
		// 	$(".for_review_element,.review_left_container").hide();
		// 	$(".implementation_left_container").show();
		// 	$(".router_area").hide();
		// 	$("#" + dataId).show();
		// 	$(".implementation_left_container ul li:eq(0)").addClass("left_tab_active");
		// }
         if ($(window).width() < 769) {
            $(".router_area").removeClass("hide");
           

            if (id == "review") {
                activeStatus = "review";
                $(".right_container div").removeClass("hide");
                $(".right_container div").removeClass("nav_show");

                $("#imp_professional_learning,#imp_general_Resources,#imp_Distance_Learning_Resources,#imp_grade_1,#imp_grade_2,#imp_grade_3,#imp_grade_4,#imp_grade_5,#imp_author_videos,#imp_kindergarten").addClass("hide");
                $("#my_review_content,#review_savvas_realize,#review_routines_foundational,#review_professional_learning,#review_Platform_LMS_Integration,#review_Distance_Learning_Resources,#review_grade_1,#review_grade_2,#review_grade_3,#review_grade_4,#review_grade_5,#review_more,#review_kindergarten").removeClass("hide");

                $("#my_review_content,#review_savvas_realize,#review_routines_foundational,#review_professional_learning,#review_Platform_LMS_Integration,#review_Distance_Learning_Resources,#review_grade_1,#review_grade_2,#review_grade_3,#review_grade_4,#review_grade_5,#review_more,#review_kindergarten").addClass("nav_show");

                $('.right_container').animate({
                    scrollTop: $("#my_review_content").offset().top=0
                }, );

            } else {
                activeStatus = "implementation";
                $(".right_container div").removeClass("hide");
                $(".right_container div").removeClass("nav_show");
                $("#my_review_content,#review_savvas_realize,#review_routines_foundational,#review_professional_learning,#review_Platform_LMS_Integration,#review_Distance_Learning_Resources,#review_grade_1,#review_grade_2,#review_grade_3,#review_grade_4,#review_grade_5,#review_more,#review_kindergarten").addClass("hide");
                 $("#imp_professional_learning,#imp_general_Resources,#imp_Distance_Learning_Resources,#imp_grade_1,#imp_grade_2,#imp_grade_3,#imp_grade_4,#imp_grade_5,#imp_author_videos,#imp_kindergarten").removeClass("hide");

                 $("#imp_professional_learning,#imp_general_Resources,#imp_Distance_Learning_Resources,#imp_grade_1,#imp_grade_2,#imp_grade_3,#imp_grade_4,#imp_grade_5,#imp_author_videos,#imp_kindergarten").addClass("nav_show");

                $('.right_container').animate({
                    scrollTop: $("#imp_kindergarten").offset().top =0
                }, );
            }

        } else {
          
            if (e.type == "keyup" && e.keyCode != 13) {
                return true;
            }

            $(".jump_to_nav_mobile").removeClass("nav_show");
            $(".jump_to_nav_mobile").addClass("hide");
            $(".nav_items ul li").removeClass("left_tab_active");
            if (id == "review") {
                activeStatus = "review";
                dataId = $(".review_left_container ul li:eq(0)").attr("data-id");
                $(".for_implementation_element,.implementation_left_container").hide();
                $(".review_left_container").show();
                $("#" + dataId).show();
                $(".review_left_container ul li:eq(0)").addClass("left_tab_active");

            } else {
                activeStatus = "implementation";
                dataId = $(".implementation_left_container ul li:eq(0)").attr("data-id");
                console.log("dataId", dataId);
                $(".for_review_element,.review_left_container").hide();
                $(".implementation_left_container").show();
                $("#" + dataId).show();
                $(".implementation_left_container ul li:eq(0)").addClass("left_tab_active");
            }
        }
		$(".header_tab li.tab_active").removeClass("tab_active");
		$(this).addClass("tab_active");
		$(".review_rightnav li").removeClass("right_tab_active");
		if (activeStatus == "review") {
            
			$(".review_rightnav li:eq(0)").addClass("right_tab_active");

		} else if (activeStatus == "implementation") {
			$(".imp_rightnav li:eq(0)").addClass("right_tab_active");

		}


	}


	function onClickForReviewListItem(e) {

		if (e.type == "keyup" && e.keyCode != 13) {
			return true;
		}
		$(".router_area").hide();
		var id = $(this).attr("data-id");
		console.log("id :: ", id);

       $("#" + id).animate({scrollTop:(0)});

		if ($(this).parent().hasClass("jump_to_nav_mobile_ul")) {
			// Mobile
			$(".nav_items li.right_tab_active").removeClass("right_tab_active");
			$("#" + id).show();
			$("#" + id).animate({scrollTop:(0)});
			$(this).addClass("right_tab_active");
		} else {
			$(".nav_items li.left_tab_active").removeClass("left_tab_active");
			$("#" + id).show();
			$(this).addClass("left_tab_active");
		}





	}

	return {
		init: init

	}

}


$(document).ready(function () {
	var myViewObj = new MyView();
	myViewObj.init();

});