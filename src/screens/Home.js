import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faPizzaSlice,
    faBirthdayCake,
    faHamburger,
    faIceCream,
    faCookieBite,
    faAppleAlt,
    faCarrot,
    faMugHot,
    faCocktail,
    faUtensils,
    faPepperHot,
    faHotdog,
    faEgg,
    faCoffee,
    faWineGlass,

    
} from '@fortawesome/free-solid-svg-icons'; // Import your food icons
const foodIcons = [
    { icon: faPizzaSlice, color: '#F94C10' },
    { icon: faBirthdayCake, color: '#0096FF' },
    { icon: faHamburger, color: '#FFC300' },
    { icon: faIceCream, color: '#ECECEC' },
    { icon: faCocktail, color: '#F94C10' },
    { icon: faCookieBite, color: '#FFC300' },
    { icon: faMugHot, color: '#ECECEC' },
    { icon: faAppleAlt, color: '#FF1700' },
    { icon: faCarrot, color: '#FFC300' },
    { icon: faUtensils, color: '#1DB9C3' },
    { icon: faPepperHot, color: '#3EC70B' },
    { icon: faHotdog, color: '#FFC300' },

    { icon: faEgg, color: '#FFC300' },
    { icon: faCoffee, color: '#FF5733' },
    { icon: faWineGlass, color: '#FFC300' },];

export default function Home() {

    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [currentFoodIconIndex, setCurrentFoodIconIndex] = useState(0); // Index of the current food icon

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            header: {
                'Cotent-Type': 'application/json'
            }
        });
        response = await response.json();
        setFoodItem(response[0]);
        setFoodCat(response[1]);
        //console.log(response[0],response[1]);
    }

    useEffect(() => {
        loadData();
        // Change the current food icon index every 3 seconds
        const interval = setInterval(() => {
            setCurrentFoodIconIndex((prevIndex) => (prevIndex + 1) % foodIcons.length);
        }, 1500);
        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, []);


    return (
        <>
        <div>
            <div> <Navbar /> </div>
            <div>
                <div id="carouselExampleFade" data-bs-ride="carousel" style={{ margin: 0, padding: 0, objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <blockquote className="blockquote">

                                <h5 className="mb-0 fst-italic" style={{ fontSize: '1.17rem', fontWeight: 'bold',color: "#E8E1D9" }}>We serve love on your plates{" "}<FontAwesomeIcon icon={foodIcons[currentFoodIconIndex].icon}
                                    style={{ color: foodIcons[currentFoodIconIndex].color, fontSize: '1.25rem' }} /></h5>
                            </blockquote>
                            <div className="d-flex justify-content-center" role="search">
                                <div className="input-group" style={{ maxWidth: "600px", marginTop: '0px' }}>
                                    <input className="form-control" type="search" placeholder=" 🔍search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} style={{ backgroundColor: "#E8E1D9", bottom: '-10px', padding: 3.5 }} />
                                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">➜</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://a-static.besthdwallpaper.com/flavors-of-pizza-wallpaper-1680x1050-43743_5.jpg" className="d-block w-100" style={{ filter: "brightness(35%)" }} alt="..." />
                        </div>


                    </div>

                </div>

            </div>
            <div className='container'>
                {
                    foodCat != [] ? foodCat.map((data) => {
                            return (<div className='row mb-3'>

                                <div key={data._id} className='fs-3 m-3' style={{ color: "#B2B2B2", fontFamily: "Comic Sans MS", fontWeight: "bold" }}>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem != [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                    .map(filterItems => {
                                        return (
                                            <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                                <Card foodItem={filterItems}
                                                    options={filterItems.options[0]}
                                                >
                                                </Card>
                                            </div>
                                        )
                                    }) : <div>No such data found</div>}
                            </div>
                            )
                        }) : ""
                }


            </div>
            <div> <Footer />  </div>
        </div>
        </>
    )
}