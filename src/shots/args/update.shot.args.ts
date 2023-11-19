import { InputType, Field, Int, Float } from "@nestjs/graphql";

@InputType()
export class UpdateShotArgs{
    @Field((type) => Int)
    id: number

    @Field()
    price: number;

    @Field()
    name: string;

    @Field()
    code: string;
}