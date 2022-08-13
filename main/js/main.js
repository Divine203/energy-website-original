function incAndDecAction() {
  /* const inc_and_dec = document.querySelectorAll(".product-qty-count");

  if (inc_and_dec.length) {*/
  let addProduct = document.querySelectorAll(".--plus");
  for (let i = 0; i < addProduct.length; i++) {
    addProduct[i].addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-ref");
      document.getElementById("qty-" + id).value =
        parseInt(document.getElementById("qty-" + id).value) + 1;
      document.querySelector("#val-" + id + " .--value").innerText = parseInt(
        document.getElementById("qty-" + id).value
      );
    });
  }

  let minusProduct = document.querySelectorAll(".--minus");
  for (let i = 0; i < minusProduct.length; i++) {
    minusProduct[i].addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-ref");
      if (document.getElementById("qty-" + id).value > 1) {
        document.getElementById("qty-" + id).value =
          parseInt(document.getElementById("cat-" + id).value) - 1;
        document.querySelector("#val-" + id + " .--value").innerText = parseInt(
          document.getElementById("qty-" + id).value
        );
      }
    });
  }
  //}
}

function calCategoryStatus() {
  /*let closeElem = document.querySelectorAll(".--remove");
  for (let i = 0; i < closeElem.length; i++) {
    closeElem[i].addEventListener("click", function (event) {
      let parentNode = hasSomeParentTheClass(event.target, "active");
      parentNode.classList.toggle("active");
    });
  }*/

  toggleActiveOnParent(".--remove", "active");
  toggleActiveOnParent(".--inactive", "--category-radio-cont");
  /*
  let addElem = document.querySelectorAll(".--inactive");
  for (let i = 0; i < addElem.length; i++) {
    addElem[i].addEventListener("click", function (event) {
      let parentNode = hasSomeParentTheClass(
        event.target,
        "--category-radio-cont"
      );
      parentNode.classList.toggle("active");
    });
  }*/
}

function hideDate() {
  $(document).on("click", function (e) {
    var container = $(
      "#date_main-placeholder, .drinksparty-invoice__date_placeholder"
    );
    if (!$(e.target).closest(container).length) {
      $("#date_main-placeholder").removeClass("show-date");
      $("#date_main-placeholder").addClass("d-none hide-date");
    }
  });
}

function showDate() {
  $(".drinksparty-invoice__date_placeholder").on("click", function (event) {
    event.preventDefault();
    if ($("#date_main-placeholder.d-none").length) {
      $("#date_main-placeholder").removeClass("d-none hide-date");
      $("#date_main-placeholder").addClass("show-date");
    }
  });
}

/*function hideDate() {
  document.addEventListener("click", (evt) => {
    const flyoutEl = document.getElementById("date_main-placeholder");
    let targetEl = evt.target; // clicked element
    do {
      if (targetEl == flyoutEl) {
        flyoutEl.classList.toggle("active")
      }
      // Go up the DOM
      targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.
    flyoutEl.classList.toggle("active")
  });
}*/

function calOtherServiceStatus() {
  toggleActiveOnParent(
    ".more-event-service-modal__check",
    "more-event-service-modal__item"
  );
}

function toggleActiveOnParent(elem_class, elem_parent) {
  let elem = document.querySelectorAll(elem_class);

  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (event) {
      let parentNode = hasSomeParentTheClass(event.target, elem_parent);
      parentNode.classList.toggle("active");
    });
  }
}

function hasSomeParentTheClass(element, classname) {
  if (element.className.split(" ").indexOf(classname) >= 0) return element;
  return (
    element.parentNode && hasSomeParentTheClass(element.parentNode, classname)
  );
}

function initMain() {
  window.addEventListener("DOMContentLoaded", (event) => {
    incAndDecAction();
    calCategoryStatus();
    calOtherServiceStatus();

    hideDate();
    showDate();
  });
}

initMain();
