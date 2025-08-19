import { FaPeopleGroup } from "react-icons/fa6";
import { ImUserCheck } from "react-icons/im";
import { PiLockKeyFill } from "react-icons/pi";
import { MdGppGood } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { MouseEventHandler } from "react";

const drawalData = [
  {title: 'Teams', img: <FaPeopleGroup className="fill-dark" />},
  {title: 'Contact Persons', img: <ImUserCheck className="fill-dark" /> },
  {title: 'Change Password', img: <PiLockKeyFill className="fill-dark"/> },
  {title: '2 - Factor AUthentication', img: <MdGppGood className="fill-dark" />},
  {title: 'Logout', img: <TbLogout2 className="text-mred"/> },
]

const DrawalComponent = ({onClose}:{onClose: ()=>void}) => {
  return (
    <div className='px-4 shadow-2xl text-dark w-max'>
      <div className="bg-grey p-4 rounded-2xl space-y-5 w-full">
        <div className="flex gap-3 bg-gray-200 rounded px-3 py-2">
          <div className="w-12 h-12 rounded-full bg-green-700 text-white font-extrabold grid place-content-center">D</div>
          <div className="flex flex-col justify-between">
            <h3 className="font-bold text-sm lg:text-base">Dayvyno123</h3>
            <p className="text-xs text-gray-500 lg:text-sm">dayvynomern2021@gmail.com</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          {
            drawalData.map((item, i) => (
              <div key={item.title} className="flex flex-col gap-4 w-full  ">
                <div className="flex gap-4 w-full">
                  {item.img}
                  <button onClick={onClose} className={`text-xs md:text-sm cursor-pointer font-medium ${i === drawalData.length-1 ? 'text-mred':'text-gray-600'}`}> {item.title} </button>
                </div>
                <div className="w-full h-[0.5px] bg-gray-200" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DrawalComponent