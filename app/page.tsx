"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";
import ThingsToKnow from "@/app/components/ThingsToKnow";
import MarriageCountdown from "@/app/components/MarriageCountdown";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
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
      title_ceremony: "Engagement  &  Sangeet",
      image: "/assets/reception.png",
      date: "Sunday, March 8th 2026",
      venue: "AKASA",
      venue_address: <>Main Road, Opposite Petrol Pump, <br /> Kapashera Extn, Pushpanjali Farms, <br />New Delhi, 110061</>,
      time: "7:00 pm onwards",
      link: "https://maps.app.goo.gl/uNMNPpgk6ukDJnZe7",
    },

    {
      title_ceremony: "Wedding Ceremony",
      title: "Anand Karaj",
      image: "/assets/phere.webp",
      date: "Monday, March 9th 2026",
      venue: "Gurudwara Sri Guru Singh Sabha ",
      venue_address: <>Ashok Vihar, Phase 2, <br />Delhi, 110052</>,
      time: "4:00pm Onwards",
      link: "https://maps.app.goo.gl/Q1k2XyyxXJ1iA1om8",

      title2: "Reception of Baraat",
      venue2: "CARNIVAL MOTEL AND RESORTS",
      venue_address2: <>GT Karnal Road, NH 44, Alipur, <br />New Delhi, 110036</>,
      time2: "7:00pm Onwards",
      link_barat: "https://maps.app.goo.gl/ZHUHoMhNe1xNM46k6",

      title3: "Vedic Phere",
      time3: <div className="mb-36">1:00am Onwards</div>,
    },
    {
      title_ceremony: "Reception",
      image: "/assets/cocktail.png",
      date: "Wednesday, March 11th 2026",
      venue: "THE NIKUNJ",
      venue_address: <>Emperor Hall <br />NH 8, 22nd Milestone, near IGI Airport,<br /> New Delhi, 110038</>,
      time: "8pm Onwards",
      link: "https://maps.app.goo.gl/1A2TWMfV3A4ECZ2JA",
    },

  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


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

      <audio ref={audioRef} src="/assets/background_song_inter.mp3" loop preload="auto" playsInline />


      {/* hero section */}
      <div
        className="
    bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1771590153/intermobile_bg_tvgk6w.webp')]
    md:bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1771590156/inter_bg_jkjonx.webp')]
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


        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-40 h-40 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-32 h-32 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-40 h-40 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />





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


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-40 h-40 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-40 h-40 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-40 h-40 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-40 h-40 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-32 h-32 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-40 h-40 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />




        {/* <FallingLamps /> */}
        <div className=" pt-24 md:pb-20 relative z-10">

          <h2 className="text-[#DEE6FF]  text-center leading-tight
     text-[70px] sm:text-5xl lg:text-[100px] md:pb-350 pb-0
  flex flex-col items-center gap-y-2">

            <span className="font-parisienne">Ria</span>

            <span className="text-xl sm:text-3xl tracking-[10px] font-cormorant">WEDS</span>

            <span className="font-parisienne">Hargun</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-150 pt-150">


            <img
              src="/assets/ganesh_inter.png"
              alt=""
              className="md:w-40 w-28 h-auto"
            />
            <h2 className="text-[#E6D2FF] md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>
            <h2 className="text-[#E6D2FF] md:text-2xl text-[17px] text-center">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </h2>


            <h2 className="text-[#E6D2FF] lg:text-[30px] md:text-2xl text-[20px] font-cormorant-upright">
              With the heavenly blessings of
              <br /> Late Smt. Shail Bala
            </h2>

            <hr className="lg:w-24 w-16 border-[#E6D2FF] my-4" />

            <h2 className="text-[#E6D2FF] font-cormorant-upright lg:text-[34px] md:text-2xl text-[26px]">
              The Jaiswal Family
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="text-[#E6D2FF] font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-[#E6D2FF] font-cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              you to join us in the wedding celebrations of
            </p>



            <h2 className="text-[#E6D2FF] font-cormorant-upright text-center mt-14
            md:text-5xl text-[64px] lg:text-[100px] leading-tight font-bold">
              RIA
            </h2>


            <p className="text-[#E6D2FF] font-cormorant-upright lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              (Granddaughter of Shri R.S. Jaiswal)
              <br /> (D/o Mrs. Roomy Jaiswal and Mr. Ram Jaiswal)
            </p>




            <h2 className="text-[#E6D2FF] font-cormorant-upright text-center mt-4
            text-[64px] sm:text-7xl lg:text-[100px] leading-tight font-bold">
              <span className="text-[#E6D2FF] font-cormorant-upright text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight">&</span>   <br />
              HARGUN
            </h2>

            <p className="text-[#E6D2FF] font-cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (S/o Sdn. Gurmeet Kaur and Sd. Amarjeet Singh)
            </p>

            <p className="text-[#E6D2FF] font-cormorant-upright lg:text-3xl md:text-2xl text-[24px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-32 gap-2 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-95 sm:w-76 h-auto"
                  />

                  <h2 className="text-[#E6D2FF] font-cormorant-upright lg:text-[45px] md:text-2xl text-[37px] mt-4 font-bold">
                    {event.title_ceremony}
                  </h2>

                  <h2 className="text-[#E6D2FF] font-cormorant-upright lg:text-[35px] md:text-2xl text-[30px] mt-4 font-bold">
                    {event.title}
                  </h2>

                  <p className="text-[#E6D2FF] font-cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    <span className="text-[24px] uppercase"> {event.venue}</span> <br />
                    <span className="text-[20px]">{event.venue_address}</span> <br />
                    <span className="text-[22px]">  {event.time} </span>
                  </p>

                  <a
                    href={event.link}
                    className="text-[#E6D2FF] underline md:text-sm text-[18px] mt-2 font-cormorant"
                    target="_blank"
                  >
                    See the route
                  </a>


                  <h2 className="text-[#E6D2FF] font-cormorant-upright lg:text-[40px] md:text-2xl text-[30px] md:mt-4 mt-10 font-bold">
                    {event.title2}
                  </h2>

                  <p className="text-[#E6D2FF] font-cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[24px]"> {event.venue2}</span> <br />
                    <span className="text-[20px]"> {event.venue_address2} </span><br />
                    <span className="text-[22px]">  {event.time2} </span>
                  </p>
                  {event.link_barat && (
                    <a
                      href={event.link_barat}
                      className="text-[#E6D2FF] underline md:text-sm text-[18px] mt-2 font-cormorant "
                      target="_blank"
                    >
                      See the route
                    </a>
                  )}


                  <h2 className="text-[#E6D2FF] font-cormorant-upright lg:text-[40px] md:text-2xl text-[30px] font-bold mt-12">
                    {event.title3}
                  </h2>
                  <p className="text-[#E6D2FF] font-cormorant-upright text-[14px] sm:text-base md:mt-2">
                    <span className="text-[22px]">  {event.time3} </span>
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:block bg-[url('/assets/meetthebroom.webp')] bg-cover bg-no-repeat">
        <div className="lg:h-325 md:h-180">
          <h1 className="lg:text-3xl text-xl text-center text-[#E1EF1E] lg:pt-64 pt-12 font-cormorant">
            MEET THE
          </h1>
          <h2 className="lg:text-[130px] text-2xl text-center text-[#00EAFF] lg:pt-12 font-cormorant-upright leading-12">
            <span className="text-[#ADBAFF] font-cormorant-upright">Bride</span> <br /> & <br /> <span className="text-[#3FA9FF] font-cormorant-upright ">Groom</span>
          </h2>
        </div>
      </div>


      {/* mobile visible section */}

      <div className="md:hidden bg-[url('/assets/meetthebroom_mobile.webp')] bg-cover bg-no-repeat">
        <div className="h-220">
          <h1 className="text-xl text-center text-[#E1EF1E] lg:pt-48 pt-28 font-cormorant">
            MEET THE
          </h1>
          <h2 className="text-[100px] text-center text-[#00EAFF] font-cormorant-upright mt-6 leading-12">
            <span className="text-[#ADBAFF] font-cormorant-upright">
              Bride </span><br /> & <br /><span className="text-[#3FA9FF] font-cormorant-upright "> Groom </span>
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
