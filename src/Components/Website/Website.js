import React from 'react';
import constra from '../../images/CONSTRA.PNG'
import hk from '../../images/HighKing.PNG'
import warehouse from '../../images/warehouse.PNG'
import './Website.css'

const Website = () => {
    return (
        <div className='bg-slate-900 text-white font-bold py-3'>
            <h1 className="text-5xl">Featured Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 my-3'>
                <div className='image border-2 border-white rounded-xl'>
                    <h3 className='my-3'>CONSTRA</h3>
                    <img className='img rounded-xl' src={constra} alt="" />
                    <div className="overlay">
                        <ul className='text-xl'>
                            <li>Separated User and Admin Dashboard.</li>
                            <li>Tool manufacture website.</li>
                            <li>Email Authentication.</li>
                        </ul>
                    </div>
                </div>
                <div className='image border-2 border-white rounded-xl'>
                    <h3 className='my-3'>Warehouse</h3>
                    <img className='img rounded-xl' src={warehouse} alt="" />
                    <div className="overlay">
                        <ul className='text-xl'>
                            <li>Warehouse management website.</li>
                            <li>Cart system, add and delete.</li>
                            <li>Email authentiction.</li>
                        </ul>
                    </div>
                </div>
                <div className='image border-2 border-white rounded-xl'>
                    <h3 className='my-3'>HIGHKING</h3>
                    <img className='img rounded-xl' src={hk} alt="" />
                    <div className="overlay">
                        <ul className='text-xl'>
                            <li>Simple travel provider website.</li>
                            <li>Protected routing system.</li>
                            <li>Firebase authentication.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Website;