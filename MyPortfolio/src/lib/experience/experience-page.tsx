import { ExperienceAmzList } from "./experience-amz-list"
import { ExperienceHrsystemList } from "./experience-hrsystem-list"

export const ExperiencePage = () => {
    return (
        <section className="experience-page p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>

            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800">
                    Full Stack Developer — AMZ Solution (Contracted to Accenture for Intel Malaysia)
                </h4>
                <p className="text-gray-500 text-sm mb-2">March 2025 – Present</p>

                <ExperienceAmzList/>
            </div>

            <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800">
                    Programmer — HR Systems & Consulting
                </h4>
                <p className="text-gray-500 text-sm mb-2">August 2024 – March 2025</p>

                <ExperienceHrsystemList/>
            </div>
        </section>
    )
}
