'use client';
import { KeyboardEvent, memo } from 'react';
import Image from 'next/image';
import { VscSettings } from "react-icons/vsc";
import { IoMdTrendingUp } from "react-icons/io";
import { LuAlignEndHorizontal } from 'react-icons/lu';

const budgetDetails = [
  {
    title: 'Set up annual budgets by account category',
    description: 'Allocate funds across income and expense lines with full visibility.',
    logo: <VscSettings className='fill-darkGrey2 text-2xl' />
  },
  {
    title: 'Track actuals vs budget in real time',
    description: 'See how your community is performing against plan, month by month.',
    logo:  <div className="w-5 h-5 border-[1.5px] border-darkGrey2 grid place-content-center "> <IoMdTrendingUp className='fill-darkGrey2' /> </div>
  },
  {
    title: 'Adjust figures and forecast with ease',
    description: 'Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.',
    logo: <LuAlignEndHorizontal className='fill-darkGrey2 text-2xl' />
  },
]

const Budget = ({ onClose }: { onClose: () => void }) => {
  
  return (
    <div className="w-full me-auto ">
      <div className='w-[340px] sm:w-[438px]'>
        <div className="bg-[#0c2841] ">
          <Image src={'/images/budgetHero.png'} alt='Budget' width={438} height={261} className='w-full' />
        </div>
        <div className="bg-white pt-6 flex justify-center ">
          <div className="w-[330px] sm:w-[344px] flex flex-col gap-[23px] ">
            {
              budgetDetails.map((detail) => (
                <div key={detail.title} className="flex gap-3 items-center">
                  {detail.logo}
                  <div className="space-y-1">
                    <h1 className="font-semibold text-sm md:text-base ">
                      {detail.title}
                    </h1>
                    <p className="text-xs">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="py-6 bg-white px-[47px] rounded-b-[10px]">
          <button aria-label='Create Budget' onClick={onClose} className="w-full bg-[#18181B] font-medium text-white button__hover button__active rounded-r-full rounded-l-full text-sm sm:text-base h-[46px] ">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Budget)