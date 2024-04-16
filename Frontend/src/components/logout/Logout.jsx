import React from 'react';

const Logout = () => {
    const logout = () => {
        localStorage.removeItem('User');
        window.location.reload();
    }
    return (
        <div>
            <button onClick={()=> logout()} className="btn btn-active btn-secondary">Logout</button>
        </div>
    );
};

export default Logout;