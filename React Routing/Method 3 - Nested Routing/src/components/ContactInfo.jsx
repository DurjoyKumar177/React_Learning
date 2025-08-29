import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <ul>
        <li>
          Name: <span>{`John ${Math.floor(Math.random() * 100)}`}</span>
        </li>
        <li>
          Address: <span>{`123 ${Math.floor(Math.random() * 100)} Street`}</span>
        </li>
        <li>
          Phone Number: <span>{`1-800-${Math.floor(Math.random() * 10000)}`}</span>
        </li>
      </ul>
    </div>
  )
}

export default ContactInfo