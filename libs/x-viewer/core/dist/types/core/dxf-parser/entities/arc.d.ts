import { DxfBaseReader, IGroup } from "../DxfBaseReader";
import IGeometry, { IEntity, IPoint } from "./geomtry";
import { DwgArcEntity } from "@mlightcad/libredwg-web";
export interface IArcEntity extends IEntity {
    center: IPoint;
    radius: number;
    startAngle: number;
    endAngle: number;
    angleLength: number;
    extrusionDirectionX: number;
    extrusionDirectionY: number;
    extrusionDirectionZ: number;
}
export default class Arc implements IGeometry {
    ForEntityName: "ARC";
    parseEntity(scanner: DxfBaseReader, curr: IGroup): IArcEntity;
    parseDwgEntity(entity: DwgArcEntity, newEntity: IArcEntity): void;
}
