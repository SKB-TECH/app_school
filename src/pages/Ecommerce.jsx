/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Calendar, Table } from 'antd';
import { FcCalendar } from 'react-icons/fc';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-slick';
import Avatar from '../data/Avatarprofile.png';
import { LineChart } from '../components';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'slick-carousel/slick/slick-theme.css';
// eslint-disable-next-line import/named
import { employeesDataII } from '../data/dummy';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
  },
  Table.EXPAND_COLUMN,
  {
    title: 'Fonction',
    dataIndex: 'Title',
    key: 'Title',
  },
  Table.SELECTION_COLUMN,
  {
    title: 'Address',
    dataIndex: 'Country',
    key: 'Country',
  },
  {
    title: 'Staus',
    key: 'tags',
    dataIndex: 'tags',
    render: () => (
      <span className="bg-green-400 text-black text-lg rounded-full w-24 h-24 p-2">P</span>
    ),
  },
];

const Ecommerce = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'w-full h-full',
    autoplaySpeed: 4000,
  };
  return (
    <div className="ml-5 grid grid-cols-3 justify-around mt-5">
      <div className="col-span-2 gap-5">
        <div className="min-w-full flex flex-col justify-around gap-5">
          <div className="bg-gradient-to-r from-black w-[95%] app h-56 rounded-lg p-3">
            <Slider {...settings}>
              <div className="flex flex-col h-full min-w-full justify-center items-center">
                <h3 className="self-end text-white font-bold text-lg">Bienvenu Chaez Rootech-drc</h3>
                <p className="text-white text-lg font-semibold">Realiser une gestion scolaire Efficace avec nous</p>
              </div>
              <div>
                <h3 className="self-end text-white font-bold text-lg">Plusieurs Fonctionalite</h3>
                <p className="text-white text-lg font-semibold">Cours, Titulaires, Personnel, Finance, Taches</p>
              </div>
            </Slider>

          </div>
          <div className="w-[95%] rounded-lg border border-gray-300 flex flex-col bg-white dark:bg-main-dark-bg">
            <h4 className="dark:text-white text-center mb-2 font-semibold">Effectif du Jour</h4>
            <LineChart />
          </div>
          <div className="w-[95%]  rounded-lg border border-gray-300 dark:bg-secondary-dark-bg">
            <Table columns={columns} dataSource={employeesDataII} />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="col-span-2 gap-5">
          <div className="min-w-full flex flex-col justify-around gap-5">
            <div className="w-[95%] h-56 rounded-lg  bg-main-bg dark:bg-secondary-dark-bg">
              <div className="w-full flex flex-col justify-around items-center p-2  dark:bg-secondary-dark-bg">
                <img src={Avatar} width={50} height={50} alt="photo" className="rounded-full" />
                <h2 className="font-bold dark:text-white">Mr Root</h2>
                <span className="font-semibold dark:text-gray-400 text-sm">+243 977423201</span>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <p className="font-semibold dark:text-gray-400 text-sm">Matricule: <span className="ml-4 dark:text-white">0976353</span></p>
                <p className="font-semibold dark:text-gray-400 text-sm">Fonction:  <span className="ml-4 dark:text-white">Titulaie</span></p>
                <p className="font-semibold dark:text-gray-400 text-sm">Niveau:     <span className="ml-4 dark:text-white">Licencie</span></p>
              </div>
            </div>
            <div className="w-[95%] rounded-lg border border-gray-300 dark:bg-secondary-dark-bg ">

              <Calendar fullscreen={false} />

            </div>
            <div className="w-[95%] flex flex-col border-gray-300 ">
              <h4 className="dark:text-red-500 text-lg font-semibold text-center p-1">Rappel du Jour</h4>
              <div className="flex justify-center items-center gap-5">
                <FcCalendar size={25} />
                <p className="flex flex-col gap-1">
                  <h5 className="dark:text-gray-300 font-bold text-[14px]">Jour National du travail</h5>
                  <span className="dark:text-gray-300 text-gray-300 text-sm">
                    2023-05-01
                  </span>
                </p>
                <span className="bg-red-500 text-white p-1 rounded-lg self-end">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ecommerce;
