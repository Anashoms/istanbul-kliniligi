$(document).ready(function () {
  $(".custom-validation").parsley();
}),
  (function () {
    "use strict";
    var t = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(t).forEach(function (a) {
      a.addEventListener(
        "submit",
        function (t) {
          a.checkValidity() || (t.preventDefault(), t.stopPropagation()),
            a.classList.add("was-validated");
        },
        !1
      );
    });
  })();
