import { Router } from 'express'
import {
  fetchAllImages, generateImage
} from '../controller/image.controller'

export const imageRouter = Router()

imageRouter.get('/all', fetchAllImages)

imageRouter.post('/generate', (req, res, next) => {
  console.log("It is working...");
  console.log(req.url);
  next();
},generateImage)
