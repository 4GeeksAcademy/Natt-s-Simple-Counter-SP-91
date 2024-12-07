import React from 'react';

export const SimpleCounter = ({seconds}) => {
    return (
        <div className="card text-bg-dark mt-3">
            <div className="card-body">
                <div className="d-flex">
                    <div className="card bg-dark border-secondary col-2 text-center">
                        <i
                            className="fa-regular fa-clock position-absolute top-50 start-50 translate-middle"
                            style={{
                                color: '#f4f5f6',
                                fontSize: '80px',
                            }}
                        ></i>
                    </div>

                    <div className="card bg-dark border-secondary col-2 text-center">
                        <p style={{
                            color: '#f4f5f6',
                            fontSize: '60px',
                            margin: '30px',
                        }}>{Math.floor(seconds /10000) % 10}</p>
                        
                    </div>
                    <div className="card bg-dark border-secondary col-2 text-center">
                        <p style={{
                            color: '#f4f5f6',
                            fontSize: '60px',
                            margin: '30px',
                        }}>{Math.floor(seconds /1000) % 10}</p>
                        
                    </div>
                    <div className="card bg-dark border-secondary col-2 text-center">
                        <p style={{
                            color: '#f4f5f6',
                            fontSize: '60px',
                            margin: '30px',
                        }}> {Math.floor(seconds /100) % 10}</p>
                       
                    </div>
                    <div className="card bg-dark border-secondary col-2 text-center">
                        <p style={{
                            color: '#f4f5f6',
                            fontSize: '60px',
                            margin: '30px',
                        }}>{Math.floor(seconds /10) % 10}</p>
                        
                    </div>
                    <div className="card bg-dark border-secondary col-2 text-center">
                        <p style={{
                            color: '#f4f5f6',
                            fontSize: '60px',
                            margin: '30px',
                        }}>{Math.floor(seconds /1) % 10}</p>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};