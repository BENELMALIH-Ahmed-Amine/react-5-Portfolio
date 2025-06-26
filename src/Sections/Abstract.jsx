import React from 'react';
import Profil from '../assets/Profil.jpg'
import hero from '../assets/hero.png'
import Socials from '../Components/Socials';

const Abstract = () => {
    return (
        <main className='w-full h-[100vh] bg-gray-200 px-10 pt-5 pb-20 flex gap-5'>
            <section className='w-[100%] flex flex-col items-center mt-10 gap-3'>
                <div className="w-full h-[30rem] flex justify-center"><img className='w-[25rem] h-full' src={Profil} alt="" /></div>

                <section className='w-[50rem] flex flex-col items-center gap-5'>
                    <div className=''>
                        <h2 className='text-3xl font-medium'>Full Stack Developer</h2>
                        <caption className='w-fit justify-start'>You Imagin, I make it Real..!</caption>
                    </div>
                    <div className='w-fit flex gap-25'>
                        <section className='flex flex-col items-center gap-5'>
                            <div className='flex gap-10'>
                                <p className='text-xl flex flex-col items-center'><span className='font-medium'>First-Name:</span> Ahmed Amine</p>
                                <p className='text-xl flex flex-col items-center'><span className='font-medium'>Last-Name:</span> Benelmalih</p>
                            </div>
                            <Socials flex={'flex'}/>
                        </section>

                        <div className='flex flex-col gap-1.5'>
                            <legend className='text-xl'><span className='font-medium'>Langues:</span></legend>
                            <ul className='flex flex-col items-center'>
                                <li>Arabic</li>
                                <li>English</li>
                                <li>French</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>

            <article className='w-[100%] bg-[#9da56795] flex flex-col items-center pb-10 pt-5 px-15 gap-5'>
                <h2 className='text-3xl mb-2'>Why I choise Development?</h2>
                <section className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi ipsum ullam excepturi voluptatum ut adipisci vel quis provident optio placeat eos facilis aut voluptas debitis maxime, rem sint. Exercitationem.</section>

                <section className='flex flex-col gap-3 text-lg'>
                    <div className="w-full h-[15rem] flex justify-center"><img className='w-[26rem] h-full' src={hero} alt="" /></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam voluptatum beatae consequatur cupiditate sunt non libero doloremque, recusandae obcaecati expedita impedit vel possimus esse est natus minima nobis ea!Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam voluptatum beatae consequatur cupiditate sunt non libero doloremque, recusandae obcaecati expedita impedit vel possimus esse est natus minima nobis ea!Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam voluptatum beatae consequatur cupiditate sunt non libero doloremque.</p>
                </section>

                <section className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis placeat exercitationem rerum reprehenderit rerum reprehenderit</section>
            </article>
        </main>
    );
};

export default Abstract;