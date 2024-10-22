import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-4 mx-5 items-center border-b-2'>
              <h1 className='font-bold text-3xl'>Vite + React</h1>
              <img src={Profile} alt="" />
        </div>
    );
};

export default Header;