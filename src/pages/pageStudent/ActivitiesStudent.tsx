import React, { useState, useEffect } from "react";
import { Pagination, Space, Tag, Row, Col } from "antd";
import CustomButton from "../../components/Common/CustomButton";
import CustomModal from "../../components/Common/CustomModal";
import CustomTable from "../../components/Common/CustomTable";
import CustomForm from "../../components/Common/CustomForm";
import CustomFilter from "../../components/Common/CustomFilter";
import { Activity } from "../../models/Activity";
import data from "../../assets/data-teste/activitiesData.json";
import { RobotOutlined } from "@ant-design/icons";
import HeaderCard from "../../components/Cards/HeaderCardStudants";
import CustomComment from "../../components/Common/CommentSection";
import CodeInput from "../../components/Common/CodeInput";

/* TODO: Necessário intregar a api de atividades , comentarios e fotos de atividades  */
const ActivitiesStudent: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize] = useState(5);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    setActivities(data.content);
    setFilteredActivities(data.content);
    setTotal(data.totalElements);
  }, []);

 
   
  const handleFilter = (value: string) => {
    const filtered = activities.filter((activity) =>
      activity.activityTitle.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredActivities(filtered);
  };
  const handleCodeSave = (newCode: string) => {
    console.log('Código salvo:', newCode);
  }

  const handleAdd = () => setIsAddModalVisible(true);
  const handleEdit = (record: Activity) => {
    setSelectedActivity(record);
    setIsEditModalVisible(true);
  };
  const handleDelete = (record: Activity) => console.log("Excluir", record);

  const handleView = (record: Activity) => {
    setSelectedActivity(record);
    setComments([]);
    setIsViewModalVisible(true);
  };

  const handleAddComment = (comment: string) => {
    if (selectedActivity) {
      setComments([...comments, comment]); // Adiciona o novo comentário
    }
  };

  const columns = [
    { title: "Título", dataIndex: "activityTitle", key: "activityTitle" },
    {
      title: "Tempo Investido",
      dataIndex: "timeSpent",
      key: "timeSpent",
      render: (text: number) => `${Math.floor(text / 60)}h${text % 60}m`,
    },
    {
      title: "Status",
      dataIndex: "activityStatus",
      key: "activityStatus",
      render: (status: string) => (
        <Tag color={status === "Completed" ? "green" : "orange"}>
          {status === "Completed" ? "Finalizada" : "Em progresso"}
        </Tag>
      ),
    },
    {
      title: "Data Inicial",
      dataIndex: "startDate",
      key: "startDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Data Final",
      dataIndex: "endDate",
      key: "endDate",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Ações",
      key: "actions",
      render: (_: unknown, record: Activity) => (
        <Space size="middle">
          <CustomButton text="Visualizar" onClick={() => handleView(record)} />
          <CustomButton text="Editar" onClick={() => handleEdit(record)} />
          <CustomButton
            text="Excluir"
            type="default"
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const formFields = [
    {
      name: "activityTitle",
      label: "Título",
      type: "text" as const,
      placeholder: "Digite o título da atividade",
      rules: [{ required: true, message: "Por favor, insira o título!" }],
    },
    {
      name: "activityDescription",
      label: "Descrição",
      type: "textarea" as const,
      placeholder: "Descreva a atividade",
      rules: [{ required: true, message: "Por favor, insira a descrição!" }],
    },
    {
      name: "timeSpent",
      label: "Tempo Investido (em minutos)",
      type: "number" as const,
      placeholder: "Digite o tempo investido",
      rules: [
        { required: true, message: "Por favor, insira o tempo investido!" },
      ],
    },
    {
      name: "startDate",
      label: "Data Inicial",
      type: "date" as const,
      rules: [{ required: true, message: "Por favor, insira a data inicial!" }],
    },
    {
      name: "endDate",
      label: "Data Final",
      type: "date" as const,
      rules: [{ required: true, message: "Por favor, insira a data final!" }],
    },
  ];

  const mapActivityToFormValues = (
    activity: Activity | null
  ): Record<string, unknown> => {
    if (!activity) return {};
    return {
      activityTitle: activity.activityTitle,
      activityDescription: activity.activityDescription,
      timeSpent: activity.timeSpent,
      startDate: activity.startDate,
      endDate: activity.endDate,
    };
  };
  

  return (
    <div>
       <HeaderCard />
      <Row justify="space-between" style={{ marginBottom: "20px" }}>
        <Col>
          <CustomFilter
            placeholder="Filtrar Atividades"
            onSearch={handleFilter}
          />
        </Col>
        <Col>
          <CustomButton text="Adicionar Atividade" onClick={handleAdd} />
        </Col>
      </Row>

      <CustomTable<Activity>
        dataSource={filteredActivities}
        columns={columns}
        size="600px"
        loading={false}
        isLoadData={false}
        numberOfElements={filteredActivities.length}
        rowKey="id"
      />

      <Pagination
        current={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
        style={{ marginTop: "20px", textAlign: "center" }}
      />

      <CustomModal
        title="Adicionar Atividade"
        visible={isAddModalVisible}
        onOk={() => setIsAddModalVisible(false)}
        onCancel={() => setIsAddModalVisible(false)}
      >
        <CustomForm
          fields={formFields}
          onFinish={(values) => console.log(values)}
        />
      </CustomModal>

      <CustomModal
        title="Editar Atividade"
        visible={isEditModalVisible}
        onOk={() => setIsEditModalVisible(false)}
        onCancel={() => setIsEditModalVisible(false)}
      >
        <CustomForm
          fields={formFields}
          initialValues={mapActivityToFormValues(selectedActivity)}
          onFinish={(values) => console.log(values)}
        />
      </CustomModal>

      <CustomModal
        title="Visualizar Atividade"
        visible={isViewModalVisible}
        onOk={() => setIsViewModalVisible(false)}
        onCancel={() => setIsViewModalVisible(false)}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <RobotOutlined style={{ fontSize: "64px", color: "#1890ff" }} />
        </div>
        {selectedActivity && (
          <div>
            <p>
              <strong>Título:</strong> {selectedActivity.activityTitle}
            </p>
            <p>
              <strong>Descrição:</strong> {selectedActivity.activityDescription}
            </p>
            <p>
              <strong>Tempo Investido:</strong>{" "}
              {Math.floor(selectedActivity.timeSpent / 60)}h{" "}
              {selectedActivity.timeSpent % 60}m
            </p>
            <p>
              <strong>Status:</strong> {selectedActivity.activityStatus}
            </p>
            <p>
              <strong>Data Inicial:</strong>{" "}
              {new Date(selectedActivity.startDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Data Final:</strong>{" "}
              {new Date(selectedActivity.endDate).toLocaleDateString()}
            </p>
            <CodeInput onSave={handleCodeSave} />
            <CustomComment comments={comments} onAddComment={handleAddComment} />
          </div>
        )}
      </CustomModal>
    </div>
  );
};

export default ActivitiesStudent;
