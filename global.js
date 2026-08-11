/* =========================================================
   WEDDING INVITATION
   GLOBAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       CONFIG CHECK
    ===================================================== */

    if (typeof CONFIG === "undefined") {

        console.error(
            "CONFIG is not defined. Make sure config.js loads first."
        );

        return;
    }


    /* =====================================================
       GLOBAL STATE
    ===================================================== */

    window.WeddingApp = {

        config: CONFIG,

        isTransitioning: false,

        navigateToPage(url) {

            if (this.isTransitioning) {
                return;
            }

            this.isTransitioning = true;

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


            if (
                !transition ||
                !transitionInner
            ) {

                window.location.href =
                    url;

                return;
            }


            transition.style.visibility =
                "visible";


            transitionInner.style.transition =
                "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)";


            transitionInner.style.transform =
                "translateY(0)";


            if (transitionLine) {

                transitionLine.style.transition =
                    "width 0.6s ease 0.2s";

                transitionLine.style.width =
                    "120px";
            }


            setTimeout(() => {

                window.location.href =
                    url;

            }, 700);

        }

    };


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    document.body.classList.remove(
        "is-loading"
    );


    /* =====================================================
       GLOBAL LOG
    ===================================================== */

    console.log(
        "Global Wedding System Loaded"
    );

});