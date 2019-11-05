import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { UserService } from './user.service'
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){
        
    }

    @Get()
    showAllUsers(){
        return this.userService.showAll();
    }

    @Post()
    createUser(@Body() data: UserDTO){
        return this.userService.create(data);
    }

    @Get(':id')
    readUser(@Param('id') id: Number){
        return this.userService.read(id)
    }

    @Put(':id')
    updateUser(@Param('id') id: Number, @Body() data: Partial<UserDTO>){
        return this.userService.update(id, data)
    }

    @Delete(':id')
    destroyUser(@Param('id') id: Number){
        return this.userService.destroy(id)
    }

}
