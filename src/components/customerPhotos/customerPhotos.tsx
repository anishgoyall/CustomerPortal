import React, { useEffect, useState } from "react";
import "./customerPhotos.css";
import { CustomerInterface } from "../../interfaces/customer.interface";
import { fetchCustomerPhotos } from "../../apis/photo.api";

interface CustomerPhotosProps {
    customer: CustomerInterface;
}

export const CustomerPhotos: React.FC<CustomerPhotosProps> = ({ customer }) => {
    const [photos, setPhotos] = useState<any[]>([]);

    useEffect(() => {
        const updatePhotos = async () => {
            try {
                const photoCount = 9;
                const response = await fetchCustomerPhotos(photoCount);
                setPhotos(response);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };

        updatePhotos();
        const interval = setInterval(updatePhotos, 10000);

        return () => clearInterval(interval);
    }, [customer]);

    return (
        <div className="photo-grid">
            {photos &&
                photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.urls.small}
                        alt={photo.alt_description}
                        className="photo"
                    />
                ))}
        </div>
    );
};
