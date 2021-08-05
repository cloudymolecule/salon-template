import React from 'react'
import '../../styles/home/Amenities.css'
import SalonPhoto from '../../assets/images/salon-stock.jpg'

function Amenities() {
    return (
        <div className='amenities-container'>
            <div className='amenities-welcome'>
                <div className='amenities-welcome-image'>image</div>
                <div className='amenities-welcome-title'>Welcome to our Salon!</div>
                <div className='amenities-welcome-desc'>
                    Cupidatat dolor culpa eiusmod labore voluptate cillum ad magna labore laboris ea deserunt. Ex occaecat officia proident dolore laborum deserunt aliqua esse magna ullamco enim labore anim magna. Dolor exercitation veniam sunt exercitation officia minim nulla sunt quis labore. Adipisicing commodo non pariatur qui et irure irure ad velit excepteur in commodo enim. Id veniam nostrud anim deserunt commodo minim aliqua eiusmod labore non officia. Aliquip Lorem in anim amet incididunt sint elit quis occaecat.
                </div>
            </div>

            <div className='amenities-amenities'>
                <div className='amenities amenity-1'>
                    <div className='amenity-container'>
                        <div className='amenity-title'>Hair</div>
                        <div className='amenity-desc'>
                            Culpa ex dolor anim deserunt cillum excepteur excepteur do mollit eu deserunt consectetur veniam deserunt. Ipsum proident est irure sunt incididunt amet aliqua sint dolore adipisicing. Reprehenderit voluptate irure aute reprehenderit commodo magna culpa velit laboris nulla officia enim consectetur laborum. Dolore deserunt laborum voluptate do incididunt cupidatat fugiat. Ad velit ea officia fugiat deserunt dolore commodo do amet non.
                        </div>
                    </div>
                    <img src={SalonPhoto} className='amenity-img' />
                </div>

                <div className='amenities amenity-2'>
                    <img src={SalonPhoto} className='amenity-img' />
                    <div className='amenity-container'>
                        <div className='amenity-title'>Spa & Waxing</div>
                        <div className='amenity-desc'>
                            Eu quis enim minim exercitation velit. Qui duis ipsum ipsum dolor eiusmod. In fugiat sunt quis laborum labore aliqua nostrud. Aliquip quis veniam in consequat quis dolor duis laboris eiusmod. Et cillum sunt pariatur excepteur anim excepteur excepteur excepteur excepteur amet. Ipsum qui id nisi quis Lorem proident ad sint elit aliquip tempor. Ipsum cupidatat laboris dolor incididunt.
                        </div>
                    </div>
                </div>

                <div className='amenities amenity-3'>
                    <div className='amenity-container'>
                        <div className='amenity-title'>Nails</div>
                        <div className='amenity-desc'>
                            Occaecat proident officia pariatur in. Incididunt nostrud dolor et velit qui nisi sit id tempor reprehenderit. Commodo ipsum enim laborum eiusmod voluptate culpa.
                        </div>
                    </div>
                    <img src={SalonPhoto} className='amenity-img' />
                </div>
            </div>
        </div>
    )
}

export default Amenities
