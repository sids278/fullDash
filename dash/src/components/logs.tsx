import React from 'react';
import { Input, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import {SearchOutlined} from '@ant-design/icons'
import { Button } from 'antd/es/radio';

import { useSelector } from 'react-redux';
interface DataType {
  key: string;
  name: string;
  OrderDate: number;
  address: string;
  tags: string[];
  
  
}




const click=()=>{
    console.log('hey u clicked a record');
    
}
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    OrderDate: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    OrderDate: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },{
    key: '5',
    name: 'Jimmy',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },{
    key: '6',
    name: 'Jim Halpert',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },{
    key: '7',
    name: 'Jimmy kimmel',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '8',
    name: 'Jimmy kimmel',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '9',
    name: 'Jimmy kimmel',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },{
    key: '10',
    name: 'Jimmy kimmel',
    OrderDate: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  
  


];
const filterData = (data:any) =>
    data.map((item:any) => ({
      key: item,
      value: item,
      text: item
    }));
const columns: ColumnsType<DataType> = [
  
    {
        title:'id',
        dataIndex:'key',
        key:'id',
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
          }) => {
            return (
              <>
                <Input
                  autoFocus
                  placeholder="Type text here"
                  value={selectedKeys[0]}
                  onChange={(e) => {
                    setSelectedKeys(e.target.value ? [e.target.value] : []);
                    confirm({ closeDropdown: false });
                  }}
                  onPressEnter={() => {
                    confirm();
                  }}
                  onBlur={() => {
                    confirm();
                  }}
                ></Input>
                <Button
                  onClick={() => {
                    confirm();
                  }}
                  type="primary"
                >
                  Search
                </Button>
                {/* <Button
                  onClick={() => {
                    clearFilters();
                  }}
                  type="danger"
                >
                  Reset
                </Button> */}
              </>
            );
          },
          filterIcon: () => {
            return <SearchOutlined />;
          },
          onFilter: (value:any, record:any) => {
            return record.key===(value);
          },
        },
    
    {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'OrderDate',
    dataIndex: 'OrderDate',
    key: 'OrderDate',
    
      
    },
  
  
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  
  
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
  {
    title: 'Description',
    key: 'action',
    render: ( record) => (
      <Space size="middle">
        <a href={'/'+ record.key} onClick={click}> {record.name}</a>
       
      </Space>
    ),

    
  },
];

const App: React.FC = () =>{ 
    
    const apixata=useSelector((state:any)=>state.root.fetch.data[1])
    console.log((apixata))
   
   
    return <Table columns={columns} dataSource={data} />
};

export default App;