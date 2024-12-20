// import { useEffect, useState } from "react";

import { Loader } from "@components/Loader/Loader.tsx";
import CurrenciesCardsList from "@pages/Home/CardsSection/CurrenciesCardsList";
import { useGetCurrenciesQuery } from "@store/api/currencyAPI.ts";

import { StyledCardsSection, StyledError, StyledSectionHeading } from "./styled.ts";

export const CardsSection = () => {
    // const { data: currencies, isLoading, error } = useGetCurrenciesQuery();
    // const {
    //     data: currencies,
    //     isLoading,
    //     error,
    // } = useGetCurrenciesQuery(undefined, {
    //     pollingInterval: 86400000, // Поллинг каждый день, если необходимо
    //     refetchOnMountOrArgChange: false, // Не обновлять данные при повторном монтировании компонента
    //     refetchOnFocus: false, // Не обновлять данные при возвращении на вкладку
    //     refetchOnReconnect: false, // Не обновлять данные при повторном подключении
    // });

    // const [currencies, setCurrencies] = useState(null);
    // const { data: currencies, isLoading, error, refetch } = useGetCurrenciesQuery(undefined, { skip: true });
    const { data: currencies, isLoading, error } = useGetCurrenciesQuery();

    // console.log(currencies);

    // useEffect(() => {
    //     const storedCurrencies = localStorage.getItem("currencies");
    //     const storedTimestamp = localStorage.getItem("currenciesTimestamp");

    //     // Проверьте, есть ли данные в Local Storage и не истек ли срок хранения
    //     if (storedCurrencies && storedTimestamp) {
    //         const currentTime = Date.now();
    //         // const expiryTime = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
    //         const expiryTime = 10 * 1000; // 10 sec

    //         if (currentTime - storedTimestamp < expiryTime) {
    //             console.log(true);
    //             setCurrencies(JSON.parse(storedCurrencies)); // Используем данные из localStorage
    //         }
    //     } else {
    //         // refetch();
    //         const data = refetch();
    //         setCurrencies(data);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (data) {
    //         localStorage.setItem("currencies", JSON.stringify(data.data)); // Сохраняем данные
    //         localStorage.setItem("currenciesTimestamp", Date.now()); // Сохраняем временную метку
    //         setCurrencies(data.data); // Ставим данные в состояние
    //     }
    // }, [data]);

    return (
        <StyledCardsSection>
            <StyledSectionHeading>Quotes</StyledSectionHeading>
            {error && (
                <p>
                    Error occured. <StyledError>Currency data failed to fetch</StyledError>
                </p>
            )}
            {isLoading && <Loader variant="md" />}
            {currencies && <CurrenciesCardsList currencies={currencies.data} />}
        </StyledCardsSection>
    );
};
