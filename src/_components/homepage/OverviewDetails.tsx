import { memo } from "react";
import OverviewCard from "@/_components/homepage/OverviewCard";

const OverviewDetails = () => {
  return (
    <div className="w-full 2xl:w-[30%] flex flex-col lg:flex-row gap-5 items-center lg:justify-center lg:gap-20 2xl:gap-5 2xl:flex-col ">
      <OverviewCard
        logoUrl='/images/solar-home.svg'
        title='Listings Overview'
        details={[['Total', '1.8k'], ['Active', '80'], ['Archived', '1k']]}
      />
      <OverviewCard
        logoUrl='/images/profile.svg'
        title='Users Overview'
        details={[['Total', '20.7k'], ['Riders', '8.5k'], ['Subscribers', '7.5k']]}
      />
    </div>
  )
}

export default memo(OverviewDetails);