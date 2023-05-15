import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateAdminDetails } from '../../Redux/Redux';
import './AdminDetails.css'

const AdminDetails = () => {
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState(1);
    const [adminPrivateKey, setAdminPrivateKey] = useState("");
    const [adminWalletAddress, setAdminWalletAddress] = useState("");
    const addDetails = () => {
        dispatch(updateAdminDetails({ data: { adminPrivateKey, adminWalletAddress } }))
    }

    return (
        <div className='mainContainer'>{
            showForm == 2 ? <div className='AdminCard !gap-[10px]'> <div>
                <label
                    for="first_name"
                    class="block mb-2 text-[20px] font-medium text-iBlue"
                >
                    Wallet Address
                </label>
                <input
                    value={adminWalletAddress}
                    onChange={(e) => setAdminWalletAddress(e.target.value)}
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border w-[288px] h-[40px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0X5687..."
                />
            </div>

                <div>
                    <label
                        for="first_name"
                        class="block mb-2 text-[20px] font-medium text-iBlue"
                    >
                        Private Key
                    </label>
                    <input
                        value={adminPrivateKey}
                        onChange={(e) => setAdminPrivateKey(e.target.value)}
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border w-[288px] h-[40px] border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Private Key"
                    />
                </div>
                <button
                    onClick={() => {
                        addDetails()
                        setShowForm(3)
                    }}
                    className="py-1 mt-2 w-[150px] hover:bg-iOrange mb-[8px] center bg-iBlue rounded-[30px] text-iWhite text-[18px]"
                >
                    Submit
                </button>
            </div> : showForm == 1 ? <div className='AdminCard'>

                <p className='text-[20px]'>Please add Admin wallet details</p>
                <button
                    onClick={() => {
                        setShowForm(2)
                    }}
                    className="py-1 mt-2 w-[150px] hover:bg-iOrange mb-[8px] center bg-iBlue rounded-[30px] text-iWhite text-[18px]"
                >
                    Add
                </button>

            </div> : showForm == 3 && <div className='AdminCard'>

                <p className='text-[20px]'>Details added successfully</p>
                <button
                    onClick={() => { navigateTo("/") }}
                    className="py-1 mt-2 w-[150px] hover:bg-iOrange mb-[8px] center bg-iBlue rounded-[30px] text-iWhite text-[18px]"
                >
                    Done
                </button>

            </div>
        }</div>
    )
}

export default AdminDetails