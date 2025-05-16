document.querySelector(".scroll-btn").addEventListener("click", () => {
  const targetSection = document.getElementById("down");
  const images = document.querySelectorAll(".parent img");

  let loadedCount = 0;

  if (images.length === 0) {
    // No images? Scroll immediately
    smoothScrollTo(targetSection);
    return;
  }

  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", checkAllLoaded);
      img.addEventListener("error", checkAllLoaded);
    }
  });

  // In case all images are already cached/loaded
  if (loadedCount === images.length) {
    smoothScrollTo(targetSection);
  }

  function checkAllLoaded() {
    loadedCount++;
    if (loadedCount === images.length) {
      smoothScrollTo(targetSection);
    }
  }
});

function smoothScrollTo(element) {
  console.log("🌈 All images ready! Initiating scroll...");
  element.scrollIntoView({
    behavior: "smooth"
  });
}
