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
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        const AllProduct = database.collection('product')

        /* about page data save */
        app.post("/about/card", async (req, res) => {
            const cardData = req.body;
            const result = await AboutCardData.insertOne(cardData)
            res.send(result)
        })
        /* all user */
        /* add product */
        app.get("/category-product", async(req, res) => {
            const category = req.query.category;
            const query = { category }
            const exclude = req.query.exclude
            if (exclude) {
                query._id = { $ne: new ObjectId(exclude)}

            }
            const result = await AllProduct.find(query).toArray()
            res.send(result)
        })
        app.post("/all-product", async(req, res) => {
            const productData = req.body;
            const currentTime = new Date().toLocaleString('en-GB', {
                timeZone: "Asia/Dhaka"
            })
            productData.createAt = currentTime
            const result = await AllProduct.insertOne(productData)
            res.send(result)
        })
        app.get("/single-product-details/:id", async(req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await AllProduct.findOne(query)
            res.send(result)

        })
        app.get("/product-all", async(req, res) => {
            const result = await AllProduct.find().toArray();
            res.send(result)
        })
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








