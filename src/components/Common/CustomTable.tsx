import React from 'react';
import { ConfigProvider, Table, Empty, TableProps as AntTableProps } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';
import { Theme } from '../../styles/ThemeComponent';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    [key: string]: string | number;
}

interface CustomTableProps<T> {
    dataSource: T[];
    columns: AntTableProps<T>['columns'];
    size: string | number | undefined;
    loading?: boolean;
    isLoadData?: boolean;
    onClick?: (record: T) => void;
    rowSelection?: TableRowSelection<T> | undefined;
    style?: React.CSSProperties | undefined;
    numberOfElements?: number;
    rowKey?: string | ((record: T) => string) | undefined;
}

const TableComponent = <T extends DataType>({
    dataSource,
    columns,
    size,
    isLoadData,
    onClick,
    rowSelection,
    style,
    loading,
    numberOfElements,
    rowKey, // Recebendo rowKey como prop
}: CustomTableProps<T>): React.ReactElement => {
    const handleRowOnClick = (record: T) => {
        if (onClick) {
            onClick(record);
        }
    };

    return (
        <ConfigProvider theme={{ components: { Table: Theme.components.Table } }}>
            <Table<T>
                dataSource={dataSource}
                columns={columns}
                scroll={{ y: size }}
                pagination={false}
                onRow={(record) => ({
                    onClick: () => handleRowOnClick(record),
                })}
                rowSelection={rowSelection}
                style={style}
                loading={isLoadData || loading}
                locale={{
                    emptyText: numberOfElements === 0 ? <Empty /> : null,
                }}
                rowKey={rowKey || 'key'} // Definindo valor padrão para rowKey
            />
        </ConfigProvider>
    );
};

export default TableComponent;
