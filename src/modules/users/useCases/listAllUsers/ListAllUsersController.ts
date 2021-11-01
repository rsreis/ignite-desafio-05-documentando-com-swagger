import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id: id } = request.headers;
    const user_id: string = this.getAsString(id);
    let users: User[];
    try {
      users = this.listAllUsersUseCase.execute({ user_id });
    } catch (er) {
      return response.status(400).json({ error: er.message });
    }
    return response.json(users);
  }

  private getAsString(id: string | string[] | undefined): string {
    if (Array.isArray(id)) {
      return id[0];
    }
    return id;
  }
}

export { ListAllUsersController };
