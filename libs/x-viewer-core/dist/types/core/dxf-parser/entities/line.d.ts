import { DxfBaseReader, IGroup } from "../DxfBaseReader";
import IGeometry, { IEntity, IPoint } from './geomtry';
import { DwgLineEntity } from '@mlightcad/libredwg-web';
export interface ILineEntity extends IEntity {
    vertices: IPoint[];
    extrusionDirection: IPoint;
}
export default class Line implements IGeometry {
    ForEntityName: "LINE";
    parseEntity(scanner: DxfBaseReader, curr: IGroup): ILineEntity;
    parseDwgEntity(entity: DwgLineEntity, newEntity: ILineEntity): void;
}
