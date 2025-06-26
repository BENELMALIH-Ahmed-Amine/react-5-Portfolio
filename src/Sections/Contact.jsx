import React from 'react';

const Contact = () => {
    return (
        <main className='w-full h-[100vh] bg-gray-300 px-10 pt-5 pb-20 flex gap-3'>
            <section className='w-full bg-gray-500'>

            </section>

            <section className='w-[100rem] bg-gray-500 shadow-xl rounded-2xl max-w-md p-6 grid place-content-center text-white'>
                <h2 className="text-3xl font-extrabold text-center mb-6">Send a message</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name:</label>
                        <input type="text" id="name" required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address:</label>
                        <input type="email" id="email" required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message:</label>
                        <textarea type="password" id="password" required className="w-full px-4 py-5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition"></textarea>
                    </div>

                    <button type="submit"
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200">
                        Register
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;