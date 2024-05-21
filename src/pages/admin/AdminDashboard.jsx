
import React, { useState } from "react";

const AdminDashboard = () => {

  //making a state for product
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productDescription, setProductDescription] = useState('')

  //Image State
  const [productImage, setProductImage] = useState(null)
  const [previewImage, setpreviewImage] = useState(null)

  //function to upload and preview image
  const handleImageUpload=(event)=>{
    //0-File, 1-name, 2-Size
    const file=event.target.files[0]
    setProductImage(file)
    setpreviewImage(URL.createObjectURL(file))
  }



  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2">
          <h1>Admin Dashboard:</h1>
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Product
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new product</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <label>Product Name</label>
                    <input onChange={(e) => setProductName(e.target.value)} type="text" className="form-control" placeholder="Enter your product name" />

                    <label className="mt-2">Product Price</label>
                    <input onChange={(e) => setProductPrice(e.target.value)} type="number" className="form-control" placeholder="Enter your product price" />

                    <div className='mt-2'>
                      <label>Select Category</label>
                      <select onChange={(e) => setProductCategory(e.target.value)} className="form-control">
                        <option value="crafts">Crafts</option>
                        <option value="wedding">Wedding</option>
                        <option value="home and living">Home and Living</option>
                        <option value="gift">Gift</option>
                      </select>

                    </div>
                    <label className='mt-2'>Type product Description</label>
                    <textarea onChange={(e) => setProductDescription(e.target.value)} className="form-control"></textarea>

                    <label className='mt-2'>Product Image</label>
                    <input onChange={handleImageUpload} type="file" className="form-control" />

                    {/* Preview Image */}
                    {
                      previewImage && (
                        <div className=''>
                          <img src={previewImage} alt="" />
                        </div>
                      )
                    }

                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th> Product Image</th>
              <th>Product  Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
              <th>Product Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img height={'50px'} width={'50px'} src="https://th.bing.com/th/id/OIP.DVOYr2PK3_6yODtz2S6l3QHaGO?w=236&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
              </td>
              <td>Kids play</td>
              <td>NPR. 500</td>
              <td>kids can play</td>
              <td>Craft</td>
              <td>
                <div className="button-group" role='group'>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;