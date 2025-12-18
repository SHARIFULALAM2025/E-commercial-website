const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
app.use(express.json())
// app.use(cors())
app.use(
    cors({
        origin: [process.env.Client_Domain],
        credentials: true,
        optionSuccessStatus: 200,
    })
)
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.sxgnyhx.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        const database = client.db('business');
        const AboutCardData = database.collection('card');
        const AllUser = database.collection('user')

        /* about page data save */
        app.post("/about/card", async (req, res) => {
            const cardData = req.body;
            const result = await AboutCardData.insertOne(cardData)
            res.send(result)
        })
        /* all user */
        app.post("/all-user", async (req, res) => {
            const userInfo = req.body;
          const currentTime = new Date().toLocaleString('en-GB', {
                timeZone: "Asia/Dhaka"
            })
            userInfo.createAt = currentTime
            userInfo.lastLoginAt=currentTime
            userInfo.role = "user"
            const query = { email: userInfo.email }
            const existUser = await AllUser.findOne(query)
            if (existUser) {
                const result = await AllUser.updateOne(query, {
                    $set:{lastLoginAt:currentTime}
                })
                return res.send(result)
            }
            console.log(userInfo);
            const result = await AllUser.insertOne(userInfo);
            res.send(result);
        })
        app.get("/users/role/:email", async(req, res) => {
            const email = req.params.email
            const result = await AllUser.findOne({ email })
            res.send({role:result?.role})
        })
        app.get("/user-all", async (req, res) => {
            const result = await AllUser.find().toArray();
            res.send(result)
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('e-commers-website server is running. .......')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})








