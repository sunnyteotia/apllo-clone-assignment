const Doctor = require('../models/Doctors');

const addDoctor=async(req,res)=>{
    try{
        const{name,specialization,experience,gender,location,rating,consultationFee,imageUrl}=req.body;
        const newlyCreatedDoctor=new Doctor({
            name,
            specialization,
            experience,gender,location,rating,consultationFee,imageUrl
        })
        await newlyCreatedDoctor.save();
        if(newlyCreatedDoctor){
            return res.status(201).json({message:'Doctor added successfully'});
        }else{
            return res.status(400).json({message:'Failed to add doctor'});
        }
        }catch(e){
        console.log(e);
        res.status(500).json({message:'failed to add Doctor.Please try again'});
    }
}
const getDoctor = async (req, res) => {
    try {
      // Pagination
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;
      const skip = (page - 1) * limit;
  
      // Sorting
      const sortBy = req.query.sortBy || 'createdAt';
      const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
      const sortObj = { [sortBy]: sortOrder };
  
      // Filtering
      const experience = parseInt(req.query.experienceMin);
      const consultationFee = parseInt(req.query.feesMax);
      const rating = parseFloat(req.query.ratingMin);
  
      const filter = {};
  
      if (!isNaN(experience)) {
        filter.experience = { $gte: experience };
      }
  
      if (!isNaN(consultationFee)) {
        filter.consultationFee = { $lte: consultationFee };
      }
  
      if (!isNaN(rating)) {
        filter.rating = { $gte: rating };
      }
  
      // Fetch total doctors for current filter
      const totalDoctors = await Doctor.countDocuments(filter);
      const totalPages = Math.ceil(totalDoctors / limit);
  
      // Fetch doctors with pagination and sorting
      const doctors = await Doctor.find(filter)
        .sort(sortObj)
        .skip(skip)
        .limit(limit);
  
      return res.status(200).json({
        success: true,
        message: "Doctors fetched successfully",
        currentPage: page,
        totalPages,
        totalDoctors,
        data: doctors, // <-- these will contain gender, specialization, etc. by default
      });
  
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Failed to get doctors. Please try again.' });
    }
  };
module.exports={
    addDoctor,getDoctor
}