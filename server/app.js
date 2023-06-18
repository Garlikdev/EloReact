import express from "express"
// import path from "path"
import cors from "cors"
import dotenv from "dotenv"
// import cookies from "cookie-parser"
import compression from "compression"

// import connectDB from "./config/db"
// import webhook from "./config/webhook"
import helmet from "helmet"

// import multer from "multer"

// Importing routes

import productsRoute from "./routes/productsRoute.js"

const app = express()

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "build/images/przepisy/")
//   },
//   filename: function (req, file, cb) {
//     // const filenameshort = file.originalname.replace(/\..+$/, "");
//     file.originalname = Buffer.from(file.originalname, "latin1").toString(
//       "utf8"
//     )
//     cb(null, file.originalname)
//   },
// })

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true)
//   } else {
//     cb("Wrzucaj tylko zdjecia.", false)
//   }
// }

// const upload = multer({ storage: storage }).single("file")

dotenv.config()
// connectDB()

app.use(compression())

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        frameSrc: [
          "'self'",
          "*.stripe.com",
          "r.stripe.com",
          "r.stripe.com/0",
          "api.stripe.com",
          "api.stripe.com/*",
          "*.google.com",
        ],
        scriptSrc: [
          "'self'",
          "https:",
          "elopokrowce.pl",
          "data:",
          "localhost",
          "*.google.com",
          "*.google.co.in",
          "*.google-analytics.com",
          "*.googlesyndication.com",
          "*.googleadservices.com",
          "*.googletagservices.com",
          "*.googleapis.com",
          "*.doubleclick.net",
          "*.gstatic.com",
          "*.cloudflare.com",
          "youtu.be",
          "*.youtu.be",
          "*.youtube.com",
          "*.stripe.com",
          "'unsafe-inline'",
          "*.discord.com",
          "*.facebook.com",
        ],
        styleSrc: [
          "'self'",
          "*.gstatic.com",
          "cdnjs.cloudflare.com",
          "fonts.googleapis.com",
          "*.google.com",
          "data:",
          "'unsafe-inline'",
        ],
        fontSrc: [
          "'self'",
          "https:",
          "data:",
          "*.gstatic.com/*",
          "*.cloudflare.com/*",
          "*.googleapis.com/*",
          "*.google.com",
        ],
        imgSrc: ["'self'", "https:", "data:", "*.google.com"],
        connectSrc: [
          "'self'",
          "*.google-analytics.com",
          "*.google.com",
          "*.stripe.com",
          "*.discord.com",
          "*.facebook.com",
          "connect.facebook.net",
        ],
        scriptSrcAttr: [
          "'self'",
          "https:",
          "*.stripe.com",
          "'unsafe-inline'",
          "*.facebook.com",
        ],
      },
    },
  })
)

// Load config
app.use(
  express.json({
    extended: false,
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
)
app.use(express.urlencoded({ extended: false }))

// app.use(
//   cookies({
//     sameSite: "none",
//     secure: true,
//   })
// )
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// const usersRoute from "./routes/usersRoute")
// const ordersRoute from "./routes/ordersRoute")
// const authRoute from "./routes/authRoute")

app.use("/api/categories", productsRoute)
// app.use("/api/users/", usersRoute)
// app.use("/api/orders/", ordersRoute)
// app.use("/api/auth/", authRoute)

// app.post("/webhook", webhook)

// app.post("/uploadimage", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).send("Something went wrong!")
//     }
//     res.send(req.file)
//   })
// })

// app.use(express.static(path.join(__dirname, "public")))
// app.use(express.static(path.join(__dirname, "build")))

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"))
// })

const port = process.env.PORT || 3001
app.listen(port, () => `Server running on port - ${process.env.PORT}`)
