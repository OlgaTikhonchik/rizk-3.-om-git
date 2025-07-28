$(".js-button-expander--faq").click(function () {
  const expandParent = $(this).closest(".faq__item");
  const expandTarget = expandParent.find(".js-expand-content--faq");

  if (expandTarget.hasClass("expanded")) {
    expandTarget.slideUp().removeClass("expanded");
    $(this).removeClass("active");
  } else {
    expandTarget.slideDown().addClass("expanded");
    $(this).addClass("active");
  }
});


$(".js-button-expander--menu").on("mouseenter", function () {
  const expandParent = $(this).closest("li");
  const expandTarget = expandParent.find(".js-expand-content--menu");

  
  $(".js-expand-content--menu").not(expandTarget).stop(true, true).slideUp().removeClass("expanded");
  $(".js-button-expander--menu").not(this).removeClass("active");

  if (!expandTarget.hasClass("expanded")) {
    expandTarget.stop(true, true).slideDown().addClass("expanded");
    $(this).addClass("active");
  }
});


$(".js-expand-content--menu, .js-button-expander--menu").on("mouseleave", function () {
  setTimeout(() => {
    
    if (
      !$(".js-expand-content--menu:hover").length &&
      !$(".js-button-expander--menu:hover").length
    ) {
      $(".js-expand-content--menu").stop(true, true).slideUp().removeClass("expanded");
      $(".js-button-expander--menu").removeClass("active");
    }
  }, 200); 
});
