import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateClientDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    readonly company_name: string;

    @IsString()
    @MaxLength(50)
    readonly gst_no: string;

    @IsString()
    @MaxLength(50)
    readonly phone: string;

    @IsString()
    @MaxLength(50)
    readonly cash: string;

    @IsString()
    @MaxLength(50)
    readonly address: string;
}