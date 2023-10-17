
export default function Footer() {
    return (
        <div className="w-full bg-slate-700 pt-24 pb-12">
            <div className="flex flex-col sm:flex-row justify-evenly p-4 sm:px-2 md:px-12">
                <div className="sm:block pb-12 sm:pb-0 sm:pt-0 sm:p-2 md:p-8 md:pt-0">
                    <div className="uppercase text-xl mb-4 text-yellow-300">Read More About Us</div>
                    <div className="py-1"><span className="list-buttons">Learn more about us</span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <div className="py-1"><span className="list-buttons">See what services we offer</span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <div className="py-1"><span className="list-buttons">See news about our leadership</span> <span aria-hidden="true" className="text-yellow-400 text-lg">&rarr;</span> </div>
                    <br></br>
                    <img className="h-72 mt-4" src="../short_color_logo.webp" alt="High Ground Leadership Group text logo" />
                </div>
                <div className="text-white px-4">
                    <div className="w-1/2 uppercase text-xl mb-4 text-yellow-300">Contact Us</div>
                    <form>

                        <div className="border-b border-yellow-900/10 pb-12">
                            <p className="mt-1 text-sm leading-6 text-white">Reach out to us and send us a message.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm leading-6 text-white">First name</label>
                                    <div className="mt-2">
                                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm leading-6 text-white">Last name</label>
                                    <div className="mt-2">
                                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                    </div>
                                </div>

                                <div className="sm:col-span-full">
                                    <label htmlFor="email" className="block text-sm leading-6 text-white">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" autoComplete="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2" />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="about" className="block text-sm leading-6 text-white">Message</label>
                                    <div className="mt-2">
                                        <textarea id="about" name="about" rows="3" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400 focus:border-2"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="rounded-full text-black px-3 py-1 bg-yellow-200 hover:bg-yellow-100 px-6">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full pt-24 px-4 text-left text-center">
                Copyright @2023 High Ground Leadership Group
            </div>
        </div>
    )
}