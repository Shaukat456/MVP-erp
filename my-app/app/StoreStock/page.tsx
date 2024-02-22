"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

function StoreStock() {
  const router = useRouter();
  const [purchase] = useLocalStorage("PurchaseData");
  const [, setStoreStock] = useLocalStorage("StoreStock");

  const formik = useFormik({
    initialValues: {
      store_id: "",
      location: "",
      store: "",
      purchase_id: "",
    },
    validationSchema: Yup.object({
      store_id: Yup.string().required("Store ID is required"),
      location: Yup.string().required("Location is required"),
      store: Yup.string().required("Store is required"),
      purchase_id: Yup.string().required("Purchase ID is required"),
    }),
    onSubmit: async (values) => {
      try {
        setStoreStock(values);
        console.log(values);
        // const response = await fetch("/api/storestockroute", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to submit store stock");
        // }

        setStoreStock(values);
        console.log("store stock submitted successfully!");
      } catch (error) {
        console.error("Error submitting store stock:", error);
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("purchase_id", purchase?.purchase_ID);
  }, []);

  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Store Stock Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-gray-200 p-6 rounded-md shadow-md"
      >
        <div className="grid grid-cols-1 gap-y-6">
          <div className="input_container">
            <label
              htmlFor="store_id"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Store ID
            </label>
            <input
              id="store_id"
              name="store_id"
              type="text"
              placeholder="Store ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.store_id}
              className="w-full p-1"
            />
            {formik.touched.store_id && formik.errors.store_id ? (
              <p className="error">{formik.errors.store_id}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
              className="w-full p-1"
            />
            {formik.touched.location && formik.errors.location ? (
              <p className="error">{formik.errors.location}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="store"
              className="block text-sm font-medium text-gray-900"
            >
              Store
            </label>
            <input
              id="store"
              name="store"
              type="text"
              placeholder="Store"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.store}
              className="w-full p-1"
            />
            {formik.touched.store && formik.errors.store ? (
              <p className="error">{formik.errors.store}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="purchase_id"
              className="block text-sm font-medium text-gray-900"
            >
              Purchase ID
            </label>
            <input
              id="purchase_id"
              name="purchase_id"
              type="text"
              placeholder="Purchase ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.purchase_id}
              className="w-full p-1"
            />
            {formik.touched.purchase_id && formik.errors.purchase_id ? (
              <p className="error">{formik.errors.purchase_id}</p>
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

export default StoreStock;
