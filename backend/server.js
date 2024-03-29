require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const UserData = require('./userSchema');
const Coms = require('./postSchema');
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.API_URL)
.then(()=>{
    console.log("connected to mongodb")
    app.listen(PORT, ()=>{
        console.log("app is running on port 3000");
    })

}).catch((error)=>{
    console.log(error)
})

app.post('/UserData', async(req,res)=>{
    console.log(res.body);
    const userdata = await UserData.create(req.body);
    res.status(200).json(userdata);
})
app.get('/UserData/:id', async(req,res)=>{
    const data = await UserData.findOne({username: req.params.id})
    res.status(200).json(data);
})
app.post('/communities/', async(req,res)=>{
    console.log(res.body);
    const data = await Coms.create(req.body)
    res.status(200).json(data);
})
app.post('/communities/:id', async (req, res) => {
    try {
        const community = await Coms.findOne({ Community: req.params.id });

        if (community) {
          
            community.Posts.push(req.body);
            await community.save(); 

            res.status(200).json(community);
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/communities/:id', async(req,res)=>{
    const data = await Coms.findOne({Community: req.params.id})
    res.status(200).json(data);
})
app.post('/communities/:id/:post/comments', async (req, res) => {
    try {
        const community = await Coms.findOne({ Community: req.params.id });

        if (community) {
            const postId = req.params.post;
            const post = community.Posts.find(post => post._id == postId);

            if (post) {
                post.Comments.push(req.body);
                await community.save();

                res.status(200).json(community);
            } else {
                res.status(404).json({ message: 'Post not found' });
            }
        } else {
            res.status(404).json({ message: 'Community not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


