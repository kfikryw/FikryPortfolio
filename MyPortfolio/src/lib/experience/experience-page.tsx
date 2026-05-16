import { ExperienceAmzList } from "./experience-amz-list"
import { ExperienceHrsystemList } from "./experience-hrsystem-list"
import '../../style/style.css'
export const ExperiencePage = () => {
    return (
        <section className="experience-page fade-in">
            <h3 className="text-3xl font-bold mb-6 center">Experience</h3>

            <div className="card mb-8 text-block">
                <h4 className="text-xl font-semibold text-gray-900">
                    Full Stack Developer — AMZ Solution (Contracted to Accenture for Intel Malaysia)
                </h4>
                <p className="text-gray-500 text-sm mb-4">March 2025 – Present</p>

                <ExperienceAmzList />
            </div>

            <div className="card mb-8 text-block">
                <h4 className="text-xl font-semibold text-gray-900">
                    Programmer — HR Systems & Consulting
                </h4>
                <p className="text-gray-500 text-sm mb-4">August 2024 – March 2025</p>

                <ExperienceHrsystemList />
            </div>
        </section>
    )
}
