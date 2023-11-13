import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search } from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => (
  <div className="m-2 md:m-5 p-2 md:p-10 bg- rounded-3xl bg-white">
    <Header category="Eleves" title="Les Eleves" />
    <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      editSettings={{ allowDeleting: true, allowEditing: true }}
      toolbar={['Search', 'Delete']}
    >
      <ColumnsDirective>
        {
                ordersGrid.map((item, index) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <ColumnDirective key={index} {...item} />
                ))
            }
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, PdfExport, ExcelExport, Page, Filter, Edit, Search]} />
    </GridComponent>
  </div>
);

export default Orders;
