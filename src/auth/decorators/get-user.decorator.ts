import { createParamDecorator,ExecutionContext } from "@nestjs/common";
import { Users } from "../entities/user.entity";

export const  GetUser = createParamDecorator((_data,ctx):Users=>{

    const req = ctx.switchToHTTP().getRequest();
    return req.users;
})