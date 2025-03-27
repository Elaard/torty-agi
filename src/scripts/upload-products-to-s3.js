#!/usr/bin/env node

/**
 * This script uploads the products JSON file to S3
 * Run with: node src/scripts/upload-products-to-s3.js [source-file]
 *
 * Example:
 *   node src/scripts/upload-products-to-s3.js
 *   node src/scripts/upload-products-to-s3.js src/data/my-custom-products.json
 */

const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: ".env.local" }); // Load environment variables from .env.local

// Get source file from command line args or use default
const sourceFile = process.argv[2] || "../data/products-sample.json";
const productsFilePath = path.resolve(__dirname, sourceFile);

// Check if the file exists
if (!fs.existsSync(productsFilePath)) {
  console.error(`Error: File not found: ${productsFilePath}`);
  console.log("Usage: node src/scripts/upload-products-to-s3.js [source-file]");
  process.exit(1);
}

// Check for required environment variables
const requiredEnvVars = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_S3_BUCKET"];
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error("Error: Missing required environment variables:");
  missingEnvVars.forEach((varName) => console.error(`  - ${varName}`));
  console.error("Please add them to your .env.local file");
  process.exit(1);
}

// Configure AWS SDK
const s3 = new AWS.S3({
  region: process.env.AWS_REGION || "eu-north-1",
  credentials: new AWS.Credentials(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY),
});

console.log(`Reading products from: ${productsFilePath}`);

// Read the products JSON file
let productsData;
try {
  productsData = fs.readFileSync(productsFilePath, "utf8");

  // Validate JSON
  JSON.parse(productsData);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Error: Invalid JSON file");
  } else {
    console.error(`Error reading file: ${error.message}`);
  }
  process.exit(1);
}

const destinationKey = "products/products.json";

// Upload parameters
const uploadParams = {
  Bucket: process.env.AWS_S3_BUCKET,
  Key: destinationKey,
  Body: productsData,
  ContentType: "application/json",
  ACL: "private", // Make sure the file is private and only accessible via presigned URLs
};

console.log(`Uploading to S3 bucket: ${process.env.AWS_S3_BUCKET}`);
console.log(`Destination: ${destinationKey}`);

// Upload the file
s3.upload(uploadParams, (err, data) => {
  if (err) {
    console.error("Error uploading file to S3:", err);
    process.exit(1);
  } else {
    console.log("\nSuccess! ✅");
    console.log("File uploaded successfully to:", data.Location);
    console.log("The file can be accessed via presigned URLs generated by your application");
    console.log("\nYour products should now be available in your application!");
  }
});
