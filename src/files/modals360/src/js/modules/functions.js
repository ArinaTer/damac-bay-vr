// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
	// Проверка поддержки webp
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onError = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebp(function (support) {
		let className = support === true ? "webp" : "no-webp";
		addClassName(document.documentElement, className);
	});
}

export function removeClasses(array, className) {
	array.forEach((currentEl) => {
		removeClassName(currentEl, className);
	});
}


export function queryMatches(query) {
	return window.matchMedia(query).matches;
}

export function addClassName(el, className) {
	el.classList.add(className);
}
export function removeClassName(el, className) {
	el.classList.remove(className);
}

export function toggleClassName(el, className) {
	el.classList.toggle(className);
}
