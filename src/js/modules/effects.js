export function textGradientAnimation() {
	const gradientAni = document.querySelectorAll(".gradient-ani");
	for (let i = 0; i < gradientAni.length; i++) {
		const el = gradientAni[i];
		gsap.fromTo(el, { backgroundPositionX: `-${el.scrollWidth}px` }, { scrollTrigger: { trigger: el, start: "top bottom", end: "+=300%", scrub: 1 }, backgroundPositionX: `${el.scrollWidth}px` });
	}
}

export function glowBordersOnHover() {
	const featuresEl = document.querySelector(".glow-container");
	const featureEls = document.querySelectorAll(".glow");

	featuresEl.addEventListener("pointermove", (ev) => {
		featureEls.forEach((featureEl) => {
			// Not optimized yet, I know
			const rect = featureEl.getBoundingClientRect();

			featureEl.style.setProperty("--x", ev.clientX - rect.left);
			featureEl.style.setProperty("--y", ev.clientY - rect.top);
		});
	});
}

export function fadeWrappers() {
	const fadeWrappers = document.querySelectorAll(".fade-wrapper");
	const fadeMasks = document.querySelectorAll(".fade-mask");

	for (let i = 0; i < fadeWrappers.length; i++) {
		const el = fadeWrappers[i];
		gsap.to(fadeMasks[i], { scrollTrigger: { trigger: el, start: "top+=50% bottom", end: "bottom+=300% bottom", scrub: true }, x: `${el.scrollWidth * 1.5}` });
	}
}

export function opacityAni() {
	const opacityAni = gsap.utils.toArray(".opacity-ani");

	for (let i = 0; i < opacityAni.length; i++) {
		const el = opacityAni[i];
		gsap.from(el, { y: 50, duration: 1, opacity: 0, delay: opacityAni[i].getAttribute("data-delay"), stagger: 0.2, scrollTrigger: { trigger: el, start: "top bottom", end: "300px bottom", scrub: true } });
	}
}

export function fromScale() {
	const fromScale = gsap.utils.toArray(".from-scale");

	for (let i = 0; i < fromScale.length; i++) {
		const el = fromScale[i];
		gsap.from(el, { scale: 1.5, opacity: 0, delay: fromScale[i].getAttribute("data-delay"), stagger: 0.2, scrollTrigger: { trigger: el, start: "top bottom", end: "700px bottom", scrub: true } });
	}
}

export function parallaxSections() {
	const parallaxSections = document.querySelectorAll(".parallax-section");
	for (let i = 0; i < parallaxSections.length; i++) {
		const el = parallaxSections[i];
		gsap.from(el, { scrollTrigger: { trigger: el, start: "top bottom", end: "200% bottom", scrub: true }, y: `-${windowHeight / 2}` });
	}
}
