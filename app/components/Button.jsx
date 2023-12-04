import React from 'react'

 const Button = ({className, label,  ...props}) => {
  return (
    <div>

<button className={className} {...props}>{label}</button>

    </div>
  )
}

export default Button;
