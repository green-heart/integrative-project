import { ApiProperty } from "@nestjs/swagger"

export class UserLogin {

    @ApiProperty()
    public username: string

    @ApiProperty()
    public password: string

}