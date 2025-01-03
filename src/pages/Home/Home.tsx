import LastUpdated from "@components/LastUpdated";
import LayoutContainer from "@components/LayoutContainer";
import WelcomeScreen from "@components/WelcomeScreen";
import { useFetchCachedCurrencies } from "@hooks/useFetchCachedCurrencies.ts";
import CardsSection from "@pages/Home/CardsSection";

export const Home = () => {
    const { displayedCurrencies, error, isLoading, lastUpdatedAt } = useFetchCachedCurrencies();

    const dataExists = displayedCurrencies.length > 0;
    const errorMessage = error ? "We failed to fetch currencies data" : null;

    return (
        <>
            <WelcomeScreen />
            <LayoutContainer>
                <LastUpdated
                    dataExists={dataExists}
                    lastUpdatedAt={lastUpdatedAt}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                />
                <CardsSection currencies={displayedCurrencies} isLoading={isLoading} errorMessage={errorMessage} />
            </LayoutContainer>
        </>
    );
};
