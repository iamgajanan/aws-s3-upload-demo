import dotenv from "dotenv";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5230;
console.log(process.env.AWS_REGION);
console.log(process.env.AWS_BUCKET_NAME);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});