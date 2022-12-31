import React from 'react'
import {Link}  from 'react-router-dom'
import './product.css'
import Chart from './../../Component/chart/Chart'
import {productData} from './../../datas'
import PublishIcon from '@mui/icons-material/Publish'
export default function Product() {
  return (
    <div className='product'>

      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='newProduct'>
            <button className='productAddBtn'>Create</button>
        </Link>
    </div>

    <div className="productTop">
        <div className="prodyctTopLeft">
            <Chart title='Sale in Month' data={productData} dataKey='Sale'/>
        </div>
        <div className="prodyctTopRight">
            <div className="productInfoTop">
                <img src="/images/dell.jpg" alt="" className='productInfoImg'/>
                <span className="productTopName">Dell LapTOP</span>
            </div>

            <div className="pproductInfoBottom">
                <div className="productInfoItem">
                    <div className="productInfoKey">ID:</div>
                    <div className="productInfoValue">32</div>
                </div>
                <div className="productInfoItem">
                    <div className="productInfoKey">Name:</div>
                    <div className="productInfoValue">Dell Lptop</div>
                </div>
                <div className="productInfoItem">
                    <div className="productInfoKey">Sale:</div>
                    <div className="productInfoValue">$90000</div>
                </div>
                <div className="productInfoItem">
                    <div className="productInfoKey">Activ:</div>
                    <div className="productInfoValue">YES</div>
                </div>
                <div className="productInfoItem">
                    <div className="productInfoKey">IN stock</div>
                    <div className="productInfoValue">NO</div>
                </div>
            </div>
        </div>
    </div>

    <div className="priductBottom">
        <form action="" className="productForm">
            <div className="productFormLeft">
                <label >Product Name</label>
                <input type="text" placeholder='Dell Laptop'/>

                <label >In Stock</label>
                <select name="" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label >Active</label>
                <select name="" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUploader">
                    <img src="/images/dell.jpg" alt="" className="productUploaderImg" />
                    <label ><PublishIcon ></PublishIcon></label>
                    <input type="file" style={{display:'none'}} />
                </div>
                <button className='productUploaderButton'>Upload (Edit)</button>
            </div>
        </form>
    </div>
    </div>
  )
}
