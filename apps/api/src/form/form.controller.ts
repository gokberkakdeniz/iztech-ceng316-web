import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';

@Controller('form')
export class FormController {
    @Post()
    create(): string {
        return "create";
    }

    @Get()
    getAll(): string {
        return `getAll()`;
    }

    @Get(":id")
    getOne(@Param("id", ParseIntPipe) id: number): string {
        return `getOne(${id})`;
    }

    @Patch(":id")
    updateOne(@Param("id") id: string): string {
        return `updateOne(${id})`;
    }
}
