import axios from 'axios';
const upload = async(file)=>{
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ProLancer");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dexvnihp1/image/upload", data);
      const { secure_url }= res.data;
      return secure_url;
    } catch (error) {
       console.error("Cloudinary upload failed:", error);
    // Optionally re-throw the error to be caught by handleSubmit
    throw error;
    }
  }

  export default upload;
// This code defines an asynchronous function `upload` that uploads a file to Cloudinary using a POST request. It creates a `FormData` object, appends the file and upload preset, and then sends the request using an API client. The function is exported for use in other parts of the application. The error handling is currently empty, which could be improved by logging or handling errors appropriately.