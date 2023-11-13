import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { pieChartData } from '../data/dummy';
// eslint-disable-next-line import/no-unresolved
import { ChartsHeader, Pie as PieChart } from '../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Stats" title="Effectifs des eleves" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
