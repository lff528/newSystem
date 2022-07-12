import { Table, Button ,Tag,Modal} from 'antd'
import { ColumnsType, } from 'antd/lib/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DeleteOutlined, EditOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
export default function RightList() {
  interface DataType {
    title: string;
    id: number;
    key: string;
    children?: DataType[];
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'name',
    },
    {
      title: '权限名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      render:(key)=> {
        return <Tag color="orange">{key}</Tag>
      }
    },
    {
      title: '操作',
      render: (item)=> {
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick = {()=>deleteBtn(item)} />
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
        </div>
      }
    },
  ];

  const deleteBtn = (item:DataType)=> {
    confirm({
      title: '确认删除嘛?',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      onOk() {
        deleteMethod(item)
      },
      onCancel() {
      },
    });
  }
  
  const deleteMethod = (item:DataType)=> {
    axios.delete(`http://localhost:3004/rights/${item.id}`).then(res=> {
    })
  }

  const [data, setData] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:3004/rights?_embed=children').then(res=> {
      setData(res.data)
    })
  },[])
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
