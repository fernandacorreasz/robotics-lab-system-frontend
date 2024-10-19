import { Button } from 'antd';
import React from 'react';

interface Props {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ type = 'primary', text, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
