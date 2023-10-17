import { useState, useEffect } from "react";

const Countdown = ({ initialTime, artworkTitle }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    

    useEffect(() => {
        const countdown = setInterval(() => {
            let totalSeconds =
                timeLeft.days * 86400 +
                timeLeft.hours * 3600 +
                timeLeft.minutes * 60 +
                timeLeft.seconds - 1;

            setTimeLeft({
                days: Math.floor(totalSeconds / 86400),
                hours: Math.floor((totalSeconds % 86400) / 3600),
                minutes: Math.floor((totalSeconds % 3600) / 60),
                seconds: Math.floor(totalSeconds % 60),
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [timeLeft]);

    return (
        <div className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded-md shadow-md">
            <p className="text-lg font-bold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
        </div>
    );
};

export default Countdown;