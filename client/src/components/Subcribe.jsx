import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Subscribe = () => {
    return (
        <div id="mc_embed_shell">
            <div className="w-screen min-h-screen flex justify-center items-center flex-col ">
            <Header />  
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <style type="text/css">
                {`
                #mc_embed_signup {
                    background: #fff;
                    false;
                    clear: left;
                    font: 14px Helvetica, Arial, sans-serif;
                    width: 600px;
                }
                `}
            </style>
            <div id="mc_embed_signup">
                <form
                    action="https://gmail.us21.list-manage.com/subscribe/post?u=cf189e161228225ed7da0e69d&amp;id=9c11b2eb7b&amp;f_id=00a561e1f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                    target="_blank"
                >
                    <div id="mc_embed_signup_scroll">
                        <h2>Sign up to receive email notifications</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required=""   />
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-FNAME">First Name </label>
                            <input type="text" name="FNAME" className=" text" id="mce-FNAME"/>
                        </div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-LNAME">Last Name </label>
                            <input type="text" name="LNAME" className=" text" id="mce-LNAME"/>
                        </div>
                        <div hidden="">
                            <input type="hidden" name="tags" value="2822017,2822018" />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input type="text" name="b_cf189e161228225ed7da0e69d_9c11b2eb7b" tabIndex="-1" value="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                <p style={{ margin: '0px auto' }}>
                                    <a href="http://eepurl.com/ixD28g" title="Mailchimp - email marketing made easy and fun">
                                        <span style={{ display: 'inline-block', backgroundColor: 'black', borderRadius: '4px' }}>
                                            <img
                                                className="refferal_badge"
                                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg"
                                                alt="Intuit Mailchimp"
                                                style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                                            />
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function ($) {
                            window.fnames = new Array();
                            window.ftypes = new Array();
                            fnames[0] = 'EMAIL';
                            ftypes[0] = 'email';
                            fnames[1] = 'FNAME';
                            ftypes[1] = 'text';
                            fnames[2] = 'LNAME';
                            ftypes[2] = 'text';
                            fnames[3] = 'ADDRESS';
                            ftypes[3] = 'address';
                            fnames[4] = 'PHONE';
                            ftypes[4] = 'phone';
                            fnames[5] = 'BIRTHDAY';
                            ftypes[5] = 'birthday';
                        })(jQuery);
                        var $mcj = jQuery.noConflict(true);
                    `
                }}
            />
            </div>
            <Footer/>
        </div>
    );
};

export default Subscribe;