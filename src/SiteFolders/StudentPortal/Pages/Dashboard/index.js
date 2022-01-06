import React, {useState} from 'react';

//import the styling compnent(s).
import './dashboard.css';
import '../studentsPages.css';

//import all components that will be 
//displayed on the pages.
import Header from '../../Components/Header';
import SideNavigation from '../../Components/SideNavigation';



function StudentsDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled.
    const [toggledBar, setToggledBar] = useState(false);

    return (
        <div className="students-pages-container">

            <Header />

            <div 
                className={
                    toggledBar === false ? 
                        'full-side-navigation-container' 
                        : 
                        'toggled-side-navigation-container' 
                }>
                <SideNavigation 
                    toggledBar={toggledBar} 
                    setToggledBar={setToggledBar} />
            </div>

            <div className='students-pages-content'>
                <div className='students-pages-header-tilte'>Students Dashboard</div>
                <hr className='students-page-hr'/>
            </div>
        </div>
    );
}

export default StudentsDashboard;