import LastUpdated from "@components/LastUpdated";
import LayoutContainer from "@components/LayoutContainer";
import WelcomeScreen from "@components/WelcomeScreen";
import CardsSection from "@pages/Home/CardsSection";

export const Home = () => (
    <>
        <WelcomeScreen />
        <LayoutContainer>
            <LastUpdated />
            <CardsSection />
        </LayoutContainer>
    </>
);
