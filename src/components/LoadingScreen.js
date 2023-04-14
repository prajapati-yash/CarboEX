import React from 'react';

const Loading = () => {
    return (
        <div className="loading">
            <span className="sr-only">Loading...</span>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
