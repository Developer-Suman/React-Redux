import React from 'react';
import {Row, Col, Menu} from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Headers() {
    const Nav = useNavigate()
    const onMenuClick = (items)=>{
        Nav(`/${items.key}`)

    }

  return (
    <div>
        <Row >
            <Col span={24}>
                <Menu
                onClick={onMenuClick}
                mode='horizontal'
                items={[
                    {
                    label:<HomeOutlined/>,
                    key:''},
                    {
                    label:'Product',
                    key:'productlisting'},
                   
                
                          
                ]}
                >         
                </Menu>
            
            </Col>
        </Row>

      
    </div>
  )
}
