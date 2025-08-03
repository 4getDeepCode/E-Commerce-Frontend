import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Slices/ProductSlice";
import { useEffect } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
// import ProductCard from "../../Components/ProductCard";
import iPhone11 from '../../Assets/iPhone11.png'

function ProductList() {

    const dispatch = useDispatch();
    const { productData } = useSelector((state) => state.product)

    async function loadProducts() {
        await dispatch(getAllProducts());

    }

    useEffect(() => {
        loadProducts;
    }, []);


    return (

        <HomeLayout>

            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">

                <h1 className="text-center text-3xl font-semibold mb-5  ">
                    All products 
                    <span className="font-bold text-yellow-500">
                        Choose which one best for you
                    </span>

                </h1>

                <div className="mb-10 flex flex-wrap gap-14">

                    {productData?.map((element) => {
                        return <ProductCard key={element._id} data={element} />
                    })}
                </div> 

            </div>



        </HomeLayout>




    )


}

export default ProductList;