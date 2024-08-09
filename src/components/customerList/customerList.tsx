import React from "react";
import "./customerList.css";
import { CustomerInterface } from "../../interfaces/customer.interface";
import { CustomerCard } from "../customerCard/customerCard";

interface CustomerListProps {
    customers: CustomerInterface[];
    selectedCustomer: CustomerInterface | null;
    handleCustomerSelect: (customer: CustomerInterface) => void;
}

export const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, handleCustomerSelect }) => {
    return (
        <div className="customer-list scrollbar">
            {customers.map((customer) => (
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    isSelected={customer?.id === selectedCustomer?.id}
                    handleCustomerSelect={handleCustomerSelect}
                />
            ))}
        </div>
    );
};
