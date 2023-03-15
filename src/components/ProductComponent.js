import React from "react";
import {Row, Col, Card, List} from 'antd';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const { Meta } = Card;
  console.log(products)


  const renderList = products.map((product)=>{
    const {id,title,image,price, category} = product;
    return(
      
      <div className="productlist  " >
        <Link to={`/product/${id}`}>
     
        <Card
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
          <h2>{category}</h2><br/>
          <Meta title={title}/><br/>
          <h3>{price}</h3>
        </Card>
        </Link>
  
    </div>

    )
  });




  return(
    <>
   
   <Row>
    {renderList}

   </Row>

    
    
    </>

  ) 
}
