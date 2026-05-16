import { BiodataPage } from "../biodata/biodata-page"
import { ExperiencePage } from "../experience/experience-page"
import { useState } from "react"

export const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>

            <nav>
                <div className="logo">Fikry Effendy</div>

                <ul className="nav-links">
                    <li><a href="#biodata">Biodata</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>

                <div className="hamburger-nav">
                    <div className="hamburger-menu">
                        <div 
                            className={`hamburger-icon ${menuOpen ? "open" : ""}`} 
                            onClick={toggleMenu}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
                            <li><a href="#biodata" onClick={toggleMenu}>Biodata</a></li>
                            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h3 className="center">Welcome to My Portfolio</h3>

            <div id="biodata">
                <BiodataPage />
            </div>

            <div id="experience">
                <ExperiencePage />
            </div>

        </div>
    )
}
