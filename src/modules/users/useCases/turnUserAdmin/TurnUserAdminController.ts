import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user;
    try {
      user = this.turnUserAdminUseCase.execute({ user_id });
    } catch (er) {
      return response.status(404).json({ error: er.message });
    }
    return response.json(user);
  }
}

export { TurnUserAdminController };
