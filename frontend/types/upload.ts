export interface UploadResponse {
    success: boolean;
    key: string;
    fileName: string;
    signedUrl: string;
}