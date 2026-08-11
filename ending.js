/* =========================================================
   WEDDING INVITATION
   ENDING PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const endingPage =
        document.getElementById("endingPage");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!endingPage) {

        console.warn(
            "Ending page element not found."
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

    const ending =
        CONFIG.ending || {};


    /* =====================================================
       HELPER
    ===================================================== */

    const setText = (selector, value) => {

        const element =
            endingPage.querySelector(selector);

        if (!element || value === undefined) {
            return;
        }

        element.textContent =
            value;
    };


    /* =====================================================
       POPULATE ENDING PAGE
    ===================================================== */

    const populateEndingPage = () => {

        /* ---------------------------------------------
           Eyebrow
        --------------------------------------------- */

        setText(
            ".ending-eyebrow",
            ending.eyebrow
        );


        /* ---------------------------------------------
           Title
        --------------------------------------------- */

        setText(
            ".ending-title",
            ending.title
        );


        /* ---------------------------------------------
           Message
        --------------------------------------------- */

        setText(
            ".ending-message",
            ending.message
        );


        /* ---------------------------------------------
           Groom
        --------------------------------------------- */

        setText(
            ".ending-name--groom",
            personal.boyName
        );


        /* ---------------------------------------------
           Bride
        --------------------------------------------- */

        setText(
            ".ending-name--bride",
            personal.girlName
        );


        /* ---------------------------------------------
           Date
        --------------------------------------------- */

        setText(
            ".ending-date__text",
            personal.proposalDate
        );


        /* ---------------------------------------------
           Final Thank You
        --------------------------------------------- */

        setText(
            ".ending-thankyou",
            ending.thankyou
        );

    };


    /* =====================================================
       SHOW ENDING PAGE
    ===================================================== */

    window.showEndingPage = () => {

        endingPage.classList.add(
            "ending-page-active"
        );

    };


    /* =====================================================
       HIDE ENDING PAGE
    ===================================================== */

    window.hideEndingPage = () => {

        endingPage.classList.remove(
            "ending-page-active"
        );

    };


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateEndingPage();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Ending Section Loaded"
    );

});