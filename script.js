/* RVizSplat project page — minimal interactivity */

// 1) Copy-to-clipboard for the BibTeX block
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const target = document.getElementById(btn.dataset.copy);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const original = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1600);
    } catch (e) {
      console.warn("Clipboard write failed", e);
    }
  });
});

// 2) Hide the in-frame placeholder once a video has loaded data
//    (so users see the real video as soon as they drop one in,
//     and the helpful "drop video here" text otherwise)
document.querySelectorAll(".video-frame video").forEach((video) => {
  const frame = video.closest(".video-frame");
  const placeholder = frame ? frame.querySelector(".video-placeholder") : null;
  if (!placeholder) return;

  const showVideo = () => {
    placeholder.style.display = "none";
    video.style.opacity = "1";
  };
  const showPlaceholder = () => {
    placeholder.style.display = "flex";
    video.style.opacity = "0";
  };

  // start hidden until we know it can play
  video.style.opacity = "0";
  video.style.transition = "opacity .25s ease";

  video.addEventListener("loadeddata", showVideo);
  video.addEventListener("canplay", showVideo);
  video.addEventListener("error", showPlaceholder);

  // If after 1.5s nothing has loaded (most likely the file isn't there yet),
  // fall back to the placeholder.
  setTimeout(() => {
    if (video.readyState < 2) showPlaceholder();
  }, 1500);
});

// 3) Smooth-scroll offset for sticky nav (anchors)
const navHeight = 60;
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length <= 1) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", id);
  });
});
