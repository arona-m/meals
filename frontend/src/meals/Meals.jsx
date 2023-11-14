import { useGlobalContext } from "../context";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }
  if (!meals || meals.length < 1) {
    return <section className="section">
      <h4>Couldn't find any meal.Plese try again</h4>
    </section>
  }
  return (
    <section className="sectionn-container">
      <div className="row">
        {meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <div key={idMeal} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card">
                <img src={image}onClick={() => selectMeal(idMeal)}
                  alt={title}
                  className="card-img-top img-thumbnail"
                  style={{ maxWidth: '100%' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <button className="btn btn-outline-danger"onClick={() => addToFavorites(idMeal)}><BsFillBookmarkHeartFill /></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Meals;
