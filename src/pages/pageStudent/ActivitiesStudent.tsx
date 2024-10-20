import React, { useState, useEffect } from 'react';
import { Tag, Pagination } from 'antd';
import CustomButton from '../../components/Common/CustomButton';
import TableComponent from '../../components/Common/CustomTable';
import { Activity } from '../../models/Activity';
import data from '../../assets/data-teste/activitiesData.json'; // Importar o arquivo JSON

const ActivitiesStudent: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize] = useState(5);

  useEffect(() => {
    setActivities(data.content);
    setTotal(data.totalElements);
  }, [page]);

  const columns = [
    {
      title: 'Título',
      dataIndex: 'activityTitle',
      key: 'activityTitle'
    },
    {
      title: 'Tempo Investido',
      dataIndex: 'timeSpent',
      key: 'timeSpent',
      render: (text: number) => `${Math.floor(text / 60)}h${text % 60}m`
    },
    {
      title: 'Status',
      dataIndex: 'activityStatus',
      key: 'activityStatus',
      render: (status: string) => (
        <Tag color={status === 'Completed' ? 'green' : 'orange'}>
          {status === 'Completed' ? 'Finalizada' : 'Em progresso'}
        </Tag>
      )
    },
    {
      title: 'Data Inicial',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date: string) => new Date(date).toLocaleDateString()
    },
    {
      title: 'Data Final',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date: string) => new Date(date).toLocaleDateString()
    }
  ];

  const handleExport = () => {
    console.log("Exportar Relatório");
  };

  return (
    <div>
      <h2>Lista de Atividades</h2>

      <div style={{ marginBottom: '20px' }}>
        <CustomButton text="Exportar Relatório" type="primary" onClick={handleExport} />
      </div>

      <TableComponent<Activity>
        dataSource={activities}
        columns={columns}
        size="300px"
        loading={false}
        isLoadData={false}
        numberOfElements={activities.length}
        rowKey="id"
      />

      <Pagination
        current={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
};

export default ActivitiesStudent;
