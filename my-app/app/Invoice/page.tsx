"use client";
import { useEffect, useState } from "react";
// InvoiceComponent.jsx
import useLocalStorage from "../hooks/useLocalStorage";

const InvoiceComponent = () => {
  const [item, setItem] = useState<string | any>();
  const [purchase, setPurchase] = useState<string | any>();
  const [Item] = useLocalStorage("Item");
  const [Purchase] = useLocalStorage("Purchase");
  const [Issuance] = useLocalStorage("Issuance");
  const [StoreStock] = useLocalStorage("StoreStock");

  useEffect(() => {
    setItem(Item);
  }, []);
  return (
    <div className="px-8 py-4">
      <div className="flex justify-between mb-4">
        <div className="text-xl font-bold">{item?.item_id}</div>
        <div className="text-lg">Invoice #{item?.item_category}</div>
        <div className="text-lg">Invoice #{item?.vendor_id}</div>
        <div className="text-lg">Invoice #{item?.model}</div>
        <div className="text-lg">Invoice #{item?.make}</div>
        <div className="text-lg">Invoice #{item?.item_unit}</div>
        <div className="text-lg">Invoice #{item?.item_size}</div>
        <div className="text-lg">Invoice #{item?.item_name}</div>
      </div>
      <div className="mb-4">
        {/* <p className="text-gray-700">Issued to:</p>
          <h2 className="font-medium">{invoiceData.clientName}</h2>
          <p className="text-gray-700">{invoiceData.clientAddress}</p> */}
      </div>
      {/* ... other sections ... */}
    </div>
  );
};

export default InvoiceComponent;
