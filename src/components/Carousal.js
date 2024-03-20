import React from "react"
export default function Carousal() {
    return (
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <blockquote className="blockquote fst-italic">
                        <h4 className="mb-2 ">Food that whispers happiness on tongues</h4>
                        <h6 className="mb-4 ">order your delicious cravings.</h6>
                        </blockquote>
                            <form className="d-flex" role="search" >
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor:"#E4E4E4"}}/>
                                <button className="btn btn-outline-success text-white bg-success" type="submit">➜</button>
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://wallpapersmug.com/download/2880x1800/ddcbbf/food-pizza-baking.jpg" className="d-block w-100" style={{ filter: "brightness(35%)" }} alt="..." />
                        </div>
                        
                        <div className="carousel-item">
                            <img src="https://wallpaperaccess.com/full/424487.jpg" className="d-block w-100" style={{ filter: "brightness(35%)" }} alt="..." />
                        </div>
                        
                        <div className="carousel-item">
                            <img src="https://a-static.besthdwallpaper.com/pan-pizza-wallpaper-2880x1800-3212_8.jpg" className="d-block w-100" style={{ filter: "brightness(35%)" }} alt="..." />
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}
