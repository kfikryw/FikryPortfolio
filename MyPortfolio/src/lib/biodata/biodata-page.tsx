export const BiodataPage = () => {
    const age = new Date().getFullYear() - 1998;

    return (
        <section className="biodata-page fade-in text-center">
            <h3 className="text-3xl font-bold mb-6 center">Biodata</h3>

            <div className="flex justify-center mb-4">
                {/* // Profile picture is currently commented out to avoid potential issues with image loading. It can be re-enabled once the image source is verified and stable. */}
                {/* <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQFD1FBc4E2G7Q/profile-displayphoto-shrink_800_800/B56ZUY3BWcGQAc-/0/1739878836032?e=1780531200&v=beta&t=HKRY-y0vCElbtdbMKGLkSrN7L3Hp0PPROMVFNmFMPf4"
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow-sm"
                /> */}
            </div>
            <div className="card text-block">
                <p><span className="font-semibold">Name:</span> Wan Ahmad Fikry Bin Wan Effendy</p>
                <p><span className="font-semibold">Age:</span> {age}</p>
                <p><span className="font-semibold">Location:</span> Malaysia</p>
                <p><span className="font-semibold">Occupation:</span> Full Stack Developer</p>
                <p><span className="font-semibold">Email:</span> kfikryw@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +60176099156</p>

                <div className="mt-4">
                    <p className="font-semibold mb-1">Links:</p>

                    <ul className="ml-6 list-disc space-y-2">

                        {/* LinkedIn */}
                        <li className="flex items-center gap-4">
                            <a 
                                href="https://www.linkedin.com/in/wan-ahmad-fikry-wan-effendy-b41b81240" 
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                fill="#0A66C2" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-8.2c0-2-.1-4.5-2.8-4.5-2.8 0-3.2 2.1-3.2 4.3V24h-4V8z"/>
                            </svg>
                        </li>

                        <li className="flex items-center gap-4">
                            <a 
                                href="https://github.com/kfikryw" 
                                className="hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                fill="black" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                            </svg>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};
