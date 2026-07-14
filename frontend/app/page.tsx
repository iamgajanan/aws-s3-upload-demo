import FileUpload from "@/components/FileUpload";

export default function Home() {

    return (

        <main className="max-w-2xl mx-auto mt-20">

            <h1 className="text-3xl font-bold mb-8">

                AWS S3 File Upload

            </h1>

            <FileUpload />

        </main>

    );

}