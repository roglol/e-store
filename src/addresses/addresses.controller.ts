import {Body, Controller, Post} from '@nestjs/common';
import {AddressesService} from "./addresses.service";
import {Address} from "./address.entity";

@Controller('addresses')
export class AddressesController {
    constructor(private service: AddressesService) { }
    @Post()
    async create(@Body() address: Address) {
        return this.service.createAddress(address);
    }

}
