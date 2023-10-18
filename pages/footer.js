import { useState } from 'react';
import Link from 'next/link';

const initState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''

}

export default function Footer() {
    const [formData, setFormData] = useState({ ...initState });

    const [status, setStatus] = useState('new')

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendMessage = (event) => {
        event.preventDefault();
        const url = 'https://wlqmfflan6.execute-api.us-west-1.amazonaws.com/contact';

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                name: `${formData.firstName} ${formData.lastName}`,
                message: formData.message,
                email: formData.email
            })
        };

        setStatus('sending');
        setTimeout(() => {
            fetch(url, requestOptions).then(response => response.json()).then((res) => (res.error) ? setStatus(res) : setStatus('success'));
        }, 250)
    }

    return (
        <div className="w-full bg-slate-700 pt-24 pb-12 px-4">
            <div className="flex flex-col md:flex-row justify-evenly p-4 md:px-2 md:px-12">
                <div className="md:block pb-12 md:pb-0 md:pt-0 md:p-2 md:p-8 md:pt-0">
                    <div className="uppercase text-xl mb-4 text-yellow-300">Read More About Us</div>
                    <div className="py-1"><span className="list-buttons"><a href="/about">Learn more about us</a></span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <div className="py-1"><span className="list-buttons"><Link href="/about#services">See what services we offer</Link></span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <div className="py-1"><span className="list-buttons"><a href="/news">See news about our leadership</a></span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <br></br>
                    <img className="h-72 mt-4" src="../short_color_logo.webp" alt="High Ground Leadership Group text logo" />
                </div>
                <div className="text-white px-4">
                    <div className="uppercase text-xl mb-2 text-yellow-300">Contact Us</div>
                    {(status === 'new' || status === 'sending') ?
                        <div>
                            <div className="border-b border-yellow-900/10 pb-12">
                                <p className="my-0 text-sm leading-6 text-white">Reach out to us and send us a message.</p>

                                <form onSubmit={sendMessage} className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm leading-6 text-white">First name</label>
                                        <div className="mt-2">
                                            <input value={formData.firstName} onChange={handleFormChange} id="firstName" type="text" name="firstName" autoComplete="given-name" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm leading-6 text-white">Last name</label>
                                        <div className="mt-2">
                                            <input value={formData.lastName} onChange={handleFormChange} id="lastName" type="text" name="lastName" autoComplete="family-name" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-full">
                                        <label htmlFor="email" className="block text-sm leading-6 text-white">Email address</label>
                                        <div className="mt-2">
                                            <input value={formData.email} onChange={handleFormChange} id="email" name="email" type="email" autoComplete="email" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="message" className="block text-sm leading-6 text-white">Message</label>
                                        <div className="mt-2">
                                            <textarea value={formData.message} onChange={handleFormChange} id="message" name="message" rows="3" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2"></textarea>
                                        </div>
                                    </div>
                                    <div className='col-span-full'>
                                        <button type='submit' className={`rounded-full text-black px-3 py-1 bg-yellow-200 hover:bg-yellow-100 px-6`} disabled={status === 'sending'}>
                                            {(status === 'new') ? 'SEND MESSAGE' : 'SENDING...'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div> : ''
                    }
                    {(status === 'success') ?
                        <div>
                            <div className='my-4'> Message was sent successfully.</div>
                            <button onClick={() => { setStatus('new'); setFormData({ ...initState }); }} className="uppercase rounded-full text-black px-3 py-1 bg-yellow-200 hover:bg-yellow-100 px-6">Send new message</button>
                        </div> : ''
                    }
                    {(status.error) ?
                        <div className='my-8'>
                            Error while submitting the message: <br></br> {status.error}. <br></br>
                            <button onClick={() => setStatus('new')} className="uppercase rounded-full text-black px-3 py-1 bg-yellow-200 hover:bg-yellow-100 px-6 my-8">Try again</button>
                        </div> : ''
                    }
                </div>
            </div>
            <div className="w-full pt-24 px-4 text-left text-center">
                Copyright @2023 High Ground Leadership Group
            </div>
        </div>
    )
}