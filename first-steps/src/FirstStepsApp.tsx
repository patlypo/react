import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
  productName:string;
  quantify:number;
}
const itemsInCart:ItemInCart[]=[
  {productName:'Naranjas', quantify:2},
  {productName:'Pera', quantify:2},
  {productName:'Fresas', quantify:2},
]

export function FirstStepsApp(){
    return(
    <>
    <h1 style={{
      padding:15,
      display:"block",
      textAlign:"center",

    }}>Carrito de compras</h1>
    {
      itemsInCart.map(({productName, quantify})=>(
        <ItemCounter key={productName} name={productName} quantity={quantify}/>
      ))
    }
    
    {/* <ItemCounter name="Naranjas" quantity={12}/>
    <ItemCounter name="Manzanas" quantity={15}/>
    <ItemCounter name="Mango" quantity={20}/> */}
    </>
    )
}