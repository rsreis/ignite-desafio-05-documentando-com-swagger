import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user;
    try {
      user = this.showUserProfileUseCase.execute({ user_id });
    } catch (er) {
      return response.status(404).json({ error: er.message });
    }
    return response.json(user);
  }
}

export { ShowUserProfileController };
