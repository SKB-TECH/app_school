import React from 'react';
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => (
  <div className="mt-24 m-2 md:m-5 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Taches" category="Gestion des Taches" />
    <KanbanComponent
      id="kanabn"
      dataSource={kanbanData}

      // eslint-disable-next-line react/jsx-props-no-multi-spaces
      cardSettings={{
        contentField: 'Summary',
        headerField: 'Id',
      }}
      keyField="Status"
    >
      <ColumnsDirective>
        {
            kanbanGrid.map((item, index) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <ColumnDirective key={index} {...item} />
            ))
          }
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
