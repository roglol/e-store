import { Controller, Post, Body, Get,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    async get(@Param('id') id) {
        return this.service.getUser(id);
    }

    @Post(':id')
    async update(@Param('id') id: string, @Body() user: User) {
        return this.service.updateUser(id,user);
    }
    @Post('/delete/:id')
    async deleteUser(@Param('id') id) {
        return this.service.deleteUser(id);
    }

    @Post()
    async create(@Body() user: User) {
        return this.service.createUser(user);
    }

}