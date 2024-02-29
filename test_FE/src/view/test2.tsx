import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFile, faGear, faRightLeft, faKeyboard, faTrash, faBars, faImage } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const Test2 = () => {
    const [i, setI] = useState(2);

    const clickCong = () => {
        setI(prevI => prevI + 1);
    };
    const clickTru = () => {
        setI(prevI => prevI - 1);
    };
    return (
        <div className='bg-[#f6f7fb]'>
            <section className='sticky top-0 kiki'>
                <div className='container mx-auto py-10 flex justify-between'>
                    <h1 className='font-bold text-[24px]'>Tạo học phần mới</h1>
                    <button className='bg-[#423ed8] py-2 px-4 rounded text-white font-bold'>Tạo</button>
                </div>
            </section>

            <div className='container mx-auto'>

                <section className='input_class'>
                    <div>
                        <input className='py-3 px-4 rounded-lg w-full' type="text" placeholder='Nhập tiêu đề, ví dụ "Sinh học - Chương 22: Tiến hóa"' />
                        <div className='grid grid-cols-2 gap-5 my-4'>
                            <textarea className='py-3 px-4 rounded-lg w-full' placeholder='Thêm mô tả'>dsd</textarea>
                            <div>
                                <input className='py-3 px-4 rounded-lg w-full' type="text" placeholder='Tên trường' />
                                <input className='py-3 px-4 rounded-lg w-full mt-4' type="text" placeholder='Khóa học' />
                            </div>
                        </div>
                    </div>


                    <div className='my-8 flex justify-between'>
                        <div>
                            <button className=' py-1 px-6 rounded bg-white border border-[#d9dde8] '><FontAwesomeIcon icon={faPlus} /> Nhập</button>
                            <button className=' py-1 px-6 rounded bg-white border border-[#d9dde8] mx-4'><FontAwesomeIcon icon={faPlus} /> Thêm hồ sơ</button>
                            <button className=' py-1 px-6 rounded bg-white border border-[#d9dde8] '><FontAwesomeIcon icon={faFile} /> Tạo từ ghi trú</button>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGear} className='p-3 bg-white rounded-full border-[#d3d4db] border' />
                            <FontAwesomeIcon icon={faRightLeft} className='p-3 mx-4 bg-white rounded-full border-[#d3d4db] border' />
                            <FontAwesomeIcon icon={faKeyboard} className='p-3 bg-white rounded-full border-[#d3d4db] border' />
                        </div>
                    </div>

                </section>

                <section>
                    <div>
                        {[...Array(i)].map((_, index) => (
                            <div className='bg-white p-5 my-4'>
                                <div className='flex justify-between leading-8'>
                                    <h2>{index + 1}</h2>
                                    <div>
                                        <FontAwesomeIcon icon={faBars} className='p-3' />
                                        <FontAwesomeIcon icon={faTrash} className='p-3' onClick={clickTru} />
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 gap-8 hiuhiu'>
                                    <div className='py-2'>
                                        <input className='py-3 px-4 rounded-lg w-full' type="text" />
                                        <div className='text-[#939bb4] font-bold text-[14px]'>THUẬT NGỮ</div>
                                    </div>

                                    <div>
                                        <div className='flex space-x-4'>
                                            <input className='py-3 px-4 rounded-lg w-full' type="text" />

                                            <p className='w-[100px] text-center text-[14px] py-2 img_hiuhiu'>
                                                <FontAwesomeIcon icon={faImage} />
                                                <p>HÌNH ẢNH</p>
                                            </p>
                                        </div>
                                        <div className='text-[#939bb4] font-bold text-[14px]'>ĐỊNH NGHĨA</div>
                                    </div>

                                </div>
                            </div>
                        ))}

                        <div className='text-center bg-white py-8'>
                            <button className='button_create py-2 px-4 font-bold uppercase' onClick={clickCong}>+ Thêm thẻ</button>
                        </div>
                    </div>
                </section>

                <div className='text-right py-8'>
                    <button className='bg-[#423ed8] py-4 px-8 rounded-lg text-white font-bold'>Tạo</button>
                </div>
            </div>

        </div>
    )
}

export default Test2