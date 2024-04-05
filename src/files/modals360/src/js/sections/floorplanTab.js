import { addClassName, removeClassName, removeClasses } from "../modules/functions.js"
export function floorplanTab() {
    const tabLinks = document.querySelectorAll(".popup__tab-btn");
    const tabContents = document.querySelectorAll(".popup__tab");
    const activeClassForTab = 'active';

    tabLinks.forEach(function (tabLink) {
        tabLink.addEventListener("click", function () {
            const tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    openTab(tabLinks[0].getAttribute("data-tab"));

    function openTab(tabName) {
        removeClasses(tabContents, activeClassForTab)

        tabLinks.forEach(function (tabLink) {
            removeClassName(tabLink, activeClassForTab)
            if (tabLink.getAttribute("data-tab") === tabName) {
                addClassName(tabLink, activeClassForTab)
            }
        });

        const selectedTabContent = document.getElementById(tabName);
        if (selectedTabContent) {
            addClassName(selectedTabContent, activeClassForTab)
        }
    }
}