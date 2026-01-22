"use client";
import { useState, useRef } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";
import ThingsToKnow from "@/app/components/ThingsToKnow";
import MarriageCountdown from "@/app/components/MarriageCountdown";
export default function Home() {
  const events = [
    {
      title: "Sagan & Cocktail",
      image: "/assets/cocktail.png",
      date: "Sunday, March 11th 2026",
      venue: "Taj Exotica Resort, Goa",
      time: "10am Onwards",
      link: "https://google.com",
    },

    {
      title: "Wedding/Anand Karaj",
      image: "/assets/anand.png",
      date: "Monday, March 12th 2026",
      venue: "Taj Exotica Resort, Goa",
      time: "8pm Onwards",
      link: "https://google.com",
    },
    {
      title: "Reception",
      image: "/assets/reception.png",
      date: "Monday, March 12th 2026",
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

      <div className="bg-[url('/assets/lavaan.png')] bg-cover bg-center bg-no-repeat min-h-screen w-full px-4 sm:px-8  overflow-hidden">
        <FallingLamps />
        <div className=" pt-24 pb-20">

          <h2 className="text-white font-cormorant text-center leading-tight
            text-[60px] sm:text-6xl lg:text-[80px] pb-350">
            RIA <br />
            <span className="text-xl sm:text-3xl tracking-[10px]">WEDS</span>
            <br />
            HARGUN
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 pt-150">
            <h2 className="text-white text-sm sm:text-base">
              ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ <br />
              ਪੁਰਖੁ ਨਿਰਭਉ <br />
              ਨਿਰਵੈਰੁ…
            </h2>

            <img
              src="/assets/onkar.png"
              alt=""
              className="w-40 sm:w-52 h-auto"
            />

            <h2 className="text-white text-lg sm:text-2xl font-Cormorant-Upright">
              With the heavenly blessings of <br />
              Smt. Seema Bajaj W/o Late Sh. Rajesh Singh
            </h2>

            <hr className="lg:w-24 w-16 border-white my-4" />

            <h2 className="text-white font-cormorant text-lg sm:text-2xl">
              Mrs. Vandana & Kishore Singh
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="text-white font-cormorant 
            text-5xl sm:text-7xl lg:text-[100px] leading-tight">
              INVITE
            </h2>

            <p className="text-white font-cormorant text-lg sm:text-2xl mt-6">
              You to join us in the wedding celebrations of
            </p>

            <h2 className="text-white font-cormorant text-center mt-10
            text-5xl sm:text-7xl lg:text-[100px] leading-tight">
              RIA <br /> & <br /> HARGUN
            </h2>

            <p className="text-white font-cormorant text-lg sm:text-2xl mt-6">
              Son of <br /> Mrs. Manisha & Ajay Arora
            </p>

            <p className="text-white font-cormorant text-lg sm:text-2xl mt-8">
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

                  <h2 className="text-white font-cormorant text-2xl sm:text-3xl mt-4">
                    {event.title}
                  </h2>

                  <p className="text-white font-cormorant text-sm sm:text-base leading-5 mt-2">
                    {event.date} <br />
                    {event.venue} <br />
                    {event.time}
                  </p>

                  <a
                    href={event.link}
                    className="text-white underline text-sm mt-2"
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


      <div className="hidden md:block bg-[url('/assets/Group_2147224830.png')] bg-cover bg-no-repeat">
        <div className="lg:h-325 md:h-180">
          <h1 className="lg:text-3xl text-xl text-center text-[#E1EF1E] lg:pt-54 pt-12 font-cormorant">
            MEET THE
          </h1>
          <h2 className="lg:text-[80px] text-2xl text-center text-[#EAD670] lg:pt-6 font-cormorant leading-16">
            Bride <br /> & <br /> Groom
          </h2>
        </div>
      </div>


      {/* mobile visible section */}

      <div className="md:hidden bg-[url('/assets/group_mobile.png')] bg-cover bg-no-repeat">
        <div className="h-230">
          <h1 className="text-xl text-center text-[#E1EF1E] pt-24 font-cormorant">
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
        <div className="h-230">
        </div>
      </div>
      <MarriageCountdown />

    </>
  );
}

