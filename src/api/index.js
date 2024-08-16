import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://portfolio-api-4sgc.onrender.com/api",
});

export const getAllCaseStudies = async () => {
  let result;
  try {
    result = await axiosInstance.get("/getAllCaseStudies");
  } catch (e) {
    result = e;
  }
  return result;
};

export const getSingleCaseStudy = async (name) => {
    let result
    console.log('title>', name)
  
    try {
      result = await axiosInstance.get(`/getCaseStudyByName/${name}`)
    } catch (e) {
      result = e
    }
    return result
  }