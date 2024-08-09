import { faker } from "@faker-js/faker";
import { CustomerInterface } from "../interfaces/customer.interface";

export const generateCustomers = (count: number): CustomerInterface[] => {
    const customers: CustomerInterface[] = [];

    for (let i = 0; i < count; i++) {
        customers.push({
            id: i + 1,
            name: faker.person.fullName(),
            title: faker.person.jobTitle(),
            address: faker.location.streetAddress(),
        });
    }

    return customers;
};
