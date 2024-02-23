"use client";
import { useEffect, useRef, useState } from "react";
// InvoiceComponent.jsx
import useLocalStorage from "../hooks/useLocalStorage";
import { IssuanceType } from "../Issuance/page";
import { PurchaseType } from "../Purchase/page";
import { ItemType } from "../ItemForm/page";
import { StoreStockType } from "../StoreStock/page";
import { RequisitionType } from "../Requsition/page";
import generatePDF, { usePDF } from "react-to-pdf";
const InvoiceComponent = () => {
  const [item, setItem] = useState<ItemType>();
  const [purchase, setPurchase] = useState<PurchaseType>();
  const [issuance, setIssuance] = useState<IssuanceType>();
  const [storeStock, setStoreStock] = useState<StoreStockType>();
  const [requsition, setRequsitionData] = useState<RequisitionType>();

  const [Item] = useLocalStorage("Item");
  const [Purchase] = useLocalStorage("Purchase");
  const [Requsition] = useLocalStorage("Requsition");
  const [Issuance] = useLocalStorage("Issuance");
  const [StoreStock] = useLocalStorage("StoreStock");

  const { toPDF, targetRef } = usePDF({ filename: "invoice.pdf" });

  useEffect(() => {
    setItem(Item);
    setIssuance(Issuance);
    setRequsitionData(Requsition);
    setPurchase(Purchase);
    setStoreStock(StoreStock);
  }, []);
  return (
    // <div className="px-8 py-4">
    //   <div className="flex justify-between mb-4">
    //     <div className="text-xl font-bold">{item?.itemId}</div>
    //     <div className="text-lg">Invoice #{item?.item_category}</div>
    //     <div className="text-lg">Invoice #{item?.vendor_id}</div>
    //     <div className="text-lg">Invoice #{item?.model}</div>
    //     <div className="text-lg">Invoice #{item?.make}</div>
    //     <div className="text-lg">Invoice #{item?.item_unit}</div>
    //     <div className="text-lg">Invoice #{item?.item_size}</div>
    //     <div className="text-lg">Invoice #{item?.item_name}</div>
    //   </div>
    //   <div className="mb-4">
    //     {/* <p className="text-gray-700">Issued to:</p>
    //       <h2 className="font-medium">{invoiceData.clientName}</h2>
    //       <p className="text-gray-700">{invoiceData.clientAddress}</p> */}
    //   </div>
    //   {/* ... other sections ... */}
    // </div>
    <>
      <div className="container mx-auto px-4 py-8" ref={targetRef}>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold mb-4">Invoice</h1>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Item ID:</p>
              <p className="text-gray-700">{item?.itemId}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Item Name:</p>
              <p className="text-gray-700">{item?.item_name}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Item Category:</p>
              <p className="text-gray-700">{item?.item_category}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Item Unit:</p>
              <p className="text-gray-700">{item?.item_unit}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Item Size:</p>
              <p className="text-gray-700">{item?.item_size}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Make:</p>
              <p className="text-gray-700">{item?.make}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Model:</p>
              <p className="text-gray-700">{item?.model}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Vendor ID:</p>
              <p className="text-gray-700">{item?.vendor_id}</p>
            </div>
          </div>
          <hr className="my-8" />
          <h2 className="text-2xl font-semibold mb-4">Requisition Details</h2>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Requisition ID:</p>
              <p className="text-gray-700">{requsition?.requsition_id}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Requisition Date:</p>
              <p className="text-gray-700">{requsition?.requsition_date}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Requisition Location:</p>
              <p className="text-gray-700">{requsition?.requsition_location}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Requisition Location Department:</p>
              <p className="text-gray-700">
                {requsition?.requsition_location_department}
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Required Quantity:</p>
              <p className="text-gray-700">{requsition?.required_quantity}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Usage For:</p>
              <p className="text-gray-700">{requsition?.usage_for}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Requisition Comment:</p>
            <p className="text-gray-700">{requsition?.requsition_comment}</p>
          </div>

          <hr className="my-8" />
          <h2 className="text-2xl font-semibold mb-4">Purchase Details</h2>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Purchase ID:</p>
              <p className="text-gray-700">{purchase?.purchase_ID}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Purchase Date:</p>
              <p className="text-gray-700">{purchase?.purchase_date}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Item ID:</p>
              <p className="text-gray-700">{purchase?.item_id}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Requisition ID:</p>
              <p className="text-gray-700">{purchase?.requsition_id}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Item Category:</p>
              <p className="text-gray-700">{purchase?.item_category}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Unit Rate:</p>
              <p className="text-gray-700">{purchase?.unit_rate}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Amount:</p>
            <p className="text-gray-700">{purchase?.amount}</p>
          </div>

          {/* Requsition */}
          <hr className="my-8" />
          <h2 className="text-2xl font-semibold mb-4">Issuance Details</h2>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Issuance ID:</p>
              <p className="text-gray-700">{issuance?.idissuance}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Issuance Date:</p>
              <p className="text-gray-700">{issuance?.issuancedate}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Location:</p>
              <p className="text-gray-700">{issuance?.location}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Item ID:</p>
              <p className="text-gray-700">{issuance?.itemId}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Issuance Department:</p>
              <p className="text-gray-700">{issuance?.issuance_deprt}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Issuance Quantity:</p>
              <p className="text-gray-700">{issuance?.issuance_qty}</p>
            </div>
          </div>
          {/* Store Stock */}
          <hr className="my-8" />
          <h2 className="text-2xl font-semibold mb-4">Store Stock Details</h2>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Store ID:</p>
              <p className="text-gray-700">{storeStock?.store_id}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Location:</p>
              <p className="text-gray-700">{storeStock?.purchase_id}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-1/2">
              <p className="font-semibold">Store:</p>
              <p className="text-gray-700">{storeStock?.store}</p>
            </div>
            <div className="w-1/2">
              <p className="font-semibold">Purchase ID:</p>
              <p className="text-gray-700">{storeStock?.purchase_id}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      <button
        onClick={() => toPDF()}
        type="button"
        className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Download PDF
      </button>
    </>
  );
};

export default InvoiceComponent;
