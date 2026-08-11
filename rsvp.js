/* =========================================================
   WEDDING INVITATION
   RSVP SECTION JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const rsvpForm =
        document.getElementById("rsvpForm");

    const rsvpSuccess =
        document.getElementById("rsvpSuccess");

    const rsvpSubmit =
        document.getElementById("rsvpSubmit");


    /* =====================================================
       CHECK FORM
    ===================================================== */

    if (!rsvpForm) {

        console.warn(
            "RSVP form not found."
        );

        return;
    }


    /* =====================================================
       RSVP FORM SUBMIT
    ===================================================== */

    rsvpForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            /* =============================================
               GET FORM VALUES
            ============================================= */

            const guestName =
                document
                    .getElementById("guestName")
                    ?.value
                    .trim();

            const guestGuests =
                document
                    .getElementById("guestGuests")
                    ?.value;

            const guestMessage =
                document
                    .getElementById("guestMessage")
                    ?.value
                    .trim();


            /* =============================================
               BASIC VALIDATION
            ============================================= */

            if (!guestName || !guestGuests) {

                return;
            }


            /* =============================================
               CONVERT GUEST COUNT
            ============================================= */

            const guestCount =
                Number(guestGuests);


            if (
                !Number.isInteger(guestCount) ||
                guestCount < 1 ||
                guestCount > 6
            ) {

                console.error(
                    "Guest count must be between 1 and 6."
                );

                return;
            }


            /* =============================================
               BUTTON LOADING STATE
            ============================================= */

            if (rsvpSubmit) {

                rsvpSubmit.disabled = true;

                rsvpSubmit.innerHTML = `
                    <span>SUBMITTING...</span>
                    <span class="rsvp-submit-icon">♡</span>
                `;
            }


            /* =============================================
               SEND RSVP TO BACKEND
            ============================================= */

            try {

                const response =
                    await fetch(
                        "/api/rsvp",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({
                                    name:
                                        guestName,

                                    guests:
                                        guestCount,

                                    message:
                                        guestMessage
                                })
                        }
                    );


                /* =========================================
                   GET BACKEND RESPONSE
                ========================================= */

                const data =
                    await response.json();


                /* =========================================
                   HANDLE ERROR
                ========================================= */

                if (!response.ok || !data.success) {

                    throw new Error(
                        data.message ||
                        "Unable to submit RSVP."
                    );
                }


                /* =========================================
                   SUCCESS
                ========================================= */

                console.log(
                    "RSVP saved successfully:",
                    data
                );


                /* =========================================
                   HIDE FORM
                ========================================= */

                rsvpForm.style.display =
                    "none";


                /* =========================================
                   SHOW SUCCESS MESSAGE
                ========================================= */

                if (rsvpSuccess) {

                    rsvpSuccess.classList.add(
                        "is-visible"
                    );
                }


            } catch (error) {

                /* =========================================
                   BACKEND / NETWORK ERROR
                ========================================= */

                console.error(
                    "RSVP submission failed:",
                    error
                );


                /* =========================================
                   RESTORE BUTTON
                ========================================= */

                if (rsvpSubmit) {

                    rsvpSubmit.disabled =
                        false;

                    rsvpSubmit.innerHTML = `
                        <span>SUBMIT RSVP</span>
                        <span class="rsvp-submit-icon">♡</span>
                    `;
                }

            }

        }
    );


    /* =====================================================
       SECTION LOAD LOG
    ===================================================== */

    console.log(
        "RSVP Section Loaded"
    );

});