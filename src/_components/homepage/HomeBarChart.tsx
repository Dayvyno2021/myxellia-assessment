'use client';
import { useEffect, useRef, useState } from "react";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const data = [
  { name: 'Jan', uv: 40, pv: 24, amt: 24,},
  { name: 'Feb', uv: 30, pv: 13, amt: 22,},
  { name: 'Mar', uv: 20, pv: 98, amt: 22,},
  { name: 'Apr', uv: 27, pv: 39, amt: 20,},
  { name: 'May', uv: 18, pv: 48, amt: 21,},
  { name: 'Jun', uv: 23, pv: 38, amt: 25,},
  { name: 'Jul', uv: 34, pv: 43, amt: 21,},
  { name: 'Aug', uv: 34, pv: 43, amt: 21,},
  { name: 'Sep', uv: 34, pv: 43, amt: 21,},
  { name: 'Oct', uv: 34, pv: 43, amt: 21,},
  { name: 'Nov', uv: 34, pv: 43, amt: 21,},
  { name: 'Dec', uv: 34, pv: 43, amt: 21,},
];

const HomeBarChart = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Check scroll position on mount + resize + scroll
  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      container?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 h-full lg:pr-10 flex justify-center gap-2 md:gap-5 items-center px-5 ">
                
      {
        canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className=" bg-light-gray rounded-full shadow-md p-2 hover:bg-gray-300 transition-all cursor-pointer"
          >
            <IoCaretBackOutline className="text-sm fill-dark " />
          </button>
        )
      }
      <div ref={scrollRef} className="overflow-x-scroll flex-1 scrollbar-hide mx-auto h-full ">

        <BarChart
          width={500}
          height={180}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 5,
            bottom: 5,
          }}
          barSize={4}
          barGap={3}
          barCategoryGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit='m' />
          <Tooltip />
          <Bar dataKey="uv" barSize={4} fill="#12B76A" activeBar={<Rectangle fill="#12B76A" stroke="#12B76A" />} />
          <Bar dataKey="pv" barSize={4} fill="#4545FE" activeBar={<Rectangle fill="#4545FE" stroke="#4545FE" />} />
          <Bar dataKey="amt" barSize={4} fill="#F04438" activeBar={<Rectangle fill="#F04438" stroke="#F04438" />} />
        </BarChart>
        
      </div>

      {
        canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className=" bg-light-gray rounded-full shadow-md p-2 hover:bg-gray-300 transition-all cursor-pointer "
          >
            <IoCaretForwardOutline className="text-sm fill-dark" />
          </button>
        )
      }

    </div>
  );
};

export default HomeBarChart;
