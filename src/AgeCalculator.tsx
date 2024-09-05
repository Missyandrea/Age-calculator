import { useState } from "react";
import { Entry } from "./components/Entry";
import { AgeDisplay } from "./components/AgeDisplay";

export const AgeCalculator = () => {
  const [birthday, setBirthDay] = useState<number>();
  const [birthMonth, setBirthMonth] = useState<number>();
  const [birthYear, setBirthYear] = useState<number>();

  const [dayOld, setDayOld] = useState<number>();
  const [monthOld, setMonthOld] = useState<number>();
  const [yearOld, setYearOld] = useState<number>();

  const handleClick = () => {
    calculateAge(birthday!, birthMonth!, birthYear!);
  };

  const calculateAge = (
    birthDay: number,
    birthMonth: number,
    birthYear: number
  ) => {
    const now = new Date();
    setYearOld(now.getFullYear() - birthYear);
    // Logic verification required for calculataing the month and day
    setDayOld(Math.abs(now.getDate() - birthDay));
    setMonthOld(Math.abs(now.getMonth() + 1 - birthMonth));
  };

  const getDay = (day: number) => {
    setBirthDay(day);
  };
  const getMonth = (day: number) => setBirthMonth(day);
  const getYear = (day: number) => setBirthYear(day);

  return (
    <>
      <div className="flex-col bg-white shadow-md p-6 rounded-card ">
        <div className="flex entries space-x-5">
          <Entry label="Day" placeholder="DD" sendDateValue={getDay}></Entry>
          <Entry
            label="Month"
            placeholder="MM"
            sendDateValue={getMonth}
          ></Entry>
          <Entry
            label="Year"
            placeholder="YYYY"
            sendDateValue={getYear}
          ></Entry>
        </div>
        <div className="flex pt-1 items-center">
          <hr className="w-full bg-gray-300 h-0.5"/>
          <button
            className="rounded-full bg-purple-600 h-14 w-16
             text-white text-xl font-bold hover:bg-black"
            onClick={() => handleClick()}
          >
            Click
          </button>
        </div>
        <AgeDisplay title="Years" dateValue={yearOld}></AgeDisplay>
        <AgeDisplay title="Months" dateValue={monthOld}></AgeDisplay>
        <AgeDisplay title="Days" dateValue={dayOld}></AgeDisplay>
      </div>
    </>
  );
};
