import React from 'react'
import Head from 'next/head'
import { Footer } from '@/components/common'
import { Booking, Credibility, Enquires, Services, Work } from '@/components/home'
import Link from 'next/link'

const Home = () => {
  return (
    <>
        <Head>
            <title>steelgrey cleaning</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />  
        </Head>
            {/* Navbar */}
    <section className='bg-color'>
    <div className='container '>
        <nav class="navbar navbar-expand-lg pt-2">
        <div class="container-fluid">
        <a class="navbar-brand" href="/">
        <img src="../../../assets/white-logo1.png" alt="..." className='img-fluid me-4'
        style={{width:"6rem", height:"3rem"}}
         />
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mt-4" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-medium ">
            <li class="nav-item me-4 ">
              <Link href="/services" class="nav-link text-white active"> Services
              </Link>
            </li>
            <li class="nav-item me-4 ">
              <Link href="/about" class="nav-link text-white active"> About
              </Link>
            </li>
            <li class="nav-item me-4 ">
              <Link href="/join" class="nav-link text-white active">Join Our Team
              </Link>
            </li>
            {/* <li class="nav-item me-4 ">
              <a class="nav-link text-white " href="/review">Review</a>
            </li> */}
          </ul>
            <button class="btn text-color bg-white fw-medium py-2 px-4 shadow-lg m-0" type="submit">
              <a href="/getStarted">Enquire Now</a>
              {/* <br />
              <a href="tel:+2349035169253" className='me-2'>+2349035169253</a>
              <a href="tel:+2348097659230">+2348097659230</a> */}
             
            </button>
        </div>
        </div>
        </nav>
      </div>
    </section>
      <section
      className='hero-page '
      style={{
        backgroundImage: "url('../../../../assets/F.jpg')",
        // backgroundColor: "#c4c4c4",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <div className='container text-black p-md-'>
    
            <div className='row ps-0'>
              {/* show on mobile */}
            <div className='col-md-6 ui-show-only ui-hide-big ps-0'>
                <div className="pt-5 mt-4 mx-auto">
                
                  <img src="../../../assets/clean2.jpg" class="d-block im-fluid" alt="..."/>
                  </div>
                </div>

              <div className='col-md-6 ui-hide-only'>
                  <div className="pt-5 mt-4">
                      <h1 className='fs-xxxlarge lh-1 text-color mb-4'>Professional <br /> cleaning <br /> service</h1>
                      <p className='pt-3 fs-normal p-md-4 ps-md-0 pb-md-0'>Steelgrey Cleaning Specialists are on a mission to achieve excellent and customer-centered cleaning services that delicately cater to the satisfaction of every client.</p>
                      <p className='fs-normal '>With Steelgrey, you can experience an all-time best cleaning service.</p>

                  </div>
              </div>
                {/* carousel */}
                <div className='col-md-6 ui-hide-only ps-0'>
                <div className="pt-5 mt-4">
                 
                  <img src="../../../assets/clean2.jpg" class="d-block img-fluid" alt="..."/>
                  </div>
                </div>
                {/* show on mobile */}
                <div className='col-md-6 ui-show-only ui-hide-big'>
                  <div className="pt-2 mt-2">
                      <h1 className='fs-xxlarge line-height text-color
                        mb-4'>Professional cleaning <br /> service</h1>
                      <p className='pt-3 fs-normal'>Steelgrey Cleaning Specialists are on a mission to achieve excellent and customer-centered cleaning services that delicately cater to the satisfaction of every client.</p>
                  </div>
              </div>
                
            </div>
        </div>
   
    </section>

    <Booking />
    <Enquires />
    <Services />
    <Work />
    {/* <Pricing /> */}
    <Credibility />

    <div className="text-center text-color my-3">
      <h2>We are certified</h2>
      <img src="/assets/certified.jpeg" alt="certificate" className='img-fluid p-2'/>
    </div>
    <div className="container text-black">
            <h6>Click here to   
              <a href="/getStarted">
              <span className='text-color'> Book A Cleaner Now</span>
              </a>
            </h6>
        </div>
    <Footer />

    </>
    
  )
}

export default Home