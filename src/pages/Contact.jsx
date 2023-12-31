import emailjs from '@emailjs/browser'
import React, { useState, useRef } from "react"



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    //Update all the properties in the form:
    setForm({ ...form, [e.target.name]: e.target.value  })
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  //Get the key-pressed event:
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      { 
        from_name: form.name,
        to_name: "Teun",
        from_email: form.email,
        to_email: 'teunjansen91@gmail.com',
        message: form.message
       },
       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: show succes message
      setForm({name: '', email: '', message: ''});

    }).catch(() => {
      setIsLoading(false);
      console.log(error);
      //TODO: Show error message
    })
  };

 

  

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text" >Get in touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-blue-500 font-semibold">
            Name
            <input 
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <label className="text-blue-500 font-semibold">
            Email
            <input 
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <label className="text-blue-500 font-semibold">
            Your Message
            <textarea 
              
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can help you!"
              required
              value={form.message}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending....' : 'Send Message' }
          </button>
        </form>

      </div>
    </section>
  )
}
export default Contact