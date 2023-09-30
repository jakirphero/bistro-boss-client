
const ChefRecommendCart = ({ chefFood }) => {

    const { name, recipe, image, price } = chefFood;
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className="text-orange-500">${price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendCart;