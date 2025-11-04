import { DxfBaseReader, IGroup } from "../DxfBaseReader";
import IGeometry, { IEntity, IPoint } from './geomtry';
import { DwgPointEntity } from '@mlightcad/libredwg-web';
export interface IPointEntity extends IEntity {
    position: IPoint;
    thickness: number;
    extrusionDirection: IPoint;
}
export default class Point implements IGeometry {
    ForEntityName: "POINT";
    parseEntity(scanner: DxfBaseReader, curr: IGroup): IPointEntity;
    parseDwgEntity(entity: DwgPointEntity, newEntity: IPointEntity): void;
}
