import { RequestHandler } from "../../config";

interface IAddress {
  city: string;
  state: string;
  street: string;
  latitude: number;
  longitude: number;
}

interface CreateOrderDTO {
  trashTypeId: string;
  address: IAddress;
  location: number[];
}

export class CollectionOrederAPI {
  public static getTrashMaterial(token: string) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:19 ~ CollectionOrederAPI ~ getTrashMaterial ~  getTrashMaterial"
    );
    return RequestHandler({
      url: "/trash-types",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public static createCollectionOrder({
    token,
    data,
  }: {
    token: string;
    data: CreateOrderDTO;
  }) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:31 ~ CollectionOrederAPI ~  createCollectionOrder"
    );
    return RequestHandler({
      url: "/recycle-request",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
  }
  public static collectOrder({ token, id }: { token: string; id: string }) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:58 ~ CollectionOrederAPI ~  collectOrder : ",
      id
    );
    return RequestHandler({
      url: `/recycle-request/${id}/collect`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  public static getNearCollectionOrder({
    token,
    topLeft,
    bottomRight,
  }: {
    token: string;
    topLeft: string;
    bottomRight: string;
  }) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:48 ~ CollectionOrederAPI ~  getNearCollectionOrder"
    );
    return RequestHandler({
      url: `/recycle-request/near?topLeft=${topLeft}&bottomRight=${bottomRight}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  public static getOrdersHistory({
    token,
    data,
  }: {
    token: string;
    data: any;
  }) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:76 ~ CollectionOrederAPI ~  getOrdersHistory"
    );
    return RequestHandler({
      url: "/recycle-request/history",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  public static getCollectionsHistory({
    token,
    data,
  }: {
    token: string;
    data: any;
  }) {
    console.log(
      "🚀 ~ file: CollectionOrder.ts:109 ~ CollectionOrederAPI ~  getCollectionsHistory"
    );
    return RequestHandler({
      url: "/recycle-request/collection/history",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
