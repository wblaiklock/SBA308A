const express = require('express');
const router = express.Router()
const axios = require('axios')
require('dotenv').config()
const Joi = require('joi');

const lang="en";

router.get('/',async(req,res)=>{
    try{
         const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&lang=${lang}&token=${process.env.APIKEY}`) 
         await res.render('usernews',{ news : newsAPI.data,facts })
    }catch(err){
        console.log('Error',err.message)
    }
});

// Breaking news
router.get('/news/breaking-news',async(req,res)=>{
  try{
       const newsAPI = await axios.get(`https://gnews.io/api/v4/top-headlines?&token=${process.env.APIKEY}&topic=breaking-news&lang=${lang}`) 
       await res.render('usernews',{ news : newsAPI.data,facts })
  }catch(err){
    console.log('Error',err.message)
  }   
});

//Search
router.post("/news/search",async(req,res)=>{
  try{
    const newsAPI = await axios.get(`https://gnews.io/api/v4/search?q="${req.body.search}"&token=${process.env.APIKEY}&lang=${lang}`)  
    await res.render('usernews',{ news : newsAPI.data,facts })
}catch(err){
  console.log('Error',err.message)
}
});


module.exports = router;



 