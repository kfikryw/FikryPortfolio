import { BiodataPage } from "../biodata/biodata-page"
import { ExperiencePage } from "../experience/experience-page"

export const HomePage = () => {
    return (
    <div>
        <h3>Welcome to My Portfolio</h3>
        <BiodataPage />
        <ExperiencePage />
    </div>)
}