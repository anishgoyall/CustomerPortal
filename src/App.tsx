import { useState } from "react";
import "./App.css";
import { CustomerInterface } from "./interfaces/customer.interface";
import { CustomerList } from "./components/customerList/customerList";
import { CustomerDetails } from "./components/customerDetails/customerDetails";
import { generateCustomers } from "./utils/generate-customer-data.util";

const customers: CustomerInterface[] = generateCustomers(1000);

function App() {
    const [selectedCustomer, setSelectedCustomer] =
        useState<CustomerInterface | null>(customers[0] || null);

    const handleCustomerSelect = (customer: CustomerInterface) => {
        setSelectedCustomer(customer);
    };

    return (
        <div className="app scrollbar">
            <CustomerList
                customers={customers}
                selectedCustomer={selectedCustomer}
                handleCustomerSelect={handleCustomerSelect}
            />
            {selectedCustomer && (
                <CustomerDetails customer={selectedCustomer} />
            )}
        </div>
    );
}

export default App;
