<script>
var isCounting = false;

function startCountdown(downloadLink) {
  if (isCounting) {
    return;
  }

  var count = 60;
  var downloadButton = document.getElementById("downloadButton");
  var timer = document.getElementById("timer");

  var countdown = setInterval(function() {
    downloadButton.innerHTML = (count === 0) ? '<a id="downloadLink" href="' + downloadLink + '">Link tải</a>' : count + " giây";
    count--;
    if (count < 0) {
      clearInterval(countdown);
      document.getElementById("thankYouMessage").style.display = "block";
      downloadButton.style.display = "none";
      isCounting = false;
    }
  }, 1000);

  isCounting = true;

  downloadButton.classList.add("active");
  timer.classList.add("active");
}

function checkReferrer(downloadLink) {
  var referrer = document.referrer.toLowerCase();
  var downloadButton = document.getElementById("downloadButton");
  var googleAccessMessage = document.getElementById("googleAccessMessage");

  if (referrer.includes("google")) {
    downloadButton.style.display = "block";
    downloadButton.addEventListener("click", function() {
      startCountdown(downloadLink);
      downloadButton.textContent = "Lấy mã";
      downloadButton.style.borderColor = "#0000ff";
    });
  } else {
    googleAccessMessage.style.display = "block";
    googleAccessMessage.innerHTML = 'Bạn phải truy cập từ <a href="https://www.google.com">Google</a> để tiếp tục!';
  }
}
</script>
<div>
  <div id="googleAccessMessage" style="display: none;"></div>

  <button id="downloadButton" style="display: none;">Lấy mã</button>

  <div id="thankYouMessage" style="display: none;">
    Cảm ơn bạn đã chờ đợi. Dưới đây là link tải xuống: <span id="downloadLink"></span>
  </div>

  <div id="timer"></div>
</div>
<script>
var shortcodeElement = document.currentScript.previousElementSibling;
var downloadLink = shortcodeElement.getAttribute("download_link");
checkReferrer(downloadLink);
document.getElementById("downloadLink").innerHTML = '<a href="' + downloadLink + '">Link tải xuống</a>';
</script>
