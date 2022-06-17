//report form
var td = document.getElementsByClassName("more");
var cancel = document.getElementById("cancelbtn");
var closebtn = document.getElementsByClassName("closebtn");
var report = document.getElementById("reportfrm");
var share = document.getElementById("sharefrm");
var sharebtn = document.getElementsByClassName("btn share");
var j = 0;
var k = 0;
var gval = "share";
function ShowReportfrm(id, cat) {
  gamename = id;
  category = cat;
  if ((report.style.display = "none")) {
    report.style.display = "block";
    j = 1;
  }
  document.getElementById("repname").value = gamename;
  document.getElementById("repname2").value = category;
}
function HideReportfrm() {
  if (j !== 1) {
    if ((report.style.display = "block")) {
      report.style.display = "none";
    }
  }
  j = 0;
}
cancel.addEventListener("click", function (event) {
  event.preventDefault();
});

function ShowSharefrm(value) {
  gval = value;
  let whatsappshare = document.getElementById("whatsappshare");
  let telegramshare = document.getElementById("telegramshare");
  let facebookshare = document.getElementById("facebookshare");

  whatsappshare.href = "whatsapp://send?text=" + value;

  telegramshare.href = "https://t.me/share/url?url=" + value + "&text=gimizo";

  facebookshare.href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    value +
    "&amp;src=sdkpreparse";

  if ((share.style.display = "none")) {
    share.style.display = "block";
    shareval = document.getElementById("shareval");
    shareval.value = gval;
    k = 1;
  }
  // document.getElementById('repname').value=gamename;
  // document.getElementById('repname2').value=category;
}
function HideSharefrm() {
  if (k !== 1) {
    if ((share.style.display = "block")) {
      share.style.display = "none";
    }
  }
  k = 0;
}
function clipboard() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  shareval = document.getElementById("shareval");
  shareval.value = gval;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
function copyToClipboard() {
  document.getElementById("shareval").id = gval;
  var copyText = document.getElementById(gval);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById(gval).id = "shareval";
}

