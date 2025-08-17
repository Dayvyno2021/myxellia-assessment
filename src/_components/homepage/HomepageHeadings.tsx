import { useState } from "react"

const initialVals = [
  {name:'1 Week', selected:false},
  {name:'1 Month', selected:false},
  {name:'1 Year', selected:true},
]

const HomepageHeadings = () => {

  const [dateObjects, setDateObjects] = useState(initialVals)

  const activateDate = (idx:number) => {
    const objs = dateObjects.map((item, i) => {
      if (idx === i) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return item;
    })

    setDateObjects(objs);
  }

  return (
    <div className="flex border-b border-light-gray w-full h-[256px] md:h-[128px] flex-col md:flex-row ">
      <div className="md:pt-[18px] md:px-[22px] w-full md:w-1/2 h-full flex flex-col gap-3 items-center md:items-start justify-center md:justify-start ">
        <h2 className="text-sm md:text-xl font-semibold w-full text-center md:text-left ">Sales Overview</h2>
        <p className="text-xs w-full text-center md:text-left">Showing overview Jan 2022 - Sep 2022</p>
      </div>
      <div className="h-full w-full md:w-1/2 flex flex-col justify-between items-center md:items-end py-[18px] md:px-[22px] ">
        <button aria-label="View Transactions" className="w-[177px] text-xs cursor-pointer shadow rounded-[72px] h-[46px] border border-gray-300 grid place-content-center hover:bg-grey transition-all ">
          View Transactions
        </button>
        <nav className="w-[264px] flex gap-3 ">
          {
            dateObjects.map((item, i) => (
              <button aria-label={item.name} onClick={()=>activateDate(i)} key={item.name} className={`w-20 cursor-pointer transition-all h-[33px] text-sm hover:bg-grey rounded-[8px] grid place-content-center ${item.selected? 'bg-grey font-semibold shadow':'bg-white'} `}>
                {item.name}
              </button>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

export default HomepageHeadings