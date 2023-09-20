interface ButtonProps {
  text: string,
}

function Button(props: ButtonProps) {
  return (
    <div className="">{props.text}</div>
  )
}


export default Button
