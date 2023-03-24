import ProductCard from "../components/ProductCard";

export default function FrontPage({products}){
    return(
        <>
        <h1>Innhold fra Sanity:o</h1>
        {products?.map((p, i) => <ProductCard key={i} productInfo={p}/>)}
        </>
    )
}