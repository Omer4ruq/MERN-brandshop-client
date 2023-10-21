import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const products = useLoaderData();
  const { brand, name, price, type, description, photo, rating } = products;

  // const { _id } = useParams();

  // const idInt = parseInt(_id);
  //   const service = services.find((service) => service.id == idInt);
  // const service = services.find((service) => service._id === idInt);

  const handleAddProduct = (event) => {
    event.preventDefault();
    // const form = event.target;
    // const brand = form.brand.value;
    // const color = form.color.value;
    // const name = form.name.value;
    // const price = form.price.value;
    // const type = form.type.value;
    // const description = form.description.value;
    // const photo = form.photo.value;
    // const rating = form.rating.value;
    const newProducts = {
      brand,
      name,
      price,
      type,
      description,
      photo,
      rating,
    };
    console.log(newProducts);

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("br " + data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Adde in Cart Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    // <div>
    //   <div>
    //     <div>
    //       <div className="card w-full h- bg-base-100 shadow-xl relative ">
    //         <figure>
    //           <img className="w-8/12" src={photo} alt="image" />
    //         </figure>
    //         <div>
    //           <div className="">
    //             <button className="btn btn-secondary bg-neutral border-none ml-72 mb-52 -mt-20 absolute">
    //               Price: <span className="text-orange-300"> $ {price}</span>
    //             </button>
    //           </div>
    //           <div className="card-body ml-48">
    //             {/* <h1 className="text-4xl font-bold">{service.title}</h1>
    //             <p className="text-lg font-normal">{service.description}</p> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     ;
    //   </div>
    // </div>
    <div>
      <div className="hero min-h-screen bg-yellow-300">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <h2 className="text-3xl">price: ${price}</h2>
            <div className=" flex gap-12 mt-8">
              <button
                onClick={handleAddProduct}
                className="btn btn-neutral rounded-none"
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
