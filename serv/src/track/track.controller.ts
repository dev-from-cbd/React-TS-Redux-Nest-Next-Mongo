import { Controller } from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
    create() {

    }

    @Get()
    getAll() {
        return 'WORK'
    }

    getOne() {

    }

    delete() {

    }
}