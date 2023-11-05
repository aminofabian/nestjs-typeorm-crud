import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}
         // Get  Request
    @Get()
    async getUsers(){ 
        const users = await this.userService.findUsers();
        return users; }

     // POST Request
     @Post()
     createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return this.userService.createUser(createUserDto);
    }

// DELETE Request
@Delete(':id')
async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
}

}
