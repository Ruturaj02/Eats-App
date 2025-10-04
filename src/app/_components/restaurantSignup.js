const RestaurantSignup = () => {
  return (
    <>
      <h3>SignUp</h3>
      <div>
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Email id "
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm password"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter restaurant name"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter City"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Full Address"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter contact number"
              className="input-field"
            />
          </div>
          <div className="input-wrapper">
            <button className="button" type="submit">
              SignUP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RestaurantSignup;
