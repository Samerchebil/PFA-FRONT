import { useContext } from "react";
import { AxiosError } from "axios";
import { useMutationReq, useQueryReq } from "../Hooks";
import { CollectionOrederAPI } from "./api/CollectionOrder";
import { CollectionOrderContext, ModeContext, UserContext } from "../context";
import { CollectionOrder, Trashtype } from "../models";
import { useQuery } from "react-query";
import { Corners } from "../utilities";

export class CollectionOrderService {
  public static getTrashMaterial() {
    const { user } = useContext(UserContext);
    return useQuery({
      queryKey: "trashMaterial",
      queryFn: () =>
        CollectionOrederAPI.getTrashMaterial(user?.token as string),
      onSuccess: (data) => console.log("onSuccess", data.data),
      onError: (err: AxiosError) => console.log("onError", err.cause),
    });
  }

  public static getNearCollectionOrders() {
    const { user } = useContext(UserContext);
    const { setCollectionOrder, orders } = useContext(CollectionOrderContext);
    const { mutate, ...rest } = useMutationReq({
      queryKey: "getNearCollectionOrders",
      request: CollectionOrederAPI.getNearCollectionOrder,
      onSuccess: (data) => {
        const newItems = data.data.filter(
          (item: any) =>
            !orders.some((existingItem) => existingItem.id === item.id)
        );
        console.log(
          "🚀 ~ file: CollectionOrderService.ts:33 ~ CollectionOrderService ~ getNearCollectionOrders ~ newItems:",
          newItems
        );
        setCollectionOrder((old) => [
          ...old,
          ...newItems.map(
            (order: any) =>
              new CollectionOrder(
                order.id,
                order.location,
                new Trashtype(
                  order.trashType.id,
                  order.trashType.name,
                  order.trashType.description
                ),
                order.orderDate,
                order.collectionDate,
                order.openOrder,
                order.user,
                order.collectorBy
              )
          ),
        ]);
      },
      onError: (err: AxiosError) => console.log("onError", err.cause),
    });

    const onRegionChange = (region: Corners | null) => {
      const topLeft =
        region?.topLeft.latitude + "," + region?.topLeft.longitude;
      const bottomRight =
        region?.bottomRight.latitude + "," + region?.bottomRight.longitude;
      mutate({
        token: user?.token as string,
        topLeft,
        bottomRight,
      });
    };
    return { onRegionChange, ...rest };
  }
  public static getOrdersHistory() {
    const { user } = useContext(UserContext);
    const { sethistory, history } = useContext(CollectionOrderContext);
    return useQueryReq({
      queryKey: "getOrdersHistory",
      request: () =>
        CollectionOrederAPI.getOrdersHistory({
          token: user?.token as string,
          data: {},
        }),
      onSuccess: (data) => {
        const newItems = data.data.filter(
          (item: any) =>
            !history.some((existingItem) => existingItem.id === item.id)
        );
        console.log(
          "🚀 ~ file: CollectionOrderService.ts:84 ~ CollectionOrderService ~ getOrdersHistory ~ newItems:",
          newItems
        );
        sethistory((old) => [
          ...old,
          ...newItems.map(
            (order: any) =>
              new CollectionOrder(
                order.id,
                order.location,
                new Trashtype(
                  order.trashType.id,
                  order.trashType.name,
                  order.trashType.description
                ),
                order.orderDate,
                order.collectionDate,
                order.openOrder,
                order.user,
                order.collectorBy
              )
          ),
        ]);
      },
      onError: (err: AxiosError) => console.log("onError", err.cause),
    });
  }
  public static getCollectionHistory() {
    const { user } = useContext(UserContext);
    const { setcollectionHistory, collectionHistory } = useContext(
      CollectionOrderContext
    );
    return useQueryReq({
      queryKey: "getCollectionHistory",
      request: () =>
        CollectionOrederAPI.getCollectionsHistory({
          token: user?.token as string,
          data: {},
        }),
      onSuccess: (data) => {
        const newItems = data.data.filter(
          (item: any) =>
            !collectionHistory.some(
              (existingItem) => existingItem.id === item.id
            )
        );
        console.log(
          "🚀 ~ file: CollectionOrderService.ts:84 ~ CollectionOrderService ~ getOrdersHistory ~ newItems:",
          newItems
        );
        setcollectionHistory((old) => [
          ...old,
          ...newItems.map(
            (order: any) =>
              new CollectionOrder(
                order.id,
                order.location,
                new Trashtype(
                  order.trashType.id,
                  order.trashType.name,
                  order.trashType.description
                ),
                order.orderDate,
                order.collectionDate,
                order.openOrder,
                order.user,
                order.collectorBy
              )
          ),
        ]);
      },
      onError: (err: AxiosError) => console.log("onError", err.cause),
    });
  }

  public static createCollectionOrder() {
    const { user } = useContext(UserContext);
    const { sethistory } = useContext(CollectionOrderContext);

    const { mutate, ...rest } = useMutationReq({
      queryKey: "createCollectionOrder",
      request: CollectionOrederAPI.createCollectionOrder,
      onSuccess: ({ data }) => {
        const order = data.data;
        console.log("collection order created ", order);
        sethistory((old) => [
          new CollectionOrder(
            order.id,
            order.location,
            new Trashtype(
              order.trashType.id,
              order.trashType.name,
              order.trashType.description
            ),
            order.orderDate,
            order.collectionDate,
            order.openOrder,
            order.user,
            order.collectorBy
          ),
          ...old,
        ]);
      },
      onError: (err: AxiosError) =>
        console.log("onError", (err.response?.data as any).message),
    });

    const onCreateOrder = (data: any) => {
      mutate({
        token: user?.token,
        data: {
          trashTypeId: data.id,
          location: user?.location,
        },
      });
    };
    return { onCreateOrder, ...rest };
  }
  public static collectOrder() {
    const { user } = useContext(UserContext);
    const { setNotification } = useContext(ModeContext);
    const { setcollectionHistory, setCollectionOrder } = useContext(
      CollectionOrderContext
    );

    const { mutate, ...rest } = useMutationReq({
      queryKey: "collectOrder",
      request: CollectionOrederAPI.collectOrder,
      onSuccess: ({ data }) => {
        const order = data.data;
        const collectedOrder = new CollectionOrder(
          order.id,
          order.location,
          new Trashtype(
            order.trashType.id,
            order.trashType.name,
            order.trashType.description
          ),
          order.orderDate,
          order.collectionDate,
          order.openOrder,
          order.user,
          order.collectorBy
        );
        console.log("Order collected ", collectedOrder);
        setCollectionOrder((old) =>
          old.filter((i) => i.id !== collectedOrder.id)
        );
        setcollectionHistory((old) => [collectedOrder, ...old]);
      },
      onError: (err: AxiosError) => {
        console.log("onError", (err.response?.data as any).message);
        if (err.response)
          setNotification({
            type: "error",
            message: (err.response?.data as any).message,
          });
      },
    });

    const onCollectOrder = (id: string) => {
      mutate({
        token: user?.token,
        id,
      });
    };
    return { onCollectOrder, ...rest };
  }
}
