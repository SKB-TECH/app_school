/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import dakImage from '../data/logo1logoDark.png';
import lightImage from '../data/logo1logoLight.png';

const Sidabar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor, currentMode } = useStateContext();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';

  const normal = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="ml-3 h-screen md:overflow-hidden  md:hover:overflow-auto pb-10">
      {
                activeMenu && (
                <><div className="flex justify-between items-center">
                  <Link onClick={handleCloseSideBar} to="/" className="items-center mt-4 gap-3 flex ml-5 font-extrabold tracking-tight dark:text-white text-slate-900">
                    <img src={currentMode == 'Light' ? lightImage : dakImage} width={100} height={80} />
                  </Link>

                  <TooltipComponent content="Menu" position="BottomCenter">
                    <button type="button" onClick={() => setActiveMenu((prevActive) => !prevActive)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                      <MdOutlineCancel />
                    </button>
                  </TooltipComponent>
                </div>
                  <div className="mt-10">
                    {links.map((item, index) => (
                      <div key={index} className="text-gray-400 m-3 mt-4 uppercase">
                        <div key={item.title}>
                          <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                          {
                                    item.links.map((link) => (
                                      <NavLink
                                        to={`/${link.name}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                          backgroundColor: isActive ? currentColor : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normal)}
                                      >
                                        {link.icon}
                                        <span className="capitalize">{link.na}</span>
                                      </NavLink>
                                    ))
                                }
                        </div>
                      </div>
                    ))}
                  </div>
                </>
                )
            }
    </div>
  );
};

export default Sidabar;
