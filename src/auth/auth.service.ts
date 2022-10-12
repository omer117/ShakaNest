import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInCredentialsDto } from './dto/Auth-signIn-dto';
import { Users } from './entities/user.entity';
import { UserRepository } from './user.repo';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt-payload-interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private UserRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async createUser(AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, email, password } = AuthCredentialsDto
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt)
        const userMail = await this.UserRepository.findOne({
            where: {
                email: email
            }
        })
        if (!userMail) {
            const user = this.UserRepository.create({
                username, email, password: hashedPassword
            })
            await this.UserRepository.save(user);
        } else {
            throw new UnauthorizedException('This mail is already in use!')
        }
    }

    async signIn(SignInCredentialsDto: SignInCredentialsDto) {
        const { username, password } = SignInCredentialsDto
        const user = await this.UserRepository
            .findOne({
                where: {
                    username: username
                }
            })
            // Logger.log(!user);
            // Logger.log(await bcrypt.compare(password, user.password))
            
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { username };
            const accessToken: string = await this.jwtService.sign(payload)
            return { accessToken }
        } else {
            throw new UnauthorizedException('Please enter a valid password or username')
        }
    }

}
