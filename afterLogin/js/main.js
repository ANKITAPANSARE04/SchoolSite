// edit page code
var loadFile = function (event) {
  var output = document.getElementById("output");
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};
//
//  for dropdown
$(document).ready(function () {
  $(".radios").click(function () {
    $(this).siblings().show();
  });
  $(".radios").change(function () {
    $("details ul").hide();
  });
});

// code for togger used in sidebar
// attendance dropdown
$("#attendance-togg-icon").click(function () {
  $("#attendance-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#attendance-togg-icon .float-end").toggleClass("down");
  $("#exm-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#fin-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#cmun-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#inv-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#sett-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#exm-dd").hide();
  $("#cmun-dd").hide();
  $("#fin-dd").hide();
  $("#inv-dd").hide();
  $("#sett-dd").hide();
});
// exm dropdown
$("#exm-togg-icon").click(function () {
  $("#exm-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#exm-togg-icon .float-end").toggleClass("down");
  $("#attendance-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#fin-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#cmun-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#inv-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#sett-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#attendance-dd").hide();
  $("#cmun-dd").hide();
  $("#fin-dd").hide();
  $("#inv-dd").hide();
  $("#sett-dd").hide();
});
// cmun dropdown
$("#cmun-togg-icon").click(function () {
  $("#cmun-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#cmun-togg-icon .rotate").toggleClass("down");
  $("#attendance-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#fin-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#exm-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#inv-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#sett-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#attendance-dd").hide();
  $("#exm-dd").hide();
  $("#fin-dd").hide();
  $("#inv-dd").hide();
  $("#sett-dd").hide();
});
// finance dropdown
$("#fin-togg-icon").click(function () {
  $("#fin-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#fin-togg-icon .rotate").toggleClass("down");
  $("#attendance-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#cmun-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#exm-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#inv-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#sett-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#attendance-dd").hide();
  $("#exm-dd").hide();
  $("#cmun-dd").hide();
  $("#inv-dd").hide();
  $("#sett-dd").hide();
});
// inv dropdown
$("#inv-togg-icon").click(function () {
  $("#inv-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#inv-togg-icon .rotate").toggleClass("down");
  $("#attendance-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#cmun-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#exm-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#fin-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#sett-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#attendance-dd").hide();
  $("#exm-dd").hide();
  $("#cmun-dd").hide();
  $("#fin-dd").hide();
  $("#sett-dd").hide();
});
// sett dropdown
$("#sett-togg-icon").click(function () {
  $("#sett-dd").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  // $('.nav__cont').scrollTop($('.nav__cont').height());
  $("#sett-togg-icon .rotate").toggleClass("down");
  $("#attendance-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#cmun-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#exm-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#fin-togg-icon .float-end").addClass("rotate").removeClass("down");
  $("#inv-togg-icon .float-end").addClass("rotate").removeClass("down");

  $("#attendance-dd").hide();
  $("#exm-dd").hide();
  $("#cmun-dd").hide();
  $("#fin-dd").hide();
  $("#inv-dd").hide();
});
// notification  div
$(".notification").click(function () {
  $("#notification-div").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });
  $("#u-info-div").hide();
});
// notification  div
$("#top-nav-admin-avatar").click(function () {
  $("#u-info-div").toggle(function () {
    $("#panel").animate(
      {
        height: "150",
        padding: "20px 0",
        backgroundColor: "#000000",
        opacity: 0.8,
      },
      500
    );
  });

  $("#notification-div").hide();
});
