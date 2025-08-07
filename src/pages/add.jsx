import React from 'react'
import './add.css'

const add = () => {
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
              placeholder="e.g. I will do something I'm really good at"
              className="form-input"
            />

            <label className="form-label">Category</label>
            <select name="cats" id="cats" className="form-select">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label className="form-label">Cover Image</label>
            <input type="file" className="form-input" />

            <label className="form-label">Upload Images</label>
            <input type="file" multiple className="form-input" />

            <label className="form-label">Description</label>
            <textarea
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
              className="form-textarea"
            ></textarea>

            <button className="form-button">Create</button>
          </div>

          {/* right */}
          <div className="flex-[1] flex flex-col gap-2 justify-between">
            <label className="form-label">Service Title</label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="form-input"
            />

            <label className="form-label">Short Description</label>
            <textarea
              placeholder="Short description of your service"
              rows="10"
              className="form-textarea"
            ></textarea>

            <label className="form-label">Delivery Time (e.g. 3 days)</label>
            <input type="number" min={1} className="form-input" />

            <label className="form-label">Revision Number</label>
            <input type="number" min={1} className="form-input" />

            <label className="form-label">Add Features</label>
            <input type="text" placeholder="e.g. page design" className="form-input" />
            <input type="text" placeholder="e.g. file uploading" className="form-input" />
            <input type="text" placeholder="e.g. setting up a domain" className="form-input" />
            <input type="text" placeholder="e.g. hosting" className="form-input" />

            <label className="form-label">Price</label>
            <input type="number" min={1} className="form-input" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default add