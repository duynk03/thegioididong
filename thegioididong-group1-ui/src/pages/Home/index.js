import BigBanner from './BigBanner';
import SliderBanner from './SliderBanner';
import styles from './Home.module.scss';
import OptionPromo from './OptionPromo';
import HotDeal from './HotDeal';
import Samsung from './SamsungPromo/Samsung';
import ShoppingTrend from './ShoppingTrend';
import CategoryFeature from './CategoryFeature';
import DiscountPayOnline from './DiscountPayOnline';
import ServiceConvenience from './ServiceConvenience';
import DailySuggestion from './DailySuggestion/DailySuggestion';

function Home() {
    return (
        <>
            <BigBanner />
            <div className={styles.content}>
                <SliderBanner />
                <OptionPromo />
                {/* <FlashSale /> */}
                <HotDeal />
                <Samsung />
                <ShoppingTrend />
                <CategoryFeature />
                <DiscountPayOnline />
                <ServiceConvenience />
                <DailySuggestion />
            </div>
        </>
    );
}

export default Home;
