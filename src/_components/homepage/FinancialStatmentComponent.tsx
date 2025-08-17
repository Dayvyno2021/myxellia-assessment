import { memo } from "react";
import { FaCircleDown, FaCircleUp } from "react-icons/fa6";

enum Statement {
  TIF = 'Total Inflow',
  MRR = 'MRR',
  CMR = 'Commission Revenue',
  GMV = 'GMV'
}

const financialStatement = [
  {title: Statement.TIF, amt: '₦120,000,000.00', profit: '2.5%', logo: <FaCircleUp className="fill-mgreen" /> },
  {title: Statement.MRR, amt: '₦50,000,000.00', profit: '2.5%', logo: <FaCircleUp className="fill-mgreen" /> },
  {title: Statement.CMR, amt: '₦200,000,000.00', profit: '0.5%', logo: <FaCircleDown className="fill-msky" /> },
  {title: Statement.GMV, amt: '₦100,000,000.00', profit: '0.5%', logo: <FaCircleDown className="fill-mred" /> },
]

const FinancialStatmentComponent = () => {
  return (
    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 py-5 px-5 md:p-2 lg:px-5 lg:p gap-5 justify-items-center">
      {
        financialStatement.map((item) => (
          <div key={'financialStatement' + item.title} className="rounded-[12px] shadow-md border border-light-gray px-[15px] md:px-2 lg:px-[15px] py-[13px] flex flex-col items-center sm:items-start w-[70%] sm:w-[189px] md:w-[170px] lg:w-[189px] h-[73px] ">
            <h2 className={`text-[19px] font-semibold ${item.title === Statement.TIF? 'text-mblue' : item.title === Statement.MRR? 'text-mgreen' : item.title === Statement.CMR? 'text-msky':'text-mred' } `}>
              {item.amt}
            </h2>
            <div className="flex gap-[7px] items-center ">
              <p className="text-darkGrey font-medium text-[10px] "> {item.title} </p>
              {item.logo}
              <p className={`text-[10px] ${item.title === Statement.CMR? 'text-msky' : item.title === Statement.GMV? 'text-mred' : 'text-mgreen'} `} > {item.profit} </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default memo(FinancialStatmentComponent);