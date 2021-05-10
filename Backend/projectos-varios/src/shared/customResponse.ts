import { ApiProperty } from '@nestjs/swagger';

export class CustomResponse {

  constructor(){
    this.Error = false;
    this.ErrorDescription = '';
    this.UpdatedItems = 0;
    this.CreatedItems = 0;
  }

  @ApiProperty()
  Error: boolean;

  @ApiProperty()
  ErrorDescription: string;

  @ApiProperty()
  UpdatedItems: number;

  @ApiProperty()
  CreatedItems: number;
}