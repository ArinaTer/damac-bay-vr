import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Observer } from "gsap/Observer.js";
import { Draggable } from "gsap/Draggable.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js"
import Splitting from "splitting";
import Swiper, { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import { Fancybox } from "@fancyapps/ui";
import { Panzoom } from "@fancyapps/ui/dist/panzoom/panzoom.esm.js";
import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm.js";

export function plugins() {
	window.gsap = gsap;
	window.ScrollTrigger = ScrollTrigger;
	window.Observer = Observer;
	window.Draggable = Draggable;
	window.ScrollToPlugin = ScrollToPlugin;
	window.CSSRulePlugin = CSSRulePlugin;

	// window.ExpoScaleEase = ExpoScaleEase;
	window.ScrollToPlugin = ScrollToPlugin;
	// window.SplitText = SplitText;
	// window.createjs = createjs;
	window.Fancybox = Fancybox;
	window.Panzoom = Panzoom;
	window.Toolbar = Toolbar;
	// window.SmoothScroll = SmoothScroll;
	window.Splitting = Splitting;
	// window.VanillaTilt = VanillaTilt;
	window.Swiper = Swiper;
	window.Navigation = Navigation;
	window.Autoplay = Autoplay;
	window.Pagination = Pagination;
	window.EffectFade = EffectFade;
	// window.Navigation = Navigation;
	// window.Lenis = Lenis;
}
