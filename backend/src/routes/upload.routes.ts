import { Router } from "express";
import { UploadController } from "../controllers/upload.controller";
import { upload } from "../middleware/upload.middleware";

const router = Router();

const uploadController = new UploadController();

router.post(
  "/",
  upload.single("file"),
  uploadController.upload.bind(uploadController)
);

router.delete(
  "/",
  uploadController.delete.bind(uploadController)
);

export default router;