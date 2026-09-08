import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import vid from "../videos/into2.mp4";

function IntroVideo({ onComplete }) {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const completedRef = useRef(false);
  const durationCallRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const video = videoRef.current;

    if (!overlay || !video) return;

    const alreadyPlayed = sessionStorage.getItem("khanate-intro");

    if (alreadyPlayed) {
      gsap.set(overlay, {
        display: "none",
      });

      return;
    }

    const finishIntro = () => {
      if (completedRef.current) return;

      completedRef.current = true;

      if (durationCallRef.current) {
        durationCallRef.current.kill();
      }

      const timeline = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("khanate-intro", "true");

          gsap.set(overlay, {
            display: "none",
          });

          onComplete();
        },
      });

      timeline.to(overlay, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    };

    const handleMetadata = () => {
      const duration = video.duration;

      if (!Number.isFinite(duration) || duration <= 0) {
        return;
      }

      video.currentTime = 0;

      video.play().catch((error) => {
        console.error("Video playback failed:", error);
        finishIntro();
      });

      durationCallRef.current = gsap.delayedCall(
        duration,
        finishIntro
      );
    };

    video.addEventListener(
      "loadedmetadata",
      handleMetadata
    );

    if (video.readyState >= 1) {
      handleMetadata();
    }

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        handleMetadata
      );

      if (durationCallRef.current) {
        durationCallRef.current.kill();
      }
    };
  }, [onComplete]);

  if (sessionStorage.getItem("khanate-intro")) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-[#130207]"
    >
      <video
        ref={videoRef}
        src={vid}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export default IntroVideo;