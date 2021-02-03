import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Reading } from '../interfaces/model.interface';
//TODO:
export type ReadingCreationAttributes = Optional<Reading, 'id' | 'user_id' | 'novel_id' | 'progress'>;

export class ReadingModel extends Model<Reading, ReadingCreationAttributes> implements Reading {
  public id: number;
  public user_id: number;
  public novel_id: number;
  public progress: number;
  // public email: string;
  // public password: string;

  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof ReadingModel {
  ReadingModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      novel_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      progress: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'readings',
      sequelize,
    },
  );

  return ReadingModel;
}
