"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-03-09").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const diff = TARGET_DATE - now;
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-[url('/assets/thingtoknow.png')] bg-cover bg-no-repeat">
                <div className="lg:h-150 md:h-100 h-110">
                    <h2 className="lg:text-[40px] text-2xl text-center text-white lg:pt-42 pt-12 font-cormorant">The countdown begins<br />
                        {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
                    <p className="lg:text-[22px] text-[16px] text-[#DEE6FF] mt-4 text-center lg:px-100 md:px-25 px-10 font-cormorant">
                        Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
                    </p>
                    <p className="lg:text-[26px] text-xl text-[#DEE6FF] mt-26 text-center font-cormorant">
                        © Invite Arc 2026 </p>
                </div>
            </div>
        </>
    );
} 8