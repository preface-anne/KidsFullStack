window.addEventListener("scroll", function() {

  var distance = window.scrollY;

  document.querySelector("#background").style.transform = `translateY(${distance * 1.5}px)`;
  document.querySelector("#bigCloud").style.transform = `translateY(${distance * 1.1}px)`;
  document.querySelector("#smallCloud").style.transform = `translateY(${distance * 1.2}px)`;
  document.querySelector("#para1").style.transform = `translateY(${distance * 0.1}px)`;
  document.querySelector("#row1").style.transform = `translateY(${distance * 0.3}px)`;
  document.querySelector("#row2").style.transform = `translateY(${distance * 0.2}px)`;

});