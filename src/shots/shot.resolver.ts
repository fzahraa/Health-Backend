import { Query, Resolver, Args, Int, Mutation, InputType, Field } from "@nestjs/graphql";
import { Shot } from "./shot.schema";
import { Shot as ShotModel } from "src/interface/graphql";
import { ShotService } from "./shot.service";
import { AddShotArgs } from "./args/add.shot.args";
import { UpdateShotArgs } from "./args/update.shot.args";
@InputType()
class CreateItemInput {
  @Field()
  data: string;
}
@Resolver(of=>Shot)
export class ShotResolver{
    constructor(private readonly shotService: ShotService){}

    @Query(returns =>[Shot], {name: "shots"})
    getAllShots(){
        return this.shotService.getAllShots();
    }

    @Query(returns =>[Shot], {name: "findShotById"})
    getShotById(@Args ({name: "shotId", type: ()=>Int}) id: number){
        return this.shotService.findShotById(id);
    }

    @Mutation(returns =>String, {name: "deleteShot"})
    deleteShotById(@Args ({name: "shotId", type: ()=>Int}) id: number){
        return this.shotService.deleteShot(id);
    }

    // @Mutation(returns =>String, {name: "addShot"})
    // addShot(@Args("addShotArg") addShotArg: AddShotArgs){
    //     console.log("hi");
    //     console.log(addShotArg);
    //     return this.shotService.addShot(addShotArg);
    // }
    @Mutation(() => String)
    async addShot(@Args("addShotArgs") addShotArgs: AddShotArgs): Promise<String> {
        console.log(addShotArgs);
        if(addShotArgs != null){
            console.log(addShotArgs);
        return await this.shotService.create(addShotArgs);
        }
        else{
            return "no data";
        }
    }
     @Mutation(() => String)
  createItem(@Args('input') input: CreateItemInput): string {
    // Correctly access the data property from the input object
    const { data } = input;

    // Here, you can perform any logic with the received data
    console.log('Received data:', data);

    // For simplicity, we'll just echo the received data back
    return `Received data: ${data}`;
  }

    @Mutation(returns =>String, {name: "updateShot"})
    updateShot(
    @Args("updateShotArgs") updateShotArgs : UpdateShotArgs){
        console.log(updateShotArgs)
        return this.shotService.updateShot(updateShotArgs);
    }
    // @Mutation(returns =>String, {name: "updateShot"})
    // updateShot(@Args ({name: "shotId", type: ()=>Int}) id: number, 
    // @Args("updateShotArgs") updateShotArgs : UpdateShotArgs){
    //     return this.shotService.updateShot(id, updateShotArgs);
    // }
}
