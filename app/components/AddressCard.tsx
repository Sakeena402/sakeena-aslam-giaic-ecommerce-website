
// // export default AddressSection;
// import { useState } from "react";

// interface Address {
//   street: string;
//   apartment: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   country: string;
//   phoneNumber: string;
//   isDefaultShipping?: boolean;
//   isDefaultBilling?: boolean;
// }

// const AddressSection = ({ addresses, onEdit }: { addresses: { shipping: Address; billing: Address }; onEdit: (type: "shipping" | "billing", updatedAddress: Address) => void }) => {
//   const [isEditingShipping, setIsEditingShipping] = useState(false);
//   const [isEditingBilling, setIsEditingBilling] = useState(false);
//   const [tempShippingAddress, setTempShippingAddress] = useState<Address>(addresses.shipping);
//   const [tempBillingAddress, setTempBillingAddress] = useState<Address>(addresses.billing);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, addressType: "shipping" | "billing") => {
//     const { name, value } = e.target;
//     if (addressType === "shipping") {
//       setTempShippingAddress({ ...tempShippingAddress, [name]: value });
//     } else {
//       setTempBillingAddress({ ...tempBillingAddress, [name]: value });
//     }
//   };

//   const saveChanges = (addressType: "shipping" | "billing") => {
//     if (addressType === "shipping") {
//       onEdit("shipping", tempShippingAddress);
//       setIsEditingShipping(false);
//     } else {
//       onEdit("billing", tempBillingAddress);
//       setIsEditingBilling(false);
//     }
//   };

//   return (
//     <section>
//       <h2 className="text-xl font-semibold mb-4">Shipping & Billing Addresses</h2>

//       {/* Shipping Address */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold">Shipping Address</h3>
//         {isEditingShipping ? (
//           <>
//             <input
//               type="text"
//               name="street"
//               value={tempShippingAddress.street}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="Street"
//             />
//             <input
//               type="text"
//               name="apartment"
//               value={tempShippingAddress.apartment}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="Apartment"
//             />
//             <input
//               type="text"
//               name="city"
//               value={tempShippingAddress.city}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="City"
//             />
//             <input
//               type="text"
//               name="state"
//               value={tempShippingAddress.state}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="State"
//             />
//             <input
//               type="text"
//               name="postalCode"
//               value={tempShippingAddress.postalCode}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="Postal Code"
//             />
//             <input
//               type="text"
//               name="country"
//               value={tempShippingAddress.country}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="Country"
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               value={tempShippingAddress.phoneNumber}
//               onChange={(e) => handleInputChange(e, "shipping")}
//               className="border w-full p-2 mb-2"
//               placeholder="Phone Number"
//             />
//             <button onClick={() => saveChanges("shipping")} className="bg-blue-600 text-white px-4 py-2 mt-2">
//               Save
//             </button>
//             <button onClick={() => setIsEditingShipping(false)} className="text-gray-600 ml-4">
//               Cancel
//             </button>
//           </>
//         ) : (
//           <>
//             <p className="text-gray-600">{addresses.shipping.street || "No address provided"}</p>
//             <p className="text-gray-600">{addresses.shipping.apartment}</p>
//             <p className="text-gray-600">
//               {addresses.shipping.city}, {addresses.shipping.state} {addresses.shipping.postalCode}
//             </p>
//             <p className="text-gray-600">{addresses.shipping.country}</p>
//             <p className="text-gray-600">Contact: {addresses.shipping.phoneNumber}</p>
//             <p className="text-gray-600">{addresses.shipping.isDefaultShipping ? "Default Shipping Address" : ""}</p>
//             <button onClick={() => setIsEditingShipping(true)} className="text-blue-600 hover:underline">
//               Edit
//             </button>
//           </>
//         )}
//       </div>

//       {/* Billing Address */}
//       <div>
//         <h3 className="text-lg font-semibold">Billing Address</h3>
//         {isEditingBilling ? (
//           <>
//             <input
//               type="text"
//               name="street"
//               value={tempBillingAddress.street}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="Street"
//             />
//             <input
//               type="text"
//               name="apartment"
//               value={tempBillingAddress.apartment}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="Apartment"
//             />
//             <input
//               type="text"
//               name="city"
//               value={tempBillingAddress.city}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="City"
//             />
//             <input
//               type="text"
//               name="state"
//               value={tempBillingAddress.state}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="State"
//             />
//             <input
//               type="text"
//               name="postalCode"
//               value={tempBillingAddress.postalCode}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="Postal Code"
//             />
//             <input
//               type="text"
//               name="country"
//               value={tempBillingAddress.country}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="Country"
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               value={tempBillingAddress.phoneNumber}
//               onChange={(e) => handleInputChange(e, "billing")}
//               className="border w-full p-2 mb-2"
//               placeholder="Phone Number"
//             />
//             <button onClick={() => saveChanges("billing")} className="bg-blue-600 text-white px-4 py-2 mt-2">
//               Save
//             </button>
//             <button onClick={() => setIsEditingBilling(false)} className="text-gray-600 ml-4">
//               Cancel
//             </button>
//           </>
//         ) : (
//           <>
//             <p className={`text-gray-600 ${!addresses.billing.street ? "text-gray-400 italic" : ""}`}>
//               {addresses.billing.street || "Pending (not updated)"}
//             </p>
//             <p className="text-gray-600">{addresses.billing.apartment}</p>
//             <p className="text-gray-600">
//               {addresses.billing.city}, {addresses.billing.state} {addresses.billing.postalCode}
//             </p>
//             <p className="text-gray-600">{addresses.billing.country}</p>
//             <p className="text-gray-600">Contact: {addresses.billing.phoneNumber}</p>
//             <p className="text-gray-600">{addresses.billing.isDefaultBilling ? "Default Billing Address" : ""}</p>
//             <button onClick={() => setIsEditingBilling(true)} className="text-blue-600 hover:underline">
//               Edit
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AddressSection;

import React, { useState } from "react";
import axios from "axios";

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface AddressSectionProps {
  userId: string;
  shippingAddress: Address;
  billingAddress: Address;
  onUpdate: () => void; // Function to refresh parent component data after update
}

const AddressSection: React.FC<AddressSectionProps> = ({ userId, shippingAddress, billingAddress, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updatedShipping, setUpdatedShipping] = useState<Address>(shippingAddress);
  const [updatedBilling, setUpdatedBilling] = useState<Address>(billingAddress);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await axios.put(`/api/users/customer/update-address`, {
        shippingAddress: updatedShipping,
        billingAddress: updatedBilling,
      });
      
      onUpdate(); // Refresh parent data
      setEditing(false);
    } catch (err) {
      setError("Failed to update address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Address Information</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <h3>Shipping Address</h3>
        {editing ? (
          <input
            type="text"
            value={updatedShipping.street}
            onChange={(e) => setUpdatedShipping({ ...updatedShipping, street: e.target.value })}
          />
        ) : (
          <p>{shippingAddress.street}</p>
        )}
      </div>
      <div>
        <h3>Billing Address</h3>
        {editing ? (
          <input
            type="text"
            value={updatedBilling.street}
            onChange={(e) => setUpdatedBilling({ ...updatedBilling, street: e.target.value })}
          />
        ) : (
          <p>{billingAddress.street}</p>
        )}
      </div>
      {editing ? (
        <button onClick={handleSave} disabled={loading}>{loading ? "Saving..." : "Save"}</button>
      ) : (
        <button onClick={() => setEditing(true)}>Edit</button>
      )}
    </div>
  );
};

export default AddressSection;
