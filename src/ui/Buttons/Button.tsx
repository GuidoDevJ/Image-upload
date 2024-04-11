interface Props{
  text:string
  fn?:()=>void
}
const Button = ({text,fn}:Props) => {
  return (
    <button className="bg-[#3662E3] w-auto p-2 rounded-lg text-[#fff]" onClick={fn}>{text}</button>
  )
}

export default Button