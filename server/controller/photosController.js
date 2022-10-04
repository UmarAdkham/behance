const Photos = require("../models/PhotoModel")


const getPhotos = async (req ,res)=>{
    try {
        const photos = await Photos.find({})
        res.status(200).json(photos)
    } catch (error) {
        res.status(404).json({error:"Error api"})
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}

const upload = async (req, res) => {
    const { url, title, userId } = req.body;
    try {
      const newUploat = await Photos.create({ url, title, userId });
      res.status(200).json(newUploat);
    } catch (error) {
      console.log(error);
      res.json({ error: "Katta xatoki" });
    }
  };

module.exports ={
    getPhotos, upload
}