import React ,{useEffect, useState} from 'react'
import {products} from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Products.css'
export default function Products() {
  const [productDatas ,setProductDatas]=useState(products)

  const columns=[
    { field: 'id',
     headerName: 'ID',
      width: 90
     },
    { field: 'title',
     headerName: 'Name',
      width: 200,
      renderCell:(params)=>{
       console.log('params :', params);
        return(
          <Link to={`/products/${params.row.id}`} className='link'>
            <div className="usersListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              {params.row.userName }
            </div>
          </Link>
        )
      }
     },
  
     { field: 'price',
     headerName: 'Price',
      width: 150
     },
     
     { field: 'action',
     headerName: 'Action',
      width: 160,
      renderCell:(params)=>{
        return(
          <>
          <Link to={`/products/${params.row.id}`}>
          <button className='userListEdit' >EDIT</button>
          </Link>
       
         <DeleteOutlineIcon className='userListDelet'
          onClick={async() => {
            
             setProductDatas(productDatas.filter(use=>use.id !== params.row.id))
            
         
          }}/>
          
         </>
        )
      }
     },
  ]
  return (
    <div className='userList'>
    
 
       <DataGrid
        rows={productDatas}
        columns={columns}
        pageSize={4}
        checkboxSelection
      
      />
    
     
  </div>
  )
}
