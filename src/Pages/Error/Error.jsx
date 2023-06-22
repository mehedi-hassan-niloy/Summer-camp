import { Link, useRouteError } from 'react-router-dom';
import errorLogo from './../../assets/error/error.gif'

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div className='p-5 m-5'>
                <h1 className='flex items-center justify-center text-xl' >
                    <span>Error</span>
                </h1>
                <h1 className='flex items-center justify-center'>
                    {status || 404}
                </h1>
                <div className='flex items-center justify-center'>
                    <img className='w-25 h-25' src={errorLogo} alt="" />
                </div>
                <p className='items-center justify-center d-flex'>{error?.message}</p>
                <div className='flex items-center justify-center m-5'>
                    <Link to='/'><button className='btn btn-outline btn-accent'>Back To Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;