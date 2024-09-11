import express, { Request, Response } from "express";
import userRouter from '../src/users/adapters/driver/rest-api/router';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
