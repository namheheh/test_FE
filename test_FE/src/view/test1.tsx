import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
const Test1 = () => {
    const images = ["./src/img/slide1.png", "./src/img/slide1.png", "./src/img/slide1.png"];

    const images2 = [
        {
            images: "./src/img/coffe1.png",
            name: '',
            desc: '100% Natural Arbika or Robusta 30mI Cup',
            price: 50000
        },
        {
            images: "./src/img/coffe1.png",
            name: 'Capuccino',
            desc: 'Coffee 50%, Milk 50%, 280ml',
            price: 30000
        },
        {
            images: "./src/img/coffe1.png",
            name: 'name',
            desc: '',
            price: 30000
        },
        {
            images: "./src/img/coffe1.png",
            name: 'Americano',
            desc: '100% Natural Arbika or Robusta 30ml cup',
            price: 30000
        },
        {
            images: "./src/img/coffe1.png",
            name: 'Americano',
            desc: '100% Natural Arbika or Robusta 30ml cup',
            price: 30000
        },
        {
            images: "./src/img/coffe1.png",
            name: 'Americano',
            desc: '100% Natural Arbika or Robusta 30ml cup',
            price: 30000
        },
    ]

    const images3 = [
        {
            images: "./src/img/member.png",
            name: 'JOHN DOE',
            subName: 'Sunior Designer of Lomosity',
            desc: 'Voi Coffee The App clearly displays content as well as easy operations to help users have a good experience',
        },
        {
            images: "./src/img/member.png",
            name: 'JOHN DOE',
            subName: 'Sunior Designer of Lomosity',
            desc: 'Voi Coffee The App clearly displays content as well as easy operations to help users have a good experience',
        },
        {
            images: "./src/img/member.png",
            name: 'JOHN DOE',
            subName: 'Sunior Designer of Lomosity',
            desc: 'Voi Coffee The App clearly displays content as well as easy operations to help users have a good experience',
        },
        {
            images: "./src/img/member.png",
            name: 'JOHN DOE',
            subName: 'Sunior Designer of Lomosity',
            desc: 'Voi Coffee The App clearly displays content as well as easy operations to help users have a good experience',
        },
    ]



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    const settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div>
            <section className="half">
                <div className='container mx-auto py-[20px]'>
                    <div className='flex justify-between my-2 font-bold'>
                        <img src="./src/img/logo.png" width={66} alt="" />
                        <div>
                            <ul className="flex space-x-6">
                                <li><a href="#" className=" hover:text-red-500">Home</a></li>
                                <li><a href="#" className=" hover:text-red-500">Service</a></li>
                                <li><a href="#" className=" hover:text-red-500">Our menu</a></li>
                                <li><a href="#" className=" hover:text-red-500">About us</a></li>
                                <li><a href="#" className=" hover:text-red-500">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="flex space-x-6">
                                <li><FontAwesomeIcon icon={faUser} /> <a href="#" className=" hover:text-red-500">Account</a></li>
                                <li><FontAwesomeIcon icon={faCartShopping} /> <a href="#" className=" hover:text-red-500">Cart</a></li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <div className='flex justify-between my-[50px]'>
                        <div style={{ width: 420 }}>
                            <h1 className='text-6xl uppercase font-bold'>
                                enjoy life sip by sip
                            </h1>
                            <p className='my-4'>
                                Voi Coffee is aimed at everyone, especially young, active, busy people. The brand is committed to providing customers with great coffee experiences, even when they are in a hurry.
                            </p>
                        </div>

                        <div className='slide_width'>
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} width={300} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container mx-auto my-[50px]'>
                    <div style={{ width: 600 }}>
                        <h1 className='text-3xl uppercase font-bold my-2'>
                            Specical menu for you
                        </h1>
                        <p>
                            Drinking Cofffe Can Do Much More Than Provide An Energy Boost. It May Also Reduce The Risk Of Several Health Issues.
                        </p>
                    </div>
                    <Slider className='slide_product' {...settings2}>
                        {images2.map((item, index) => (
                            <div className='slide_product_child my-[100px]'>
                                <img src={item.images} alt={`Slide ${index}`} width={200} />
                                <b className='text-xl'>{item.name}</b>
                                <div>{item.desc}</div>
                                <div className='flex justify-center space-x-3 icon_product'>
                                    <a href="#"><FontAwesomeIcon icon={faCartShopping} className="text-white bg-black p-2 rounded-lg" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faHeart} className="text-white bg-black p-2 rounded-lg" /></a>
                                </div>
                                <div className='price_product'>
                                    {item.price}VND
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className='Banner_coffe'>
                <h1 className='title_banner_coffe'>
                    more than just a coffee shop
                </h1>
            </section>

            <section>
                <div className='container mx-auto my-[80px]'>
                    <div style={{ width: 500 }} className='text-center mx-auto'>
                        <h1 className='text-3xl uppercase font-bold my-2'>
                            Happy Customer
                        </h1>
                        <p>
                            So perhaps peopel who are genetically geared to reach to that extra cup of coffee could be boosting their health, as well as their productivity.
                        </p>
                    </div>

                    <Slider className='slide_man my-[40px]' {...settings3}>
                        {images3.map((item, index) => (
                            <div className='slide_man_child space-x-[40px]'>
                                <img src={item.images} alt={`Slide ${index}`} width={300} />
                                <div>
                                    <p style={{ width: 700 }} className='slide_man_title my-[50px]'>
                                        “{item.desc}”
                                    </p>

                                    <div className='grid grid-cols-2 items-center'>
                                        <div>
                                            <b>{item.name}</b>
                                            <p>{item.subName}</p>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                            <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="half_bottom">
                <div className='container mx-auto inbox'>
                    <h1>Deliciousness to your inbox</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuipisicing eliti sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                    <div className="mt-[50px]">
                        <input type="text" placeholder='Your email address..' className='p-4 border_bt' />
                        <button className='py-4 px-8 border_bt text-white'>Subscribe</button>
                    </div>
                </div>
            </section>

            <section className='bg-black text-white'>
                <div className='container mx-auto'>
                    <div className="grid grid-cols-5 gap-4 py-8">
                        <div className="col-span-2" style={{ width: 300 }}>
                            <img src="./src/img/logo.png" width={66} alt="" />
                            <p>Sit amet nisl purus in mollis nunc sed
                                id semperv In vitae turpis massa sed.
                                Sed velit dignissim sodales ut e</p>
                        </div>
                        <div>
                            <h2 className='font-bold'>COMPANY</h2>
                            <br />
                            <ul className='leading-10 text-[#37393a]'>
                                <li><a href="#"></a>About Us</li>
                                <li><a href="#"></a>Features</li>
                                <li><a href="#"></a>Watch Our Video</li>
                                <li><a href="#"></a>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold'>OUR POLICIES</h2>
                            <br />
                            <ul className='leading-10 text-[#37393a]'>
                                <li><a href="#"></a>Privacy Policy</li>
                                <li><a href="#"></a>Terms of Use</li>
                                <li><a href="#"></a>Cookies Policy</li>
                                <li><a href="#"></a>GDPR Policy</li>
                                <li><a href="#"></a>Refund Policy</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-bold'>SOCIAL MEDIA</h2>
                            <br />
                            <ul className='leading-10 text-[#37393a]'>
                                <li><a href="#"></a>Facebook</li>
                                <li><a href="#"></a>Twitter</li>
                                <li><a href="#"></a>Instagram</li>
                                <li><a href="#"></a>Tiktok</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='text-center py-8 text-[#37393a]'>
                    @ 2022 VoiCoffee - All rights reserved.
                </div>
            </section>
        </div>
    )
}

export default Test1