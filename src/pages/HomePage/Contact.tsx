import React, { useState } from 'react'
import EmailIcon from '../../assets/vectors/email.svg'
import { useForm } from 'react-hook-form'
import RectButton from '../../components/RectButton/RectButton'
import { Resend } from 'resend'
import { apiBaseUrl } from '../../config/constants'

interface IFormData {
    name: string
    email: string
    companyName: string
    message: string
}
const Contact = (): React.ReactElement => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>()

    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const onSubmit = async (formData: IFormData): Promise<void> => {
        try {
            const response = await fetch(`${apiBaseUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                setSuccessMessage('Email sent successfully!')
                setErrorMessage('')
            } else {
                setSuccessMessage('')
                setErrorMessage('Failed to send email')
            }
            reset()
        } catch (e) {
            setSuccessMessage('')
            setErrorMessage('Failed to send email')
        }
    }
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="input-wrapper">
                        <i className="fa-solid fa-user"></i>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', {
                                required: 'This field is required',
                            })}
                        />
                    </div>
                    <span className="form-error">
                        {errors.name && errors.name.message}
                    </span>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Email Address"
                            {...register('email', {
                                required: 'This field is required',
                            })}
                        />
                    </div>
                    <span className="form-error">
                        {errors.email && errors.email.message}
                    </span>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-building"></i>
                        <input
                            type="text"
                            placeholder="Company Name"
                            {...register('companyName', {
                                required: 'This field is required',
                            })}
                        />
                    </div>
                    <span className="form-error">
                        {errors.companyName && errors.companyName.message}
                    </span>
                    <div className="input-wrapper">
                        <i className="fa-solid fa-message"></i>
                        <textarea
                            placeholder="How can we help you out?"
                            {...register('message', {
                                required: 'This field is required',
                            })}
                        />
                    </div>
                    <span className="form-error">
                        {errors.message && errors.message.message}
                    </span>
                    <RectButton
                        customClasses="contact--submit"
                        filled={true}
                        text="Get in Touch"
                        size="large"
                        type="submit"
                    />
                </form>
                {successMessage && (
                    <span className="form-message">{successMessage}</span>
                )}
                {errorMessage && (
                    <span className="form-error">{errorMessage}</span>
                )}
            </div>
        </section>
    )
}

export default Contact
