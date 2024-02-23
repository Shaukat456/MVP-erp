"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

const Vendors = ["Shaukat", "Hamza", "Munim"];
const categories = ["portale", "physical  ", "reliable"];
export type ItemType = {
  itemId: string;
  item_name: string;
  item_category: string;
  item_unit: string;
  item_size: string;
  make: string;
  model: string;
  vendor_id: string;
};

const ItemForm = () => {
  const router = useRouter();

  const [, setItem] = useLocalStorage("Item");
  const [vendors, setVendors] = useLocalStorage("Vendors");
  useEffect(() => {
    setVendors(Vendors);
  }, []);
  const formik = useFormik({
    initialValues: {
      itemId: "",
      item_name: "",
      item_category: "",
      item_unit: "",
      item_size: "",
      make: "",
      model: "",
      vendor_id: "",
    } as ItemType,
    validationSchema: Yup.object({
      itemId: Yup.string().required("Item ID is required"),
      item_name: Yup.string().required("Item name is required"),
      item_category: Yup.string().required("Item category is required"),
      item_unit: Yup.string().required("Item unit is required"),
      item_size: Yup.string().required("Item size is required"),
      make: Yup.string().required("Make is required"),
      model: Yup.string().required("Model is required"),
      vendor_id: Yup.string().required("Vendor ID is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      try {
        setItem(values);

        formik.resetForm();
        // const response = await fetch("/api/itemroute", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to add item");
        // }

        // router.push("/Requsition");
        console.log("Item added successfully!");
      } catch (error) {
        console.error("Error adding item:", error);
      }
      setSubmitting(false);
    },
  });

  return (
    <>
      <div className="w-1/2">
        <form onSubmit={formik.handleSubmit} className="w-full mx-auto">
          <div className="border border-gray-200 p-6 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Item Info
            </h2>
            <p className="text-sm text-gray-600 mb-6">Enter Item Info</p>

            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label
                  htmlFor="itemId"
                  className="block text-sm font-medium text-gray-900 p-1"
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
                  className="mt-1  focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.itemId && formik.errors.itemId ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.itemId}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="item_name"
                  className="block text-sm font-medium p-1 text-gray-900"
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
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.item_name && formik.errors.item_name ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.item_name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="item_category"
                  className="block text-sm font-medium text-gray-900 p-1"
                >
                  Item Category
                </label>
                <select
                  id="item_category"
                  name="item_category"
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.item_category}
                >
                  <option value="">Select a category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {formik.touched.item_category && formik.errors.item_category ? (
                  <p className="text-red-500 text-sm mt-1 p-1">
                    {formik.errors.item_category}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="item_unit"
                  className="block text-sm font-medium p-1 text-gray-900"
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
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.item_unit && formik.errors.item_unit ? (
                  <p className="text-red-500 text-sm mt-1 p-1">
                    {formik.errors.item_unit}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="item_size"
                  className="block text-sm font-medium text-gray-900 p-1"
                >
                  Item Size
                </label>
                <input
                  id="item_size"
                  name="item_size"
                  type="text"
                  placeholder="Item size"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.item_size}
                  className="mt-1  focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.item_size && formik.errors.item_size ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.item_size}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="make"
                  className="block text-sm font-medium p-1 text-gray-900"
                >
                  Make
                </label>
                <input
                  id="make"
                  name="make"
                  type="text"
                  placeholder="Make"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.make}
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.make && formik.errors.make ? (
                  <p className="text-red-500 text-sm mt-1 p-1">
                    {formik.errors.make}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium p-1 text-gray-900"
                >
                  Model
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  placeholder="Model"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.model}
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {formik.touched.model && formik.errors.model ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.model}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="vendor_id"
                  className="block text-sm font-medium text-gray-900"
                >
                  Vendor Name
                </label>
                <select
                  id="vendor_id"
                  name="vendor_id"
                  className="mt-1 focus:ring-indigo-500 p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.vendor_id}
                >
                  <option value="">Select a vendor</option>
                  {vendors &&
                    vendors.map((vendor: any, index: number) => (
                      <option key={index} value={vendor}>
                        {vendor}
                      </option>
                    ))}
                </select>
                {formik.touched.vendor_id && formik.errors.vendor_id ? (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.vendor_id}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ItemForm;
