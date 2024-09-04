// Page Flip
const flipBook = (elBook) => {
	elBook.style.setProperty("--c", 0);
	elBook.querySelectorAll(".page").forEach((page, idx) => {
		page.style.setProperty("--i", idx);
		page.addEventListener("click", (evt) => {
			if (evt.target.closest("a")) return;
			const curr = evt.target.closest(".back") ? idx : idx + 1;
			elBook.style.setProperty("--c", curr);
			handleGifPlayback(elBook);
		});
	});
};

const handleGifPlayback = (elBook) => {
	elBook.querySelectorAll(".giflip").forEach(gifDiv => {
		const gif = gifDiv.querySelector("img");
		const isVisible = gifDiv.closest(".page").style.getPropertyValue("--c") === elBook.style.getPropertyValue("--c");
		gif.src = isVisible ? gif.src.split('?')[0] + '?' + new Date().getTime() : gif.src.split('?')[0]; // Refresh GIF by adding a timestamp to force reload
	});
};

document.querySelectorAll(".book").forEach(flipBook);


//Audio Player
var hbdmp = document.getElementById("hbdmp");
var icon = document.getElementById("icon");

icon.onclick = function() {
	if (hbdmp.paused) {
		hbdmp.play();
		icon.src = "images/pause.png";
	} else {
		hbdmp.pause();
		icon.src = "images/play.png";
	}
};