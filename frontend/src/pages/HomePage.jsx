import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';

const HomePage = () => {
    return (
        <>
           <FeaturedProducts />
            <Collection />
            <Categories />
        </>
    );
};

export default HomePage;