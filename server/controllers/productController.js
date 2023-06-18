import prisma from "../prismadb.js"
import asyncHandler from "express-async-handler"
import mongoose from "mongoose"

export const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await prisma.productCategory.findMany({
      include: {
        product: {
          select: {
            name: true,
          },
        },
      },
    })

    // console.log(JSON.stringify(products, null, 4));
    // let data = JSON.stringify(skladniki, null, 4);
    // fs.writeFileSync("przepisy.json", data);
    res.send(categories)
  } catch (err) {
    res.status(400).json({ message: err })
  }
})
