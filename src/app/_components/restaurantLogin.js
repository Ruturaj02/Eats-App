

const RestaurantLogin = () => {
  return (
    <>
    <h3>Login</h3>
    <div>
        <form>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter Email id " className="input-field" />
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter password" className="input-field" />
            </div>
            <div className="input-wrapper">
                <button className="button" type="submit">Login</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default RestaurantLogin;