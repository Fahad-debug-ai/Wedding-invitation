/* =========================================================
   WEDDING INVITATION
   OUR STORY PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const storyPage =
        document.getElementById("storyPage");

    const storyContinue =
        document.getElementById("storyContinue");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!storyPage) {

        console.warn(
            "Story page element not found."
        );

        return;
    }


    /* =====================================================
       CONFIG CHECK
    ===================================================== */

    if (typeof CONFIG === "undefined") {

        console.error(
            "CONFIG is not defined. Make sure config.js is loaded first."
        );

        return;
    }


    /* =====================================================
       CONFIG DATA
    ===================================================== */

    const story =
        CONFIG.story || {};


    /* =====================================================
       HELPER
    ===================================================== */

    const setText = (selector, value) => {

        const element =
            document.querySelector(selector);

        if (!element || value === undefined) {
            return;
        }

        element.textContent =
            value;

    };


    /* =====================================================
       POPULATE STORY
    ===================================================== */

    const populateStory = () => {

        /*
         * Header
         */

        setText(
            ".story-eyebrow",
            story.eyebrow
        );


        setText(
            ".story-title",
            story.title
        );


        setText(
            ".story-intro",
            story.intro
        );


        /*
         * Story Item 01
         */

        if (story.item1) {

            setText(
                ".story-item:nth-child(1) .story-item__date",
                story.item1.date
            );

            setText(
                ".story-item:nth-child(1) .story-item__title",
                story.item1.title
            );

            setText(
                ".story-item:nth-child(1) .story-item__text",
                story.item1.text
            );

        }


        /*
         * Story Item 02
         */

        if (story.item2) {

            setText(
                ".story-item:nth-child(2) .story-item__date",
                story.item2.date
            );

            setText(
                ".story-item:nth-child(2) .story-item__title",
                story.item2.title
            );

            setText(
                ".story-item:nth-child(2) .story-item__text",
                story.item2.text
            );

        }


        /*
         * Story Item 03
         */

        if (story.item3) {

            setText(
                ".story-item:nth-child(3) .story-item__date",
                story.item3.date
            );

            setText(
                ".story-item:nth-child(3) .story-item__title",
                story.item3.title
            );

            setText(
                ".story-item:nth-child(3) .story-item__text",
                story.item3.text
            );

        }


        /*
         * Continue Button
         */

        setText(
            ".story-continue__text",
            story.buttonText
        );

    };


    /* =====================================================
       SHOW STORY PAGE
    ===================================================== */

    window.showStoryPage = () => {

        if (
            !storyPage.classList.contains(
                "story-page-active"
            )
        ) {

            storyPage.classList.add(
                "story-page-active"
            );

        }

    };


    /* =====================================================
       HIDE OTHER PAGES
    ===================================================== */

    window.hideStoryPage = () => {

        storyPage.classList.remove(
            "story-page-active"
        );

    };


    /* =====================================================
       CONTINUE BUTTON
    ===================================================== */

    const handleContinue = () => {

    console.log(
        "Story continue button clicked."
    );


    /* =================================================
       CHECK EVENTS FUNCTION
    ================================================= */

    if (
        typeof window.showEventsPage !==
        "function"
    ) {

        console.error(
            "Events page function is not available."
        );

        return;
    }


    /* =================================================
       GET PAGES
    ================================================= */

    const storyPage =
        document.getElementById(
            "storyPage"
        );

    const eventsPage =
        document.getElementById(
            "eventsPage"
        );


    if (!storyPage || !eventsPage) {

        console.error(
            "Story or Events page element not found."
        );

        return;
    }


    /* =================================================
       TRANSITION ELEMENT
    ================================================= */

    const transition =
        document.getElementById(
            "pageTransition"
        );

    const transitionInner =
        transition
            ? transition.querySelector(
                ".page-transition__inner"
            )
            : null;

    const transitionLine =
        transition
            ? transition.querySelector(
                ".page-transition__line"
            )
            : null;


    /* =================================================
       BODY TRANSITION STATE
    ================================================= */

    document.body.classList.add(
        "is-transitioning"
    );


    /* =================================================
       START PAGE TRANSITION
    ================================================= */

    if (
        transition &&
        transitionInner
    ) {

        transition.style.visibility =
            "visible";


        transitionInner.style.transition =
            "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)";


        transitionInner.style.transform =
            "translateY(0)";


        if (transitionLine) {

            transitionLine.style.transition =
                "width 0.6s ease 0.15s";

            transitionLine.style.width =
                "120px";

        }

    }


    /* =================================================
       SWITCH TO EVENTS
    ================================================= */

    setTimeout(() => {

        storyPage.classList.remove(
            "story-page-active"
        );


        window.showEventsPage();


        if (transitionLine) {

            transitionLine.style.width =
                "0";

        }


        if (transitionInner) {

            transitionInner.style.transform =
                "translateY(-100%)";

        }


        setTimeout(() => {

            if (transition) {

                transition.style.visibility =
                    "hidden";

            }


            if (transitionInner) {

                transitionInner.style.transform =
                    "translateY(100%)";

            }


            document.body.classList.remove(
                "is-transitioning"
            );

        }, 800);

    }, 750);

};


    /* =====================================================
       BUTTON EVENT
    ===================================================== */

    if (storyContinue) {

        storyContinue.addEventListener(
            "click",
            handleContinue
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateStory();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Story Section Loaded"
    );

});