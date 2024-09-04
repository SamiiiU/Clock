import React, { useEffect, useState } from "react";

function App() {
  const numbers = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 , 330, 360];

  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  // Use useEffect to set up the interval when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date(); // Create a new Date object every second

      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());

      console.log(seconds);
    }, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-gradient-to-r from-[#2B303A] via-[#2B303A]/90 to-[#2B303A] w-full flex-col gap-9 flex justify-center items-center  min-h-screen ">
      <div className="shadow-2xl shadow-zinc-900 w-[20em] flex justify-center items-center h-[20em] rounded-full bg-[#D64933]">
        <span className="z-10 w-[95%] h-[95%] rounded-full  bg-[#22262e] "></span>

        {/* Seconds wali */}
        <div
          className={`absolute w-2 h-2 z-50 bg-zinc-900 flex justify-center rounded-full`}
          style={{ transform: `rotate(${seconds * 6}deg)` }}
        >
          <span className="absolute h-[8em] z-40 rounded-2xl w-[0.25rem] bottom-[100%] bg-[#D64933] "></span>
        </div>

        {/* Minutes wali */}
        <div
          className="absolute w-2 h-2 z-50  bg-zinc-900 flex justify-center   rounded-full"
          style={{ transform: `rotate(${minutes * 6}deg)` }}
        >
          <span className="absolute h-[6em] z-40 rounded-2xl w-[0.25rem] bottom-[100%] bg-[#D64933] "></span>
        </div>

        <div
          className="absolute w-2 h-2 z-50  bg-zinc-900 flex justify-center   rounded-full"
          style={{
            transform: `rotate(${
              hours > 12 ? (hours - 12) * 30 : hours * 30
            }deg)`,
          }}
        >
          <span className="absolute h-[4em] z-40 rounded-2xl w-[0.25rem] bottom-[100%] bg-[#D64933] "></span>
        </div>

        {/* Numbers */}

        {numbers &&
          numbers.map((item, idx) => (
            <>
              <div    key={idx} className="z-50 absolute w-2 h-2  bg-[#BAC1B8] flex justify-center    rounded-full" 
              style={{ transform: `rotate(${+item}deg)` }}>
                <div
                
                  className={`absolute  h-[8.5em] rounded-2xl    w-1 bottom-[100%]  `}
                  
                >
                  <span className="absolute w-full h-6 bg-[#BAC1B8] rounded-full" />
                </div>
              </div>
            </>
          ))}

        <div className="z-20 absolute text-xl font-bold  px-2 py-1 bottom-[40%] rounded-lg bg-[#2B303A]/50 text-teal-50/50">
        {hours > 12 ? hours - 12 : hours} : {minutes} : {seconds < 10 ? `0${seconds}` : seconds}

      </div>
      </div>


      
    </div>
  );
}

export default App;
