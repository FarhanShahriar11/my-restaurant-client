import React from 'react';

const Food = () => {
    return (
        <div className='font-all'>
        <div className='my-16 bg-gray-100'>
            <div className='w-10/12 mx-auto py-14'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
                    <div className='w-full md:w-5/12 space-y-7'>
                        <h2 className='text-3xl md:text-4xl text-gray-800 font-semibold'>Fresh and local perfect <br /> food for you</h2>

                        <hr className='border-4 w-32 border-cyan-300' />

                        <p className='text-gray-400 info'>
                            This kitchen is a brewery of life – whether it’s the kids baking parties or their parents elaborate soirees, there’s always something cooking in here.
                        </p>

                        <button className='btn btn-outline btn-warning button-color px-7 py-2'>See More</button>
                    </div>

                    <div className='w-full md:w-5/12'>
                        <div className=''>
                            <img className='imgSoup' src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=480&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Food;