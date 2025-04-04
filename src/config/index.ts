import dotenv from "dotenv";

dotenv.config();
//sami
export default {
  email: `${process.env.EMAIL}`,
  port: Number(process.env.PORT),
  password: `${process.env.PASSWORD}`,
  secretKey: `${process.env.SECRET_KEY}`,
  pageSize: Number(process.env.PAGE_SIZE),
  saltRound: Number(process.env.SALT_ROUND),
  databaseURL: `${process.env.DATABASE_URL}`,
  ChapaSecretKey: `${process.env.CHAPA_SECRET_KEY}`,
  catagories: ["Man", "Woman"],
  atlas: `${process.env.DATABASE}`,
};
