import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function Vendors() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      vendor_id: "",
      vendor_name: "",
      location: "",
      address: "",
      contact_number: "",
      contact_person: "",
      email: "",
      web: "",
      item_category: "",
    },
    validationSchema: Yup.object({
      vendor_id: Yup.string().required("Vendor ID is required"),
      vendor_name: Yup.string().required("Vendor Name is required"),
      location: Yup.string().required("Location is required"),
      address: Yup.string().required("Address is required"),
      contact_number: Yup.string().required("Contact Number is required"),
      contact_person: Yup.string().required("Contact Person is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      web: Yup.string().url("Invalid URL").required("Website is required"),
      item_category: Yup.string().required("Item Category is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/vendorsroute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit vendors");
        }

        console.log("vendors submitted successfully!");
      } catch (error) {
        console.error("Error submitting vendors:", error);
      }
    },
  });

  return (
    <div className="container">
      <h1>VENDORS</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form_container">
          <div className="formgrid">
            <div className="input_container">
              <input
                id="vendor_id"
                name="vendor_id"
                type="text"
                placeholder="Vendor ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vendor_id}
              />
              {formik.touched.vendor_id && formik.errors.vendor_id ? (
                <p className="error">{formik.errors.vendor_id}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="vendor_name"
                name="vendor_name"
                type="text"
                placeholder="Vendor Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.vendor_name}
              />
              {formik.touched.vendor_name && formik.errors.vendor_name ? (
                <p className="error">{formik.errors.vendor_name}</p>
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
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <p className="error">{formik.errors.address}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="contact_number"
                name="contact_number"
                type="text"
                placeholder="Contact Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_number}
              />
              {formik.touched.contact_number && formik.errors.contact_number ? (
                <p className="error">{formik.errors.contact_number}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="contact_person"
                name="contact_person"
                type="text"
                placeholder="Contact Person"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contact_person}
              />
              {formik.touched.contact_person && formik.errors.contact_person ? (
                <p className="error">{formik.errors.contact_person}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="web"
                name="web"
                type="text"
                placeholder="Website"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.web}
              />
              {formik.touched.web && formik.errors.web ? (
                <p className="error">{formik.errors.web}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="item_category"
                name="item_category"
                type="text"
                placeholder="Item Category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.item_category}
              />
              {formik.touched.item_category && formik.errors.item_category ? (
                <p className="error">{formik.errors.item_category}</p>
              ) : null}
            </div>
          </div>
          <button
            onClick={() => {
              router.push("/Locations");
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

export default Vendors;
