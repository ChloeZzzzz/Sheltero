import React from "react";
// react component for creating beautiful carousel
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "src/page/Carousel/components/Grid/GridContainer.js";
import GridItem from "src/page/Carousel/components/Grid/GridItem.js";
import Card from "src/page/Carousel/components/Card/Card.js";

const image1 ="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
const image2 = "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/91325246_836951606815943_3048329523390054400_n.jpg?_nc_cat=110&_nc_sid=6e5ad9&_nc_ohc=SzklBrddXIMAX89bBjs&_nc_ht=scontent-syd2-1.xx&oh=74968f281abf7f0bff2db65cf464f2a6&oe=5EDEFD79";
const image3 = "https://www.baidu.com/img/bd_logo1.png";

export default function SectionCarousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
                <Card>
                    <Carousel {...settings}>
                        <div>
                            <img
                                src={image1}
                                alt="First slide"
                                className="slick-image"
                            />
                            <div className="slick-caption">
                                <h4>
                                    <LocationOn className="slick-icons" />Yellowstone
                                    National Park, United States
                                </h4>
                            </div>
                        </div>
                        <div>
                            <img
                                src={image2}
                                alt="Second slide"
                                className="slick-image"
                            />
                            <div className="slick-caption">
                                <h4>
                                    <LocationOn className="slick-icons" />Somewhere Beyond,
                                    United States
                                </h4>
                            </div>
                        </div>
                        <div>
                            <img
                                src={image3}
                                alt="Third slide"
                                className="slick-image"
                            />
                            <div className="slick-caption">
                                <h4>
                                    <LocationOn className="slick-icons" />Yellowstone
                                    National Park, United States
                                </h4>
                            </div>
                        </div>
                    </Carousel>
                </Card>
            </GridItem>
        </GridContainer>
    );
}