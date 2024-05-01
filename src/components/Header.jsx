import  { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
//  import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';

import { DLT,ADD,REMOVE } from '../redux/actions/action'

const Header = () => {

    
    const [price,setPrice] = useState(0);
    // console.log(price);

        const getdata = useSelector((state)=> state.cartreducer.carts);
        // console.log(getdata);

        const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }
    const remove = (item)=>{
        dispatch(REMOVE(item))
      } 
      const send = (e)=>{
        // console.log(e);
        dispatch(ADD(e));
      }

    useEffect(() => {
        const total = () => {
          let price = 0;
          getdata.forEach((ele) => {
            price += ele.price * ele.qnty;
          });
          setPrice(price);
        };
      
        total(); 
        
      }, [getdata]); 
 

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                   
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                        Na
                    </Nav>

                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                        
                    </Badge>
                  
                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Product Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e)=>{
                                            return (
                                              <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                            <p><div className='mt-3 d-flex justify-content-between align-items-center' style={{width:55,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={e.qnty <=1 ? ()=>dlt(e.id) : ()=>remove(e)}>-</span>
                    <span style={{fontSize:22}}>{e.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>

                    </div></p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                  
                                                    </>
                                            )
                                        })
                                    }
                                 
                               
                                </tbody>
                            </Table>
                            <p ><h4 style={{color:"red"}}>Total :₹ {price}</h4></p>
                                  <div style={{display:"block", marginLeft:"120px"}}>
                                  <button className='mt-1'style={{color:"white",fontSize:16,cursor:"pointer, ", border:"1px solid blue", background:"#0d6efd",borderRadius:"5px", }} onClick={()=>{alert("Next stape is payment process")}}>Check out</button>
                                  </div>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu>
                
            </Navbar>
        </>
    )
}

export default Header