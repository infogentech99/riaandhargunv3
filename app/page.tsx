"use client";
import { useState, useRef, useMemo } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";
import ThingsToKnow from "@/app/components/ThingsToKnow";
import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    const delay = Math.random() * 15;
    
    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5 
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";
    
    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
    {
      title: "Sagan & Cocktail",
      image: "/assets/cocktail.png",
      date: "Sunday, March 8th 2026",
      venue: "Taj Exotica Resort, Goa",
      time: "10am Onwards",
      link: "https://google.com",
    },

    {
      title: "Wedding/Anand Karaj",
      image: "/assets/anand.png",
      date: "Monday, March 9th 2026",
      venue: "Taj Exotica Resort, Goa",
      time: "8pm Onwards",
      link: "https://google.com",
    },
    {
      title: "Reception",
      image: "/assets/reception.png",
      date: "Wednesday, March 11th 2026",
      venue: "Taj Exotica Resort, Goa",
      time: "8pm Onwards",
      link: "https://google.com",
    },

  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.3;
    audioRef.current.play();
    setStarted(true);
    setPlaying(true);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop />
      {/* hero section */}
     <div
  className="
    bg-[url('/assets/mob-lavaan.png')]
    md:bg-[url('/assets/lavaan.png')]
    bg-cover
    bg-no-repeat
    bg-top
    md:bg-center
    w-full
    px-4 sm:px-8
    overflow-hidden
    relative
  "
>
        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="absolute top-10 left-8 w-40 h-40 transform rotate-12 opacity-90" />
        <FloatingLamp className="absolute top-30 left-20 w-36 h-36 transform rotate-45 opacity-80" />
        <FloatingLamp className="absolute top-50 left-40 w-32 h-32 transform rotate-30 opacity-85" />
        <FloatingLamp className="absolute top-70 left-60 w-38 h-38 transform rotate-15 opacity-80" />
        <FloatingLamp className="absolute top-90 left-80 w-34 h-34 transform rotate-25 opacity-75" />
        <FloatingLamp className="absolute top-110 left-100 w-28 h-28 transform rotate-10 opacity-85" />
        <FloatingLamp className="absolute top-130 left-120 w-36 h-36 transform rotate-35 opacity-75" />
        <FloatingLamp className="absolute top-150 left-140 w-30 h-30 transform rotate-22 opacity-85" />
        <FloatingLamp className="absolute top-170 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="absolute top-190 left-180 w-40 h-40 transform rotate-28 opacity-85" />
        
        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="absolute top-20 right-12 w-32 h-32 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-40 right-32 w-28 h-28 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-60 right-52 w-36 h-36 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-80 right-72 w-30 h-30 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-100 right-92 w-34 h-34 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-120 right-112 w-38 h-38 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-140 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-160 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-180 right-172 w-36 h-36 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-200 right-192 w-30 h-30 transform -rotate-35 opacity-85" reverse={true} />

        {/* <FallingLamps /> */}
        <div className=" pt-24 pb-20 relative z-10">

          <h2 className="text-white font-cormorant text-center leading-tight
            text-[35px] sm:text-5xl lg:text-[80px] md:pb-350">
            HARGUN <br />
            <span className="text-xl sm:text-3xl tracking-[10px]">WEDS</span>
            <br />
            RIA
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 pt-50 md:pt-150">
            <h2 className="text-white text-sm sm:text-base ">
              ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ <br />
              ਪੁਰਖੁ ਨਿਰਭਉ <br />
              ਨਿਰਵੈਰੁ…
            </h2>

            <img
              src="/assets/onkar.png"
              alt=""
              className="w-40 sm:w-52 h-auto"
            />

            <h2 className="text-white lg:text-[30px] md:text-2xl text-[18px] font-cormorant-upright">
              With the heavenly blessings of <br />
              Our late grandparents,<br/> Sardarni Parkash Kaur and Sardar Avtar Singh.
            </h2>

            <hr className="lg:w-24 w-16 border-white my-4" />

            <h2 className="text-white font-cormorant-upright lg:text-[30px] md:text-2xl text-[18px]">
              The Kataria Family
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="text-white font-cormorant 
            text-5xl sm:text-7xl lg:text-[100px] leading-tight tracking-wide">
              INVITES
            </h2>

            <p className="text-white font-cormorant-upright lg:text-[30px] md:text-2xl text-[18px] mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="text-white font-cormorant-upright text-center mt-10
            text-5xl sm:text-7xl lg:text-[100px] leading-tight">
              HARGUN
            </h2>

            <p className="text-white font-cormorant-upright lg:text-[30px] md:text-2xl text-[18px] mt-6">
              Son of <br /> Amarjeet Singh and Gurmeet Kaur
            </p>

            <h2 className="text-white font-cormorant-upright text-center mt-10
            text-5xl sm:text-7xl lg:text-[100px] leading-tight">
            <span className="text-white font-cormorant-upright text-center mt-10
            text-5xl sm:text-7xl lg:text-[150px] leading-tight">&</span>   <br />
              RIA
            </h2>


            <p className="text-white font-cormorant-upright lg:text-[30px] md:text-2xl mt-6 text-[18px]">
              D/O <br /> (Insert Names)

            </p>
            <p className="text-white font-cormorant-upright lg:text-3xl md:text-2xl text-[20px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-12 sm:gap-16">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="lg:w-80 w-95 sm:w-76 h-auto"
                  />

                  <h2 className="text-white font-cormorant lg:text-[45px]md:text-2xl sm:text-3xl mt-4">
                    {event.title}
                  </h2>

                  <p className="text-white font-cormorant text-[14px] sm:text-base leading-5 mt-2">
                    {event.date} <br />
                    {event.venue} <br />
                    {event.time}
                  </p>

                  <a
                    href={event.link}
                    className="text-white underline text-sm mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:block bg-[url('/assets/meetthebroom.png')] bg-cover bg-no-repeat">
        <div className="lg:h-325 md:h-180">
          <h1 className="lg:text-3xl text-xl text-center text-[#E1EF1E] lg:pt-64 pt-12 font-cormorant">
            MEET THE
          </h1>
          <h2 className="lg:text-[130px] text-2xl text-center text-[#EAD670] lg:pt-12 font-cormorant-upright leading-12">
            <span className="text-[#EB3DB9] font-cormorant-upright">Bride</span> <br /> & <br /> <span className="text-[#FF1100] font-cormorant-upright ">Groom</span>
          </h2>
        </div>
      </div>


      {/* mobile visible section */}

      <div className="md:hidden bg-[url('/assets/group_mobile.png')] bg-cover bg-no-repeat">
        <div className="h-230">
          <h1 className="text-xl text-center text-[#E1EF1E] lg:pt-48 pt-28 font-cormorant">
            MEET THE
          </h1>
          <h2 className="text-6xl text-center text-[#EAD670] font-cormorant mt-6">
            Bride <br /> & <br /> Groom
          </h2>
        </div>
      </div>

      <CoupleMessage />
      <ThingsToKnow />

      <div className="hidden md:block bg-[url('/assets/bridewithmoon.png')] bg-cover bg-no-repeat">
        <div className="lg:h-325 md:h-180">
        </div>
      </div>

      {/* mobile visible section */}
      <div className="md:hidden bg-[url('/assets/bridewithmoon_mobile.png')] bg-cover bg-no-repeat">
        <div className="h-210">
        </div>
      </div>
      <MarriageCountdown />

    </>
  );
}
