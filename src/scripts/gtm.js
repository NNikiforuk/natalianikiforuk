export const initGTM = () => {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-W5B6WX2M`;
	document.head.appendChild(script);
};
