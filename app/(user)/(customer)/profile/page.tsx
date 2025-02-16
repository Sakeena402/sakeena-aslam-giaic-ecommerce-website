

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import ProfileDetails from "../../../components/ProfileInfo";
// import ProfileSidebar from "../../../components/ProfileSidebar";
// import { getUserData } from '@/helpers/getUserData';
// import { Address } from './types';

// const initialAddresses = {
//   shipping: { street: "", city: "", state: "", zipCode: "", country: "" },
//   billing: { street: "", city: "", state: "", zipCode: "", country: "" },
// };

// export default function ProfilePage() {
//   const [user, setUser] = useState({ id: "",profileImage:"", name: "", email: "", phoneNo: "", token: "" });

  
// const [addresses, setAddresses] = useState<{ shipping: Address; billing: Address }>(initialAddresses);
// const [editedAddress, setEditedAddress] = useState<Address>(initialAddresses.shipping);
//   const [editingType, setEditingType] = useState<"shipping" | "billing" | null>(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       const data = await getUserData();
//       if (data) {
//         setUser({
//           id: data.id,
//           profileImage:data.profileImage || "https://static.vecteezy.com/ti/vecteur-libre/p1/36594092-homme-vide-avatar-vecteur-photo-espace-reserve-pour-social-les-reseaux-reprend-forums-et-sortir-ensemble-des-sites-masculin-et-femelle-non-photo-images-pour-non-rempli-utilisateur-profil-gratuit-vectoriel.jpg",    
//           name: data.username,
//           email: data.email,
//           phoneNo: data.phoneNo,
//           token: data.token,
//         });
//         fetchAddressData(data.token);
//       }
//     };

//     const fetchAddressData = async (token: string) => {
//       try {
//         const response = await fetch("/api/users/customer/get-user-address", {
//           method: "GET",
//           headers: { "Authorization": `Bearer ${token}` },
//         });
//         const addressData = await response.json();
//         if (addressData.success) {
//           // Ensure addresses are set properly
//           setAddresses({
//             shipping: addressData.data.shippingAddress || initialAddresses.shipping,
//             billing: addressData.data.billingAddress || initialAddresses.billing,
//           });
//         } else {
//           console.error("Error fetching address data:", addressData.message);
//         }
//       } catch (error) {
//         console.error("Failed to fetch address data", error);
//       }
//     };
    

//     fetchUserData();
//   }, []);

