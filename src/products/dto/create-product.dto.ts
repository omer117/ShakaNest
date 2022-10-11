import { IsNotEmpty } from "class-validator";

export class CreateProductsDto {

    @IsNotEmpty()
    catagory: string;

    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    price: number;
    
    @IsNotEmpty()
    info: string;
    
    @IsNotEmpty()
    sizes: string[];
    
    @IsNotEmpty()
    image: string;

}
