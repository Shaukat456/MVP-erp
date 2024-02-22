import React from "react";
import fs from "fs";
import path from "path";
// import pdf from "html-pdf";
import { NextPage } from "next";

const InvoicePage: NextPage = () => {
  // Define function to generate PDF invoice
  const generateInvoicePDF = () => {
    const invoiceHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice</title>
        <style>
          /* CSS styles for the invoice */
          /* Include your CSS styles here */
        </style>
      </head>
      <body>
        <!-- Your HTML invoice template here -->
        <!-- Use dynamic data from your form to populate the invoice -->
      </body>
      </html>
    `;

    // Options for pdf creation
    const options = {
      format: "A4",
    };

    // Generate PDF file
    // pdf.create(invoiceHTML, options).toFile("invoice.pdf", (err, res) => {
    //   if (err) return console.log(err);
    //   console.log(res); // Log the PDF file information
    // });
  };

  return (
    <div>
      <h1>Generate Invoice PDF</h1>
      <button onClick={generateInvoicePDF}>Generate PDF</button>
    </div>
  );
};

export default InvoicePage;
