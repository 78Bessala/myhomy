import Footer from './Footer'
import Footer1 from '../../../composents/pages/Accueil/Footer1';


function Profil(){

    return(
        <section className="flex ">
        <Footer1 />
        <section>


            <div className='md:hidden'>
      <Footer />
</div>
        </section>
</section>
    );
}

export default Profil;