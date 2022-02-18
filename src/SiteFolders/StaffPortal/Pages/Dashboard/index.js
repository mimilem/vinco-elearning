import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

//import aws api and components to create new cart item
import { API, graphqlOperation } from "aws-amplify";
import { listFacultys } from '../../../../graphql/queries';

//import the styling compnent(s).
import './dashboard.css';
import '../staffPages.css';

//import all components that will be 
//displayed on the pages.
import HeaderAndSideNav from '../../Components/HeaderAndSideNav';


function StaffDashboard() {

    // Initiate a boolean state to check weither 
    // the bar is toggled and weither the tab is active.
    const [toggledBar, setToggledBar] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    const [faculty, setFaculty] = useState([])

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const location = useLocation();

    /* fetch the API data of faculties and departements */
    useEffect( () => {
        const fetchFaculty = async () => {
            try {
                //faculties
                let facultyResults = await API.graphql(
                    graphqlOperation(listFacultys)
                )
                let faculty = facultyResults.data.listFacultys.items
                setFaculty(faculty)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchFaculty();
    })

    return (
        <div className="staff-pages-container">

            <HeaderAndSideNav
                toggledBar={toggledBar} 
                setToggledBar={setToggledBar}
                activeTab={activeTab} />

            <div className='staff-pages-content'>
                <div className='staff-pages-header-tilte'>Admin Dashboard</div>
                <hr className='staff-page-hr'/>
                { faculty.map( facultyItemMap => (
                    <Link to={{     
                        pathname:'/Staff/Departments',
                        state: location
                    }} 
                        className='gradient-blue-card-container' 
                        style={{padding:'1rem', fontSize: '15px'}}>
                            <div className='top-left-text' style={{padding:'1rem', fontSize: '17px'}}>
                                Faculty: {facultyItemMap.facultyName}
                            </div>
                            <div className='top-right-text'><div className='more-icon'/></div>
                            <h4 style={{position: 'absolute', bottom:0, padding:'1rem'}}>
                                Head Of Faculty: {facultyItemMap.headofFaculty}
                            </h4>
                    </Link>))
                }
            </div>
        </div>
    );
}

export default StaffDashboard;