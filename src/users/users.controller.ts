import { Controller, Post, Body, Get,Param, Res} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
// https://stackoverflow.com/questions/54163467/how-to-access-relationship-id-from-parents-joined-field-in-nestjs-typeorm
@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    async get(@Param('id') id,@Res() res) {
        let response = await this.service.getUser(id);
        res.send({response})
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