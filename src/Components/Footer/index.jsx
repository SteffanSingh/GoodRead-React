import React from "react"
import style from "./style.module.css"
import googleplay from './Images/Googleplay.png'
import apple from  "./Images/appstore.svg"
import facebook from "./Images/fb.jpeg"
import insta from "./Images/Instagram.jpeg"
import twtitter from "./Images/twitter.jpeg"
import linkedin from "./Images/Linkedin.jpeg"


const Footer = () =>{


            return(
                <>
                <footer className={style.footer}  >
                <section className="section1">
                <h3 className={style.h3}>COMPANY</h3>
                    <ul>
                        <li className={style.li}>About us</li>
                        <li className={style.li}>Careers</li>
                        <li className={style.li}>Terms</li>
                        <li className={style.li}>Privacy</li>
                        <li className={style.li}>Interest Based Ads</li>
                        <li className={style.li}>Ad Preferences</li>
                        <li className={style.li}>Help</li>

                    </ul>
                
                </section>
                <section className="section2">
                <h3 className={style.h3}>WORK WITH US</h3>
                    <ul>
                        <li className={style.li}>Authors</li>
                        <li className={style.li}>Advertise
                                  </li>
                        <li className={style.li}>Authors & ads blog</li>
                        <li className={style.li}>API</li>
                         
                    </ul>
                
                </section>

                <aside className="social">
                    <h3>CONNECT</h3>
                    <ul>
                        <a href="https://www.facebook.com/Goodreads/" target="_blank"> <img className={style.img} height="50px" width="50px" src={facebook} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/goodreads/" target="_blank"> <img className={style.img}  height="50px" width="50px" src= {insta} alt="Instagram" /></a>
                        <a href="https://twitter.com/goodreads" target="_blank"> <img className={style.img}   height="50px" width="50px" src= {twtitter} alt="Twitter" /></a>
                        <a href="https://www.linkedin.com/company/goodreads-com/" target="_blank"> <img className={style.img}   height="50px" width="50px" src={linkedin} alt="Linkedin" /></a>
                    </ul>
                </aside>
                        <div>   <article className={style.article}><span><img src={apple} alt="Apple store" /></span>
                    <span><img src={ googleplay } alt="Googleplay" /></span></article>
                     <p>
                       <em>   &copy;2023 Goodreads, Inc. <br />
                                Mobile version </em> </p>  </div>
                                </footer>
                </>
            )

}

export default Footer
