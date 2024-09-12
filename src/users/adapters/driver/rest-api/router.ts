import { Router } from "express";
import { CreateUserUseCaseRequest } from "../../../domain/ports/driver/create-user_use_case/request";
import { createUserUseCase } from "../../../domain/factories/use-cases";

const router = Router();

router.post("/users", async (req, res) => {
  try {
    const { name, lastName, age, email } = req.body;
    const createUserCase = createUserUseCase();
    const request: CreateUserUseCaseRequest = {
      name,
      lastName,
      age,
      email
    }
    const response = await createUserCase.handle(request);
    const { user } = response;
    return res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

export default router;
