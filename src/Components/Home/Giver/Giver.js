import React from 'react';
import doctor1 from '../../../images/doctor1.jpg';
import doctor2 from '../../../images/doctor2.jpg';
import doctor3 from '../../../images/doctor3.jpg';
import GiverPage from '../GiverPage/GiverPage';

const giverData = [
    {
        name:'Marry Rosa',
        img:doctor1,
        id:1,
        title:'Caregiver for Elders'
    },
    {
        name:' Ema Watson',
        img:doctor2,
        id:2,
        title:'Take care of Nursing'
    },
    {
        name:'Marry Lila',
        img:doctor3,
        id:3,
        title:'Caregiver for Elders'
    }

]

const Giver = () => {
    return (
        <section  style={{backgroundColor:'#EEE'}}>
            <div className="text-center pt-5">
                <h1>OUR CareGivers</h1>
                <h5 className="text-secondary">Our caregivers are trained specifically to provide in-home care.</h5>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75">
                    {
                        giverData.map(giver => <GiverPage key={giver.id} giver = {giver}></GiverPage>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Giver;