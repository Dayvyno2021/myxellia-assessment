'use client';

import HomeBarChart from "@/_components/homepage/HomeBarChart";
import FinancialStatmentComponent from "@/_components/homepage/FinancialStatmentComponent";
import HomepageHeadings from "@/_components/homepage/HomepageHeadings";
import OverviewDetails from "@/_components/homepage/OverviewDetails";
import PhotosDisplay from "@/_components/homepage/PhotosDisplay";

export default function Home() {

  return (
    <main className="w-full bg-grey text-dark">
      <section className="w-full px-4 sm:px-8 xl:px-[78px] py-7 space-y-5">
        <h2 className="text-sm md:text-xl font-semibold">Welcome, David</h2>
        <div className="flex flex-col gap-5 2xl:flex-row ">
          <div className="rounded-[12px] border border-light-gray w-full 2xl:w-[70%] bg-white ">
            <HomepageHeadings />
            <div className="flex w-full flex-col md:flex-row min-h-[197px] ">
              <HomeBarChart />
              <FinancialStatmentComponent />
            </div>
          </div>
          <OverviewDetails />
        </div>
      </section>

      <PhotosDisplay/>
    </main>
  );
}
