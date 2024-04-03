import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import styles from "./style"
import Rating from "./components/Rating";
import Welcome from "./components/Welcome";
import Choose from "./components/Choose";
import Categories from "./components/Categories";
import Team from "./components/Team";
import Feedback from "./components/Feedback";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () =>
  (
    <div className='bg-white w-full overflow-hidden text-white'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      </div>

      <div className={`bg-[#1E1E1E] ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero />
        </div>
      </div>
      <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Partners />
         <Rating />
        </div>
      </div>

      <div className={`bg-[#E9F8F3] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Welcome />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
         <Choose />
         <Categories />
        </div>
      </div>
      <div className={`bg-[#FEFAF2] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Team />
        </div>
      </div>
      <div className={`bg-white mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Feedback />
        </div>
      </div>
      <div className={`bg-[#E9F8F3B3] mt-16 mb-10 pb-10 p-10 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <CTA />
        </div>
      </div>
      <div className={`bg-white mt-16 pb-10 p-10 ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
      </div>
    </div>
  );


export default App