import { Body, Controller, Post } from '@nestjs/common';
import { Lab1Service } from './lab-1.service';
import { IIpProcessDto } from './dto/ip-process.dto';

@Controller('lab-1')
export class Lab1Controller {
    constructor(private readonly lab1Service: Lab1Service) {}

    @Post('process')
    process(@Body() dto: IIpProcessDto) {
        return this.lab1Service.process(dto.ip);
    }
}
