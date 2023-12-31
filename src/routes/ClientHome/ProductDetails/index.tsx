import "./ProductDetails.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description:
        "dá pra assistir Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo provident praesentium, repudiandae laboriosam iste, molestiae unde dolores perspiciatis saepe similique dolore voluptas beatae expedita magnam facilis inventore et molestias.",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos",
        },
        {
            id: 3,
            name: "Computadores",
        },
        {
            id: 4,
            name: "Importados",
        },
    ],
};

export default function ProductDetails() {
    return (
        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product={product} />
                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <ButtonInverse text="Início" />
                </div>
            </section>
        </main>
    );
}
