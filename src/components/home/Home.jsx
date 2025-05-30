import React from 'react'
import mobilebanner from '../../assets/images/Home/mbanner.webp'
import desktopbanner from '../../assets/images/Home/dbanner.webp'
import logo from '../../assets/images/Home/logo.webp'
import leaf1 from '../../assets/images/Home/leaf1.webp'
import leaf2 from '../../assets/images/Home/leaf2.webp'
import olive from '../../assets/images/Home/olive.webp'
import arrow from '../../assets/images/Home/rightArrow.svg'
import work1 from '../../assets/images/Home/work1.png'
import work2 from '../../assets/images/Home/work2.png'
import work3 from '../../assets/images/Home/work3.png'
import expert from '../../assets/images/Home/expert.webp'
import profession from '../../assets/images/Home/profession.webp'
import blog1 from '../../assets/images/Home/blog1.webp'
import blog2 from '../../assets/images/Home/blog2.webp'
import blog3 from '../../assets/images/Home/blog3.webp'







const Home = () => {
    return (
        <>
            <div className='relative '>
                <img src={mobilebanner} alt="" className="block md:hidden w-full" />
                <img src={desktopbanner} alt="" className="hidden md:block w-full h-screen" />
                <div className='absolute inset-0 flex flex-col items-center justify-center  border border-red-600'>
                    <img src={logo} alt="" className='w-44 h-auto' />
                    <h1 className='text-white'>identity design systems</h1>
                </div>

                <h1 className='absolute bottom-0 left-0 text-white text-3xl mx-5 pb-2 md:text-5xl'>Inspired by Nature <br /> Crafted with Intellect</h1>

            </div>

            <div>
                <h1 className='text-[#7C7262] text-3xl title leading-12 border'>We design logos and identity systems that transcend trends, becoming timeless marks of  <span className='bg-[#F7CC25]'>enduring commitment.</span></h1>
            </div>

            <div className='border'>
                <div className='md:flex w-full'>
                    <img src={leaf1} alt="" className='md:w-[70%] h-auto md:pr-8' />
                    <img src={leaf2} alt="" className='md:w-[30%] h-[50%]' />
                </div>
            </div>

            <div>
                <h1 className='text-[#7C7262] text-3xl px-5 my-10 leading-12 border'>We design identity design manuals that capture your  <span className='bg-[#F7CC25]'>brand story</span>  and vision, positioning your brand with clarity.</h1>
            </div>

            <div className="relative w-full h-64 md:h-full overflow-hidden">
                <img
                    src={olive}
                    alt="olive banner"
                    className="w-[120%] h-full object-cover object-center"
                />
            </div>

            <div className='text-[#7C7262]'>
                <h1 className=' text-3xl px-5 my-10 leading-12 border'>We create adaptable brand identities that reflect your values and resonate through the right
                    <span className='bg-[#F7CC25]'> visuals and voice across all touchpoints.</span></h1>

                <div className=''>
                    <div className='flex justify-center items-center gap-4 border border-[#7C7262]'>
                        <h1>Services</h1>
                        <img src={arrow} alt="Right Arrow" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-2xl text-[#7C7262] p-5'>Work</h1>
                <div className='md:flex justify-around items-center gap-3'>
                    {/* work 1 */}
                    <div className=' w-full text-[#7C7262]'>
                        <div className=' w-full h-[500px] text-center flex flex-col justify-center items-center bg-[#F2EEEE]'>
                            <div><img src={work1} alt="" className='w-[244px] h-auto' /></div>
                        </div>
                        <div className='flex justify-center gap-3'>
                            <h1 className='text-center py-2'>SPARENZA KNEE CENTRE</h1>
                            <img src={arrow} alt="Right Arrow" />
                        </div>
                    </div>

                    {/* work 2 */}
                    <div className=' w-full text-[#7C7262]'>
                        <div className=' w-full h-[500px] text-center flex flex-col justify-center items-center bg-[#f2eeee]'>
                            <div><img src={work2} alt="" className='w-auto h-[244px]' /></div>

                        </div>
                        <div className='flex justify-center gap-3'>
                            <h1 className='text-center py-2'>CONROY BAKER IMMIGRATION LAWYERS</h1>
                            <img src={arrow} alt="Right Arrow" />
                        </div>
                    </div>

                    {/* work 3 */}
                    <div className=' w-full text-[#7C7262]'>
                        <div className=' w-full h-[500px] text-center flex flex-col justify-center items-center bg-[#F2EEEE]'>
                            <div><img src={work3} alt="" className='w-[244px] h-auto' /></div>

                        </div>
                        <div className='flex justify-center gap-3'>
                            <h1 className='text-center py-2'>INDO BHARAT ONLINE SCHOOL</h1>
                            <img src={arrow} alt="Right Arrow" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='md:flex border text-[#7C7262]'>
                    <div className='md:w-[50%] h-full relative'>
                        <img src={expert} alt="" className='w-auto h-auto relative md:h-[550px] z-50' />
                        <div className='absolute bottom-0 bg-[#005C43] w-full md:h-[500px]  inset-0 z-10'></div>
                    </div>
                    <div className='md:flex flex-col justify-center items-center border md:w-[50%]'>
                        <div className=' border'>
                            <h1 className='text-2xl p-5'>Branding for Professionals <br /> like Doctors and Lawyers</h1>
                            <p className='px-5'>We collaborate closely to understand your expertise, ensuring a personalized approach that reflects your values. With a deep understanding of your field, we articulate your brand to convey trust, precision, and excellence - just as you do in your work.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full md:h-screen overflow-hidden px-5 md:px-10 bg-[#F2EEEE] flex justify-center items-center">
                <img
                    src={profession}
                    alt="professional"
                    className="w-auto h-[400px] md:w-[80%] md:h-full object-cover object-center border"
                />
            </div>


            {/* Blogs */}
            <div className='h-screen'>
                <h1 className='text-center text-2xl text-[#7C7262] p-5'>Blogs</h1>
                <div className=''>
                    <div className='flex  w-full h-auto overflow-x-scroll gap-3  px-5'>
                        {/* blog 1 */}
                        <div className='w-full text-[#7C7262]'>
                            <div className='w-[300px] md:w-full border-red-500'>
                                <div><img src={blog1} alt="" className='w-full h-[470px]' /></div>
                                <div className='flex justify-center gap-3'>
                                    <h1 className='text-center py-2'>Social Media Branding</h1>
                                    <img src={arrow} alt="Right Arrow" />
                                </div>
                            </div>
                        </div>

                        {/* blog 2 */}
                        <div className='w-full text-[#7C7262] '>
                            <div className='w-[300px] md:w-full border-red-500'>
                                <div><img src={blog2} alt="" className='w-full h-[470px]' /></div>
                                <div className='flex justify-center gap-3'>
                                    <h1 className='text-center py-2'>Website Branding</h1>
                                    <img src={arrow} alt="Right Arrow" />
                                </div>
                            </div>
                        </div>

                        {/* work 3 */}
                        <div className='w-full text-[#7C7262] '>
                            <div className='w-[300px] md:w-full border-red-500'>
                                <div><img src={blog3} alt="" className='w-full h-[470px]' /></div>
                                <div className='flex justify-center gap-3'>
                                    <h1 className='text-center py-2'>Social Media Branding</h1>
                                    <img src={arrow} alt="Right Arrow" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home