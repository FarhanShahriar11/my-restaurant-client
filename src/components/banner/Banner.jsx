import React from 'react';
import logo from '../../assets/banner.jpg'

const Banner = () => {
    return (
        // <div>
        //     <div className='banner'>

        //         <div className='flex items-center justify-center pt-36 md:pt-24 text-center'>
        //             <div>
        //                 <div className="title">
        //                     <h1 className='text-5xl md:text-8xl font-semibold'>Restaurant</h1>
        //                 </div>

        //                 <div className="info text-white">
        //                     <p className='text-xl md:text-2xl'>A taste of local ingredients & seasonal flavours</p>
        //                     <p className='uppercase text-stone-300 my-3'><small>We are ready</small></p>
        //                 </div>

        //                 <button className='button-color px-7 py-2'>See More</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={logo} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Enjoy the Organic Food</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-secondary mr-5">View demo</button>
                       
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src={logo} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Enjoy the Organic Food</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-secondary mr-5">View demo</button>
                       
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src={logo} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Enjoy the Organic Food</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-secondary mr-5">View demo</button>
                        
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src={logo} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold'>Enjoy the Organic Food</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-secondary mr-5">View demo</button>
                        
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;