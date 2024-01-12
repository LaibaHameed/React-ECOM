import React, { useState } from 'react'
import Ratting from '../Components/Ratting';

const reviwtitle = "Add a Review";

let ReviewList = [
    { imgUrl: "/src/assets/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
    { imgUrl: "/src/assets/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
    { imgUrl: "/src/assets/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
    { imgUrl: "/src/assets/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }
    ,];

const Review = () => {
    const [showReview, setShowReview] = useState()
    return (
        <>
            <ul className={`review-nav lab-ul ${showReview ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={()=> setShowReview(!showReview)}>Description</li>
                <li className='rev' onClick={()=> setShowReview(!showReview)}>Review 4</li>
            </ul>
            {/* decs & review content */}
            <div className={`review-content ${showReview ? "review-content-show" : "description-show" }`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i)=>(
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt={review.imgAlt}/>
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href='#'>{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            )) 
                        }
                    </ul>
                    {/* add review field */}
                    <div className='client-review'>
                        <div className='review-form'>
                            <div className='review-title'>
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action='action' className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type='text' name='name' id='name' placeholder='Full Name *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type='email' name='email' id='name' placeholder='Your Email*' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='rating'>
                                        <span className='me-2'>Your Ratting</span>
                                        <Ratting/>
                                    </div>
                                </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name='message' id='message' rows="8" placeholder='Type your Message Here '></textarea>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className='description'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='post-item'>
                        <div className='post-thumb'>
                            <img src='/src/assets/images/shop/01.jpg' alt='pic' />
                        </div>
                        <div className='post-content'>
                            <ul className='lab-ul'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text ever since the 1500s</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>

                            </ul>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

            </div>
        </>
    )
}

export default Review