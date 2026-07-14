import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuid } from "uuid";
import { s3Client } from "../config/s3";

const BUCKET = process.env.AWS_BUCKET_NAME!;

export class UploadService {
  async uploadFile(file: Express.Multer.File) {
    const extension = file.originalname.split(".").pop();

    const fileName = `${uuid()}.${extension}`;

    const key = `uploads/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await s3Client.send(command);

    const signedUrl = await this.getSignedUrl(key);

    return {
      success: true,
      key,
      fileName,
      signedUrl,
    };
  }

  async getSignedUrl(key: string) {
    const command = new GetObjectCommand({
      Bucket: BUCKET,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 60,
    });
  }

  async deleteFile(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    });

    await s3Client.send(command);

    return {
      success: true,
      message: "File deleted successfully",
    };
  }
}