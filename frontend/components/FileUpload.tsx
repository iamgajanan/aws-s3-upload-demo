"use client";

import { useState } from "react";
import api from "@/services/api";
import { UploadResponse } from "@/types/upload";

export default function FileUpload() {

    const [file, setFile] = useState<File | null>(null);

    const [result, setResult] = useState<UploadResponse | null>(null);

    const [loading, setLoading] = useState(false);

    const uploadFile = async () => {

        if (!file) return;

        const formData = new FormData();

        formData.append("file", file);

        try {

            setLoading(true);

            const response = await api.post<UploadResponse>(
                "/upload",
                formData
            );

            setResult(response.data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="space-y-5">

            <input

                type="file"

                onChange={(e) =>
                    setFile(e.target.files?.[0] ?? null)
                }

            />

            <button

                onClick={uploadFile}

                className="px-4 py-2 rounded bg-black text-white"

            >

                {loading ? "Uploading..." : "Upload"}

            </button>

            {result && (

                <div className="border rounded p-4">

                    <h3 className="font-bold">

                        Upload Successful

                    </h3>

                    <p>{result.fileName}</p>

                    <a

                        href={result.signedUrl}

                        target="_blank"

                    >

                        Open File

                    </a>

                </div>

            )}

        </div>

    );

}