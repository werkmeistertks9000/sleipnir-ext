(function () {
  var d = document.createElement("div");
  d.textContent = "Loader OK: " + location.hostname;
  d.style.cssText = "position:fixed;left:0;top:0;z-index:2147483647;background:#080;color:#fff;font-size:13px;padding:6px;";
  document.body.appendChild(d);
  setTimeout(function () { d.parentNode && d.parentNode.removeChild(d); }, 5000);
})();
