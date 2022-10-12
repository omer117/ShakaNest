import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { SignInCredentialsDto } from './dto/Auth-signIn-dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }


    @Post('signUp')
    signUp(@Body() AuthCredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.createUser(AuthCredentialsDto)
    }


    @Post('signIn')
    signIn(@Body() signInCredentialsDto: SignInCredentialsDto) {
        return this.authService.signIn(signInCredentialsDto)
    }
}
