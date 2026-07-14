import { Request, Response } from "express";
import { UploadService } from "../services/upload.service";

const uploadService = new UploadService();

export class UploadController {
  async upload(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }

      const result = await uploadService.uploadFile(req.file);

      return res.status(200).json(result);
    } catch (error: any) {
  console.error("UPLOAD ERROR:");
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message,
    error: {
      name: error.name,
      code: error.Code,
      statusCode: error.$metadata?.httpStatusCode,
    },
  });
}
  }

async delete(req: Request, res: Response) {
  try {
    const { key } = req.body;

    if (!key) {
      return res.status(400).json({
        success: false,
        message: "File key is required",
      });
    }

    const result = await uploadService.deleteFile(key);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
}
}