export default function Address(){
    return(
        <section className="address-details">
        <h5>Personal information</h5>
        <div className="personal-details">
            <div className="row">
                <div className="col-md-6">
                    <div className="information">
                        <input type="text" placeholder="firstname" className="input-underline"></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="information">
                        <input type="text" placeholder="secondname" className="input-underline"></input>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="information">
                        <input type="phone" placeholder="phone number" className="input-underline"></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="information">
                        <input type="email" placeholder="email" className="input-underline"></input>
                    </div>
                </div>
            </div>
        </div>
        <h5>shipping Information</h5>
        <div className="address-sect">
            <div className="col-md-6 address-data">
                        <div className="heading">
                          <h5>Primary Address</h5>
                          <span className="def-add">default</span>
                        </div>

                        <p>Your default delivery destination</p>

                        <div className="add-det">
                          <div className="name-sec">
                            <h6>Zara Fathima</h6>
                            <h6 className="phone">+91 9898765455</h6>
                          </div>

                          <p>
                            26/52 Rose residency, Near HiLite mall, Mavoor road,
                            Kozhikode, Kerala 670362, India
                          </p>

                          <div className="address-button">
                            <button className="change-address">
                              <i className="fa-regular fa-pen-to-square"></i> Change address
                            </button>
                           
                          </div>
                        </div>
                      </div>
                      
        </div>
        </section>
    )
}