export const BiodataPage = () => {
    const age = new Date().getFullYear() - 1998;

    return (
        <section className="biodata-page fade-in text-center">
            <h3 className="text-3xl font-bold mb-6 center">Biodata</h3>

            <div className="card text-block">
                <p><span className="font-semibold">Name:</span> Wan Ahmad Fikry Bin Wan Effendy</p>
                <p><span className="font-semibold">Age:</span> {age}</p>
                <p><span className="font-semibold">Location:</span> Malaysia</p>
                <p><span className="font-semibold">Occupation:</span> Full Stack Developer</p>
                <p><span className="font-semibold">Email:</span> kfikryw@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +60176099156</p>

                <div className="mt-4">
                    <p className="font-semibold mb-1">Links:</p>
                    <ul className="ml-6 list-disc">
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/wan-ahmad-fikry-wan-effendy-b41b81240" 
                                className="hover:underline"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/kfikryw" 
                                className="hover:underline"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
