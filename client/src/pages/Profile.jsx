import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CiUser } from 'react-icons/ci';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Profile = () => {
    const { backendUrl, token } = useContext(ShopContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await axios.post(backendUrl + '/api/user/profile', {}, { headers: { token } });

                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.log(error);
                toast.error('Unable to load your profile.');
            }
        };

        loadProfile();
    }, [backendUrl, token]);

    return (
        <div className='max-w-3xl mx-auto px-6 sm:px-10 pt-14 min-h-[70vh]'>
            <div className='text-2xl mb-8'>
                <Title text1={'MY'} text2={'PROFILE'} />
            </div>

            <div className='border border-gray-200 bg-white rounded-sm p-6 sm:p-8 shadow-sm'>
                <div className='flex items-center gap-4 border-b border-gray-200 pb-6'>
                    <div className='w-14 h-14 rounded-full bg-black text-white flex items-center justify-center'>
                        <CiUser className='text-3xl' />
                    </div>
                    <div>
                        <p className='text-lg font-medium'>{user?.name || 'Loading...'}</p>
                        <p className='text-sm text-gray-500'>Customer account</p>
                    </div>
                </div>

                <div className='pt-6 grid gap-5 sm:grid-cols-2'>
                    <div>
                        <p className='text-xs uppercase tracking-wide text-gray-500 mb-1'>Full name</p>
                        <p className='border border-gray-200 rounded px-3 py-2 text-gray-800'>{user?.name || '—'}</p>
                    </div>
                    <div>
                        <p className='text-xs uppercase tracking-wide text-gray-500 mb-1'>Email address</p>
                        <p className='border border-gray-200 rounded px-3 py-2 text-gray-800 break-words'>{user?.email || '—'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
