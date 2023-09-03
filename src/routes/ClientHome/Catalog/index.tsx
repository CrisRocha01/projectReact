import "./Catalog.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import BtnNextPage from "../../../components/BtnNextPage";
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

export default function Catalog() {
    return (
        <main>
            <section id="catalog-section" className="dsc-container">
                <SearchBar />

                <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                    <CatalogCard product={product} />
                </div>

                <BtnNextPage />
            </section>
        </main>
    );
}
