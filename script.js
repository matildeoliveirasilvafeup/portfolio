particlesJS("particles-js", {
	"particles": {
		"number": { "value": 60, "density": { "enable": true, "value_area": 1000 } },
		"color": { "value": "#ffffff" },
		"opacity": { "value": 0.4 },
		"size": { "value": 1.5 },
		"line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
		"move": { "enable": true, "speed": 0.8 }
	},
	"interactivity": {
		"events": { "onhover": { "enable": true, "mode": "grab" } }
	}
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry, index) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";
			}, index * 100);
		}
	});
}, { threshold: 0.1 });

document.querySelectorAll('.card, .hero').forEach(el => {
	el.style.opacity = "0";
	el.style.transform = "translateY(40px)";
	el.style.transition = "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)";
	observer.observe(el);
});
