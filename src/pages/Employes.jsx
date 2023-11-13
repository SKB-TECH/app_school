import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employes = () => (
  <div className="m-2 md:m-5 p-2 md:p-10 bg- rounded-3xl bg-white">
    <Header category="Cours" title="Cours et leurs Titulaires" />
    <GridComponent
      width="auto"
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
    >
      <ColumnsDirective>
        {
                employeesGrid.map((item, index) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <ColumnDirective key={index} {...item} />
                ))
            }
      </ColumnsDirective>
      <Inject services={[Search, Sort, Page, Toolbar]} />
    </GridComponent>
  </div>
);
export default Employes;
