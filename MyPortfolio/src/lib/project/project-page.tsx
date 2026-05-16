export const ProjectPage = () => {
    return (
        <section className="project-page fade-in">
            <h3 className="text-3xl font-bold mb-6 center">Projects</h3>

            <div className="card text-block">

                <ul className="list-disc pl-4 space-y-2">

                    <li>
                        <a 
                            href="https://github.com/kfikryw/FinancialTracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600"
                        >
                            Financial Tracker (ASP.NET MVC)
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://github.com/kfikryw/pos-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600"
                        >
                            POS System UI Redesign
                        </a>
                    </li>

                    <li>
                        <a 
                            href="https://portfolio-eight-red-65.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600"
                        >
                            Personal Website
                        </a>
                    </li>

                </ul>

            </div>
        </section>
    )
}
