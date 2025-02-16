import { useState, useEffect } from "react";
import { Address } from "../(user)/(customer)/profile/types";


const EditAddressModal = ({
  isOpen,
  onClose,
  onSave,
  address,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newAddress: Address) => void;
  address: Address;
  title: string;
}) => {
  const [formData, setFormData] = useState<Address>(address);

  useEffect(() => {
    setFormData(address); // Reset form data if address changes externally
  }, [address]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData); // Save the updated address
    onClose(); // Close the modal after saving
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          className="border w-full p-2 mb-2"
        />
      
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border w-full p-2 mb-2"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="border w-full p-2 mb-2"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.zipCode}
          onChange={handleChange}
          className="border w-full p-2 mb-2"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="border w-full p-2 mb-2"
        />
    
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 mt-2"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="text-gray-600 ml-4"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;
};

export default EditAddressModal;
