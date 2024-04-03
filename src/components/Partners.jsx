import { partners } from '../constants';
import styles from '../style';

const Partners = () => (
    <section>
        <div>
            <h1 style={{fontFamily: 'public sans', textAlign: 'center', fontSize: '28px', color: 'rgb(17, 17, 17)', marginTop: '50px', fontWeight: '500', letterSpacing: '2px', lineHeight: '33px'}}>Trusted by 5,000+ Companies Worldwide</h1>
        </div>

        <div className='grid md:grid-cols-6 mt-10 items-center md:space-y-0 space-y-10'>
        {partners.map((partner) => (
          <div key={partner.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]`}>
            <img src={partner.logo} alt="client" className="sm:w-[150px] w-[80px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  )


export default Partners