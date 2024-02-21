export function popups() {
	// const popups = gsap.utils.toArray('.popup');
	// const popupCloseBtns = gsap.utils.toArray('[data-close-popup]');
	// const popupOpenBtns = gsap.utils.toArray('[data-open-popup]');

	// document.addEventListener("click", function (e) {
	// 	const target = e.target;
	// 	if (target.closest('[data-open-popup]')) {
	// 		const currentTarget = target.closest('[data-open-popup]');
	// 		const toOpen = currentTarget.getAttribute('data-open-popup').trim();
	// 		document.querySelector(toOpen).classList.toggle('popup-show');
	// 		document.documentElement.classList.toggle('popup-show');
	// 	}
	// });

	// popupCloseBtns.forEach(el => {
	// 	el.addEventListener("click", function (e) {
	// 		const closePopup = el.parentNode.parentNode?.getAttribute('id') || el.parentNode.parentNode.parentNode.getAttribute('id');
	// 		document.querySelector(`#${closePopup}`)?.classList.remove('popup-show');
	// 		// document.querySelector(`#${closePopup}`)?.classList.add('never-show');
	// 		document.documentElement.classList.remove('popup-show');
	// 	});
	// });

	const popupBtns = gsap.utils.toArray('[data-open-popup]');
	const popupCloseBtns = gsap.utils.toArray('[data-close-popup]');

	let currentModal = null;
	let currentBtn = null;

	popupBtns.forEach(el => {
		el.addEventListener("click", function (e) {
			const toOpen = el.getAttribute('data-open-popup').trim();
			const newModal = document.querySelector(toOpen);


			if (el === currentBtn) {
				// Toggle: close the currently opened modal
				if (currentModal.classList.contains('popup-show')) {
					currentModal.classList.remove('popup-show');
					document.documentElement.classList.remove('popup-show');
					el.classList.remove('_active');
					currentModal = null;
					currentBtn = null;
					document.body.classList.remove('open-menu');
					// console.log('111');
				} else {
					currentModal.classList.add('popup-show');
					document.documentElement.classList.add('popup-show');
					el.classList.add('_active');
					// console.log('222');
				}
			} else {
				// if (currentModal) {
				// 	currentModal.classList.remove('popup-show');
				// 	currentBtn.classList.remove('_active');
				// 	// console.log('333');
				// }
				// console.log('444');
				document.body.classList.add(toOpen.slice(1))
				document.body.classList.remove('open-menu');
				newModal.classList.add('popup-show');
				document.documentElement.classList.add('popup-show');
				el.classList.add('_active');
				currentModal = newModal;
				currentBtn = el;
			}
		});
	});

	popupCloseBtns.forEach(el => {
		el.addEventListener("click", function (e) {
			window.scrollTo(0, 0);

			const closePopup = el.parentNode.getAttribute('id') || el.parentNode.parentNode.getAttribute('id') || el.parentNode.parentNode.parentNode.getAttribute('id');
			const modalToClose = document.querySelector(`#${closePopup}`);

			// Close the modal
			modalToClose.classList.remove('popup-show');
			document.documentElement.classList.remove('popup-show');

			// modalToClose.querySelector('[data-open-popup]').classList.remove('_active');
			popupBtns.forEach(btn => {
				btn.classList.remove('_active');
			})

			document.body.classList.remove(closePopup)
			// console.log('555');

			// Clear the currently opened modal and button if it's the one that's being closed
			if (modalToClose === currentModal) {
				currentModal = null;
				currentBtn = null;
			}
		});
	});

}
