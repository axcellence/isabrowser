const linkForFavicon = document.querySelector(`head > link[rel='icon']`);

function faviconTemplate(string, icon) {
  return `
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${icon}
      </text>
    </svg>
  `.trim();
}

function setIcon(icon) {
  newFavicon = faviconTemplate`${icon}`;
  linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${newFavicon}`);
}

function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var message = document.getElementById("message");

  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    message.innerHTML =
      "You're not using a web browser but a <a href='https://www.theverge.com/2019/2/8/18216767/microsoft-internet-explorer-warning-compatibility-solution'>compatiblity solution</a> 🛠";
    setIcon("🛠");
  } else {
    message.innerHTML = "Congrats you're using a web browser 🎉";
    setIcon("🎉");
  }

  return false;
}
document.addEventListener("DOMContentLoaded", msieversion);
