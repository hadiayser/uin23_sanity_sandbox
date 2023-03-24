import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/sanity/productServices"

export default function ProductPage(){

    // bruker useParams for å hente parameter fra url {produkt-slug}
    const {slug} = useParams()
    // gjøre klar en state for lagre returnerte data fra sanity
    const [product, setProduct] = useState(null)

    // løse opp promise, og få ut data fra Sanity
    const getProduct = async(slug) => {
        const data = await fetchProduct(slug)
        // når vi skal bare hente ut et bestemt innhold kan vi putte indeks [0]
        setProduct(data[0])
    }
    // kjøre getProduct når komponentet lastes
    useEffect(()=>{
        getProduct(slug)
    },[slug])

    // teste om vi har fått innhold
    console.log(product)
    return(
        // spørsmåltegnet tillatter å laste ned alt annet selvom verdien er null, men så fort det ikke er null hvis fram innholdet
        <>
        <h1>{product?.product_title}</h1>
        <img style= {{maxWidth: "400px"}} alt="bilde" src={product?.imageURL}/>
        <p>Kategori: {product?.catname}</p>
        <p>Pris: {product?.price}kr</p>
        </>

    )
}