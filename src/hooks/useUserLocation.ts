import { useEffect, useState } from "react";

export const useUserLocation = () => {
    const [userLocation, setUserLocation] = useState<CoordinatesType | null>(null);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { longitude, latitude } = position.coords;
                    setUserLocation({
                        longitude,
                        latitude,
                        zoom: 12,
                    });
                });
            }
        };

        getUserLocation();
    }, []);

    return { userLocation };
};
