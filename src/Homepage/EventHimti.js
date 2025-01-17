import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


export default function EventHimti({data}) {

    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/6": "cols-span-6 rows-span-1",
            },
            md: {
                "1/3": "cols-span-3 rows-span-1", 
            }
        }
    }


    return (
        <section className="flex bg-blue-800 mt-10 font-display py-12 px-4">
            <Slide bottom>
            <div className="container mx-auto">
                <div className="flex mb-8 justify-center">
                    <h3 className="md:text-3xl text-2xl text-white capitalize font-semibold">
                        event HIMTI
                    </h3>
                </div>

                <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-x-4 md:gap-y-10">
                    {
                        data.map((item) => {
                            return <div key={item.id}
                                className={` mb-8 md:mb-0 ${ratioClassName?.wrapper?.mobile?.[item.ratio.mobile]} 
                                ${ratioClassName?.wrapper.md?.[item.ratio.md]}`}
                            >
                                <Slide bottom delay={200 * item.id}>
                                    <Link to="/news" >
                                        <img className="rounded-t-lg" src={`/images/content/${item.imageUrl}`} alt="" />
                                        <div className=" bg-green-500">
                                            <h4 className="flex justify-center py-5 capitalize text-white">{item.title}</h4>
                                        </div>
                                    </Link>
                                </Slide>
                            </div>
                        })
                    }
                </div>
            </div>
            </Slide>
        </section>
    )
}
