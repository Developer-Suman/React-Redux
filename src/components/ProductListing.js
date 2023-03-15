import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import {Row, Col} from 'antd';
import axios from 'axios';
import {useState, useEffect} from 'react'
import {setProducts} from '../redux/actions/productAction'





export default function ProductListing() {
  const products = useSelector((state)=> state)
  const dispatch = useDispatch()





  const getAllProduct = async()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log("error", err)
    });
    dispatch(setProducts(response.data));
  };
  useEffect(()=>{
    getAllProduct();

  },[]);
  // console.log("Products:", products)
  return (
    <Row justify='center'>
      <Col span={22} style={{marginTop:'40px'}}>
        <ProductComponent/>

      </Col>
    </Row>
  )
}
