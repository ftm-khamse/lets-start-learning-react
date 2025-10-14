import { useState, type ReactNode } from "react";
import "./App.css";
import Courses from "./components/Courses/Courses";
import Shopping from "./components/Shopping/Shopping";



export default function App(): ReactNode {
    const [shop,setShop] = useState({
      quantity:0,
      price:0
    });

    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

    const handleShopButton = (courseTitle: string,coursePrice:number):void => {
      setShop({
        ...shop,
        quantity:shop.quantity+1,
        price:shop.price+ coursePrice
      })

      if (!selectedCourses.includes(courseTitle)) {
          setSelectedCourses([...selectedCourses, courseTitle]);
  }

    }
  return (
    <div className="app">
      <h1 className="title">گزینه مورد نظر خود را انتخاب کنید</h1>
      <Courses
       title="React آموزش"
       teacher="محمدی"
       price={250000}
       onShop={() => handleShopButton("React آموزش", 250000)}
       primary={selectedCourses.includes("React آموزش")}
/>

       <Courses
       title="Html آموزش"
       teacher="احمدی"
       price={350000}
       onShop={() => handleShopButton("Html آموزش",350000)}
       primary={selectedCourses.includes("Html آموزش")}
       />

      <Courses
       title="Css آموزش"
       teacher="رضایی"
       price={345000}
       onShop={() => handleShopButton("Css آموزش",345000)}
       primary={selectedCourses.includes("Css آموزش")}
        />

       <Courses
       title="JavaScript آموزش"
       teacher="نادری"
       price={500000}
       onShop={() => handleShopButton("JavaScript آموزش",500000)}
       primary={selectedCourses.includes("JavaScript آموزش")}
      /> 


       <h1>سبد خرید</h1>
       <Shopping
       quantity={shop.quantity}
       price={shop.price}/>

    </div>
  );
}



