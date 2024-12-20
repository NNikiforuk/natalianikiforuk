const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
			observer.unobserve(entry.target);
		}
	});
});

document.querySelectorAll(".slidein").forEach((el) => {
	observer.observe(el);
});

const burgerBtn = document.getElementById(
	"burger-btn"
) as HTMLButtonElement | null;
const mobileMenu = document.getElementById(
	"mobile-menu"
) as HTMLDivElement | null;

if (burgerBtn && mobileMenu) {
	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle("burger-active");
		mobileMenu.classList.toggle("active");

		const isExpanded = mobileMenu.classList.contains("active");
		burgerBtn.setAttribute("aria-expanded", String(isExpanded));
	});

	const mobileLinks = mobileMenu.querySelectorAll<HTMLAnchorElement>("a");
	mobileLinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.remove("active");
			burgerBtn.classList.remove("burger-active");
			burgerBtn.setAttribute("aria-expanded", "false");
		});
	});

	document.addEventListener("click", (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (
			target &&
			!mobileMenu.contains(target) &&
			!burgerBtn.contains(target) &&
			mobileMenu.classList.contains("active")
		) {
			mobileMenu.classList.remove("active");
			burgerBtn.classList.remove("burger-active");
			burgerBtn.setAttribute("aria-expanded", "false");
		}
	});
}
