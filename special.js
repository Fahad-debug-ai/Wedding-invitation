/* =========================================================
   WEDDING INVITATION
   SPECIAL DAY PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const specialPage =
        document.getElementById("specialPage");

    const specialContinue =
        document.getElementById("specialContinue");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!specialPage) {

        console.warn(
            "Special Day page element not found."
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

    const personal =
        CONFIG.personal || {};

    const special =
        CONFIG.special || {};


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
       POPULATE SPECIAL DAY
    ===================================================== */

    const populateSpecialPage = () => {

        /*
         * Eyebrow
         */

        setText(
            ".special-eyebrow",
            special.eyebrow
        );


        /*
         * Title
         */

        setText(
            ".special-title",
            special.title
        );


        /*
         * Groom
         */

        setText(
            ".special-name--groom",
            personal.boyName
        );


        /*
         * Bride
         */

        setText(
            ".special-name--bride",
            personal.girlName
        );


        /*
         * Wedding Date
         */

        setText(
            ".special-date__text",
            personal.proposalDate
        );


        /*
         * Message
         */

        setText(
            ".special-message",
            special.message
        );


        /*
         * Continue Button
         */

        setText(
            ".special-continue__text",
            special.buttonText
        );

    };


    /* =====================================================
       SHOW SPECIAL PAGE
    ===================================================== */

    window.showSpecialPage = () => {

        specialPage.classList.add(
            "special-page-active"
        );

    };


    /* =====================================================
       HIDE SPECIAL PAGE
    ===================================================== */

    window.hideSpecialPage = () => {

        specialPage.classList.remove(
            "special-page-active"
        );

    };


    /* =====================================================
       VENUE → SPECIAL DAY
    ===================================================== */

    const goToSpecialPage = () => {

        console.log(
            "Opening Special Day Page..."
        );


        /* =============================================
           GET VENUE PAGE
        ============================================= */

        const venuePage =
            document.getElementById(
                "venuePage"
            );


        if (!venuePage) {

            console.error(
                "Venue page element not found."
            );

            return;
        }


        /* =============================================
           GET TRANSITION
        ============================================= */

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


        /* =============================================
           START TRANSITION
        ============================================= */

        document.body.classList.add(
            "is-transitioning"
        );


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


        /* =============================================
           SWITCH TO SPECIAL PAGE
        ============================================= */

        setTimeout(() => {

            venuePage.classList.remove(
                "venue-page-active"
            );


            window.showSpecialPage();


            if (transitionLine) {

                transitionLine.style.width =
                    "0";

            }


            if (transitionInner) {

                transitionInner.style.transform =
                    "translateY(-100%)";

            }


            /* =========================================
               FINISH TRANSITION
            ========================================= */

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
   SAVE THE DATE
===================================================== */

if (specialContinue) {

    specialContinue.addEventListener(
        "click",
        () => {

            console.log(
                "Save The Date clicked."
            );


            const groom =
                personal.boyName ||
                "Groom";

            const bride =
                personal.girlName ||
                "Bride";

            const weddingDate =
                personal.proposalDate ||
                "";


            /*
             * Visual feedback
             */

            specialContinue.classList.add(
                "special-continue--saved"
            );


            const buttonText =
                specialContinue.querySelector(
                    ".special-continue__text"
                );

            if (buttonText) {

                buttonText.textContent =
                    "Date Saved ✓";

            }


            /*
             * Reset button after a short delay
             */

            setTimeout(() => {

                specialContinue.classList.remove(
                    "special-continue--saved"
                );

                if (buttonText) {

                    buttonText.textContent =
                        special.buttonText ||
                        "Save The Date";

                }

            }, 2500);


            console.log(
                `${groom} & ${bride} — ${weddingDate}`
            );

        }
    );

}


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateSpecialPage();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Special Day Section Loaded"
    );

});
