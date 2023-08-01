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
            <li class="nav-item me-4 ">
              <a class="nav-link text-white " href="/review">Review</a>
            </li>
          </ul>
            <button class="btn text-color bg-white fw-medium py-2 px-4 shadow-lg" type="submit">
              <a href="/getStarted">Get Started</a>
             
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
         <div className="row">
            <div className='col-md- mx-auto'>
                <div className='row'>
                  {/* show on mobile */}
                <div className='col-md-6 ui-show-only ui-hide-big'>
                    <div className="pt-5 mt-4 mx-auto">
                      {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../assets/clean2.jpg" class="d-block " alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/clean1.png" class="d-block " alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/clean7.jpg" class="d-block " alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div> */}


                      <img src="../../../assets/clean2.jpg" class="d-block im-fluid" alt="..."/>
                      </div>
                    </div>

                  <div className='col-md-6 ui-hide-only'>
                      <div className="pt-5 mt-4">
                          <h1 className='fs-xxxlarge lh-1 text-color mb-4'>Professional <br /> cleaning <br /> service</h1>
                          <p className='pt-3 fs-normal'>Cleanse Cleaning Specialists are on a mission to provide first class cleaning services and customer care, putting the customers needs at the forefront of all we do.</p>

                          {/* <div className="fw-bold fs-xlarge text-color mt-5">
                            <a href="/getStarted">Get Started</a>
                           <a href="/getStarted">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'
                            />
                           </a>
                          </div> */}
                      </div>
                  </div>
                    {/* carousel */}
                    <div className='col-md-6 ui-hide-only'>
                    <div className="pt-5 mt-4">
                      {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../../../assets/clean2.jpg" class="d-block " alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/clean1.png" class="d-block" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src="../../../assets/clean7.jpg" class="d-block" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div> */}

                      <img src="../../../assets/clean2.jpg" class="d-block img-fluid" alt="..."/>
                      </div>
                    </div>
                    {/* show on mobile */}
                    <div className='col-md-6 ui-show-only ui-hide-big'>
                      <div className="pt-2 mt-2">
                          <h1 className='fs-xxlarge line-height text-color
                           mb-4'>Professional cleaning <br /> service</h1>
                          <p className='pt-3 fs-normal'>Cleanse Cleaning Specialists are on a mission to provide first class cleaning services and customer care, putting the customers needs at the forefront of all we do.</p>

                          {/* <div className="fw-bold fs-xlarge text-color mt-5">
                            <a href="/getStarted">Get Started</a>
                            <a href="/getStarted">
                                <img src="../../../assets/icons/arrow-right.png" alt="..." className='mx-2 arrrow-i'/>
                              </a>
                          </div> */}
                      </div>
                  </div>
                    
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
    
    <Footer />

    </>
    
  )
}

export default Home