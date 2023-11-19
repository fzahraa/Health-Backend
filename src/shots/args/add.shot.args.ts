import { InputType, Field, Float } from "@nestjs/graphql";

@InputType()
export class AddShotArgs{
    @Field()
    price: number;

    @Field()
    name: string;

    @Field()
    code: string;
}