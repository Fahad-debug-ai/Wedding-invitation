/* =========================================================
   WEDDING INVITATION
   LANDING PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const landingPage =
        document.getElementById("landingPage");

    const particlesContainer =
        document.getElementById("particles");

    const openInvitation =
        document.getElementById("openInvitation");

    const pageTransition =
        document.getElementById("pageTransition");

    const pageTransitionInner =
        pageTransition
            ? pageTransition.querySelector(".page-transition__inner")
            : null;

    const pageTransitionLine =
        pageTransition
            ? pageTransition.querySelector(".page-transition__line")
            : null;


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!landingPage) {
        console.warn("Landing page element not found.");
        return;
    }


    /* =====================================================
       CONFIG CHECK
    ===================================================== */

    if (typeof CONFIG === "undefined") {
        console.error(
            "CONFIG is not defined. Make sure config.js is loaded before landing.js."
        );

        return;
    }


    /* =====================================================
       STATE
    ===================================================== */

    let invitationOpening = false;


    /* =====================================================
       CONFIG DATA
    ===================================================== */

    const couple =
        CONFIG.couple || {};

    const wedding =
        CONFIG.wedding || {};

    const landing =
        CONFIG.landing || {};

    const settings =
        CONFIG.settings || {};


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
       POPULATE LANDING CONTENT
    ===================================================== */

    const populateLanding = () => {

        setText(
            ".landing-label",
            landing.label
        );


        setText(
            ".landing-name--groom",
            couple.groom
        );


        setText(
            ".landing-name--bride",
            couple.bride
        );


        const invitationElement =
            document.querySelector(".landing-invitation");


        if (invitationElement) {

            invitationElement.innerHTML = `
                ${landing.invitationLineOne}
                <br>
                ${landing.invitationLineTwo}
            `;

        }


        setText(
            ".landing-date__day",
            wedding.shortDate
                ? wedding.shortDate.split(".")[0]
                : ""
        );


        setText(
            ".landing-date__month",
            wedding.date
                ? wedding.date.split(" ")[1]
                : ""
        );


        setText(
            ".landing-date__year",
            wedding.date
                ? wedding.date.split(" ")[2]
                : ""
        );


        setText(
            ".open-invitation__text",
            landing.buttonText
        );


        setText(
            ".landing-hint__text",
            landing.bottomText
        );


        setText(
            ".landing-corner-date--left",
            landing.sideLabel
        );


        setText(
            ".landing-corner-date--right",
            wedding.date
                ? wedding.date.split(" ")[2]
                : ""
        );

    };


    /* =====================================================
       PARTICLE GENERATOR
    ===================================================== */

    const createParticles = () => {

        if (!particlesContainer) {
            return;
        }


        if (settings.enableParticles === false) {
            return;
        }


        const particleCount =
            window.innerWidth <= 600
                ? 18
                : 32;


        particlesContainer.innerHTML = "";


        for (let i = 0; i < particleCount; i++) {

            const particle =
                document.createElement("span");


            particle.classList.add("particle");


            const left =
                Math.random() * 100;


            const top =
                55 + Math.random() * 45;


            const duration =
                5 + Math.random() * 7;


            const delay =
                Math.random() * 6;


            const moveX =
                -70 + Math.random() * 140;


            const size =
                1.5 + Math.random() * 2.5;


            particle.style.left =
                `${left}%`;


            particle.style.top =
                `${top}%`;


            particle.style.width =
                `${size}px`;


            particle.style.height =
                `${size}px`;


            particle.style.setProperty(
                "--duration",
                `${duration}s`
            );


            particle.style.setProperty(
                "--delay",
                `${delay}s`
            );


            particle.style.setProperty(
                "--move-x",
                `${moveX}px`
            );


            particlesContainer.appendChild(
                particle
            );

        }

    };


    /* =====================================================
       PAGE TRANSITION
    ===================================================== */

    const playPageTransition = (
        callback
    ) => {

        if (
            settings.enablePageTransitions === false ||
            !pageTransition ||
            !pageTransitionInner
        ) {

            if (typeof callback === "function") {
                callback();
            }

            return;

        }


        pageTransition.style.visibility =
            "visible";


        pageTransitionInner.style.transition =
            "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)";


        pageTransitionInner.style.transform =
            "translateY(0)";


        if (pageTransitionLine) {

            pageTransitionLine.style.transition =
                "width 0.6s ease 0.2s";

            pageTransitionLine.style.width =
                "120px";

        }


        setTimeout(() => {

            if (typeof callback === "function") {
                callback();
            }

        }, 700);

    };


    /* =====================================================
       OPEN INVITATION
    ===================================================== */

   /* =====================================================
   OPEN INVITATION
===================================================== */

const handleOpenInvitation = () => {

    if (invitationOpening) {
        return;
    }


    invitationOpening = true;


    if (openInvitation) {

        openInvitation.disabled = true;

        openInvitation.setAttribute(
            "aria-disabled",
            "true"
        );

    }


    /*
     * Start page transition
     */

    if (
        settings.enablePageTransitions !== false &&
        pageTransition &&
        pageTransitionInner
    ) {

        pageTransition.style.visibility =
            "visible";


        document.body.classList.add(
            "is-transitioning"
        );


        pageTransitionInner.style.transition =
            "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)";


        pageTransitionInner.style.transform =
            "translateY(0)";


        if (pageTransitionLine) {

            pageTransitionLine.style.transition =
                "width 0.6s ease 0.15s";

            pageTransitionLine.style.width =
                "120px";

        }

    }


    /*
     * Move to Hero page
     */

    setTimeout(() => {

        const heroPage =
            document.getElementById("heroPage");


        if (!heroPage) {

            console.error(
                "Hero page not found."
            );

            invitationOpening =
                false;

            if (openInvitation) {
                openInvitation.disabled = false;
            }

            return;
        }


        /*
         * Hide Landing
         */

        landingPage.style.display =
            "none";


        /*
         * Show Hero
         */

        heroPage.classList.add(
            "hero-page-active"
        );


        /*
         * Reset transition layer
         */

        if (pageTransitionLine) {

            pageTransitionLine.style.width =
                "0";

        }


        pageTransitionInner.style.transform =
            "translateY(-100%)";


        setTimeout(() => {

            pageTransition.style.visibility =
                "hidden";


            pageTransitionInner.style.transform =
                "translateY(100%)";


            document.body.classList.remove(
                "is-transitioning"
            );


            invitationOpening =
                false;


            if (openInvitation) {

                openInvitation.disabled =
                    false;

                openInvitation.removeAttribute(
                    "aria-disabled"
                );

            }

        }, 800);

    }, 750);

};


    /* =====================================================
       BUTTON EVENT
    ===================================================== */

    if (openInvitation) {

        openInvitation.addEventListener(
            "click",
            handleOpenInvitation
        );

    }


    /* =====================================================
       PARTICLE RESPONSIVENESS
    ===================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(resizeTimer);


            resizeTimer =
                setTimeout(() => {

                    createParticles();

                }, 250);

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    populateLanding();

    createParticles();


    /* =====================================================
       PAGE LOAD LOG
    ===================================================== */

    console.log(
        "Landing Section Loaded"
    );

});