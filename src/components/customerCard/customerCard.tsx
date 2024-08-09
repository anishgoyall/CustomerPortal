import React from "react";
import "./customerCard.css";
import { CustomerInterface } from "../../interfaces/customer.interface";

interface CustomerCardProps {
    customer: CustomerInterface;
    isSelected: boolean;
    handleCustomerSelect: (customer: CustomerInterface) => void;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
    customer,
    isSelected,
    handleCustomerSelect,
}) => {
    console.log(customer, isSelected)
    return (
        <div className={`customer-card ${isSelected ? 'selected' : ''}`} onClick={() => handleCustomerSelect(customer)}>
            <h4>{customer.name}</h4>
            <p>{customer.title}</p>
        </div>
    );
};
