import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import { ContactContainer, ContactWrapper, ContactHeader, 
    Link, ContactLink, ContactLinkInfo, 
    IconContent, Button, ContactText, ContactTilte, ContactPara } from './ContactStyle';
import '../../Styles/form.css';
import { useWidth, HeaderDescription } from '../../Styles/GlobalStyleWrapper';
import config from '../../config';
import SocialMedia from '../../Components/SocialMedia';

function Contact() {
    const { width } =  useWidth();
    emailjs.init(config.USER_ID);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const openMail = () => {
        window.open('mailto:www.phanordpicsouroberto11@gmail.com?subject=Services&body=Salut Roberto');
    }
    
    const emailValidation = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.match(emailRegex);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let alert = '';
        if(!name) {
            alert = "Name is required";
            window.alert(alert);
            setIsLoading(false);
        } else if(!email) {
            alert = "Email is required";
            window.alert(alert);
            setIsLoading(false);
        } else if(!emailValidation(email)) {
            alert = "Email is not valid";
            window.alert(alert);
            setIsLoading(false);
        } else if(!message) {
            alert = "Message is requird";
            window.alert(alert);
            setIsLoading(false);
        } else {
            alert = `Your message has been sent successfully \n Thank you for contacting me`;
            const templateParams = {
                from_name : name, email, message,
            }
            emailjs.send(config.SERVICES_ID, config.TEMPLATES_ID, templateParams, config.USER_ID)
            .then(async (response) => {
                await window.alert(alert);
                console.log('SUCCESS!', response.status, response.text);
                setName('');
                setMessage('');
                setEmail('');
                setIsLoading(false);
            }).catch((err) => {
                console.log('FAILED...', err);
                setIsLoading(false);
            });
        }
    }

    return (
        <ContactWrapper width={width} id="contact">
            <ContactHeader width={width}>
                <HeaderDescription header="Inquiry" width={width}
                    bottom="Contact Me" color="#001344"
                ></HeaderDescription>
                <ContactText>
                    <ContactTilte>Send me a message</ContactTilte>
                    <ContactPara>If you have any other questions or queries, please do not hesitate to contact me. </ContactPara>
                </ContactText>
            </ContactHeader>
            <ContactContainer width={width}>
                <ContactLink width={width}>
                    <Link onClick={() => openMail()}>
                        <IconContent>
                            <FaEnvelope />
                        </IconContent>
                        <ContactLinkInfo>
                            <h4 style={{ color: "#1c1f21" }}>Address Mail</h4>
                            <p style={{ color: "#707070", overflowWrap: "break-word", fontSize: "15px" }}>www.phanordpicsouroberto11@gmail.com</p>
                        </ContactLinkInfo>
                    </Link>
                    <Link onClick={() => window.open('tel:+18094298594')}>
                        <IconContent>
                            <FaPhoneAlt />
                        </IconContent>
                        <ContactLinkInfo>
                            <h4 style={{ color: "#1c1f21" }}>Phone Number</h4>
                            <p style={{ color: "#707070" }}>+1 809 4298594</p>
                        </ContactLinkInfo>
                    </Link>
                    <SocialMedia color="#707070" />
                </ContactLink>
                <div style={{ width: width < 765 ? "100%" : "60%" }}>
                    <label className="label" for="mail">Enter your name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" type="text" />

                    <label className="label" for="mail">Enter your mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your mail" type="text" />

                    <label className="label" for="message">Enter your message</label>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="texterea" placeholder="Enter your message" />
                    <Button onClick={(e) => handleSubmit(e)} disabled={isLoading}>
                        { isLoading && <i className="fa fa-spinner fa-spin"></i> }
                        Send
                    </Button>
                </div>
            </ContactContainer>
        </ContactWrapper>
    )
}

export default Contact;