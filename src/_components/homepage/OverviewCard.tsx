import { FC, memo } from 'react';
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa6';

interface Props {
  logoUrl: string,
  title: string,
  details: Array<[string, string]>
}

const OverviewCard: FC<Props>  = ({logoUrl, title, details}) => {
  return (
    <div className="w-full sm:w-[407px] h-[152px] rounded-[16px] border border-light-gray shadow-md ">
      <div className="h-[32%] bg-light-gray flex items-center justify-between rounded-t-[16px] px-4 ">
        <div className="flex gap-[10px] items-center ">
          <Image src={logoUrl} width={24} height={24} alt="Myxillia overview ratings" />
          <p className="text-sm font-medium"> {title} </p>
        </div>
        <button aria-label='View all' className="text-mblue flex move__right items-center gap-[2px] text-xs cursor-pointer transition-all ">
          <span>View all</span>
          <FaAngleRight className='relative' />
        </button>
      </div>
      <div className="h-[68%] p-4 flex justify-between items-center bg-white rounded-b-[16px] ">
        {
          details.map((item) => (
              <div key={item[0] + item[1]} className="flex flex-col gap-2">
                <p className="text-sm font-medium text-darkGrey2"> {item[0]} </p>
                <p className="text-2xl font-semibold text-dark "> {item[1]} </p>
              </div>
            ))
          
        }
      </div>
    </div>
  )
}

export default memo(OverviewCard);