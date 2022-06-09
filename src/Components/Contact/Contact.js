import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();
        const name = e.target.name.value
        console.log(name)
        emailjs.sendForm('service_jz2ee26', 'template_vyo25i7', e.target, 'A5SA48ZWQ4xL5muGD').then(res => {
            console.log(res);
        });
        e.target.reset();
    }
    return (
        <div>
            <div class="hero min-h-screen bg-slate-900">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left text-white">
                        <h1 class="text-5xl font-bold">Let's Talk!</h1>
                        <p class="py-6">You can email me and we will have a chat! I am so excited. What about you?</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body bg-slate-700">
                            <form onSubmit={sendEmail}>
                                <div class="form-control  text-white">
                                    <label class="label">
                                        <span class="label-text text-white">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter you name..." name='name' class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your email..." class="input input-bordered" required />

                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text text-white">What's in your mind?</span>
                                    </label>
                                    <textarea class="textarea textarea-bordered" type="text" name='message' placeholder="Your message..." required></textarea>

                                </div>
                                <input type="submit" value={"SEND"} className="form-control w-full mt-2 btn btn-ghost text-white border-white" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;