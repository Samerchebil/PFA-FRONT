import { Trashtype } from "./Trashtype";

export class CollectionOrder {
  constructor(
    public id: string,
    public location: number[],
    public trashType: Trashtype,
    public orderDate: Date,
    public collectionDate: Date | null,
    public openOrder: boolean,
    public user: string,
    public collectorBy: string | null
  ) {}
}
