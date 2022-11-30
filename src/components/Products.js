import React,{useState} from 'react';
import Nav from './Nav';

function Products(){

    const [cartValue,setCartValue] = useState(0);
    const [toggle1,setToggle1] = useState(true);
    const [toggle2,setToggle2] = useState(true);
    const [toggle3,setToggle3] = useState(true);
    const [toggle4,setToggle4] = useState(true);
    const [toggle5,setToggle5] = useState(true);

    // const addToCart = ()=>{
    //     setCartValue(cartValue+1);
    // }

    return <> 
    
    <Nav value={cartValue}/>

    {/* <!-- Header--> */}
    <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
    

    {/* <!-- Section--> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/* <h2>{cartValue}</h2> */}
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $40.00 - $80.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="javascript(void)">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem","right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                                {/* conditional Rendering -Toggle An action to change */}

                                { 
                                toggle1?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle1(!toggle1)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle1(!toggle1)
                                }} >Remove from cart</button>
                                </div>                            
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem","right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            { 
                                toggle2?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle2(!toggle2)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle2(!toggle2)
                                }} >Remove from cart</button>
                                </div>                            
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            { 
                                toggle3?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle3(!toggle3)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle3(!toggle3)
                                }} >Remove from cart</button>
                                </div>                            
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem","right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Sale Item</h5>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            { 
                                toggle4?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle4(!toggle4)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle4(!toggle4)
                                }} >Remove from cart</button>
                                </div>                            
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="javascript(void)">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{"top": "0.5rem","right": "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Special Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            { 
                                toggle5?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle5(!toggle5)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle4(!toggle5)
                                }} >Remove from cart</button>
                                </div>                            
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $40.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            { 
                                toggle5?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue+1)
                                    setToggle5(!toggle5)
                                }} >Add to cart</button>
                                </div>
                                :<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setCartValue(cartValue-1)
                                    setToggle5(!toggle5)
                                }} >Remove from cart</button>
                                </div>                            
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Products;

