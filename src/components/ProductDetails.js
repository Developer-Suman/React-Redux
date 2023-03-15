import React, {useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Row, Col, Card, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct, removeselectedProduct} from '../redux/actions/productAction'

export default function ProductDetails() {

  const product = useSelector((state)=>state.product)
  console.log(product)
  const {image, price, title, category, description} = product
  const {productId} =  useParams();
  const dispatch = useDispatch();

  
  const fetchProductDetails = async() =>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
      console.log('Error', err)
    });
    
    dispatch(selectedProduct(response.data))
  };
  

  useEffect(()=>{
    if(productId && productId!==""){
      fetchProductDetails();

    }
    

    return ()=>{
      dispatch(removeselectedProduct())
    }
  },[productId]);

const {Meta} = Card;

  return (

    <div style={{marginTop:'100px'}}>
      <Row >
        <Col span={12} className='cardImage'>

        <Card 
        
        // {Object.keys(product).length === 0? (
        //   <div>....loading</div>
        // )}
          hoverable
          style={{
            width: 200,
          }}
          cover={
            <img
              alt="example"
              src={image}
            />
          }
        >
         
          
        </Card>
        </Col>
        <Col span={12} className='details'>
        <div>
        <h2>{category}</h2>
        <Meta title={title}/>
          <h3>{price}</h3>
          <Button>Add To Cart</Button>
         
          
        </div>
        

        </Col>
      </Row>

    </div>
  )
}
