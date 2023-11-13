import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Inject, Search, Toolbar, Selection, Edit, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => (
  <div className="m-2 md:m-5 p-2 md:p-10 bg- rounded-3xl bg-white">
    <Header category="Personnel" title="Personnel Scolaire" />
    <GridComponent
      width="auto"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search', 'Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
    >
      <ColumnsDirective>
        {
                customersGrid.map((item, index) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <ColumnDirective key={index} {...item} />
                ))
            }
      </ColumnsDirective>
      <Inject services={[Search, Sort, Page, Toolbar, Edit]} />
    </GridComponent>
  </div>
);

export default Customers;
