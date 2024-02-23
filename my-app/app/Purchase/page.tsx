"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

export type PurchaseType = {
  purchase_ID: string;
  purchase_date: string;
  item_id: string;
  requsition_id: string;
  item_category: string;
  unit_rate: string;
  amount: string;
};

function Purchase() {
  const router = useRouter();

  const [item] = useLocalStorage("Item");
  const [requsition] = useLocalStorage("Requsition");
  const [, setPurchaseData] = useLocalStorage("PurchaseData");
  const formik = useFormik({
    initialValues: {
      purchase_ID: "",
      purchase_date: "",
      item_id: "",
      requsition_id: "",
      item_category: "",
      unit_rate: "",
      amount: "",
    } as PurchaseType,
    validationSchema: Yup.object({
      purchase_ID: Yup.string().required("Purchase ID is required"),
      purchase_date: Yup.date().required("Purchase date is required"),
      item_id: Yup.string().required("Item ID is required"),
      requsition_id: Yup.string().required("purchase ID is required"),
      item_category: Yup.string().required("Item category is required"),
      unit_rate: Yup.string().required("Unit rate is required"),
      amount: Yup.string().required("Amount is required"),
    }),
    onSubmit: async (values) => {
      try {
        // const response = await fetch("/api/purchaseroute", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to submit purchase");
        // }

        // console.log("purchase submitted successfully!");

        setPurchaseData(values);
        router.push("/Issuance");

        formik.resetForm();
      } catch (error) {
        console.error("Error submitting purchase:", error);
      }
    },
  });
  useEffect(() => {
    let itemDetails = item;

    if (!requsition) {
      router.push("/Requsition");
    }
    formik.setFieldValue("item_id", itemDetails?.itemId);
    formik.setFieldValue("item_category", itemDetails?.item_category);
    formik.setFieldValue("item_category", itemDetails?.item_category);
    formik.setFieldValue("requsition_id", requsition?.requsition_id);
  }, []);

  return (
    <div className="w-1/2">
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto">
        <div className="border border-gray-200 p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Purchase Information
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please fill in the purchase details.
          </p>

          <div className="grid grid-cols-1 gap-y-6">
            <div>
              <label
                htmlFor="purchase_ID"
                className="block text-sm font-medium text-gray-900"
              >
                Purchase ID
              </label>
              <input
                id="purchase_ID"
                name="purchase_ID"
                type="text"
                placeholder="Purchase ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchase_ID}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.purchase_ID && formik.errors.purchase_ID ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.purchase_ID}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="purchase_date"
                className="block text-sm font-medium text-gray-900"
              >
                Purchase Date
              </label>
              <input
                id="purchase_date"
                name="purchase_date"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchase_date}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.purchase_date && formik.errors.purchase_date ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.purchase_date}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="item_id"
                className="block text-sm font-medium text-gray-900"
              >
                Item ID
              </label>
              <input
                id="item_id"
                name="item_id"
                type="text"
                placeholder="Item ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.item_id}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.item_id && formik.errors.item_id ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.item_id}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="requsition_id"
                className="block text-sm font-medium text-gray-900"
              >
                Requisition ID
              </label>
              <input
                id="requsition_id"
                name="requsition_id"
                type="text"
                placeholder="Requisition ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.requsition_id}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.requsition_id && formik.errors.requsition_id ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.requsition_id}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="item_category"
                className="block text-sm font-medium text-gray-900"
              >
                Item Category
              </label>
              <input
                id="item_category"
                name="item_category"
                type="text"
                placeholder="Item Category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.item_category}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.item_category && formik.errors.item_category ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.item_category}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="unit_rate"
                className="block text-sm font-medium text-gray-900"
              >
                Unit Rate
              </label>
              <input
                id="unit_rate"
                name="unit_rate"
                type="text"
                placeholder="Unit Rate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.unit_rate}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.unit_rate && formik.errors.unit_rate ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.unit_rate}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-900"
              >
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                placeholder="Amount"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 "
              />
              {formik.touched.amount && formik.errors.amount ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.amount}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md p-1  shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Purchase;
