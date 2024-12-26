import products from "../../../products.json";
import Liftsidebar from "../Liftsidebar/Liftsidebar";
import Middlebar from "../Middlebar/Middlebar";

const Homepage = () => {
  // console.log("products", products.payload.categories[0].name);
  return (
    <div className="grid grid-cols-5 mx-24 pt-9">
      <div className="border border-black col-span-1">
        <Liftsidebar products={products} />
      </div>
      <div className="col-span-3">
        <Middlebar products={products} />
      </div>
      {/* cart */}
      <div className="border border-blue-500 col-span-1"> right</div>
    </div>
  );
};

export default Homepage;
