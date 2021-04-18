import React from 'react';
import health from '../../../images/healthcare.png';
import medical from '../../../images/medicine.png';
import nurse from '../../../images/nurse.png';
import CarePage from '../CarePage/CarePage';


const careData = [
    {
        icon:health,
        id:1
    },
    {
        id:2,
        icon:medical
      
    },
    {
        id:3,
        icon:nurse
    }
]

const Care = () => {
    return (
        <section className=""  style={{backgroundColor:'#EEE'}} >
           <div className="text-center">
           <h1 className="mt-5 pt-5  ms-5">What is Home Care... In Home Care Services For EveryOne.</h1>
            <p className="ms-5 text-secondary">Discover how professional caregivers approach caring for your loved one in order to engage</p>
           </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                       {
                         careData.map( care => <CarePage key={care.id} care={care}></CarePage>)
                       }
                </div>
            </div>
        </section>
    );
};

export default Care;