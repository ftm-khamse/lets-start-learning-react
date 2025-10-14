import { type ReactNode } from "react";
type Props ={
    title:string;
    teacher:string;
    price:number;
    onShop:() => void;
    primary?:boolean;
}

export default function Courses({title,teacher,price,onShop,primary=false}:Props) :ReactNode {
    
    return (
        <>
        
        <div className={`courses ${primary ? "primary" : ""}`}>
            <div className="text">
                <a href="#" onClick={(e) => {
                     e.preventDefault();
                     onShop();
                    }}> افزودن
                </a>
                <h3>{title}</h3>
            </div>
            <p>استاد : {teacher}</p>
            <p>قیمت : {price} تومان</p>
        </div>
        </>
    );
}