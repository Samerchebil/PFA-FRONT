import React, { createContext, useState } from "react";
import { CollectionOrder } from "../models";

interface Props {
  children: React.ReactNode;
}

interface CollectionOrderContextValue {
  orders: CollectionOrder[];
  setCollectionOrder: React.Dispatch<React.SetStateAction<CollectionOrder[]>>;
  history: CollectionOrder[];
  sethistory: React.Dispatch<React.SetStateAction<CollectionOrder[]>>;
  collectionHistory: CollectionOrder[];
  setcollectionHistory: React.Dispatch<React.SetStateAction<CollectionOrder[]>>;
}

const initialCollectionOrderContextValue: CollectionOrderContextValue = {
  orders: [],
  setCollectionOrder: () => {},
  history: [],
  sethistory: () => {},
  collectionHistory: [],
  setcollectionHistory: () => {},
};

export const CollectionOrderContext =
  createContext<CollectionOrderContextValue>(
    initialCollectionOrderContextValue
  );

export const CollectionOrderProvider: React.FC<Props> = ({ children }) => {
  const [orders, setCollectionOrder] = useState<CollectionOrder[]>([]);
  const [history, sethistory] = useState<CollectionOrder[]>([]);
  const [collectionHistory, setcollectionHistory] = useState<CollectionOrder[]>(
    []
  );

  return (
    <CollectionOrderContext.Provider
      value={{
        orders,
        setCollectionOrder,
        history,
        sethistory,
        collectionHistory,
        setcollectionHistory,
      }}
    >
      {children}
    </CollectionOrderContext.Provider>
  );
};
