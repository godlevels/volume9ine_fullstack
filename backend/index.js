import dotenv from "dotenv";
dotenv.config();
import cors from "cors"

import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webhookRouter from "./routes/webhook.route.js"
import { clerkMiddleware } from '@clerk/express'
import mailchimp from "@mailchimp/mailchimp_marketing"



mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

const app = express()
app.use(cors(process.env.CLIENT_URL))
app.use("/webhooks", webhookRouter)
app.use(clerkMiddleware())
app.use(express.json())





// app.get("/test",(req, res)=>{
//     res.status(200).send("it works")
// })

// app.get("/auth-state", (req, res) => {
//     const authState = req.auth;
//     res.json(authState);
// });

// app.get("/protect", (req, res) => {
//     const { userId } = req.auth;
//     if (!userId) {
//         return res.status(401).json("not authenticated")
//     }
//     res.status(200).json("content")
// });

// app.get("/protect2", requireAuth(), (req, res) => {
//     res.status(200).json("content")
// });
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)


app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message || "Something is not right!",
        status: error.status,

    })
})

app.post('/addSubscriber', async (req, res) => {
    const { email } = req.body;
    try {
        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed',
        }
        )
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(JSON.stringify({ error: JSON.parse(error.response.text) }))
        console.log(error.message)
    }
})

app.listen(3000, () => {
    connectDB()
    console.log("server is running!")
})