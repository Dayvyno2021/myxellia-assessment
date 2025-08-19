"use client";

import {FC, memo, useState} from "react";
import { DayPicker } from "react-day-picker";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface Props{
  onClose: () => void;
}

const CalendarComponent: FC<Props> = ({onClose}) => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-black text-white p-4 rounded-lg w-full justify-center flex flex-col gap-5 ">
      <div className=" h-[50px] flex items-center w-full justify-between ">
        <p className="flex text-white gap-2 font-semibold items-center">
          <MdKeyboardBackspace className="fill-white" />
          <span>Calendar</span>
        </p>
        <button onClick={onClose} className="hover:rotate-90 transition-all cursor-pointer" >
          <IoClose className="fill-white text-2xl" />
        </button>
      </div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        className="text-[#969696] flex"
        modifiersClassNames={{
          selected: "bg-blue-600 text-white ",
          today: "text-blue-400",
        }}
        styles={{
          caption: { color: "white" },
          head: { color: "gray"},
          day: { fontSize: '9px', border: '1px solid #242424', fontWeight: 600, },
        }}
        navLayout="around"
      />
    </div>
  );
}

export default memo(CalendarComponent);