export const BiodataPage = () => {
    const age = new Date().getFullYear() - 1998;

    return (
        <section className="biodata-page p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Biodata</h3>

            <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Name:</span> Wan Ahmad Fikry Bin Wan Effendy</p>
                <p><span className="font-semibold">Age:</span> {age}</p>
                <p><span className="font-semibold">Location:</span> Malaysia</p>
                <p><span className="font-semibold">Occupation:</span> Full Stack Developer</p>
                <p><span className="font-semibold">Email:</span> kfikryw@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +60176099156</p>

                <div className="mt-4">
                    <p className="font-semibold">Links:</p>
                    <ul className="ml-6 list-disc text-blue-600">
                        <li>
                            <a href="https://www.linkedin.com/in/wan-ahmad-fikry-wan-effendy-b41b81240" className="hover:underline">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/kfikryw" className="hover:underline">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
