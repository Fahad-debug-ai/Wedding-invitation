/* =========================================================
   WEDDING INVITATION
   VENUE PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const venuePage =
        document.getElementById("venuePage");

    const venueContinue =
        document.getElementById("venueContinue");

    const venueLocation =
        document.getElementById("venueLocation");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!venuePage) {

        console.warn(
            "Venue page element not found."
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

    const venue =
        CONFIG.venue || {};


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
       POPULATE VENUE
    ===================================================== */

    const populateVenue = () => {

        /*
         * Header
         */

        setText(
            ".venue-eyebrow",
            venue.eyebrow
        );

        setText(
            ".venue-title",
            venue.title
        );

        setText(
            ".venue-intro",
            venue.intro
        );


        /*
         * Venue Details
         */

        setText(
            ".venue-card__label",
            venue.label
        );

        setText(
            ".venue-card__name",
            venue.name
        );

        setText(
            ".venue-card__address",
            venue.address
        );


        /*
         * Date
         */

        setText(
            ".venue-meta:nth-child(1) .venue-meta__value",
            venue.date
        );


        /*
         * Time
         */

        setText(
            ".venue-meta:nth-child(2) .venue-meta__value",
            venue.time
        );


        /*
         * Location Button
         */

        setText(
            ".venue-location__text",
            venue.locationButton
        );


        /*
         * Continue Button
         */

        setText(
            ".venue-continue__text",
            venue.buttonText
        );


        /*
         * Google Maps / Location Link
         */

        if (
            venueLocation &&
            venue.mapUrl
        ) {

            venueLocation.href =
                venue.mapUrl;

        }

        /* =============================================
   VENUE IMAGE
============================================= */

        const venueImage =
            document.getElementById(
                "venueImage"
            );

        if (
            venueImage &&
            venue.image
        ) {

            venueImage.src =
                venue.image;

            venueImage.alt =
                venue.name ||
                "Wedding Venue";

        }

    };


    /* =====================================================
       SHOW VENUE PAGE
    ===================================================== */

    window.showVenuePage = () => {

        venuePage.classList.add(
            "venue-page-active"
        );

    };


    /* =====================================================
       HIDE VENUE PAGE
    ===================================================== */

    window.hideVenuePage = () => {

        venuePage.classList.remove(
            "venue-page-active"
        );

    };


    /* =====================================================
       PAGE TRANSITION
    ===================================================== */

    const goToVenue = () => {

        console.log(
            "Opening Venue Page..."
        );


        const eventsPage =
            document.getElementById(
                "eventsPage"
            );


        if (!eventsPage) {

            console.error(
                "Events page element not found."
            );

            return;
        }


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


        document.body.classList.add(
            "is-transitioning"
        );


        /* =============================================
           START TRANSITION
        ============================================= */

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
           SWITCH PAGE
        ============================================= */

        setTimeout(() => {

            eventsPage.classList.remove(
                "events-page-active"
            );


            window.showVenuePage();


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
   VENUE → SPECIAL DAY
===================================================== */

    const goToSpecialPage = () => {

        console.log(
            "Opening Special Day Page..."
        );


        /* =============================================
           GET PAGES
        ============================================= */

        const venuePage =
            document.getElementById(
                "venuePage"
            );

        const specialPage =
            document.getElementById(
                "specialPage"
            );


        if (!venuePage || !specialPage) {

            console.error(
                "Venue or Special Day page element not found."
            );

            return;
        }


        /* =============================================
           CHECK SPECIAL PAGE FUNCTION
        ============================================= */

        if (
            typeof window.showSpecialPage !==
            "function"
        ) {

            console.error(
                "showSpecialPage function is not available."
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
           SWITCH TO SPECIAL DAY
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
       CONTINUE BUTTON
    ===================================================== */

    if (venueContinue) {

        venueContinue.addEventListener(
            "click",
            goToSpecialPage
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateVenue();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Venue Section Loaded"
    );

});