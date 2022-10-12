import { IsNotEmpty,Matches, IsString, MaxLength, MinLength } from "class-validator";

export class SignInCredentialsDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    username: string;

    @MinLength(8)
    @IsString()
    @IsNotEmpty()
    password: string;
}