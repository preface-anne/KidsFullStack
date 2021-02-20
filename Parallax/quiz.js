window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  document.querySelector("#background").style.transform = `translateY(${distance * 1.5}px)`;
  document.querySelector("#para1").style.transform = `translateY(${distance * 0.1}px)`;
  setTimeout(() => {
  	document.querySelector("#dragon").classList.add("animate-me");
  	document.querySelector("#cloud1").classList.add("animate-me2");
  	document.querySelector("#cloud2").classList.add("animate-me3");
  	document.querySelector("#cloud3").classList.add("animate-me4");
  }, 80);
});