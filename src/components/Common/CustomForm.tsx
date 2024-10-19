import { Form, Input, Button } from 'antd';
import React from 'react';

interface FormValues {
  name: string;
  description: string;
}

const CustomForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log('Form Values:', values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Nome"
        rules={[{ required: true, message: 'Por favor, insira um nome!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Descrição"
        rules={[{ required: true, message: 'Por favor, insira uma descrição!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
