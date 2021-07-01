import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()

export class NewCarInput {
    @Field()
    name: string;

    @Field((type) => Int)
    @Max(1000)
    @Min(10, { message: "Daily Price debe tener un valor mayor que 10" })
    dailyPrice: number;

    @Field((type) => Int)
    @Max(50000)
    @Min(1500)
    monthlyPrice: number;

    @Field()
    mileage: string;

    @Field()
    gas: string;

    @Field()
    gearType: string;

    @Field()
    thumbnailUrl: string;
}