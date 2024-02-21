export function floorplanTab() {

  document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.querySelectorAll(".floorplan__tab-link");
    tablinks.forEach(function (tablink) {
      tablink.addEventListener("click", function () {
        openTab(this.getAttribute("data-tab"));
      });
    });

    openTab(tablinks[0].getAttribute("data-tab"));
  });

  function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("floorplan__tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".floorplan__tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "flex";
    document
      .querySelector('[data-tab="' + tabName + '"]')
      .classList.add("active");
  }

}
