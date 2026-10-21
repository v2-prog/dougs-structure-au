(function () {
  "use strict";
  // Home page: open / close every age card
  var openAll = document.getElementById("open-all");
  var closeAll = document.getElementById("close-all");
  function setAll(o) {
    document.querySelectorAll("details").forEach(function (d) { d.open = o; });
  }
  if (openAll) openAll.addEventListener("click", function () { setAll(true); });
  if (closeAll) closeAll.addEventListener("click", function () { setAll(false); });

})();
