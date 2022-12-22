import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import config from '../config';
import SocialMedia from '../Components/SocialMedia';
import HeaderText from '../Components/HeaderText';
import spin from '../Images/spin.svg';

function Contact() {
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
        <div id="contact" class="relative mx-auto bg-white min-h-max w-full">
            <div class="max-w-7xl py-16 px-8 mx-auto">
                <HeaderText text="Contact Me" title="Inquiry" color="#080225" />
                <div class="flex flex-col lg:flex-row gap-x-16 py-4 gap-y-4">
                    <div class="w-full lg:w-1/2 mt-4">
                        <div class="py-3">
                            <h2 class="relative z-10 text-3xl font-bold leading-tight md:text-4xl break-words mb-2">Send me a message</h2>
                            <span class="relative pt-2 text-xl tracking-wide">If you have decided to work with me then, please do not hesitate to contact me. </span>
                        </div>
                        <div class="flex gap-x-4 items-center cursor-pointer my-4" 
                            onClick={() => openMail()}
                        >
                            <div class="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#880a0c] flex items-center justify-center">
                                <FaEnvelope color="#fff" />
                            </div>
                            <div class="break-all">
                                <h4 class="font-bold">Address Mail</h4>
                                <p class="font-medium break-all flex-wrap">www.phanordpicsouroberto11@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex gap-x-4 items-center cursor-pointer my-6" onClick={() => window.open('tel:+18094298594')}>
                            <div class="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#880a0c] flex items-center justify-center">
                                <FaPhoneAlt color="#fff" />
                            </div>
                            <div class="">
                                <h4 class="font-bold">Phone Number</h4>
                                <p class="font-medium">+1 809 4298594</p>
                            </div>
                        </div>
                        <SocialMedia color="rgba(0, 0, 0, 0.8)" />
                    </div>
                    <div class="w-full lg:w-1/2 flex flex-col gap-y-6 mt-8">
                        <div class="flex flex-col gap-y-2">
                            <label class="font-medium" for="mail">Enter your name</label>
                            <input value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                class="py-3 px-4 focus:outline-none font-light focus:ring-0 border-gray-400 rounded-lg border border-grayy-400 transition-all focus-within:border-[#880a0c] shadow-lg"
                                placeholder="Enter your name" type="text" 
                            />
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label class="font-medium" for="mail">Enter your mail</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                            class="py-3 px-4 focus:outline-none font-light focus:ring-0 border-gray-400 rounded-lg border border-grayy-400 transition-all focus-within:border-[#880a0c] shadow-lg"
                            placeholder="Enter your mail" type="text" />
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <label class="font-medium" for="message">Enter your message</label>
                            <textarea  value={message} onChange={(e) => setMessage(e.target.value)}
                                class="resize px-4 py-2 focus:outline-none font-light focus:ring-0 border-gray-400 rounded-lg border border-grayy-400 transition-all focus-within:border-[#880a0c] h-32 shadow-lg"
                                type="texterea" placeholder="Enter your message" 
                            />
                        </div>
                        <button 
                            class="mt-6 w-52 text-white p-3 font-medium tracking-wide bg-[#880a0c] rounded-lg shadow-md transition hover:opacity-90 flex gap-x-3 items-center justify-center" 
                            onClick={(e) => handleSubmit(e)} disabled={isLoading}
                        >
                            { isLoading && <img alt="" src={spin} class="w-3 h-3 animate-spin" /> }
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;