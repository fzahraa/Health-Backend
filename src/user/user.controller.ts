import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //get all users
  @Get()
  getUsers() {
    return this.userService.get();
  }

  //sign up
  @Post('/signUp')
  async store(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    console.log(createUserDto);
    if (
      createUserDto.email != null &&
      createUserDto.password != null &&
      createUserDto.name != null
    ) {
      if (createUserDto.password === createUserDto.confirmPassword) {
        await this.userService.findByEmail(createUserDto.email).then(async(data) => {
          if (data) {
            res.status(HttpStatus.FORBIDDEN).send({
              message: 'Email Already Exists.',
            });
            return res;
          } else {
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
            createUserDto.password = hash;
            this.userService.create(createUserDto).then((obj) => {
              res.status(HttpStatus.OK).send({
                message: 'User Successfully Added.',
              });
            });
          }
        });
      } else if (createUserDto.password !== createUserDto.confirmPassword) {
        res.status(HttpStatus.FORBIDDEN).send({
          message: 'Password Not Matched.',
        });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({
          message:
            'There is an Error while creating this user. Please Try Again.',
        });
      }
    }
    return res;
  }



  //get a specific user
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }

  //delete a user
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
