import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Users } from "../entities/user.entity";
import { JwtPayload } from "./jwt-payload-interface";
import { UserRepository } from "../user.repo";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private UserRepository: UserRepository,
    ) {
        super({
            secretOrKey: 't2',
            jwtFromReq: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }
    async validate(payload: JwtPayload): Promise<Users> {
        const { username } = payload

        const user: Users = await this.UserRepository.findOne({
            where: {
                username: username
            }
        })

        if (!user) {
            throw new UnauthorizedException();

        }
            return user
        
    }

}