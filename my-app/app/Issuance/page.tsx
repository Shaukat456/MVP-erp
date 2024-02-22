"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

function Issuance() {
  const router = useRouter();
  const [setIssuance] = useLocalStorage("Issuance");
  const [item] = useLocalStorage("Item");
  const [purchase] = useLocalStorage("Purchase");

  useEffect(() => {});
  const formik = useFormik({
    initialValues: {
      idissuance: "",
      issuancedate: "",
      location: "",
      itemId: "",
      issuance_deprt: "",
      issuance_qty: "",
    },
    validationSchema: Yup.object({
      idissuance: Yup.string().required("Issuance ID is required"),
      issuancedate: Yup.date().required("Issuance date is required"),
      location: Yup.string().required("Location is required"),
      itemId: Yup.string().required("Item ID is required"),
      issuance_deprt: Yup.string().required("Issuance Department is required"),
      issuance_qty: Yup.string().required("Issuance Quantity is required"),
    }),
    onSubmit: async (values) => {
      try {
        // const response = await fetch("/api/issuanceroute", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to submit Issuance");
        // }
        setIssuance(values);
        console.log(values);
        console.log("Issuance submitted successfully!");
      } catch (error) {
        console.error("Error submitting Issuance:", error);
      }
    },
  });
  useEffect(() => {
    // if (!purchase) {
    //   router.push("/Purchase");
    // }
    formik.setFieldValue("item_id", item?.itemId);
  }, []);

  return (
    <div className="w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Issuance Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="border border-gray-200 p-6 rounded-md shadow-md"
      >
        <div className="grid grid-cols-1 gap-y-6">
          <div className="input_container">
            <label
              htmlFor="idissuance"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issuance ID
            </label>
            <input
              id="idissuance"
              name="idissuance"
              type="text"
              placeholder="Requisition ID"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.idissuance}
              className="w-full p-1"
            />
            {formik.touched.idissuance && formik.errors.idissuance ? (
              <p className="error">{formik.errors.idissuance}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="issuancedate"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issuance Date
            </label>
            <input
              id="issuancedate"
              name="issuancedate"
              type="date"
              placeholder="Requisition Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issuancedate}
              className="w-full p-1"
            />
            {formik.touched.issuancedate && formik.errors.issuancedate ? (
              <p className="error">{formik.errors.issuancedate}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-900"
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
              htmlFor="issuance_deprt"
              className="block text-sm font-medium text-gray-900"
            >
              Issuance Department
            </label>
            <input
              id="issuance_deprt"
              name="issuance_deprt"
              type="text"
              placeholder="Issuance Department"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issuance_deprt}
              className="w-full p-1"
            />
            {formik.touched.issuance_deprt && formik.errors.issuance_deprt ? (
              <p className="error">{formik.errors.issuance_deprt}</p>
            ) : null}
          </div>

          <div className="input_container">
            <label
              htmlFor="issuance_qty"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Issuance Quantity
            </label>
            <input
              id="issuance_qty"
              name="issuance_qty"
              type="text"
              placeholder="Issuance Quantity"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issuance_qty}
              className="w-full p-1"
            />
            {formik.touched.issuance_qty && formik.errors.issuance_qty ? (
              <p className="error">{formik.errors.issuance_qty}</p>
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

export default Issuance;
