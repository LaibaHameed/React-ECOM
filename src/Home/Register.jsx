import React from 'react'

const subTitle = "save the day";
const title = (
    <h2 className='title'> join on day lon free workshop for <b>advance <span>mastering </span> </b> on sales </h2>
);
const desc = "Limited time offer! let's hurry up";

const Register = () => {
    return (
    <section className='register-section padding-tb pb-0'>
    <div className='container'>
        <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
            <div className='col'>
                <div className='section-header'>
                    <span className='subtitle'>{subTitle}</span>
                    {title}
                    <p> {desc} </p>
                </div>
            </div>
            <div className='col'>
                <div className='section-wrapper'>
                    <h4>Register Now</h4>
                    <form className='register-form'>
                        <input type='text' name='name' placeholder='UserName' className='reg-input'/>
                        <input type='email' name='email' placeholder='Email' className='reg-input'/>
                        <input type='number' name='number' placeholder='Phone' className='reg-input'/>
                        <button type='submit' className='lab-btn'>
                        Register Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Register