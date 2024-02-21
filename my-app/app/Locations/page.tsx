import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Locations() {
  const formik = useFormik({
    initialValues: {
      location_id: "",
      locations: "",
    },
    validationSchema: Yup.object({
      location_id: Yup.number().required("Location ID is required"),
      locations: Yup.string().required("Location is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("/api/locationsroute", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to submit Location");
        }

        console.log("Location submitted successfully!");
      } catch (error) {
        console.error("Error submitting Location:", error);
      }
    },
  });

  return (
    <div className="container">
      <h1>LOCATIONS</h1>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form_container">
          <div className="formgrid">
            <div className="input_container">
              <input
                id="location_id"
                name="location_id"
                type="text"
                placeholder="Location ID"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location_id}
              />
              {formik.touched.location_id && formik.errors.location_id ? (
                <p className="error">{formik.errors.location_id}</p>
              ) : null}
            </div>

            <div className="input_container">
              <input
                id="locations"
                name="locations"
                type="text"
                placeholder="Location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.locations}
              />
              {formik.touched.locations && formik.errors.locations ? (
                <p className="error">{formik.errors.locations}</p>
              ) : null}
            </div>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Locations;