//   const handleEdit = (type: "shipping" | "billing") => {
//     setEditingType(type);
//     setEditedAddress(addresses[type]);
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedAddress((prev) => ({
//       ...prev,
//       [name as keyof Address]: value,
//     }));
//   };
//   const handleSave = async () => {
//     if (!editingType || !user.token) return;
  
//     try {
//       const response = await fetch("/api/users/customer/update-address", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${user.token}`,
//         },
//         body: JSON.stringify({
//           addressType: editingType === "shipping" ? "shippingAddress" : "billingAddress",
//           address: editedAddress,
//         }),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         setAddresses((prev) => ({ ...prev, [editingType]: editedAddress }));
//         setEditingType(null);
//       } else {
//         console.error("Error updating address:", result.message);
//       }
//     } catch (error) {
//       console.error("Failed to update address:", error);
//     }
//   };
  
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto px-6 py-10 flex gap-8"
//     >
//       <ProfileSidebar />

//       <div className="flex-1">
//         <ProfileDetails user={user} />

//         <div className="bg-white p-6  mt-6">
//           <h2 className="text-xl font-semibold mb-4">Addresses</h2>
//           {(["shipping", "billing"] as ("shipping" | "billing")[]).map((type) => (
//   <div key={type} className="mb-6">
//     <h3 className="text-lg font-medium capitalize">{type} Address</h3>

//     {editingType === type ? (
//       <div className="grid grid-cols-2 gap-4 mt-2">
//         {(Object.keys(initialAddresses.shipping) as (keyof Address)[]).map((field) => (
//   <input
//     key={field}
//     type="text"
//     name={field}
//     value={editedAddress[field]}
//     onChange={handleChange}
//     className="border p-2 rounded w-full"
//     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//   />
// ))}
//         <button
//           onClick={handleSave}
//           className="bg-green-600 text-white py-2 px-4 rounded mt-2"
//         >
//           Save
//         </button>
//       </div>
//     ) : (
//       <div className="border p-4 rounded mt-2 bg-gray-100">
//         {/* Use 'type' as a key, and ensure TypeScript knows it */}
//         <p><strong>Street:</strong> {addresses[type as keyof typeof addresses]?.street || 'N/A'}</p>
//         <p><strong>City:</strong> {addresses[type as keyof typeof addresses]?.city || 'N/A'}</p>
//         <p><strong>State:</strong> {addresses[type as keyof typeof addresses]?.state || 'N/A'}</p>
//         <p><strong>Country:</strong> {addresses[type as keyof typeof addresses]?.country || 'N/A'}</p>
//         <button
//           onClick={() => handleEdit(type as "shipping" | "billing")}
//           className="bg-blue-600 text-white py-1 px-3 rounded mt-2"
//         >
//           Edit
//         </button>
//       </div>
//     )}
//   </div>
// ))}


//         </div>
//         <br />
// <br /><br /><br />
// <br />
// <br /><br /><br />
//       </div>
//     </motion.div>
//   );
// }










"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { getUserData } from "@/helpers/getUserData"
import type { Address } from "./types"
import ProfileDetails from "@/app/components/ProfileInfo"
import ProfileSidebar from "@/app/components/ProfileSidebar"

const initialAddresses = {
  shipping: { street: "", city: "", state: "", zipCode: "", country: "" },
  billing: { street: "", city: "", state: "", zipCode: "", country: "" },
}

export default function ProfilePage() {
  const [user, setUser] = useState({ id: "", profileImage: "", name: "", email: "", phoneNo: "", token: "" })
  const [addresses, setAddresses] = useState<{ shipping: Address; billing: Address }>(initialAddresses)
  const [editedAddress, setEditedAddress] = useState<Address>(initialAddresses.shipping)
  const [editingType, setEditingType] = useState<"shipping" | "billing" | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData()
      if (data) {
        setUser({
          id: data.id,
          profileImage:
            data.profileImage ||
            "https://static.vecteezy.com/ti/vecteur-libre/p1/36594092-homme-vide-avatar-vecteur-photo-espace-reserve-pour-social-les-reseaux-reprend-forums-et-sortir-ensemble-des-sites-masculin-et-femelle-non-photo-images-pour-non-rempli-utilisateur-profil-gratuit-vectoriel.jpg",
          name: data.username,
          email: data.email,
          phoneNo: data.phoneNo,
          token: data.token,
        })
        fetchAddressData(data.token)
      }
    }

    const fetchAddressData = async (token: string) => {
      try {
        const response = await fetch("/api/users/customer/get-user-address", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
        const addressData = await response.json()
        if (addressData.success) {
          setAddresses({
            shipping: addressData.data.shippingAddress || initialAddresses.shipping,
            billing: addressData.data.billingAddress || initialAddresses.billing,
          })
        } else {
          console.error("Error fetching address data:", addressData.message)
        }
      } catch (error) {
        console.error("Failed to fetch address data", error)
      }
    }

    fetchUserData()
  }, [])

  const handleEdit = (type: "shipping" | "billing") => {
    setEditingType(type)
    setEditedAddress(addresses[type])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedAddress((prev) => ({
      ...prev,
      [name as keyof Address]: value,
    }))
  }

  const handleSave = async () => {
    if (!editingType || !user.token) return

    try {
      const response = await fetch("/api/users/customer/update-address", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          addressType: editingType === "shipping" ? "shippingAddress" : "billingAddress",
          address: editedAddress,
        }),
      })

      const result = await response.json()
      if (response.ok) {
        setAddresses((prev) => ({ ...prev, [editingType]: editedAddress }))
        setEditingType(null)
      } else {
        console.error("Error updating address:", result.message)
      }
    } catch (error) {
      console.error("Failed to update address:", error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container sm:mx-auto px-2 sm:px-4 py-6 flex m-6 flex-col lg:flex-row gap-4 lg:gap-8"
    >
     

      <div className="flex-1">
        <ProfileDetails user={user} />

        <div className="bg-white p-4 sm:p-6 mt-4 sm:mt-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Addresses</h2>

          {(["shipping", "billing"] as ("shipping" | "billing")[]).map((type) => (
            <div key={type} className="mb-6">
              <h3 className="text-lg font-medium capitalize">{type} Address</h3>

              {editingType === type ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {(Object.keys(initialAddresses.shipping) as (keyof Address)[]).map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      value={editedAddress[field]}
                      onChange={handleChange}
                      className="border p-2 rounded w-full"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  ))}
                  <button onClick={handleSave} className="bg-green-600 text-white py-2 px-4 rounded w-full sm:w-auto">
                    Save
                  </button>
                </div>
              ) : (
                <div className="border p-4 rounded mt-2 bg-gray-100">
                  <p>
                    <strong>Street:</strong> {addresses[type]?.street || "N/A"}
                  </p>
                  <p>
                    <strong>City:</strong> {addresses[type]?.city || "N/A"}
                  </p>
                  <p>
                    <strong>State:</strong> {addresses[type]?.state || "N/A"}
                  </p>
                  <p>
                    <strong>Country:</strong> {addresses[type]?.country || "N/A"}
                  </p>
                  <button
                    onClick={() => handleEdit(type)}
                    className="bg-blue-600 text-white py-1 px-3 rounded mt-2 w-full sm:w-auto"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <br />
<br /><br /><br />
<br />
<br /><br /><br />
      </div>  <br />
<br /><br /><br />
<br />
<br /><br /><br />
    </motion.div>
  )
}

