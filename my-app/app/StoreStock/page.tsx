import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function StoreStock() {
  const router = useRouter();
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
        const response = await fetch("/api/storestockroute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit store stock");
        }

        console.log("store stock submitted successfully!");
      } catch (error) {
        console.error("Error submitting store stock:", error);
      }
    },
  });

  return (
    <div className="container">
      <h1>STORE STOCK</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form_container">
          <div className="formgrid">
            <div className="input_container">
              <input
                id="store_id"
                name="store_id"
                type="text"
                placeholder="Store ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.store_id}
              />
              {formik.touched.store_id && formik.errors.store_id ? (
                <p className="error">{formik.errors.store_id}</p>
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
                id="store"
                name="store"
                type="text"
                placeholder="Store"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.store}
              />
              {formik.touched.store && formik.errors.store ? (
                <p className="error">{formik.errors.store}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="purchase_id"
                name="purchase_id"
                type="text"
                placeholder="Purchase ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purchase_id}
              />
              {formik.touched.purchase_id && formik.errors.purchase_id ? (
                <p className="error">{formik.errors.purchase_id}</p>
              ) : null}
            </div>
          </div>
          <button
            onClick={() => {
              router.push("/Issuance");
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

export default StoreStock;
