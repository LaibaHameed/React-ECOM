import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <div className='modalCard'>
        <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to checkout</Button>
        <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centered
        >
            <div className='modal-dialog'>
                <h5 className='px-3 mb-3'> Select your Payment Method</h5>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='tabs mt-3'>
                            <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                <li className='nav-item' role='presentation'>
                                    <a href='#visa' className={`nav-link ${activeTab === "visa" ? "active" : " "}`}
                                    id='visa-tab'
                                    data-toggle='tab'
                                    role='tab'
                                    aria-controls='visa'
                                    aria-selected={activeTab === "visa"}
                                    onClick={()=> handleTabChange("visa")}
                                    >
                                        <img src='https://i.imgur.com/sB4jftM.png' width="80" />
                                    </a>
                                </li>
                                <li className='nav-item' role='presentation'>
                                    <a href='#paypal' className={`nav-link ${activeTab === "paypal" ? "active" : " "}`}
                                    id='paypal-tab'
                                    data-toggle='tab'
                                    role='tab'
                                    aria-controls='paypal'
                                    aria-selected={activeTab === "paypal"}
                                    onClick={()=> handleTabChange("paypal")}
                                    >
                                        <img src='https://i.imgur.com/yK7EDD1.png' width="80" />
                                    </a>
                                </li>
                            </ul>
                            {/* contents */}
                            <div className='tab-content' id='myTabContent'>
                                {/* visa content */}
                                <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                id='visa'
                                role='tabpanel'
                                aria-labelledby='visa-tab'
                                >
                                    {/* visa tab contebt */}
                                    <div className='mt-4 mx-4'> 
                                        <div className='text-center'>
                                            <h5>cridet card</h5>
                                        </div>
                                        <div className='form mt-3'>
                                            <div className='inputbox'>
                                                <input type='text' name='name' id='name' className='form-control' required/>
                                                <span>Card Holder Name</span>
                                            </div>
                                            <div className='inputbox'>
                                                <input type='text' name='number' id='number' className='form-control' min='1' max='999' required/>
                                                <span>Card Number</span><i className='fa fa-eye'></i>
                                            </div>
                                            <div className='d-flex flex-row'>
                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' className='form-control' min='1' max='999' required/>
                                                    <span>Expiration Date</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' className='form-control' min='1' max='999' required/>
                                                    <span>CVV</span>
                                                </div>
                                            </div>
                                            <div className='px-5 pay'>
                                                <button className='btn btn-success btn-block'>Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* paypal content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default CheckOutPage