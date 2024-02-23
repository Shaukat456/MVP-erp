"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

export type RequisitionType = {
  requsition_id: string;
  requsition_date: string;
  requsition_location: string;
  requsition_location_department: string;
  itemId: string;
  item_name: string;
  item_category: string;
  item_unit: string;
  required_quantity: string;
  usage_for: string;
  requsition_comment: string;
};

function Requisition() {
  const [requsition, setRequsitionData] = useLocalStorage("Requsition");
  const [item] = useLocalStorage("Item");
  const [purchaseData] = useLocalStorage("PurchaseData");
  const router = useRouter();
  useEffect(() => {
    formik.setFieldValue("itemId", item.itemId);
    formik.setFieldValue("item_name", item.item_name);
    formik.setFieldValue("item_category", item.item_category);
    formik.setFieldValue("item_unit", item.item_unit);
  }, []);

  const formik = useFormik({
    initialValues: {
      requsition_id: "",
      requsition_date: "",
      requsition_location: "",
      requsition_location_department: "",
      itemId: "",
      item_name: "",
      item_category: "",
      item_unit: "",
      required_quantity: "",
      usage_for: "",
      requsition_comment: "",
    } as RequisitionType,
    validationSchema: Yup.object({
      requsition_id: Yup.string().required("Requisition ID is required"),
      requsition_date: Yup.date().required("Requisition date is required"),
      requsition_location: Yup.string().required(
        "Requisition location is required"
      ),
      requsition_location_department: Yup.string().required(
        "Requisition location department is required"
      ),
      itemId: Yup.string().required("Item ID is required"),
      item_name: Yup.string().required("Item name is required"),
      item_category: Yup.string().required("Item category is required"),
      item_unit: Yup.string().required("Item unit is required"),
      required_quantity: Yup.number()
        .required("Required quantity is required")
        .positive("Required quantity must be positive")
        .integer("Required quantity must be an integer"),
      usage_for: Yup.string().required("Usage for is required"),
      requsition_comment: Yup.string().required(
        "Requisition comment is required"
      ),
    }),
    onSubmit: async (values) => {
      try {
        // const response = await fetch("/api/requsitionroute", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to submit requisition");
        // }

        console.log(values);

        setRequsitionData(values);
        router.push("/Purchase");
        console.log("Requisition submitted successfully!");
      } catch (error) {
        console.error("Error submitting requisition:", error);
      }
    },
  });
  useEffect(() => {
    if (!purchaseData) {
      router.push("/Purchase");
    }
    formik.setFieldValue("item_id", item?.itemId);
    formik.setFieldValue("item_name", item?.item_name);
    formik.setFieldValue("item_category", item?.item_category);
    formik.setFieldValue("item_unit", item?.item_unit);
  }, []);

  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Requisition Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-gray-200 p-6 rounded-md shadow-md"
      >
        <div className="grid grid-cols-1 gap-y-6">
          <div className="input_container">
            <label
              htmlFor="requsition_id"
              className="block text-sm font-medium leading-6 text-gray-900"
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
              className="w-full p-1"
            />
            {formik.touched.requsition_id && formik.errors.requsition_id ? (
              <p className="error">{formik.errors.requsition_id}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="requsition_date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Requisition Date
            </label>
            <input
              id="requsition_date"
              name="requsition_date"
              type="date"
              placeholder="Requisition Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.requsition_date}
              className="w-full p-1"
            />
            {formik.touched.requsition_date && formik.errors.requsition_date ? (
              <p className="error">{formik.errors.requsition_date}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="requsition_location"
              className="block text-sm font-medium text-gray-900"
            >
              Requisition Location
            </label>
            <input
              id="requsition_location"
              name="requsition_location"
              type="text"
              placeholder="Requisition Location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.requsition_location}
              className="w-full p-1"
            />
            {formik.touched.requsition_location &&
            formik.errors.requsition_location ? (
              <p className="error">{formik.errors.requsition_location}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="requsition_location_department"
              className="block text-sm font-medium text-gray-900"
            >
              Requisition Location Department
            </label>
            <input
              id="requsition_location_department"
              name="requsition_location_department"
              type="text"
              placeholder="Requisition Location Department"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.requsition_location_department}
              className="w-full p-1"
            />
            {formik.touched.requsition_location_department &&
            formik.errors.requsition_location_department ? (
              <p className="error">
                {formik.errors.requsition_location_department}
              </p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="itemId"
              className="block text-sm font-medium text-gray-900"
            >
              Item ID
            </label>
            <input
              id="itemId"
              name="itemId"
              type="text"
              placeholder="Item ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.itemId}
              className="w-full p-1"
            />
            {formik.touched.itemId && formik.errors.itemId ? (
              <p className="error">{formik.errors.itemId}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="item_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Item Name
            </label>
            <input
              id="item_name"
              name="item_name"
              type="text"
              placeholder="Item name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.item_name}
              className="w-full p-1"
            />

            {formik.touched.item_name && formik.errors.item_name ? (
              <p className="error">{formik.errors.item_name}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="item_category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Item Category
            </label>
            <input
              id="item_category"
              name="item_category"
              type="text"
              placeholder="Item category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.item_category}
              className="w-full p-1"
            />
            {formik.touched.item_category && formik.errors.item_category ? (
              <p className="error">{formik.errors.item_category}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="item_unit"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Item Unit
            </label>
            <input
              id="item_unit"
              name="item_unit"
              type="text"
              placeholder="Item unit"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.item_unit}
              className="w-full p-1"
            />
            {formik.touched.item_unit && formik.errors.item_unit ? (
              <p className="error">{formik.errors.item_unit}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="required_quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Required Quantity
            </label>
            <input
              id="required_quantity"
              name="required_quantity"
              type="text"
              placeholder="Required Quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.required_quantity}
              className="w-full p-1"
            />
            {formik.touched.required_quantity &&
            formik.errors.required_quantity ? (
              <p className="error">{formik.errors.required_quantity}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="usage_for"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Usage For
            </label>
            <input
              id="usage_for"
              name="usage_for"
              type="text"
              placeholder="Usage For"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.usage_for}
              className="w-full p-1"
            />
            {formik.touched.usage_for && formik.errors.usage_for ? (
              <p className="error">{formik.errors.usage_for}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="requsition_comment"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Requsition Comment
            </label>
            <input
              id="requsition_comment"
              name="requsition_comment"
              type="text"
              placeholder="Requisition Comment"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.requsition_comment}
              className="w-full p-1"
            />
            {formik.touched.requsition_comment &&
            formik.errors.requsition_comment ? (
              <p className="error">{formik.errors.requsition_comment}</p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Requisition;
