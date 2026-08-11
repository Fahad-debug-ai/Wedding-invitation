/* =========================================================
   WEDDING INVITATION
   WEDDING EVENTS JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const eventsPage =
        document.getElementById("eventsPage");

    const eventsContinue =
        document.getElementById("eventsContinue");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!eventsPage) {

        console.warn(
            "Events page element not found."
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

    const events =
        CONFIG.events || {};


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
       POPULATE EVENT DATA
    ===================================================== */

    const populateEvents = () => {

        /*
         * Header
         */

        setText(
            ".events-eyebrow",
            events.eyebrow
        );

        setText(
            ".events-title",
            events.title
        );

        setText(
            ".events-intro",
            events.intro
        );


        /*
         * Event 01
         */

        if (events.event1) {

            setText(
                ".event-card:nth-child(1) .event-card__label",
                events.event1.label
            );

            setText(
                ".event-card:nth-child(1) .event-card__title",
                events.event1.title
            );

            setText(
                ".event-card:nth-child(1) .event-card__info span:nth-child(1)",
                events.event1.date
            );

            setText(
                ".event-card:nth-child(1) .event-card__info span:nth-child(3)",
                events.event1.time
            );

            setText(
                ".event-card:nth-child(1) .event-card__venue",
                events.event1.venue
            );

        }


        /*
         * Event 02
         */

        if (events.event2) {

            setText(
                ".event-card:nth-child(2) .event-card__label",
                events.event2.label
            );

            setText(
                ".event-card:nth-child(2) .event-card__title",
                events.event2.title
            );

            setText(
                ".event-card:nth-child(2) .event-card__info span:nth-child(1)",
                events.event2.date
            );

            setText(
                ".event-card:nth-child(2) .event-card__info span:nth-child(3)",
                events.event2.time
            );

            setText(
                ".event-card:nth-child(2) .event-card__venue",
                events.event2.venue
            );

        }


        /*
         * Event 03
         */

        if (events.event3) {

            setText(
                ".event-card:nth-child(3) .event-card__label",
                events.event3.label
            );

            setText(
                ".event-card:nth-child(3) .event-card__title",
                events.event3.title
            );

            setText(
                ".event-card:nth-child(3) .event-card__info span:nth-child(1)",
                events.event3.date
            );

            setText(
                ".event-card:nth-child(3) .event-card__info span:nth-child(3)",
                events.event3.time
            );

            setText(
                ".event-card:nth-child(3) .event-card__venue",
                events.event3.venue
            );

        }


        /*
         * Continue Button
         */

        setText(
            ".events-continue__text",
            events.buttonText
        );

    };


    /* =====================================================
       SHOW EVENTS PAGE
    ===================================================== */

    window.showEventsPage = () => {

        eventsPage.classList.add(
            "events-page-active"
        );

    };


    /* =====================================================
       HIDE EVENTS PAGE
    ===================================================== */

    window.hideEventsPage = () => {

        eventsPage.classList.remove(
            "events-page-active"
        );

    };


    /* =====================================================
       EVENTS CONTINUE BUTTON
    ===================================================== */

    /* =====================================================
   CONTINUE TO VENUE
===================================================== */

const handleContinue = () => {

    console.log(
        "Events continue button clicked."
    );


    /* =================================================
       CHECK VENUE FUNCTION
    ================================================= */

    if (
        typeof window.showVenuePage !==
        "function"
    ) {

        console.error(
            "Venue page function is not available."
        );

        return;
    }


    /* =================================================
       GET PAGES
    ================================================= */

    const eventsPage =
        document.getElementById(
            "eventsPage"
        );

    const venuePage =
        document.getElementById(
            "venuePage"
        );


    if (!eventsPage || !venuePage) {

        console.error(
            "Events or Venue page element not found."
        );

        return;
    }


    /* =================================================
       GET TRANSITION
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
       START TRANSITION
    ================================================= */

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


    /* =================================================
       SWITCH TO VENUE
    ================================================= */

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


        /* =============================================
           FINISH TRANSITION
        ============================================= */

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

    if (eventsContinue) {

        eventsContinue.addEventListener(
            "click",
            handleContinue
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateEvents();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Events Section Loaded"
    );

});