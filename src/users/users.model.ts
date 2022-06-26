import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreationAttributes {
  email: string;
  password: string;
}

@Table({tableName: "users"})
export class User extends Model<User, IUserCreationAttributes> {
  @ApiProperty({example: "1", description: "Unique id"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: "aaa@aaa.ru", description: "Your email address"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: "123123", description: "password"})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: "true", description: "If has ban"})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: "Bad words", description: "Reason for ban"})
  @Column({type: DataType.BOOLEAN, allowNull: true})
  banReason: string;
}