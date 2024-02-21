import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function Issuance() {
  const router = useRouter();

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
        const response = await fetch("/api/issuanceroute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit Issuance");
        }

        console.log("Issuance submitted successfully!");
      } catch (error) {
        console.error("Error submitting Issuance:", error);
      }
    },
  });

  return (
    <div className="container">
      <h1>ISSUANCE</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form_container">
          <div className="formgrid">
            <div className="input_container">
              <input
                id="idissuance"
                name="idissuance"
                type="text"
                placeholder="Issuance ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.idissuance}
              />
              {formik.touched.idissuance && formik.errors.idissuance ? (
                <p className="error">{formik.errors.idissuance}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="issuancedate"
                name="issuancedate"
                type="date"
                placeholder="Issuance Date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.issuancedate}
              />
              {formik.touched.issuancedate && formik.errors.issuancedate ? (
                <p className="error">{formik.errors.issuancedate}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="error">{formik.errors.location}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="itemId"
                name="itemId"
                type="text"
                placeholder="Item ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.itemId}
              />
              {formik.touched.itemId && formik.errors.itemId ? (
                <p className="error">{formik.errors.itemId}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="issuance_deprt"
                name="issuance_deprt"
                type="text"
                placeholder="Issuance Department"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.issuance_deprt}
              />
              {formik.touched.issuance_deprt && formik.errors.issuance_deprt ? (
                <p className="error">{formik.errors.issuance_deprt}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="issuance_qty"
                name="issuance_qty"
                type="text"
                placeholder="Issuance Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.issuance_qty}
              />
              {formik.touched.issuance_qty && formik.errors.issuance_qty ? (
                <p className="error">{formik.errors.issuance_qty}</p>
              ) : null}
            </div>
          </div>
          <button
            onClick={() => {
              router.push("/Vendors");
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Issuance;
