import React from 'react'
const Progress = ({ p }) => {
    return (
        <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${p}%`}}
                className={`h-full ${
                    p < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
};
export default Progress
