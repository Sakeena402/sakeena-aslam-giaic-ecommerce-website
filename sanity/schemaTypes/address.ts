import { defineType } from "sanity";

export default defineType({
  name: "address",
  title: "Address",
  type: "document",
  fields: [
    {
      name: "street",
      title: "Street Address",
      type: "string",
    },
    {
      name: "apartment",
      title: "Apartment/Suite (Optional)",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "state",
      title: "State/Province",
      type: "string",
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "addressType",
      title: "Address Type",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Work", value: "work" },
          { title: "Other", value: "other" },
        ],
      },
    },
    {
      name: "phoneNumber",
      title: "Contact Number",
      type: "string",
    },
    {
      name: "isDefaultBilling",
      title: "Default Billing Address",
      type: "boolean",
    },
    {
      name: "isDefaultShipping",
      title: "Default Shipping Address",
      type: "boolean",
    },
  ],
});
