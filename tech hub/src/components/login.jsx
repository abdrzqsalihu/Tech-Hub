import styles from "../style";
import {Lock} from "../assets" 



const login = ({styles}) => (
    <div>
      <button type="button" className={`py-2 px-10 border-[#EEA10D] border-2 font-poppins font-normal text-[15px] text-primary outline-none ${styles} rounded-[10px] flex flex-1 items-center`}>  
      <img src={Lock} className="w-5"/> <span className="ml-2">Login</span></button>
    </div>
  )

export default login