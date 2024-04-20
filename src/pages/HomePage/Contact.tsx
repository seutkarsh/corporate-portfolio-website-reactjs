import React from 'react'
import EmailIcon from '../../assets/vectors/email.svg'
import { useForm } from 'react-hook-form'
import RectButton from '../../components/RectButton/RectButton'

const Contact = (): React.ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    return (
        <section className="contact-section">
            <div className="contact--prompt">
                <div className="contact--heading-container">
                    <div>
                        <span>Rea</span>
                        <span>dy for your</span>
                    </div>
                    <div>
                        <span>digital</span>
                        <span> success</span>
                        <span>?</span>
                    </div>
                </div>
                <h6>We will reach out to you within 24 hours</h6>
                <div className="contact--company-email-info">
                    <span>
                        Do not like filling up forms? Email us directly at:
                    </span>
                    <span className="contact--email">
                        <img src={EmailIcon} />
                        hi@company.com
                    </span>
                </div>
            </div>
            <div className="contact--form-section">
                <form
                    className="contact--form"
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    <div className="input-wrapper">
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-building"></i>
                        <input
                            type="text"
                            placeholder="Company Name"
                            {...register('companyName')}
                        />
                    </div>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-message"></i>
                        <textarea
                            placeholder="How can we help you out?"
                            {...register('message')}
                        />
                    </div>
                    <RectButton
                        customClasses="contact--submit"
                        filled={true}
                        text="Get in Touch"
                        size="large"
                        type="submit"
                    />
                </form>
            </div>
        </section>
    )
}

export default Contact
