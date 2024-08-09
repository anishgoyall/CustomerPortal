import React from "react";
import "./customerDetails.css";
import { CustomerInterface } from "../../interfaces/customer.interface";
import { CustomerPhotos } from "../customerPhotos/customerPhotos";

interface CustomerDetailsProps {
    customer: CustomerInterface;
}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({
    customer,
}) => {
    return (
        <div className="customer-details">
            <div>
                <h2>{customer.name}</h2>
                <p>{customer.title}</p>
                <p>{customer.address}</p>
            </div>
            <CustomerPhotos customer={customer} />
        </div>
    );
};
