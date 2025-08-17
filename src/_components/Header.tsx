'use client';

import { budget, calendar, messages, notification } from "@/data";
import Image from "next/image";
import { TiHome } from "react-icons/ti";
import { PiToolbox } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { PiArticle } from "react-icons/pi";
import { PiScroll } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Modal from "./Modal";
import CalendarComponent from "./CalendarComponent";
import Budget from "./Budget";
import { FaAngleDoubleDown } from "react-icons/fa";
import { BsChevronBarContract } from "react-icons/bs";

enum HeadTitle{
  calendar = 'Calendar',
  budget = 'Budget',
  notification = 'Notification',
  messages = 'Messages'
}

const headerNavItems = [
  { name: HeadTitle.notification, img: notification, isDisabled: true },
  { name: HeadTitle.budget, img: budget, isDisabled: false },
  { name: HeadTitle.calendar, img: calendar, isDisabled: false },
  { name: HeadTitle.messages, img: messages, isDisabled: true },
]

const subNavItems = [
  { name: 'Dashboard', img: <TiHome /> , route: '/' },
  {name: 'Listings', img: <PiToolbox/>, route: '/listings'},
  {name: 'Users', img: <FaRegUser/>, route: '/users'},
  {name: 'Request', img: <PiArticle/>, route: '/request'},
  {name: 'Applications', img: <PiScroll/>, route: '/applications'},
]

interface ModalControlType{
  isOpen: boolean,
  active: HeadTitle | null
}

const Header = () => {
  const pathname = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modal, setModal] = useState<ModalControlType>({ isOpen: false, active: null });
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleClose = (heading?: HeadTitle) => {
    if (heading) {
      return setModal((val) => ({active: heading, isOpen: !val.isOpen }));
    }
    setModal((val) => ({ isOpen: !val.isOpen, active: null }));

  }

  return (
    <header className="w-full">
      <div className="w-full z-10 fixed top-0 left-0 right-0 h-[82px] bg-dark flex items-center justify-between px-4 lg:px-[78px] ">
        <Link href={'/'}>
          <Image src={'/images/logo.svg'} alt="Myxellia-logo" width={153.23} height={26}
            className="w-[120px] md:w-[153.23px] "
            priority
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-[25px] overflow-hidden ">
          <nav className={`flex items-center gap-1 md:gap-6 relative ${isDrawerOpen? 'nav__in':'nav__out'}`}>
            {
               headerNavItems.map((item) => (
                <button aria-label={item.name} onClick={()=>handleClose(item.name)} key={item.name} disabled={item.isDisabled} className="w-8 h-8 grid place-content-center nav_items">
                  {item.img}
                </button>
              ))
            }
          </nav>
          <button
            aria-label="Drawer"
            className="w-10 h-10 bg-white hover:bg-grey transition-all rounded-full text-dark grid place-content-center text-[23px] font-bold cursor-pointer "
            onClick={()=>setIsDrawerOpen((val)=>!val)}
          >
            D
          </button>
        </div>
      </div>
      <div className={`w-full py-4 sm:py-5 mt-[82px] flex justify-center gap-4 px-4 bg-white 2xl:px-[78px] flex-wrap relative ${!isNavOpen && 'mb-5'}`}>
        <nav className={`flex gap-3 sm:gap-5 flex-wrap justify-center order-2 xl:order-1 overflow-hidden ${isNavOpen? 'open__nav':'close__nav'}`}>
          {
            subNavItems.map((item) => (
              <Link ariab-label={item.name} href={item.route} key={item.name} className={`w-[140px] sm:w-[170px] py-[7px] transition-all hover:bg-grey flex items-center px-4 sm:px-[25px] rounded-[8px] gap-2 text-dark ${pathname === item.route? 'bg-grey':''}`}>
                <span className={`inline-block `}> {item.img} </span>
                <span className="inline-block"> {item.name} </span>
              </Link>
            ))
          }
        </nav>
        <button onClick={()=>setIsNavOpen((val)=>!val)} className="bg-mblue/30 button__active shadow-md rounded-full p-2 absolute top-14 right-2 spmd:hidden ">
          {
            isNavOpen?  (<BsChevronBarContract />): (<FaAngleDoubleDown />)
          }
        </button>
        <div className=" w-[80%] md:w-[60%] xl:w-[319px] h-[43px] order-1 xl:order-2 relative ">
          <input aria-label="Search input" type="search" className="py-[9.5px] pl-12 pr-4 w-full h-[43px] bg-grey rounded-[12px] text-dark focus:outline-none focus:border-2 transition-all hover:border input__m hover:border-mblue focus:border-mblue " />
          <CiSearch className="absolute left-4 top-1/2 fill-dark -translate-y-1/2 text-2xl " />
        </div>
      </div>
      <Modal isOpen={modal.isOpen} onClose={handleClose}>
        {
          modal.active === HeadTitle.calendar ? (
            <CalendarComponent
              onClose={handleClose}
            />
          ) : (
              modal.active === HeadTitle.budget ? (
             <Budget onClose={handleClose} />
              ) : (
                <p className="text-mred">The active Header is {modal.active}</p>
             )
          )
        }
      </Modal>
    </header>
  )
}

export default Header