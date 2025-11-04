import { DxfBaseReader, IGroup } from "../DxfBaseReader";
import IGeometry, { IEntity } from './geomtry';
import { DwgEntity } from '@mlightcad/libredwg-web';
export interface ISeqendEntity extends IEntity {
}
export default class Seqend implements IGeometry {
    ForEntityName: "SEQEND";
    parseEntity(scanner: DxfBaseReader, curr: IGroup): ISeqendEntity;
    parseDwgEntity(entity: DwgEntity, newEntity: ISeqendEntity): void;
}
