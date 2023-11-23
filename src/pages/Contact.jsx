import React, { useState } from "react"


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text" >Get in touch</h1>

        <form action="" className="w-full flex-col gap-7 mt-14 ">
          <label className="text-black-500 font-semibold">
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
          <label className="text-black-500 font-semibold">
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
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea 
              
              name="message"
              className="input"
              placeholder="Let me know how can help you!"
              required
              value={form.name}
              onChange={handleChange} 
              onFocus={handleFocus}
              onBlur={handleBlur}
          />
          </label>
          
        </form>

      </div>
    </section>
  )
}
export default Contact