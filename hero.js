/* =========================================================
   WEDDING INVITATION
   HERO PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const heroPage =
        document.getElementById("heroPage");

    const heroContinue =
        document.getElementById("heroContinue");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!heroPage) {
        console.warn("Hero page element not found.");
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

    const couple =
        CONFIG.couple || {};

    const wedding =
        CONFIG.wedding || {};

    const hero =
        CONFIG.hero || {};


    /* =====================================================
       HELPER
    ===================================================== */

    const setText = (selector, value) => {

        const element =
            document.querySelector(selector);

        if (!element || value === undefined) {
            return;
        }

        element.textContent = value;

    };


    /* =====================================================
       POPULATE HERO CONTENT
    ===================================================== */

    const populateHero = () => {

        /* Eyebrow */

        setText(
            ".hero-eyebrow",
            hero.eyebrow
        );


        /* Groom */

        setText(
            ".hero-name--groom",
            couple.groom
        );


        /* Bride */

        setText(
            ".hero-name--bride",
            couple.bride
        );


        /* Main Title */

        setText(
            ".hero-title",
            hero.title
        );


        /* Description */

        setText(
            ".hero-description",
            hero.message
        );


        /* Date */

        setText(
            ".hero-date__text",
            wedding.date
        );


        /* Continue Button */

        setText(
            ".hero-continue__text",
            hero.buttonText
        );

    };


    /* =====================================================
       CONTINUE BUTTON
    ===================================================== */

    /* =====================================================
   CONTINUE TO STORY
===================================================== */

const handleContinue = () => {

    if (
        typeof window.showStoryPage !==
        "function"
    ) {

        console.error(
            "Story page function is not available."
        );

        return;
    }


    const storyPage =
        document.getElementById(
            "storyPage"
        );


    if (!storyPage) {

        console.error(
            "Story page element not found."
        );

        return;
    }


    document.body.classList.add(
        "is-transitioning"
    );


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
       START TRANSITION
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
       SWITCH PAGE
    ================================================= */

    setTimeout(() => {

        heroPage.style.display =
            "none";


        window.showStoryPage();


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

    if (heroContinue) {

        heroContinue.addEventListener(
            "click",
            handleContinue
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateHero();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Hero Section Loaded"
    );

});