import type { ReactNode } from "react";
type Props = {
    quantity:number;
    price:number;
}
export default function Shopping({quantity,price}:Props):ReactNode {
    return(
        <>
        <div className="shop">
            <p>{quantity} : تعداد دوره ها</p>
            <p>{price} : مبلغ کل</p>
        </div>
        </>
    );
}