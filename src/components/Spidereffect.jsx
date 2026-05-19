import React, { useEffect } from "react";

function SpiderEffect() {

    useEffect(() => {

        if (window.particlesJS) {

            window.particlesJS("particles-js", {

                particles: {

                    number: {
                        value: 70,
                        density: {
                            enable: true,
                            value_area: 900
                        }
                    },

                    color: {
                        value: "#00ffff"
                    },

                    shape: {
                        type: "circle"
                    },

                    opacity: {
                        value: 1
                    },

                    size: {
                        value: 4,
                        random: true
                    },

                    line_linked: {
                        enable: true,
                        distance: 220,
                        color: "#f4f5f5",
                        opacity: 0.9,
                        width: 2
                    },

                    move: {
                        enable: true,
                        speed: 2.5,
                        random: true,
                        straight: false,
                        out_mode: "bounce",
                        bounce: true,

                        attract: {
                            enable: true,
                            rotateX: 1200,
                            rotateY: 1200
                        }
                    }

                },

                interactivity: {

                    detect_on: "canvas",

                    events: {

                        onhover: {
                            enable: true,
                            mode: "grab"
                        },

                        onclick: {
                            enable: true,
                            mode: "push"
                        },

                        resize: true
                    },

                    modes: {

                        grab: {
                            distance: 280,

                            line_linked: {
                                opacity: 1
                            }
                        },

                        push: {
                            particles_nb: 2
                        }

                    }

                },

                retina_detect: true

            });

        }

    }, []);

    return (

        <div
            id="particles-js"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 0.2
            }}
        />

    );
}

export default SpiderEffect;