import { ObjectType, Field, Int, Float } from "@nestjs/graphql";

@ObjectType()
export class Shot{
    @Field((type) => Int)
    id: number

    @Field()
    price: number;

    @Field()
    name: string;

    @Field()
    code: string;
}