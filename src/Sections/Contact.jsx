import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const SendMessage = () => {
        // get IDs
        const PublicId = "AqC5_edo3zDOC7AzM"
        const TemplateId = "template_yypklxj"
        const ServiceId = "service_4bvvlsa"

        // templete parameters
        const templeteParams = {
            form_name: name,
            form_email: email,
            to_name: 'Benelmalih Ahmed Amine',
            message: message
        }

        // send email
        emailjs.send(PublicId, TemplateId, ServiceId, templeteParams)
            .then((response) => {
                console.log("Email Sent Successfully", response);
                setName('')
                setEmail('')
                setMessage('')
            }).catch((error) => {
                console.log("Error: no Email sended", error);
            })
    }

    return (
        <main className='w-full h-[100vh] bg-gray-200 px-10 pt-5 pb-20 flex justify-center gap-3'>
            <section className='w-[80rem] bg-gray-500'>

            </section>

            <section className='w-[40rem] bg-gray-500 shadow-xl p-0 grid place-content-center text-white'>
                <h2 className="text-3xl font-extrabold text-center mb-6">Send a message</h2>
                <form className="w-[380px] space-y-7">
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Full Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}
                         type="text" id="name" required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Email Address:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                         type="email" id="email" required
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition" />
                    </div>
                    <div className='flex flex-col'>
                        <label className="text-2sm font-medium mb-2">Message:</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                         type="password" id="password" required rows={5} className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition"></textarea>
                    </div>

                    <button onClick={SendMessage} className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
                        Register
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;