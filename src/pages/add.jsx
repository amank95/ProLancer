import React, { useReducer, useState } from 'react'
import './add.css'
import { gigReducer, INITIAL_STATE } from '../reducers/gigReducer'
import upload from '../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state,dispatch] = useReducer(gigReducer, INITIAL_STATE)

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },  
    });
  };

    const handleFeature = (e) => {
      e.preventDefault()
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value="";
  };

   const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

   const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs")
  };

  return (
    // add
      <div className="flex justify-center">
      {/* container */}
      <div className="w-[1400px] py-12 px-0">
        <h1 className="text-gray-600 text-2xl mb-7">Add New Gig</h1>

        {/* sections */}
        <div className="flex justify-between gap-24">
          {/* left */}
          <div className="flex-[1] flex flex-col gap-2 justify-between">
            <label className="form-label">Title</label>
            <input
              type="text"
              name='title'
              placeholder="e.g. I will do something I'm really good at"
              className="form-input"
              onChange={handleChange}
            />

            <label className="form-label">Category</label>
            <select name="cat" id="cat" className="form-select" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className='flex items-center gap-5'>
              <div className='flex flex-col gap-2'>
            <label className="form-label">Cover Image</label>
            <input type="file" className="form-input"  onChange={(e) => setSingleFile(e.target.files[0])} />

            <label className="form-label">Upload Images</label>
            <input type="file" multiple className="form-input" onChange={(e) => setFiles(e.target.files)} />
              </div>            
            <button className="form-button" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading.." : "Upload"} 
            </button>            
 
            </div>
            <label className="form-label">Description</label>
            <textarea
            name='desc'
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
              className="form-textarea"
                 onChange={handleChange}
            ></textarea>

            <button 
            className="form-button"
            onClick={handleSubmit}
            >Create</button>
          </div>

          {/* right */}
          <div className="flex-[1] flex flex-col gap-2 justify-between">
            <label className="form-label">Service Title</label>
            <input
              type="text"
              name='shortTitle'
              placeholder="e.g. One-page web design"
              className="form-input"
                 onChange={handleChange}
            />

            <label className="form-label">Short Description</label>
            <textarea
            type="text"
              name='shortDesc'
              placeholder="Short description of your service"
              rows="10"
              className="form-textarea"
                 onChange={handleChange}
            ></textarea>

            <label className="form-label">Delivery Time (e.g. 3 days)</label>
            <input type="number" name='deliveryTime' min={1} className="form-input"    onChange={handleChange} />

            <label className="form-label">Revision Number</label>
            <input type="number" name='revisionNumber' min={1} className="form-input" onChange={handleChange} />

            <label className="form-label">Add Features</label>
            <form action="" onSubmit={handleFeature} className='flex items-center'>
            <input type="text" placeholder="e.g. page design" className="form-input w-full" />
            <button type='submit' className='border border-green-300 p-[18px] bg-green-500 text-white font-medium text-lg cursor-pointer'  > add </button>
            </form>

            <div className="flex gap-5">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                  className=' p-2 h-[30px] text-[12px] font-normal bg-transparent text-gray-900 border border-blue-500 flex items-center gap-5'
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span className='text-red-500'>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label className="form-label">Price</label>
            <input type="number" name='price' min={1} className="form-input"    onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default add