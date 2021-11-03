require("dotenv").config();
export default {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH,
  projectId: process.env.ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.SEND,
  appId: process.env.APP_ID,
  measurementId: process.env.MEM,
};
