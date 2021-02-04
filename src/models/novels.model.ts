import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Novel } from '../interfaces/model.interface';

export type NovelCreationAttributes = Optional<Novel, 'id' | 'name'>;

export class NovelModel extends Model<Novel, NovelCreationAttributes> implements Novel {
  public id: number;
  public name: string;
}

export default function (sequelize: Sequelize): typeof NovelModel {
  NovelModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      // modelName: 'novel',
      tableName: 'novels',
      sequelize,
    },
  );

  return NovelModel;
}
