import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import vid from "../videos/intro.mp4";

function IntroVideo({ onComplete }) {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const video = videoRef.current;

    if (!overlay || !video) return;

    const alreadyPlayed = sessionStorage.getItem("khanate-intro");

    if (alreadyPlayed) {
      gsap.set(overlay, {
        display: "none",
      });

      onComplete?.();
      return;
    }

    const finishIntro = () => {
      if (completedRef.current) return;

      completedRef.current = true;

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          sessionStorage.setItem("khanate-intro", "true");

          gsap.set(overlay, {
            display: "none",
          });

          onComplete?.();
        },
      });
    };

    const handleEnded = () => {
      finishIntro();
    };

    const startVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        video.currentTime = 0;

        await video.play();

        console.log("KHĀNATE intro started");
      } catch (error) {
        console.error("KHĀNATE intro playback failed:", error);

        const playAfterInteraction = async () => {
          try {
            video.muted = false;
            await video.play();
          } catch (err) {
            console.error("Playback still blocked:", err);
            finishIntro();
          }
        };

        window.addEventListener("click", playAfterInteraction, {
          once: true,
        });

        window.addEventListener("touchstart", playAfterInteraction, {
          once: true,
        });

        window.addEventListener("keydown", playAfterInteraction, {
          once: true,
        });
      }
    };

    video.addEventListener("ended", handleEnded);

    if (video.readyState >= 2) {
      startVideo();
    } else {
      video.addEventListener("canplay", startVideo, {
        once: true,
      });
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", startVideo);
    };
  }, [onComplete]);

  if (sessionStorage.getItem("khanate-intro")) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        h-[100dvh]
        w-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#130207]
      "
    >
      <video
        ref={videoRef}
        src={vid}
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        className="
          h-auto
          w-full
          max-h-full
          object-contain
          md:h-full
          md:w-full
          md:object-cover
        "
      />
    </div>
  );
}

export default IntroVideo;