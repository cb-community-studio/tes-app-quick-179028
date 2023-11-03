import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import welcomeImg from '../../assets/media/welcome-banner.png';

const Dashboard = (props) => {
    useEffect(() => {}, []);

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="flex w-10">
                <div className=" w-8">
                    <h4 className="ml-4">Microservices Ready</h4>
                    <div className="w-full flex justify-content-center flex-wrap ">
                        {/* Links to services */}
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/users'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Users</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/employee'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Employee</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/offboardingTermination'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>OffboardingTermination</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/workforceDiversityAndInclusi'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>WorkforceDiversityAndInclusi</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/hrBudgetingAndCostTracking'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>HrBudgetingAndCostTracking</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/employeeSelfServicePortal'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>EmployeeSelfServicePortal</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/benefitsOpenEnrollment'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>BenefitsOpenEnrollment</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/employeeRelations'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>EmployeeRelations</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/successionPlanning'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>SuccessionPlanning</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/employeeSurveysAndFeedback'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>EmployeeSurveysAndFeedback</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/recruitmentAndOnboarding'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>RecruitmentAndOnboarding</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/complianceAndDocuments'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>ComplianceAndDocuments</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/hrAnalyticsAndReporting'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>HrAnalyticsAndReporting</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/attendanceAndLeaveManagement'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>AttendanceAndLeaveManagement</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/trainingAndDevelopment'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>TrainingAndDevelopment</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/benefitsAdministration'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>BenefitsAdministration</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/payroll'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Payroll</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/timeTracking'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>TimeTracking</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/performanceReview'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>PerformanceReview</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/applicant'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>Applicant</div></div></Link></div>
                <div className='col-12 lg:col-6 xl:col-4'><Link to='/jobPosting'><div className='card mb-0 flex flex-column align-items-center justify-content-center hover zoom' style={{ height: '10rem' }}><div className='text-900 font-medium text-lg'>JobPosting</div></div></Link></div>
                        {/* ~cb-add-services-card~ */}
                    </div>
                </div>
                <div className="w-4 flex flex-column align-items-center">
                    <img src={welcomeImg} alt="welcome" className="h-30rem" />
                    <p className="text-7xl m-0">Welcome!</p>
                    <p>You are ready to go!</p>
                </div>
            </div>
            <div className="card w-10 my-6">
                <h4>REST API Ready</h4>
                <p className="underline m-0">e.g. Authentication</p>
                <p>POST http://localhost:3030/authentication {`{ "email": "example@email.com",    "password": "123456" }`}</p>
                <p className="underline m-0">e.g. CRUD</p>
                <p className="m-0">
                    GET {`=>`} GET http://localhost:3030/users/{`<userId>`}
                </p>
                <p className="m-0">
                    CREATE {`=>`} POST http://localhost:3030/users` {`{ "email": "example2@email.com",    "password": "456789" }`}
                </p>
                <p className="m-0">
                    PATCH {`=>`} PATCH http://localhost:3030/users/{`<userId>`}` {`{ "name": "Thomas Smith" }`}
                </p>
                <p className="m-0">
                    DELETE {`=>`} DELETE http://localhost:3030/users/{`<userId>`}
                </p>
            </div>
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Dashboard);
