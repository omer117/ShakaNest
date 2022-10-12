import { IsNotEmpty,Matches, IsString, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(9)
    @MaxLength(30)
    username: string;

    @IsString()
    @IsNotEmpty()
    email: string;


    @MinLength(8)
    @IsString()
    @IsNotEmpty()
    password: string;
}