import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { BaseUserDocument } from "../model/user.model";

export const createUser = async (
  input: DocumentDefinition<BaseUserDocument>
) => {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
};
